class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHeaders: ["", "Name", "Material/Process", "Qty", "Amt", "Unit", "mPts", "CO2 eq,kg", "MS", "Part ID", ""],
            expandedRows: [],
            alreadyOpenedRows: [],
            tableData: [],
            showLoader: false,
        }
    }

    /* Called initially to get the parent rows*/
    componentDidMount() {
        this.setState({showLoader: true});
        axios.get('http://localhost:3000/')
            .then((response) => {
                this.getParentRows(response.data);
            })
            .catch((err) => {
                alert("Unable to retrieve data from backend");
                console.log(err)
            })
            .finally(() => {
                this.setState({showLoader: false});
            });
    }

    getParentRows = (xmlValue) => {
        var rows = this.convertXMLToJson(xmlValue, true)
        this.setState({tableData: rows});
        console.log("parents", this.state);
    }


    /*
    Make API call to get child rows for the given parent.
     */
    addRows = (parentId) => {
        this.setState({showLoader: true});
        return axios.get('http://localhost:3000/' + parentId)
            .then(response => {
                var xmlValue = response.data;
                if (xmlValue === '') {
                    alert("This folder doesnt have any child folders");
                } else {
                    var childRows = this.convertXMLToJson(xmlValue, false);
                    const tableData = JSON.parse(JSON.stringify(this.state.tableData));
                    this.appendChildRowsToTable(tableData, childRows, parentId);
                    this.changeShowValue(parentId, tableData);
                }
            })
            .catch((err) => {
                alert("Unable to retrieve data from backend");
                console.log(err)
            }).finally(() => {
                this.setState({showLoader: false});
            });
    }

    /*
    Convert the XML to JSON Object
    for Parent rows show was true as by default parent rows should be visible to user.
    * */
    convertXMLToJson = (xmlValue, show) => {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlValue, "text/xml");
        var rowsXML = xmlDoc.getElementsByTagName('rows')[0];
        var rows = [];
        for (var i = 0; i < rowsXML.childNodes.length; i++) {
            var values = [];
            var rowXML = rowsXML.childNodes[i];
            var id = rowXML.getAttribute('id');
            var type = rowXML.getAttribute('class');
            rowXML = rowXML.getElementsByTagName('cell');
            for (var j = 0; j < rowXML.length; j++) {
                var childNode = rowXML[j];
                if (childNode.childNodes[0]) {
                    values.push(childNode.childNodes[0].nodeValue);
                } else {
                    values.push(childNode.innerHTML);
                }
            }
            rows.push({id, values, type, show: show, level: 0, children: []});
        }
        return rows;
    }

    /*
    Retrieves childRows for parent and push it into parent children.
     */
    getChildren = (parentId) => {
        // Already opened rows is used to check whether we have already made a api call for that parent to retrieve children.
        const alreadyOpenedRows = [...this.state.alreadyOpenedRows];
        // If api call was not made make api call to get the children.
        if (alreadyOpenedRows.includes(parentId) === false) {
            alreadyOpenedRows.push(parentId);
            this.addRows(parentId);
        }
        //If data already present in table data state, change show value to make it visible/hide.
        else {
            const tableData = JSON.parse(JSON.stringify(this.state.tableData));
            this.changeShowValue(parentId, tableData);
        }
        this.setState({
            alreadyOpenedRows: alreadyOpenedRows
        })
    }


    changeShowValue = (parentId, tableData) => {
        const expandedRows = [...this.state.expandedRows];
        // if row was previously expanded make show value false to hide the child rows.
        if (expandedRows.includes(parentId)) {
            expandedRows.splice(expandedRows.indexOf(parentId), 1);
            this.updateShow(tableData, parentId, false, expandedRows)
        } // if row was previously not expanded make show value true to make the child rows visible.
        else {
            expandedRows.push(parentId);
            this.updateShow(tableData, parentId, true, expandedRows)
        }
        this.setState({
            tableData: tableData,
            expandedRows: expandedRows
        }, () => {
            console.log('status', this.state);
        });
    }

    //Update the show value in table data state value.
    updateShow = (tableData, parentId, show, expandedRows) => {
        tableData.forEach(row => {
            if (row.id === parentId) {
                row.children.forEach(child => {
                    child.show = show
                    //if show was false make recursion to hide the children rows
                    if (show === false) {
                        expandedRows.includes(child.id) ? expandedRows.splice(expandedRows.indexOf(child.id), 1) : '';
                        this.updateShow(row.children, child.id, show, expandedRows)
                    }
                });
            } else if (row.children.length !== 0) {
                this.updateShow(row.children, parentId, show, expandedRows);
            }
        })
    }

    /*
    Attach child rows to respect parentID children in table data state value..
     */
    appendChildRowsToTable = (tableData, childRows, parentId) => {
        tableData.forEach(row => {
            //once parent is identified in table data increment level and add child rows to parent children.
            if (row.id === parentId) {
                const level = row.level + 1;
                childRows.forEach(childRow => childRow.level = level);
                row.children.push(...childRows);
            } else if (row.children.length !== 0) {
                this.appendChildRowsToTable(row.children, childRows, parentId);
            }
        })
    }


    render() {
        const {tableHeaders, expandedRows, tableData, showLoader} = this.state;
        return (
            <div>
                <TreeTable
                    tableHeaders={tableHeaders}
                    tableData={tableData}
                    getChildern={(parentID) => this.getChildren(parentID)}
                    expandedRows={expandedRows}
                />
                {showLoader ?
                    <button className="btn" disabled>
                        <span className="spinner-grow spinner-grow-sm"/>
                        Loading..
                    </button> : null}
            </div>
        )
    }
}


class TreeTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    /*
    Store the table Data prop value into state.
     */
    static getDerivedStateFromProps(props, state) {
        let rows = [];
        TreeTable.generateSingleLevelRows(props.tableData, rows)
        return {
            rows: rows
        }
    }

    /*
    Convert multilevel table data to single level.
     */
    static generateSingleLevelRows = (data, rows) => {
        data.forEach(row => {
            const data = {...row};
            delete data.children
            rows.push(data)
            if (row.children.length !== 0) {
                TreeTable.generateSingleLevelRows(row.children, rows);
            }
        })
    }

    render() {
        console.log("in table", this.state);
        return (
            <>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        {
                            this.props.tableHeaders.map((val, index) => {
                                return <th key={index}> {val}</th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.rows.map(row => {
                            const classType = row.type;
                            //show table row only when row show is true.
                            if (row.show) {
                                return (
                                    <tr id={row.id} key={row.id} style={{height: "10px"}}>
                                        {
                                            row.values.map((val, index) => {
                                                if (classType === 'total') {
                                                    return (
                                                        <td key={index}
                                                            style={{color: "white", backgroundColor: 'black'}}>
                                                            {val}
                                                        </td>
                                                    )
                                                }
                                                if (index === 1) {
                                                    if (classType === 'component') {
                                                        //Added onClick event for only component types.
                                                        return (
                                                            <td key={index}
                                                                style={{paddingLeft: row.level * 2 + "em"}}>
                                                                <div>
                                                                    <i className={this.props.expandedRows.includes(row.id) ? "fas fa-folder-open" : "fas fa-folder"}
                                                                       style={{cursor: 'pointer'}}
                                                                       onClick={() => this.props.getChildern(row.id)}/>
                                                                    {val}
                                                                </div>
                                                            </td>
                                                        )
                                                    } else {
                                                        return (
                                                            <td key={index}
                                                                style={{paddingLeft: row.level * 2 + "em"}}>
                                                                <div>
                                                                    <i className="fas fa-file"/>
                                                                    {val}
                                                                </div>
                                                            </td>
                                                        )
                                                    }
                                                } else {
                                                    return (
                                                        <td key={index}>
                                                            {val}
                                                        </td>
                                                    )
                                                }
                                            })
                                        }
                                    </tr>
                                )
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}


//Main Render
ReactDOM.render(
    <>
        <App/>
    </>,
    document.getElementById('root')
);