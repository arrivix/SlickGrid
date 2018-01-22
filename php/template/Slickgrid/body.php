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
$list_array_ligne_budget = $db -> get_db_select('ligne_budget', ['ID', 'Nom(TITLE)']);
$list_array_etat = $db -> get_db_select('etat', ['ID', 'Nom(TITLE)']);
//print_r ($result);
$json= json_encode($result, JSON_NUMERIC_CHECK);
$list_array_ligne_budget= json_encode($list_array_ligne_budget, JSON_NUMERIC_CHECK);
$list_array_etat= json_encode($list_array_etat, JSON_NUMERIC_CHECK);

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


                </div>

            </div>
        </div>
        </div>
        </div>
                            <div id="myGrid" style="width:100%;height:700px;"></div>




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
        <script src="../../lib/JS/merge-sort.js"></script>
        <script src="../../../slick.dataview.js"></script>


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

            var dataView = new Slick.Data.DataView();
            var grid, isAsc = true, currentSortCol = { id: "ID_ligne" };
            var data = [];
            var $list_array_ligne_budget =
            '.
$list_array_ligne_budget.

';

var $List_array_etat = 

'
.
    $list_array_etat
.
    ';
            var columns = [
                {id: "ID_ligne", name: "ID", field: "ID_ligne", width: 30, cssClass: "cell-title", selectable: true, sortable: true, editable: false},
                {id: "Designation", name: "Désignation", field: "Designation", width: 150, cssClass: "cell-title", editor: Slick.Editors.Text, validator: requiredFieldValidator, sortable: true, editable: true},
                {id: "Fournisseur", name: "Fournisseur", field: "Fournisseur", width: 150, editor: Slick.Editors.Text, validator: requiredFieldValidator, sortable: true, editable: true},
                {id: "Num_BC", name: "N° de Bon de Commande", field: "Num_BC", editor: Slick.Editors.Reference, sortable: true, editable: true},
                {id: "Montant_HT", name: "Montant HT", field: "Montant_HT", width: 80, resizable: false, editor: Slick.Editors.Monetic, formatter: Slick.Formatters.Monetic, sortable: true, editable: true},
                {id: "Ligne", name: "Ligne", field: "Ligne", list:$list_array_ligne_budget, editor: Slick.Editors.List,formatter: Slick.Formatters.List, minWidth: 220, sortable: true},
                {id: "Date_imput", name:"Date d imputation", field: "Date_imput", minWidth: 100, editor: Slick.Editors.Date,sortable: true, editable: true},
                {id: "Etat", name: "Etat", field: "Etat", minWidth: 60, editor: Slick.Editors.List, list:$List_array_etat, formatter: Slick.Formatters.List, sortable: true, editable: true}
            ];
            var options = {
                enableAddRow: false,
                editable: true,
                enableCellNavigation: true,
                asyncEditorLoading: false,
                autoEdit: true,
                forceFitColumns: true,
                rowHeight: 35,
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
            dataView.setItems(data, "ID_ligne");
                grid = new Slick.Grid("#myGrid", dataView, columns, options);
                
                
                grid.onSort.subscribe(function (e, args) { 
    cols = args.sortCols;
    //alert(dataRow1);
    
    data.sort(function (dataRow1, dataRow2) {
        for (var i = 0, l = cols.length; i < l; i++) {
          var field = cols[i].sortCol.field;
          var sign = cols[i].sortAsc ? 1 : -1;
          var value1 = dataRow1[field], value2 = dataRow2[field];
          var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
          if (result != 0) {
            return result;
          }
        }
        return 0;
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