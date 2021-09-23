const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())


app.get('/', (req, res) => {
    setTimeout(() => {
        var txt = '<rows><row id="c338594" class="component" xmlkids="1"><userdata name="phase">1</userdata><userdata name="componentTypeID">0</userdata><userdata name="type">1</userdata><userdata name="rID">338594</userdata><userdata name="parent"></userdata><userdata name="substate"></userdata><cell></cell><cell image="folder.gif" class="cell_title"><![CDATA[Racket Wooden Base]]></cell><cell></cell><cell><![CDATA[1]]></cell><cell type="ro"><![CDATA[ ]]></cell><cell type="ro"><![CDATA[ ]]></cell><cell><![CDATA[0.144]]></cell><cell><![CDATA[2.29]]></cell><cell><![CDATA[Estimate]]></cell><cell><![CDATA[1]]></cell><cell title="  "><![CDATA[<div class="concept-grid-actions"><a href="/project/material/add/44363/1/338594" title="Add a Part"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_part.png" /></a><a href="/project/component/add/44363/1/338594" title="Add a Sub-assembly"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_sasmbly.png" /></a><input type="image" onclick="javascript:copy_sbom_component(\'338594\',\'338592\',\'44363\',\'1\')" name="image" title="Copy" src="/sites/all/themes/sm_theme_01/images/sbom/sm_copy.png"/><a href="/project/component/edit/44363/1/338594" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'c338594\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row><row id="c338596" class="component" xmlkids="1"><userdata name="phase">1</userdata><userdata name="componentTypeID">0</userdata><userdata name="type">1</userdata><userdata name="rID">338596</userdata><userdata name="parent"></userdata><userdata name="substate"></userdata><cell></cell><cell image="folder.gif" class="cell_title"><![CDATA[Project-SS]]></cell><cell></cell><cell><![CDATA[1]]></cell><cell type="ro"><![CDATA[ ]]></cell><cell type="ro"><![CDATA[ ]]></cell><cell><![CDATA[116]]></cell><cell><![CDATA[648]]></cell><cell><![CDATA[Estimate]]></cell><cell><![CDATA[20]]></cell><cell title="  "><![CDATA[<div class="concept-grid-actions"><a href="/project/material/add/44363/1/338596" title="Add a Part"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_part.png" /></a><a href="/project/component/add/44363/1/338596" title="Add a Sub-assembly"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_sasmbly.png" /></a><input type="image" onclick="javascript:copy_sbom_component(\'338596\',\'338592\',\'44363\',\'1\')" name="image" title="Copy" src="/sites/all/themes/sm_theme_01/images/sbom/sm_copy.png"/><a href="/project/component/edit/44363/1/338596" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'c338596\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row><row id="total" class="total"><userdata name="type">7</userdata><userdata name="rID">total</userdata><cell/><cell image="blank.gif"/><cell class="emp" colspan="4"><![CDATA[Manufacturing total]]></cell><cell/><cell/><cell/><cell class="emp"><![CDATA[116]]></cell><cell class="emp"><![CDATA[651]]></cell><cell class="emp"><![CDATA[Estimate]]></cell><cell/><cell/></row></rows>\n'
        res.set('Content-Type', 'text/xml');
        res.send(txt);
    },1000);
})

app.get('/:parentId', (req, res) => {
    const parentId = req.params.parentId;
    var txt = '';
    if (parentId === 'c338594') {
        txt = '<rows parent="c338594"><row id="c338595" class="component"><userdata name="phase">1</userdata><userdata name="componentTypeID">0</userdata><userdata name="type">1</userdata><userdata name="rID">338595</userdata><userdata name="parent"></userdata><userdata name="substate"></userdata><cell></cell><cell image="folder.gif" class="cell_title"><![CDATA[Racket Wooden Base-2]]></cell><cell></cell><cell><![CDATA[1]]></cell><cell type="ro"><![CDATA[ ]]></cell><cell type="ro"><![CDATA[ ]]></cell><cell><![CDATA[0]]></cell><cell><![CDATA[0]]></cell><cell></cell><cell><![CDATA[-]]></cell><cell title="  "><![CDATA[<div class="concept-grid-actions"><a href="/project/material/add/44363/1/338595" title="Add a Part"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_part.png" /></a><a href="/project/component/add/44363/1/338595" title="Add a Sub-assembly"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_sasmbly.png" /></a><input type="image" onclick="javascript:copy_sbom_component(\'338595\',\'338594\',\'44363\',\'1\')" name="image" title="Copy" src="/sites/all/themes/sm_theme_01/images/sbom/sm_copy.png"/><a href="/project/component/edit/44363/1/338595" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'c338595\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row><row id="i422053" class="component" xmlkids="1"><userdata name="type">2</userdata><userdata name="rID">422053</userdata><userdata name="parent"></userdata><userdata name="add_proc_button"><![CDATA[<div class="concept-grid-actions"><a href="/project/process/add/44363/1/338594/422053" title="Add a Process"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_proc.png" /></a></div>]]></userdata><userdata name="hasProcess">1</userdata><userdata name="amt">0.3</userdata><userdata name="matProcName">EPDM rubber</userdata><cell></cell><cell image="books.gif" class="cell_title"><![CDATA[Rubber Blade Soft]]></cell><cell><![CDATA[EPDM rubber]]></cell><cell><![CDATA[2]]></cell><cell><![CDATA[0.3]]></cell><cell title="pound [pounds]"><![CDATA[lb]]></cell><cell><![CDATA[0.0918]]></cell><cell><![CDATA[1.67]]></cell><cell><![CDATA[Estimate]]></cell><cell><![CDATA[1]]></cell><cell title="  "><![CDATA[<div class="concept-grid-actions"><a href="/project/process/add/44363/1/338594/422053" title="Add a Process"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_proc.png" /></a><input type="image" onclick="javascript:copy_sbom_item(\'422053\',\'338594\',\'1\',\'44363\')" name="image" title="Copy" src="/sites/all/themes/sm_theme_01/images/sbom/sm_copy.png"/><a href="/project/material/edit/44363/1/338594/422053" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'i422053\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row><row id="i422054" class="item"><userdata name="type">2</userdata><userdata name="rID">422054</userdata><userdata name="parent"></userdata><userdata name="add_proc_button"><![CDATA[<div class="concept-grid-actions"><span class="empty-button"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_proc_disabled.png" /></span></div>]]></userdata><userdata name="hasProcess">0</userdata><userdata name="matProcName">Particle board, indoor use</userdata><cell></cell><cell image="book.gif" class="cell_title"><![CDATA[wooden Blades]]></cell><cell><![CDATA[Particle board, indoor use]]></cell><cell><![CDATA[2]]></cell><cell><![CDATA[0.4]]></cell><cell title="pound [pounds]"><![CDATA[lb]]></cell><cell><![CDATA[0.0155]]></cell><cell><![CDATA[0.190]]></cell><cell><![CDATA[Estimate]]></cell><cell><![CDATA[2]]></cell><cell title="  "><![CDATA[<div class="concept-grid-actions"><span class="empty-button"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_proc_disabled.png" /></span><input type="image" onclick="javascript:copy_sbom_item(\'422054\',\'338594\',\'1\',\'44363\')" name="image" title="Copy" src="/sites/all/themes/sm_theme_01/images/sbom/sm_copy.png"/><a href="/project/material/edit/44363/1/338594/422054" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'i422054\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row><row id="i422055" class="item"><userdata name="type">2</userdata><userdata name="rID">422055</userdata><userdata name="parent"></userdata><userdata name="add_proc_button"><![CDATA[<div class="concept-grid-actions"><a href="/project/process/add/44363/1/338594/422055" title="Add a Process"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_proc.png" /></a></div>]]></userdata><userdata name="hasProcess">0</userdata><userdata name="matProcName">Red oak</userdata><cell></cell><cell image="book.gif" class="cell_title"><![CDATA[Wooden handle]]></cell><cell><![CDATA[Red oak]]></cell><cell><![CDATA[1]]></cell><cell><![CDATA[0.6]]></cell><cell title="pound [pounds]"><![CDATA[lb]]></cell><cell><![CDATA[0.0362]]></cell><cell><![CDATA[0.429]]></cell><cell><![CDATA[Estimate]]></cell><cell><![CDATA[1]]></cell><cell title="  "><![CDATA[<div class="concept-grid-actions"><a href="/project/process/add/44363/1/338594/422055" title="Add a Process"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_proc.png" /></a><input type="image" onclick="javascript:copy_sbom_item(\'422055\',\'338594\',\'1\',\'44363\')" name="image" title="Copy" src="/sites/all/themes/sm_theme_01/images/sbom/sm_copy.png"/><a href="/project/material/edit/44363/1/338594/422055" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'i422055\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row></rows>\n'
    } else if (parentId === 'c338596') {
        txt = '<rows parent="c338596"><row id="c338597" class="component" xmlkids="1"><userdata name="phase">1</userdata><userdata name="componentTypeID">0</userdata><userdata name="type">1</userdata><userdata name="rID">338597</userdata><userdata name="parent"></userdata><userdata name="substate"></userdata><cell></cell><cell image="folder.gif" class="cell_title"><![CDATA[Project-SS-1]]></cell><cell></cell><cell><![CDATA[1]]></cell><cell type="ro"><![CDATA[ ]]></cell><cell type="ro"><![CDATA[ ]]></cell><cell><![CDATA[116]]></cell><cell><![CDATA[648]]></cell><cell><![CDATA[Estimate]]></cell><cell><![CDATA[24]]></cell><cell title="  "><![CDATA[<div class="concept-grid-actions"><a href="/project/material/add/44363/1/338597" title="Add a Part"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_part.png" /></a><a href="/project/component/add/44363/1/338597" title="Add a Sub-assembly"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_plus_sasmbly.png" /></a><input type="image" onclick="javascript:copy_sbom_component(\'338597\',\'338596\',\'44363\',\'1\')" name="image" title="Copy" src="/sites/all/themes/sm_theme_01/images/sbom/sm_copy.png"/><a href="/project/component/edit/44363/1/338597" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'c338597\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row></rows>\n'
    } else if (parentId === 'i422053') {
        txt = '<rows parent="i422053"><row id="c816820" class="component"><userdata name="type">5</userdata><userdata name="rID">816820</userdata><userdata name="parent">Rubber Blade Soft</userdata><cell></cell><cell image="leaf.gif" class="cell_title"><![CDATA[Material]]></cell><cell><![CDATA[EPDM rubber]]></cell><cell/><cell><![CDATA[0.300000011920929]]></cell><cell title="pound [pounds]"><![CDATA[lb]]></cell><cell><![CDATA[0.0349]]></cell><cell><![CDATA[0.603]]></cell><cell><![CDATA[Estimate]]></cell><cell/><cell title="  "><![CDATA[<div class="concept-grid-actions"></div>]]></cell></row><row id="p816822" class="process"><userdata name="type">5</userdata><userdata name="rID">816822</userdata><userdata name="parent">Rubber Blade Soft</userdata><cell></cell><cell image="leaf.gif" class="cell_title"><![CDATA[Process]]></cell><cell><![CDATA[Injection molding, plastics]]></cell><cell/><cell><![CDATA[0.300000011920929]]></cell><cell title="pound [pounds]"><![CDATA[lb]]></cell><cell><![CDATA[0.0110]]></cell><cell><![CDATA[0.233]]></cell><cell><![CDATA[Estimate]]></cell><cell/><cell title="  "><![CDATA[<div class="concept-grid-actions"><a href="/project/process/edit/44363/1/338594/422053/816822" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'p816822\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row></rows>\n'
    } else if (parentId === 'c816820') {
        txt = '<rows parent="c816820"><row id="c816825" class="component"><userdata name="type">5</userdata><userdata name="rID">816820</userdata><userdata name="parent">Rubber Blade Soft1</userdata><cell></cell><cell image="leaf.gif" class="cell_title"><![CDATA[Material]]></cell><cell><![CDATA[EPDM rubber]]></cell><cell/><cell><![CDATA[0.300000011920929]]></cell><cell title="pound [pounds]"><![CDATA[lb]]></cell><cell><![CDATA[0.0349]]></cell><cell><![CDATA[0.603]]></cell><cell><![CDATA[Estimate]]></cell><cell/><cell title="  "><![CDATA[<div class="concept-grid-actions"></div>]]></cell></row><row id="p816825" class="process"><userdata name="type">5</userdata><userdata name="rID">816822</userdata><userdata name="parent">Rubber Blade Soft2</userdata><cell></cell><cell image="leaf.gif" class="cell_title"><![CDATA[Process]]></cell><cell><![CDATA[Injection molding, plastics]]></cell><cell/><cell><![CDATA[0.300000011920929]]></cell><cell title="pound [pounds]"><![CDATA[lb]]></cell><cell><![CDATA[0.0110]]></cell><cell><![CDATA[0.233]]></cell><cell><![CDATA[Estimate]]></cell><cell/><cell title="  "><![CDATA[<div class="concept-grid-actions"><a href="/project/process/edit/44363/1/338594/422053/816822" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'p816822\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row></rows>\n'
    } else if (parentId === 'c816825') {
        txt = '<rows parent="c816825"><row id="c816826" class="component"><userdata name="type">5</userdata><userdata name="rID">816820</userdata><userdata name="parent">Rubber Blade Soft1</userdata><cell></cell><cell image="leaf.gif" class="cell_title"><![CDATA[Material]]></cell><cell><![CDATA[EPDM rubber]]></cell><cell/><cell><![CDATA[0.300000011920929]]></cell><cell title="pound [pounds]"><![CDATA[lb]]></cell><cell><![CDATA[0.0349]]></cell><cell><![CDATA[0.603]]></cell><cell><![CDATA[Estimate]]></cell><cell/><cell title="  "><![CDATA[<div class="concept-grid-actions"></div>]]></cell></row><row id="p816827" class="process"><userdata name="type">5</userdata><userdata name="rID">816822</userdata><userdata name="parent">Rubber Blade Soft2</userdata><cell></cell><cell image="leaf.gif" class="cell_title"><![CDATA[Process]]></cell><cell><![CDATA[Injection molding, plastics]]></cell><cell/><cell><![CDATA[0.300000011920929]]></cell><cell title="pound [pounds]"><![CDATA[lb]]></cell><cell><![CDATA[0.0110]]></cell><cell><![CDATA[0.233]]></cell><cell><![CDATA[Estimate]]></cell><cell/><cell title="  "><![CDATA[<div class="concept-grid-actions"><a href="/project/process/edit/44363/1/338594/422053/816822" title="Edit"><img src="/sites/all/themes/sm_theme_01/images/sbom/sm_edit.png" /></a><input  type="image" onclick="deleteRow(\'p816822\',\'dhtmlx_sbom1_treegrid_div\')"  title="Delete" name="image" src="/sites/all/themes/sm_theme_01/images/sbom/sm_delete.png"/></div>]]></cell></row></rows>\n'
    }
    setTimeout(() => {
        res.set('Content-Type', 'text/xml');
        res.send(txt);
    },1000)
})


app.listen(3000);