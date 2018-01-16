<?php
/**
 * Created by PhpStorm.
 * User: DELANNOY
 * Date: 07/01/2018
 * Time: 18:11
 */
require_once ('\config\db_action.php');

$db = DB_action::get_instance();
$result = $db -> get_db_select('ligne_compte',['ID(ID_ligne)', 'Fournisseur', 'Designation', 'Num_BC', 'Montant_HT', 'ID_ligne(Ligne)', 'Date_imputation(Date_imput)', 'Etat']);
//print_r ($result);
$json= json_encode($result);
//echo $json;
$a='<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  <link rel="shortcut icon" type="image/ico" href="favicon.ico" />
  <title>SlickGrid example 3: Editing</title>
  <link rel="stylesheet" href="../edsa-Slickgrid/slick.grid.css" type="text/css"/>
  <link rel="stylesheet" href="../edsa-Slickgrid/css/smoothness/jquery-ui-1.11.3.custom.css" type="text/css"/>
  <link rel="stylesheet" href="../edsa-Slickgrid/examples/examples.css" type="text/css"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">

  <style>
    .cell-title {
      font-weight: bold;
    }

    .cell-effort-driven {
      text-align: center;
    }
	body{margin-top:50px;}
.glyphicon { margin-right:10px; }
.panel-body { padding:0px; }
.panel-body table tr td { padding-left: 15px }
.panel-body .table {margin-bottom: 0px; }
  </style>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-sm-3 col-md-3">
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span class="glyphicon glyphicon-folder-close">
                            </span>Content</a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-pencil text-primary"></span><a href="http://www.jquery2dotnet.com">Articles</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-flash text-success"></span><a href="http://www.jquery2dotnet.com">News</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-file text-info"></span><a href="http://www.jquery2dotnet.com">Newsletters</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-comment text-success"></span><a href="http://www.jquery2dotnet.com">Comments</a>
                                        <span class="badge">42</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class="glyphicon glyphicon-th">
                            </span>Modules</a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                    <td>
                                        <a href="http://www.jquery2dotnet.com">Orders</a> <span class="label label-success">$ 320</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="http://www.jquery2dotnet.com">Invoices</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="http://www.jquery2dotnet.com">Shipments</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="http://www.jquery2dotnet.com">Tex</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><span class="glyphicon glyphicon-user">
                            </span>Account</a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                    <td>
                                        <a href="http://www.jquery2dotnet.com">Change Password</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="http://www.jquery2dotnet.com">Notifications</a> <span class="label label-info">5</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="http://www.jquery2dotnet.com">Import/Export</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-trash text-danger"></span><a href="http://www.jquery2dotnet.com" class="text-danger">
                                            Delete Account</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><span class="glyphicon glyphicon-file">
                            </span>Reports</a>
                        </h4>
                    </div>
                    <div id="collapseFour" class="panel-collapse collapse">
                        <div class="panel-body">
                            <table class="table">
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-usd"></span><a href="http://www.jquery2dotnet.com">Sales</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-user"></span><a href="http://www.jquery2dotnet.com">Customers</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-tasks"></span><a href="http://www.jquery2dotnet.com">Products</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="glyphicon glyphicon-shopping-cart"></span><a href="http://www.jquery2dotnet.com">Shopping Cart</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-9 col-md-9">
            <div class="well">
                <h1>
                    Accordion Menu With Icon</h1>
                <div style="position:relative">
<h2>Demonstrates:</h2>


  <div style="width:80%;">
<form name="frm" id="frm" action="execresult.php" method="POST">
<fieldset style="float:left; height:60px; width:100% ">
    <legend name="id" style="font-family:times new roman; font-size:17px;">Nouvelle ligne:</legend>
<!--Début du tableau-->
<table>
<tr><td><label style="font-size:14px">Date:</label></td> <td><input type="text" name="date" size="10" value=""/></td>
    <td style="padding:10px 5px;"><label style="font-size:14px">Soci&eacute;t&eacute;:</label></td>
    <td><input type="text" name="idsoc" size="10" value=""/></td>
        <td><input type="submit" name="btsend" value="Valider"/></td>
</tr>
</table>
</fieldset>
</form>

    <div id="myGrid" style="width:100%;height:500px;"></div>
  </div>

	
  </div>
</div>
            </div>
        </div>
    </div>
</div>


<script src="../edsa-Slickgrid/lib/firebugx.js"></script>

<script src="../edsa-Slickgrid/lib/jquery-3.2.1.js"></script>
<script src="../edsa-Slickgrid/lib/jquery-ui-1.11.3.min.js"></script>
<script src="../edsa-Slickgrid/lib/jquery.event.drag-2.3.0.js"></script>

