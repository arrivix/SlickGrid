<?php
/**
 * Created by PhpStorm.
 * User: DELANNOY
 * Date: 15/01/2018
 * Time: 01:19
 */

require_once ('..\..\config\db_action.php');

$db = DB_action::get_instance();
$result = $db -> get_db_select('ligne_compte',['ID(ID_ligne)', 'Fournisseur', 'Designation', 'Num_BC', 'Montant_HT', 'ID_ligne(Ligne)', 'Date_imputation(Date_imput)', 'Etat']);
//print_r ($result);
$json= json_encode($result);

$body='
    <body>

        <div name="val_block" style="display: block;
    /* width: 100px; */
    right: 20px;
    /* float: right; */
    text-align: right;
    background-color: #96cc96;
    position: absolute;
    font-size: 20pt;
    color: white;
    padding: 20px;
    z-index: 1;">
            <span style="font-size:12pt">nb de ligne chargé</span><br>
            <span style="font-size:12pt">s avant rechargement</span>
            <button onclick="modify_data()">javascript</button>
            <button onclick="lock=[4,3,10, 23]; grid.invalidate(); grid.render()">rouge</button>

        </div>
        <div class="col-sm-9 col-md-9">
            <div class="well"></div>


            <div style="position:relative">
                <h2>Demonstrates:</h2>


                <div style="width:80%;">
                    <form name="frm" id="frm" action="http://127.0.0.1:8080/edsa-Slickgrid/examples/execresult.php" method="POST">
                        <fieldset style="float:left; height:60px; width:100% ">
                            <legend name="id" style="font-family:times new roman; font-size:17px;">Nouvelle ligne:</legend>
                            <!--Début du tableau-->
                            <table>
                                <tbody><tr><td><label style="font-size:14px">Date:</label></td> <td><input type="text" name="date" size="10" value=""></td>
                                    <td style="padding:10px 5px;"><label style="font-size:14px">Société:</label></td>
                                    <td><input type="text" name="idsoc" size="10" value=""></td>
                                    <td><input type="submit" name="btsend" value="Valider"></td>
                                </tr>
                                </tbody></table>
                        </fieldset>
                    </form>

                    <div id="myGrid" style="width: 100%; height: 500px; overflow: hidden; outline: 0px; position: relative;" class="slickgrid_217772 ui-widget"><div tabindex="0" hidefocus="" style="position:fixed;width:0;height:0;top:0;left:0;outline:0;"></div><div class="slick-header ui-state-default"><div class="slick-header-columns ui-sortable" style="left: -1000px; width: 1658px;" unselectable="on"><div class="ui-state-default slick-header-column slick-header-sortable ui-sortable-handle" id="slickgrid_217772ID_ligne" title="" style="width: 30px;"><span class="slick-column-name">ID</span><span class="slick-sort-indicator"></span><div class="slick-resizable-handle"></div></div><div class="ui-state-default slick-header-column slick-header-sortable ui-sortable-handle" id="slickgrid_217772Designation" title="" style="width: 119px;"><span class="slick-column-name">Désignation</span><span class="slick-sort-indicator"></span><div class="slick-resizable-handle"></div></div><div class="ui-state-default slick-header-column slick-header-sortable ui-sortable-handle" id="slickgrid_217772Fournisseur" title="" style="width: 119px;"><span class="slick-column-name">Fournisseur</span><span class="slick-sort-indicator"></span><div class="slick-resizable-handle"></div></div><div class="ui-state-default slick-header-column slick-header-sortable ui-sortable-handle" id="slickgrid_217772Num_BC" title="" style="width: 68px;"><span class="slick-column-name">N° de Bon de Commande</span><span class="slick-sort-indicator"></span><div class="slick-resizable-handle"></div></div><div class="ui-state-default slick-header-column slick-header-sortable ui-sortable-handle" id="slickgrid_217772Montant_HT" title="" style="width: 80px;"><span class="slick-column-name">Montant HT</span><span class="slick-sort-indicator"></span><div class="slick-resizable-handle"></div></div><div class="ui-state-default slick-header-column slick-header-sortable ui-sortable-handle" id="slickgrid_217772Ligne" title="" style="width: 75px;"><span class="slick-column-name">Ligne</span><span class="slick-sort-indicator"></span><div class="slick-resizable-handle"></div></div><div class="ui-state-default slick-header-column slick-header-sortable ui-sortable-handle" id="slickgrid_217772Date_imput" title="" style="width: 75px;"><span class="slick-column-name">Date d imputation</span><span class="slick-sort-indicator"></span><div class="slick-resizable-handle"></div></div><div class="ui-state-default slick-header-column slick-header-sortable ui-sortable-handle" id="slickgrid_217772Etat" title="" style="width: 75px;"><span class="slick-column-name">Etat</span><span class="slick-sort-indicator"></span></div></div></div><div class="slick-headerrow ui-state-default" style="display: none;"><div class="slick-headerrow-columns" style="width: 641px;"></div><div style="display: block; height: 1px; position: absolute; top: 0px; left: 0px; width: 658px;"></div></div><div class="slick-top-panel-scroller ui-state-default" style="display: none;"><div class="slick-top-panel" style="width:10000px"></div></div><div class="slick-viewport" style="width: 100%; overflow: auto; outline: 0px; position: relative; height: 456px;"><div class="grid-canvas" style="width: 641px; height: 6.25003e+06px;"><div class="ui-widget-content slick-row even new-row active" style="top:-80px; background=#ffd46b"><div class="slick-cell l0 r0 cell-title"></div><div class="slick-cell l1 r1 cell-title"></div><div class="slick-cell l2 r2"></div><div class="slick-cell l3 r3"></div><div class="slick-cell l4 r4"></div><div class="slick-cell l5 r5"></div><div class="slick-cell l6 r6 active editable"><input type="text" class="editor-text hasDatepicker" id="dp1515528457315" style="width: 47px;"><img class="ui-datepicker-trigger" src="http://127.0.0.1:8080/edsa-Slickgrid/examples/example-list-editor.html" alt="..." title="..."></div><div class="slick-cell l7 r7"></div></div><div class="ui-widget-content slick-row even" style="top:0px"><div class="slick-cell l0 r0 cell-title">0</div><div class="slick-cell l1 r1 cell-title">Designation0</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">59403</div><div class="slick-cell l4 r4">273</div><div class="slick-cell l5 r5">226</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row odd" style="top:25px"><div class="slick-cell l0 r0 cell-title">1</div><div class="slick-cell l1 r1 cell-title">Designation1</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">9804</div><div class="slick-cell l4 r4">12</div><div class="slick-cell l5 r5">10</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row even" style="top:50px"><div class="slick-cell l0 r0 cell-title">2</div><div class="slick-cell l1 r1 cell-title">Designation2</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">81250</div><div class="slick-cell l4 r4">540</div><div class="slick-cell l5 r5">17</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">0</div></div><div class="ui-widget-content slick-row odd" style="top:75px"><div class="slick-cell l0 r0 cell-title">3</div><div class="slick-cell l1 r1 cell-title">Designation3</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">89589</div><div class="slick-cell l4 r4">302</div><div class="slick-cell l5 r5">177</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">2</div></div><div class="ui-widget-content slick-row even highlight" style="top:100px"><div class="slick-cell l0 r0 cell-title">4</div><div class="slick-cell l1 r1 cell-title">Designation4</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">33854</div><div class="slick-cell l4 r4">686</div><div class="slick-cell l5 r5">102</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row odd" style="top:125px"><div class="slick-cell l0 r0 cell-title">5</div><div class="slick-cell l1 r1 cell-title">Designation5</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">4517</div><div class="slick-cell l4 r4">776</div><div class="slick-cell l5 r5">45</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">3</div></div><div class="ui-widget-content slick-row even highlight" style="top:150px"><div class="slick-cell l0 r0 cell-title">6</div><div class="slick-cell l1 r1 cell-title">Designation6</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">22260</div><div class="slick-cell l4 r4">288</div><div class="slick-cell l5 r5">27</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row odd" style="top:175px"><div class="slick-cell l0 r0 cell-title">7</div><div class="slick-cell l1 r1 cell-title">Designation7</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">55077</div><div class="slick-cell l4 r4">659</div><div class="slick-cell l5 r5">231</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">2</div></div><div class="ui-widget-content slick-row even" style="top:200px"><div class="slick-cell l0 r0 cell-title">8</div><div class="slick-cell l1 r1 cell-title">Designation8</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">88301</div><div class="slick-cell l4 r4">955</div><div class="slick-cell l5 r5">161</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">3</div></div><div class="ui-widget-content slick-row odd" style="top:225px"><div class="slick-cell l0 r0 cell-title">9</div><div class="slick-cell l1 r1 cell-title">Designation9</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">81274</div><div class="slick-cell l4 r4">220</div><div class="slick-cell l5 r5">248</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">2</div></div><div class="ui-widget-content slick-row even" style="top:250px"><div class="slick-cell l0 r0 cell-title">10</div><div class="slick-cell l1 r1 cell-title">Designation10</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">72850</div><div class="slick-cell l4 r4">431</div><div class="slick-cell l5 r5">108</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row odd" style="top:275px"><div class="slick-cell l0 r0 cell-title">11</div><div class="slick-cell l1 r1 cell-title">Designation11</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">29196</div><div class="slick-cell l4 r4">906</div><div class="slick-cell l5 r5">236</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row even" style="top:300px"><div class="slick-cell l0 r0 cell-title">12</div><div class="slick-cell l1 r1 cell-title">Designation12</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">51712</div><div class="slick-cell l4 r4">638</div><div class="slick-cell l5 r5">11</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row odd" style="top:325px"><div class="slick-cell l0 r0 cell-title">13</div><div class="slick-cell l1 r1 cell-title">Designation13</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">16139</div><div class="slick-cell l4 r4">426</div><div class="slick-cell l5 r5">118</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">0</div></div><div class="ui-widget-content slick-row even" style="top:350px"><div class="slick-cell l0 r0 cell-title">14</div><div class="slick-cell l1 r1 cell-title">Designation14</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">93028</div><div class="slick-cell l4 r4">951</div><div class="slick-cell l5 r5">78</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row odd" style="top:375px"><div class="slick-cell l0 r0 cell-title">15</div><div class="slick-cell l1 r1 cell-title">Designation15</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">11951</div><div class="slick-cell l4 r4">441</div><div class="slick-cell l5 r5">277</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row even" style="top:400px"><div class="slick-cell l0 r0 cell-title">16</div><div class="slick-cell l1 r1 cell-title">Designation16</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">70762</div><div class="slick-cell l4 r4">80</div><div class="slick-cell l5 r5">283</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">2</div></div><div class="ui-widget-content slick-row odd" style="top:425px"><div class="slick-cell l0 r0 cell-title">17</div><div class="slick-cell l1 r1 cell-title">Designation17</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">69667</div><div class="slick-cell l4 r4">966</div><div class="slick-cell l5 r5">142</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">2</div></div><div class="ui-widget-content slick-row even" style="top:450px"><div class="slick-cell l0 r0 cell-title">18</div><div class="slick-cell l1 r1 cell-title">Designation18</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">39108</div><div class="slick-cell l4 r4">208</div><div class="slick-cell l5 r5">192</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row odd" style="top:475px"><div class="slick-cell l0 r0 cell-title">19</div><div class="slick-cell l1 r1 cell-title">Designation19</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">56055</div><div class="slick-cell l4 r4">560</div><div class="slick-cell l5 r5">11</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row even" style="top:500px"><div class="slick-cell l0 r0 cell-title">20</div><div class="slick-cell l1 r1 cell-title">Designation20</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">20581</div><div class="slick-cell l4 r4">945</div><div class="slick-cell l5 r5">5</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row odd" style="top:525px"><div class="slick-cell l0 r0 cell-title">21</div><div class="slick-cell l1 r1 cell-title">Designation21</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">61028</div><div class="slick-cell l4 r4">96</div><div class="slick-cell l5 r5">242</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">1</div></div><div class="ui-widget-content slick-row even" style="top:550px"><div class="slick-cell l0 r0 cell-title">22</div><div class="slick-cell l1 r1 cell-title">Designation22</div><div class="slick-cell l2 r2">Popo le haricot</div><div class="slick-cell l3 r3">23202</div><div class="slick-cell l4 r4">422</div><div class="slick-cell l5 r5">148</div><div class="slick-cell l6 r6">01/04/2017</div><div class="slick-cell l7 r7">3</div></div></div></div><div tabindex="0" hidefocus="" style="position:fixed;width:0;height:0;top:0;left:0;outline:0;"></div></div>
                </div>


            </div>
        </div>
        </div>
        </div>



        <script src="../../../lib/firebugx.js"></script>
        <script src="../../../lib/jquery-3.2.1.js"></script>
        <script src="../../../lib/jquery-ui-1.11.3.min.js"></script>
        <script src="../../../lib/jquery.event.drag-2.3.0.js"></script>
        <script src="../../../slick.core.js"></script>
        <script src="../../../plugins/slick.cellrangedecorator.js"></script>
        <script src="../../../plugins/slick.cellrangeselector.js"></script>
        <script src="../../../plugins/slick.cellselectionmodel.js"></script>
        <script src="../../../slick.formatters.js"></script>
        <script src="../../../slick.editors.js"></script>
        <script src="../../../slick.grid.js"></script>
        <script src="../../../lib/slick.autocolumnsize.js"></script>
        
        <script type="text/javascript" charset="utf-8">


            function modify_data(){
                var i, j, d = [], item;
                for (i =  0, j = data.length; i<j; i++){
                    item = data[i];
                    if (item["ID_ligne"]==5){
                        break};
                }

                d["ID_ligne"] = 5;
                d["Designation"] = "J essage un truc"+i;
                d["Fournisseur"] = "voili voilou";
                d["Num_BC"] = Math.round(Math.random() * 100000);
                d["Montant_HT"] = Math.round(Math.random() * 1000);
                d["Ligne"] = Math.round(Math.random() * 300);
                d["Date_imput"] = "09/07/2017";
                d["Etat"] = Math.round(Math.random() * 3)

                data[i]=d;

                grid.invalidateRow(5);
                grid.updateRowCount();
                grid.render();

            }

            function requiredFieldValidator(value) {
                if (value == null || value == undefined || !value.length) {
                    return {valid: false, msg: "This is a required field"};
                } else {
                    return {valid: true, msg: null};
                }
            }
            var lock =[4, 6	];

            //cette fonction bloque la modification de ligne qui sont en cours de modification par une personne



            var grid, isAsc = true, currentSortCol = { id: "ID_ligne" };
            var data = [];
            var columns = [
                {id: "ID_ligne", name: "ID", field: "ID_ligne", width: 30, cssClass: "cell-title", editor: Slick.Editors.Integer, selectable:false, sortable: true, editable: false},
                {id: "Designation", name: "Désignation", field: "Designation", width: 150, cssClass: "cell-title", editor: Slick.Editors.Text, validator: requiredFieldValidator, sortable: true},
                {id: "Fournisseur", name: "Fournisseur", field: "Fournisseur", width: 150, editor: Slick.Editors.Text, validator: requiredFieldValidator, sortable: true},
                {id: "Num_BC", name: "N° de Bon de Commande", field: "Num_BC", editor: Slick.Editors.Integer, sortable: true},
                {id: "Montant_HT", name: "Montant HT", field: "Montant_HT", width: 80, resizable: false, editor: Slick.Editors.Monetic, formatter: Slick.Formatters.Monetic, sortable: true},
                {id: "Ligne", name: "Ligne", field: "Ligne", minWidth: 60, editor: Slick.Editors.Integer,sortable: true},
                {id: "Date_imput", name:"Date d imputation", field: "Date_imput", minWidth: 100, editor: Slick.Editors.Date,sortable: true},
                {id: "Etat", name: "Etat", field: "Etat", minWidth: 60, editor: Slick.Editors.List,sortable: true}
            ];
            var options = {
                editable: true,
                enableAddRow: true,
                enableCellNavigation: true,
                asyncEditorLoading: false,
                autoEdit: false,
                forceFitColumns: true,
                rowHeight: 25,
                multiColumnSort: true
            };

            $(function () {
                data='.
$json.';
                data.getItemMetadata = function (row) {
                    if (typeof this[row] !== "undefined"){
                        for (var i = 0, j= lock.length; i<j; i++) {
                            if (this[row].ID_ligne == lock[i]){
                                return {
                                    cssClasses: "highlight"

                                };

                            }
                        }
                    }
                    return null;

                }
                grid = new Slick.Grid("#myGrid",  data, columns, options);
                
                
                grid.onSort.subscribe(function (e, args) { 
    var field = args.sortCol.field;
    data = data.mergeSort(function (a, b) {
       var result =
           a[field] > b[field] ? 1 :
           a[field] < b[field] ? -1 :
           0;
       return args.sortAsc ? result : -result;
    });
    grid.invalidate();
    grid.setData(data);
    grid.render();
});

                
                

 grid.onBeforeEditCell.subscribe(function(e, args){
                    a=args.row;
                    for (var i = 0, j= lock.length; i<j; i++) {
                        if (typeof (data[a])!== "undefined"){
                            if (lock[i]==data[a]["ID_ligne"]){
                                return false;
                            }}
                    }

                });
                //event handling code.
            });




            //grid.registerPlugin( new Slick.AutoColumnSize());

     // define some minimum height/width/padding before resizing
            var DATAGRID_MIN_HEIGHT = 180;
            var DATAGRID_MIN_WIDTH = 300;
            var DATAGRID_BOTTOM_PADDING = 20;

            
            
            
            
            
        </script>
</body>
</html>';