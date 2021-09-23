var data =
    [
        {
            id: 1,
            level: 1,
            values: [1, 2, 3],
            status: true,
            children: [
                {
                    id: 3,
                    values: [1, 2, 3],
                    status: true,
                    level: 2,
                    children: [
                        {
                            id: 4,
                            level: 3,
                            status: true,
                            values: [1, 2, 3],
                            children: [
                                {
                                    id: 21,
                                    level: 4,
                                    status: true,
                                    values: [1, 2, 3],
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 10,
                    level: 2,
                    values: [1, 2, 3],
                    status: false,
                    children: [
                        {
                            id: 12,
                            level: 3,
                            status: false,
                            values: [1, 2, 3],
                            children: [
                                {
                                    id: 13,
                                    level: 4,
                                    status: false,
                                    values: [1, 2, 3],
                                    children: [
                                        {
                                            id: 14,
                                            level: 5,
                                            status: false,
                                            values: [1, 2, 3],
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            level: 1,
            status: true,
            values: [1, 2, 3],
            children: []
        }
    ]

var parentID = 1;
var childRows =
    [
        {
            id: 9,
            values: [1, 2, 3, 4],
            status: false,
            children: []
        }
    ]

var singleArray = [];
//searchData(data, childRows);
changeStatus(data, 2, false);

//makeSingleLevel(data);
function searchData(data, childRoes) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id === parentID) {
            var level = data[i].level + 1;
            childRoes.forEach(childRoe => childRoe.level = level);
            data[i].children.push(...childRows);
        } else if (data[i].children.length !== 0) {
            searchData(data[i].children, childRoes);
        }
    }
}

function changeStatus(data, parentId, status) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id === parentId) {
            data[i].children.forEach(child => {
                child.status = status
                changeStatus(data[i].children, child.id, status)
            });
        } else if (data[i].children.length !== 0) {
            changeStatus(data[i].children, parentId, status);
        }
    }
}


function makeSingleLevel(data) {
    data.forEach(row => {
        const data = {...row};
        delete data.children
        singleArray.push(data)
        if (row.children.length !== 0) {
            makeSingleLevel(row.children);
        }
    })
}


//console.log(JSON.stringify(singleArray, null));

console.log(JSON.stringify(data, null));


// for (var i = 0; i < data.length; i++) {
//     if (data[i].rowId === parentID) {
//         var level = data[i].level + 1;
//         childRows.forEach(childRow => childRow.level = level);
//         data[i].children.push(...childRows);
//     } else if (data[i].children.length !== 0) {
//         this.searchData(data[i].children, childRows, parentID);
//     }
// }