<script src="../edsa-Slickgrid/slick.core.js"></script>
<script src="../edsa-Slickgrid/plugins/slick.cellrangedecorator.js"></script>
<script src="../edsa-Slickgrid/plugins/slick.cellrangeselector.js"></script>
<script src="../edsa-Slickgrid/plugins/slick.cellselectionmodel.js"></script>
<script src="../edsa-Slickgrid/slick.formatters.js"></script>
<script src="../edsa-Slickgrid/slick.editors.js"></script>
<script src="../edsa-Slickgrid/slick.grid.js"></script>
<script src="../edsa-Slickgrid/lib/slick.autocolumnsize.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
<script type="text/javascript" charset="utf-8">



  function requiredFieldValidator(value) {
    if (value == null || value == undefined || !value.length) {
      return {valid: false, msg: "This is a required field"};
    } else {
      return {valid: true, msg: null};
    }
  }

  var grid, isAsc = true, currentSortCol = { id: "ID_ligne" };
  var data = [];
  var columns = [
	{id: "ID_ligne", name: "ID", field: "ID_ligne", width: 150, cssClass: "cell-title", editor: Slick.Editors.Integer,  sortable: true, editable: false},
    {id: "Designation", name: "Désignation", field: "Designation", width: 150, cssClass: "cell-title", editor: Slick.Editors.Text, validator: requiredFieldValidator, sortable: true},
    {id: "Fournisseur", name: "Fournisseur", field: "Fournisseur", width: 150, editor: Slick.Editors.Text, validator: requiredFieldValidator, sortable: true},
    {id: "Num_BC", name: "N° de Bon de Commande", field: "Num_BC", editor: Slick.Editors.Integer, sortable: true},
    {id: "Montant_HT", name: "Montant HT", field: "Montant_HT", width: 80, resizable: false, editor: Slick.Editors.Integer, sortable: true},
    {id: "Ligne", name: "Ligne", field: "Ligne", minWidth: 60, editor: Slick.Editors.Integer,sortable: true},
	{id: "Date_imput", name:"Date d\'imputation", field: "Date_imput", minWidth: 60, editor: Slick.Editors.Date,sortable: true},
    {id: "Etat", name: "Etat", field: "Etat", minWidth: 60, editor: Slick.Editors.Integer,sortable: true},
  ];
  var options = {
    editable: true,
    enableAddRow: true,
    enableCellNavigation: true,
    asyncEditorLoading: false,
    autoEdit: false,
	forceFitColumns: true,
	rowHeight: 25,
	multiColumnSort: true,
  };

  $(function () {
    data=';
$b=',
grid = new Slick.Grid("#myGrid",  data, columns, options);
    grid.setSelectionModel(new Slick.CellSelectionModel());
	grid.onSort.subscribe(function (e, args) {
      var cols = args.sortCols;
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
      grid.render();
	 });
  })
	//grid.registerPlugin( new Slick.AutoColumnSize());

	 
  	// define some minimum height/width/padding before resizing
	var DATAGRID_MIN_HEIGHT = 180;
	var DATAGRID_MIN_WIDTH = 300;
	var DATAGRID_BOTTOM_PADDING = 20;
  /** Attach an auto resize trigger on the datagrid, if that is enable then it will resize itself to the available space
   * Options: we could also provide a % factor to resize on each height/width independently
   */
  
  /*function attachAutoResizeDataGrid(grid, gridId, gridContainerId) {
		var gridDomElm = $(\'#\' + gridId);
		if (!gridDomElm || typeof gridDomElm . offset() === "undefined") {
    // if we can\'t find the grid to resize, return without attaching anything
    return null;
}
		//-- 1st resize the datagrid size on first load (because the onResize is not triggered on first page load)
		resizeToFitBrowserWindow(grid, gridId, gridContainerId);
		//-- 2nd attach a trigger on the Window DOM element, so that it happens also when resizing after first load
		$(window) . on("resize", function () {
            // for some yet unknown reason, calling the resize twice removes any stuttering/flickering when changing the height and makes it much smoother
            resizeToFitBrowserWindow(grid, gridId, gridContainerId);
            resizeToFitBrowserWindow(grid, gridId, gridContainerId);
        });
		// in a SPA (Single Page App) environment you SHOULD also call the destroyAutoResize()
  }
	/* destroy the resizer when user leaves the page
	function destroyAutoResize() {
		$(window).trigger(\'resize\').off(\'resize\');
	}
	/**
	* Private function, calculate the datagrid new height/width from the available space, also consider that a % factor might be applied to calculation
	* object gridOptions

	function calculateGridNewDimensions(gridId, gridContainerId) {
		var availableHeight = $(window).height() - $(\'#\' + gridId).offset().top - DATAGRID_BOTTOM_PADDING;
		var availableWidth = $(\'#\' + gridContainerId).width();
		var newHeight = availableHeight;
		var newWidth = availableWidth;
		// we want to keep a minimum datagrid size, apply these minimum if required
		if (newHeight < DATAGRID_MIN_HEIGHT) {
			newHeight = DATAGRID_MIN_HEIGHT;
		}
		if (newWidth < DATAGRID_MIN_WIDTH) {
			newWidth = DATAGRID_MIN_WIDTH;
		}
		return {
			height: newHeight,
			width: newWidth
		};
	}
	/** resize the datagrid to fit the browser height & width
	function resizeToFitBrowserWindow(grid, gridId, gridContainerId) {
		// calculate new available sizes but with minimum height of 220px
		var newSizes = calculateGridNewDimensions(gridId, gridContainerId);
		if (newSizes) {
			// apply these new height/width to the datagrid
			$(\'#\' + gridId).height(newSizes.height);
			$(\'#\' + gridId).width(newSizes.width);
			// resize the slickgrid canvas on all browser except some IE versions
			// exclude all IE below IE11
			if (new RegExp(\'MSIE [6-8]\').exec(navigator.userAgent) === null && grid) {
				grid.resizeCanvas();
			}
		}
	}
	*/
</script >
</body >
</html >';
echo("{$a}{$json}{$b}");

?>