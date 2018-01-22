
/***
 * Contains basic SlickGrid editors.
 * @module Editors
 * @namespace Slick
 */

(function ($) {
  // register namespace
  $.extend(true, window, {
    "Slick": {
      "Editors": {
        "Text": TextEditor,
        "Integer": IntegerEditor,
		"Monetic": MoneticEditor,
        "Float": FloatEditor,
        "Date": DateEditor,
        "YesNoSelect": YesNoSelectEditor,
        "Checkbox": CheckboxEditor,
        "PercentComplete": PercentCompleteEditor,
        "LongText": LongTextEditor,
		"List": ListEditor,
          "Reference":ReferenceEditor
      }
    }
  });

  function TextEditor(args) {
    var $input;
    var defaultValue;
    var scope = this;

    this.init = function () {
      $input = $("<INPUT type=text class='editor-text' />")
          .appendTo(args.container)
          .on("keydown.nav", function (e) {
            if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
              e.stopImmediatePropagation();
            }
          })
          .focus()
          .select();
    };

    this.destroy = function () {
      $input.remove();
    };

    this.focus = function () {
      $input.focus();
    };

    this.getValue = function () {
      return $input.val();
    };

    this.setValue = function (val) {
      $input.val(val);
    };

    this.loadValue = function (item) {
      defaultValue = item[args.column.field] || "";
      $input.val(defaultValue);
      $input[0].defaultValue = defaultValue;
      $input.select();
    };

    this.serializeValue = function () {
      return $input.val();
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return (!($input.val() == "" && defaultValue == null)) && ($input.val() != defaultValue);
    };

    this.validate = function () {
      if (args.column.validator) {
        var validationResults = args.column.validator($input.val());
        if (!validationResults.valid) {
          return validationResults;
        }
      }

      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  }

  function IntegerEditor(args) {
    var $input;
    var defaultValue;
    var scope = this;

    this.init = function () {
      $input = $("<INPUT type=text class='editor-text' />");

      $input.on("keydown.nav", function (e) {
        if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
          e.stopImmediatePropagation();
        }
      });

      $input.appendTo(args.container);
      $input.focus().select();
    };

    this.destroy = function () {
      $input.remove();
    };

    this.focus = function () {
      $input.focus();
    };

    this.loadValue = function (item) {
      defaultValue = item[args.column.field];
      $input.val(defaultValue);
      $input[0].defaultValue = defaultValue;
      $input.select();
    };

    this.serializeValue = function () {
      return parseInt($input.val(), 10) || 0;
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return (!($input.val() == "" && defaultValue == null)) && ($input.val() != defaultValue);
    };

    this.validate = function () {
      if (isNaN($input.val())) {
        return {
          valid: false,
          msg: "Please enter a valid integer"
        };
      }

      if (args.column.validator) {
        var validationResults = args.column.validator($input.val());
        if (!validationResults.valid) {
          return validationResults;
        }
      }

      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  }

  function MoneticEditor(args) {
   var $input;
    var defaultValue;
    var scope = this;

    this.init = function () {
      $input = $("<INPUT type=text class='editor-text' style='text-align:right'/>");

      $input.on("keydown.nav", function (e) {
        if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
          e.stopImmediatePropagation();
        }
      });

      $input.appendTo(args.container);
      $input.focus().select();
    };

    this.destroy = function () {
      $input.remove();
    };

    this.focus = function () {
      $input.focus();
    };

    function getDecimalPlaces() {
        // returns the number of fixed decimal places or null
        var rtn = args.column.editorFixedDecimalPlaces;
        if (typeof rtn == 'undefined') {
            rtn = FloatEditor.DefaultDecimalPlaces;
        }
        return (!rtn && rtn!==0 ? null : rtn);
    }

    this.loadValue = function (item) {
      defaultValue = item[args.column.field];

      var decPlaces = getDecimalPlaces();
      if (decPlaces !== null
      && (defaultValue || defaultValue===0)
      && defaultValue.toFixed) {
        defaultValue = defaultValue.toFixed(decPlaces);
      }

      $input.val(defaultValue);
      $input[0].defaultValue = defaultValue;
      $input.select();
    };

    this.serializeValue = function () {
      var rtn = parseFloat($input.val());
      if (FloatEditor.AllowEmptyValue) {
        if (!rtn && rtn !==0) { rtn = ''; }
      } else {
        rtn |= 0;
      }
      
      var decPlaces = getDecimalPlaces();
      if (decPlaces !== null
      && (rtn || rtn===0)
      && rtn.toFixed) {
        rtn = parseFloat(rtn.toFixed(decPlaces));
      }

      return rtn;
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return (!($input.val() == "" && defaultValue == null)) && ($input.val() != defaultValue);
    };

    this.validate = function () {
      if (isNaN($input.val())) {
        return {
          valid: false,
          msg: "Please enter a valid number"
        };
      }

      if (args.column.validator) {
        var validationResults = args.column.validator($input.val());
        if (!validationResults.valid) {
          return validationResults;
        }
      }

      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  }

  MoneticEditor.DefaultDecimalPlaces = 2;
  MoneticEditor.AllowEmptyValue = false;
  
  function FloatEditor(args) {
    var $input;
    var defaultValue;
    var scope = this;

    this.init = function () {
      $input = $("<INPUT type=text class='editor-text' />");

      $input.on("keydown.nav", function (e) {
        if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
          e.stopImmediatePropagation();
        }
      });

      $input.appendTo(args.container);
      $input.focus().select();
    };

    this.destroy = function () {
      $input.remove();
    };

    this.focus = function () {
      $input.focus();
    };

    function getDecimalPlaces() {
        // returns the number of fixed decimal places or null
        var rtn = args.column.editorFixedDecimalPlaces;
        if (typeof rtn == 'undefined') {
            rtn = FloatEditor.DefaultDecimalPlaces;
        }
        return (!rtn && rtn!==0 ? null : rtn);
    }

    this.loadValue = function (item) {
      defaultValue = item[args.column.field];

      var decPlaces = getDecimalPlaces();
      if (decPlaces !== null
      && (defaultValue || defaultValue===0)
      && defaultValue.toFixed) {
        defaultValue = defaultValue.toFixed(decPlaces);
      }

      $input.val(defaultValue);
      $input[0].defaultValue = defaultValue;
      $input.select();
    };

    this.serializeValue = function () {
      var rtn = parseFloat($input.val());
      if (FloatEditor.AllowEmptyValue) {
        if (!rtn && rtn !==0) { rtn = ''; }
      } else {
        rtn |= 0;
      }
      
      var decPlaces = getDecimalPlaces();
      if (decPlaces !== null
      && (rtn || rtn===0)
      && rtn.toFixed) {
        rtn = parseFloat(rtn.toFixed(decPlaces));
      }

      return rtn;
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return (!($input.val() == "" && defaultValue == null)) && ($input.val() != defaultValue);
    };

    this.validate = function () {
      if (isNaN($input.val())) {
        return {
          valid: false,
          msg: "Please enter a valid number"
        };
      }

      if (args.column.validator) {
        var validationResults = args.column.validator($input.val());
        if (!validationResults.valid) {
          return validationResults;
        }
      }

      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  }

  FloatEditor.DefaultDecimalPlaces = null;
  FloatEditor.AllowEmptyValue = false;

  function DateEditor(args) {
    var $input;
    var defaultValue;
    var scope = this;
    var calendarOpen = false;

    this.init = function () {
      $input = $("<INPUT type=text class='editor-text' />");
      $input.appendTo(args.container);
      $input.focus().select();
      $input.datepicker({
        showOn: "button",
		showMonthAfterYear: true,
		dateFormat: "yy-mm-dd",
		dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",],
		dayNamesShort: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
		dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
		monthNames: ["Janvier", "F&eacute;vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
		monthNamesShort: ["Jan", "F&eacute;v", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "D&eacute;c"],
		numberOfMonths: [1,2],
		showCurrentAtPos: 1,
		firstDay: 1,
        buttonImageOnly: true,
         beforeShow: function () {
          calendarOpen = true
        },
        onClose: function () {
          calendarOpen = false
        }
      });
      $input.width($input.width() - 18);
    };

    this.destroy = function () {
      $.datepicker.dpDiv.stop(true, true);
      $input.datepicker("hide");
      $input.datepicker("destroy");
      $input.remove();
    };

    this.show = function () {
      if (calendarOpen) {
        $.datepicker.dpDiv.stop(true, true).show();
      }
    };

    this.hide = function () {
      if (calendarOpen) {
        $.datepicker.dpDiv.stop(true, true).hide();
      }
    };

    this.position = function (position) {
      if (!calendarOpen) {
        return;
      }
      $.datepicker.dpDiv
          .css("top", position.top + 30)
          .css("left", position.left);
    };

    this.focus = function () {
      $input.focus();
    };

    this.loadValue = function (item) {
      defaultValue = item[args.column.field];
      $input.val(defaultValue);
      $input[0].defaultValue = defaultValue;
      $input.select();
    };

    this.serializeValue = function () {
      return $input.val();
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return (!($input.val() == "" && defaultValue == null)) && ($input.val() != defaultValue);
    };

    this.validate = function () {
      if (args.column.validator) {
        var validationResults = args.column.validator($input.val());
        if (!validationResults.valid) {
          return validationResults;
        }
      }

      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  }

  function YesNoSelectEditor(args) {
    var $select;
    var defaultValue;
    var scope = this;
	var datalist;

    this.init = function () {
      $select = $("<SELECT tabIndex='0' class='editor-yesno'><OPTION value='yes'>Yes</OPTION><OPTION value='no'>No</OPTION></SELECT><SELECT tabIndex='1' class='editor-yesno'><OPTION value='yes'>Yes</OPTION><OPTION value='no'>No</OPTION></SELECT>");
      $select.appendTo(args.container);
      $select.focus();
    };

    this.destroy = function () {
      $select.remove();
    };

    this.focus = function () {
      $select.focus();
    };

    this.loadValue = function (item) {
      $select.val((defaultValue = item[args.column.field]) ? "yes" : "no");
      $select.select();
    };

    this.serializeValue = function () {
      return ($select.val() == "yes");
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return ($select.val() != defaultValue);
    };

    this.validate = function () {
      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  }

  function CheckboxEditor(args) {
    var $select;
    var defaultValue;
    var scope = this;

    this.init = function () {
      $select = $("<INPUT type=checkbox value='true' class='editor-checkbox' hideFocus>");
      $select.appendTo(args.container);
      $select.focus();
    };

    this.destroy = function () {
      $select.remove();
    };

    this.focus = function () {
      $select.focus();
    };

    this.loadValue = function (item) {
      defaultValue = !!item[args.column.field];
      if (defaultValue) {
        $select.prop('checked', true);
      } else {
        $select.prop('checked', false);
      }
    };

    this.preClick = function () {
        $select.prop('checked', !$select.prop('checked'));
    };

    this.serializeValue = function () {
      return $select.prop('checked');
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return (this.serializeValue() !== defaultValue);
    };

    this.validate = function () {
      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  }

  function PercentCompleteEditor(args) {
    var $input, $picker;

    this.init = function () {
      $input = $("<INPUT type=text class='editor-percentcomplete' />");
      $input.width($(args.container).innerWidth() - 25);
      $input.appendTo(args.container);

      $picker = $("<div class='editor-percentcomplete-picker' />").appendTo(args.container);
      $picker.append("<div class='editor-percentcomplete-helper'><div class='editor-percentcomplete-wrapper'><div class='editor-percentcomplete-slider' /><div class='editor-percentcomplete-buttons' /></div></div>");

      $picker.find(".editor-percentcomplete-buttons").append("<button val=0>Not started</button><br/><button val=50>In Progress</button><br/><button val=100>Complete</button>");

      $input.focus().select();

      $picker.find(".editor-percentcomplete-slider").slider({
        orientation: "vertical",
        range: "min",
        value: defaultValue,
        slide: function (event, ui) {
          $input.val(ui.value)
        }
      });

      $picker.find(".editor-percentcomplete-buttons button").on("click", function (e) {
        $input.val($(this).attr("val"));
        $picker.find(".editor-percentcomplete-slider").slider("value", $(this).attr("val"));
      })
    };

    this.destroy = function () {
      $input.remove();
      $picker.remove();
    };

    this.focus = function () {
      $input.focus();
    };

    this.loadValue = function (item) {
      $input.val(defaultValue = item[args.column.field]);
      $input.select();
    };

    this.serializeValue = function () {
      return parseInt($input.val(), 10) || 0;
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return (!($input.val() == "" && defaultValue == null)) && ((parseInt($input.val(), 10) || 0) != defaultValue);
    };

    this.validate = function () {
      if (isNaN(parseInt($input.val(), 10))) {
        return {
          valid: false,
          msg: "Please enter a valid positive number"
        };
      }

      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  }

  /*
   * An example of a "detached" editor.
   * The UI is added onto document BODY and .position(), .show() and .hide() are implemented.
   * KeyDown events are also handled to provide handling for Tab, Shift-Tab, Esc and Ctrl-Enter.
   */
  function LongTextEditor(args) {

    var defaultValue;
    var scope = this;

    this.init = function () {
      var $container = $("body");

      $wrapper = $("<DIV style='z-index:10000;position:absolute;background:white;padding:5px;border:3px solid gray; -moz-border-radius:10px; border-radius:10px;'/>")
          .appendTo($container);

      $input = $("<TEXTAREA hidefocus rows=5 style='background:white;width:250px;height:80px;border:0;outline:0'>")
          .appendTo($wrapper);

      $("<DIV style='text-align:right'><BUTTON>Save</BUTTON><BUTTON>Cancel</BUTTON></DIV>")
          .appendTo($wrapper);

      $wrapper.find("button:first").on("click", this.save);
      $wrapper.find("button:last").on("click", this.cancel);
      $input.on("keydown", this.handleKeyDown);

      scope.position(args.position);
      $input.focus().select();
    };

    this.handleKeyDown = function (e) {
      if (e.which == $.ui.keyCode.ENTER && e.ctrlKey) {
        scope.save();
      } else if (e.which == $.ui.keyCode.ESCAPE) {
        e.preventDefault();
        scope.cancel();
      } else if (e.which == $.ui.keyCode.TAB && e.shiftKey) {
        e.preventDefault();
        args.grid.navigatePrev();
      } else if (e.which == $.ui.keyCode.TAB) {
        e.preventDefault();
        args.grid.navigateNext();
      }
    };

    this.save = function () {
      args.commitChanges();
    };

    this.cancel = function () {
      $input.val(defaultValue);
      args.cancelChanges();
    };

    this.hide = function () {
      $wrapper.hide();
    };

    this.show = function () {
      $wrapper.show();
    };

    this.position = function (position) {
      $wrapper
          .css("top", position.top - 5)
          .css("left", position.left - 5)
    };

    this.destroy = function () {
      $wrapper.remove();
    };

    this.focus = function () {
      $input.focus();
    };

    this.loadValue = function (item) {
      $input.val(defaultValue = item[args.column.field]);
      $input.select();
    };

    this.serializeValue = function () {
      return $input.val();
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return (!($input.val() == "" && defaultValue == null)) && ($input.val() != defaultValue);
    };

    this.validate = function () {
      if (args.column.validator) {
        var validationResults = args.column.validator($input.val());
        if (!validationResults.valid) {
          return validationResults;
        }
      }

      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  };
  
  function ListEditor(args) {
    var $select, $wrapper;
    var defaultValue;
    var scope = this;
	var level = 1;
	var result = [];
	//var oSelects = document.querySelectorAll('select');


     // $select = $("<SELECT tabIndex='0' class='editor-yesno'><OPTION value='yes'>Yes</OPTION><OPTION value='no'>No</OPTION></SELECT><SELECT tabIndex='1' class='editor-yesno'><OPTION value='yes'>Yes</OPTION><OPTION value='no'>No</OPTION></SELECT>");
      //$select.appendTo(args.container);



    this.init = function () {
		//var $container = $("body");
		//$wrapper = $("<DIV style='z-index:10000;position:absolute;background:white;padding:5px;border:3px solid gray; -moz-border-radius:10px; border-radius:10px;'/>")
         // .appendTo($container);
		//$a=$("");
		//$a.appendTo($wrapper);
        $select="<select open id='list_array' class='editor-yesno' tabIndex='0'  >";
		for (i=0; i<args.column.list.length;i += 1) {
                    $select = $select + "<OPTION value=" + args.column.list[i]['ID'] + '>' + args.column.list[i]['TITLE'] + "</OPTION>";
                 };
		$select= $select +"</select>";
		$select= $($select);
        ($select).appendTo(args.container );
        $("#list_array").on("keydown", this.handleKeyDown);
        $("#list_array").attr('size',6);
        $("#list_array").select().focus();
        //$('#list_array option[value='+$select.val()+']').select().focus();

        //scope.position(args.position);

        //this.loadValue;
//alert('#list_array option[value='+$select.val()+']');
     //   $('#list_array option[value='+$select.val()+']').focus();
      //$wrapper.appendTo(args.container);
      //oSelects = document.querySelectorAll('select');
     /* i, nb = oSelects.length;
  // affectation de la fonction sur le onchange
  for( i = 0; i < nb; i += 1) {
    oSelects[i].onchange = function() {
        chainSelect(this);
      };

  };
  // init du 1st select
  if( nb){
    chainSelect('init');
  }*/
    };

    this.destroy = function () {
      $select.remove();
    };

    this.focus = function () {

        this.focus();
    };

    this.loadValue = function (item) {
      defaultValue = item[args.column.field];
      $select.val(defaultValue);
      $select.select();
      $('#list_array option[value='+$select.val()+']').attr('selected','selected')
        //alert('#list_array option[value='+$select.val()+']');
      //  $('#list_array option[value='+$select.val()+']').select().focus();
    };

    this.serializeValue = function () {
      return Number($select.val());
    };

    this.applyValue = function (item, state) {
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      return (!($select.val() == "" && defaultValue == null)) && ($select.val() != defaultValue);
    };
	
    //this.position = function (position) {
      //$wrapper
        //  .css("top", position.top - 5)
         // .css("left", position.left - 5)
   // };
	this.handleKeyDown = function (e) {
      if (e.which == $.ui.keyCode.ENTER) {
          e.preventDefault();
          e.stopImmediatePropagation();
          this.validate;
          this.serializeValue;
          args.grid.navigateNext();

          e.stopImmediatePropagation();
      } else if (e.which == $.ui.keyCode.ESCAPE) {
        e.preventDefault();
        scope.cancel();
          e.stopImmediatePropagation();
      } else if (e.which == $.ui.keyCode.TAB && e.shiftKey) {
        e.preventDefault();
        args.grid.navigatePrev();
        e.stopImmediatePropagation();
      } else if (e.which == $.ui.keyCode.TAB) {
        e.preventDefault();
          e.stopImmediatePropagation();
        args.grid.navigateNext();
      }  else if (e.which == $.ui.keyCode.UP) {
          e.preventDefault();
          e.stopImmediatePropagation();
          prev_selec=$select.val();
          new_value=$('#list_array option[value='+prev_selec+']').prev().val();
          if (new_value!=undefined ){          $select.val(new_value)};
      }
      else if (e.which == $.ui.keyCode.DOWN) {
          e.preventDefault();
          e.stopImmediatePropagation();
          prev_selec=$select.val();
          new_value=$('#list_array option[value='+prev_selec+']').next().val();
          if (new_value!=undefined ){          $select.val(new_value)};
      }

    };
    this.validate = function () {
      if (isNaN($select.val())) {
        return {
          valid: false,
          msg: "Please enter a valid integer"
        };
      }

      if (args.column.validator) {
        var validationResults = args.column.validator($select.val());
        if (!validationResults.valid) {
          return validationResults;
        }
      }

      return {
        valid: true,
        msg: 'cool'
      };
    };
	this.cancel = function () {
      $select.val(defaultValue);
      args.cancelChanges();
    };

      this.save = function () {
          args.commitChanges();
      };


      this.init();
  }
    function ReferenceEditor(args) {
        var $input={};
        $input[0]={sel:'', inp:'', int:''};
        var defaultValue;
        var scope = this;
        var $container = $("body");
        var $formatizer=
            {0:
                {type:'B',
                    nom:'Bon de Commande',
                    short:'BC',
                    keycode:66,
                option: {
                        type1: 'inp',
                        integer: true,
                        num_char: 6,
                        pre_str : '4500',
                        post_str: '',
                        validation: true,
                        required: true
                      }
              } ,

             1:
            {type:'P',
                nom: 'Pré-Commande Magasin Central',
                short: 'PMC',
                keycode:80,
                option:{
                    type1: 'inp',
                    type2: 'per',
                    num_char: 5,
                    integer: true,
                    validation:true,
                    required: true }

            },

            2:
                {type:'O',
                    nom: 'Ordre de Mission',
                    short: 'OM',
                    keycode:79,
                    option:{
                        type1: 'inp',
                        type2: 'per',
                        num_char: 5,
                        integer: true,
                        validation:true,
                        required: true }
                },
             3:
                 {type:'D',
                     nom: 'Devis',
                     short: 'Dev',
                     keycode:68,
                     option:{
                         type1: 'inp',
                         type2: 'per',
                       }
                 },
              4:
                {type:'A',
                    nom: 'Autre',
                    short: 'Aut',
                    keycode: 65,
                    option: {
                        type1: 'desc',
                        type2: 'inp',
                    }
              },
              5:
              {type:'M',
                  nom:'Facture Magasin Central',
                  short: 'FMC',
                  keycode: 77,
                  option:{
                type1: 'inp',
                      num_char:6,
                      integer:true,
                      validation:true,
                      required:true
                  }
              },
                6:
                    {type:'F',
                        nom:'Facture',
                        short: 'Fct',
                        keycode: 70,
                        option:{
                            type1: 'inp',
                            required:true
                        }
                    },

            };

        this.init = function () {
          //alert($formatizer[0]['type']) ;
          $wrapper = $("<DIV id='REF' style='z-index:10000; width:50%; position:absolute;background:white;padding:5px;border:3px solid gray; -moz-border-radius:10px; border-radius:10px;'/>")
                .appendTo($container);
            $wrapper.width($(args.container).innerWidth()*2);

            this.construct();
            $input[0].inp.width($(args.container).innerWidth()*1.3*0.65);


            scope.position(args.position);
            $input[0].sel.focus().select();
            $active_index=0;
        };

        this.construct= function ($type,$active_index){
          //alert('on construit');
          if ($active_index===undefined) {
              if (isNaN($active_index)) {
                  // alert($("#REF SELECT").length);
                if (isNaN($("#REF SELECT").length)||($("#REF SELECT").length===0)){
                    $active_index=0;
                }else{
                  $active_index = $("#REF SELECT").length - 1;
                };
              }
          }
          if ($input[$active_index]===undefined) {
              $input[$active_index] = {};
          }
          // on enlève les autres $input.
          $.each($input[$active_index],function (value) {
            if (($input[$active_index][value]!=undefined)&&($input[$active_index][value]!=''))   {
              //alert(value);
                $input[$active_index][value].remove();
            }
          });
          // on réalise le select
            a="<SELECT id='sel_"+$active_index+"'tabindex="+$active_index+" style= 'width:30%;height:20px;border:1px  '>";
          $.each($formatizer, function(value){
            a=a+"<OPTION value='"+$formatizer[value]['type']+"' >"+$formatizer[value]['short']+"</OPTION>";
          })
            a=a+"</SELECT>";
          $input[$active_index].sel=$(a).appendTo($wrapper);
         // on ajoute les input.
            //alert("avant la boucle : "+$type);
            if ($type!=undefined){
              esc=false;
              $.each($formatizer, function(value) {
                //alert("pendant la boucle value:"+value+ "la valeur tester est :"+$formatizer[value]['type']+"la valeur du type est :"+$type);
                  if ((esc === false) && ($formatizer[value]['type'] === $type)) {
                      esc = true;
                      n = true;
                      i = 1;
                      alert('format attention : '+$formatizer[value]['option']['type' + i]);
                      alert('lenght '+$formatizer[value]['option'].length);
                      while ((n = true) && (i < 4)) {
                          if ($formatizer[value]['option']['type' + i] === undefined) {
                              n = false;
                          }
                          else if($formatizer[value]['option']['type' + i] === 'inp')
                          {
                              $input[$active_index].int = $('<SPAN id="int_' + $active_index + '"></SPAN>').appendTo($wrapper);
                              $input[$active_index].inp = $('<INPUT id="inp_' + $active_index +'"></INPUT>').appendTo($wrapper);
                              $input[$active_index].inp.width($(args.container).innerWidth()*1.3*0.65);
                              if($formatizer[value]['option']['pre_str']!=undefined) {
                                  $input[$active_index].int.text($formatizer[value]['option']['pre_str']);
                              }


                              temp="inp_" + $active_index;

                          }
                          else if($formatizer[value]['option']['type' + i] === 'desc')
                          {
                              $input[$active_index].int = $('<SPAN id="int_' + $active_index + '"></SPAN>').appendTo($wrapper);
                              $input[$active_index].desc = $('<INPUT id="desc_' + $active_index + '" ></INPUT>').appendTo($wrapper);
                              $input[$active_index].desc.width($(args.container).innerWidth()*1.3*0.65);

                              temp="desc_" + $active_index;
                          }
                          else if($formatizer[value]['option']['type' + i] === 'per')
                          {
                              $input[$active_index].int = $('<SPAN id="int_' + $active_index + '"></SPAN>').appendTo($wrapper);
                              $input[$active_index].per = $('<INPUT id="per_' + $active_index + '" ></INPUT>').appendTo($wrapper);
                              $input[$active_index].per.width($(args.container).innerWidth()*1.3*0.65);

                              temp="per_" + $active_index;
                          }
                          i = i + 1;
                          if ((foc===undefined)&&(temp!=undefined)){
                            foc=temp;
                          }
                      }
                  }
              })
            }else{
                $input[$active_index].int = $('<SPAN id="int_' + $active_index + '"></SPAN>').appendTo($wrapper);
                $input[$active_index].inp = $('<INPUT id="inp_' + $active_index + '"></INPUT>').appendTo($wrapper);
                foc="sel_"+$active_index;
            }

            //trigger event
            $("#REF > SELECT").on("keydown", this.SelhandleKeyDown);
            $("#REF > INPUT").on("keydown", this.InphandleKeyDown);

            //focus
            if (foc!=undefined) {
                $("#" + foc).focus().select();
            }else
            {
                $("#sel_" + $("#REF > SELECT").length-1).focus().select();
            }
        }




        this.destroy = function () {
            $.each($input,function (value) {
              $input[value].inp.remove()
            });
            $.each($input,function (value) {
                $input[value].sel.remove()
            });
            $wrapper.remove();
        };

        this.SelhandleKeyDown =function (e){
            $active_index=parseInt(e.target.id.substr(4,e.target.id.length));
            if (isNaN($active_index )){
                $active_index = $("#REF SELECT").length-1;
                }
            //alert("l index actif est "+$active_index);

            if (e.which === 79) {
              //alert('O enclenché');
                $("sel_0").val('O');
                $("#ref_1").attr('disabled', false);
                e.preventDefault();
                $input[0].focus().select();
               // e.preventDefault();
            }
            else if (e.which === 66){
                $input[$active_index]['sel'].val('B');
                $("#int_"+$active_index).text('4500');
               // alert($("#inp_"+$active_index).val());
                if (($("#inp_"+$active_index).val() != undefined) && ($("#inp_"+$active_index).val !='')){
                    //alert($("#inp_"+$active_index).val().substring(0,4) );

                    if (($("#inp_"+$active_index).val().substring(0,4)=='4500')&&($("#inp_"+$active_index).val().length===10)){
                       // alert($("#inp_"+$active_index).val()+ 'deuxième boucle'  );

                        $("#inp_"+$active_index).val($("#inp_"+$active_index).val().substring(4,10));
                    }
                }
                $("#inp_"+$active_index).attr('disabled', false);
                e.preventDefault();
                $("#inp_"+$active_index).focus().select();
            }
            else if (e.which === $.ui.keyCode.ESCAPE){
                //alert($("#inp_"+$active_index).val());
              if((($("#inp_"+$active_index).val() === undefined) || ($("#inp_"+$active_index).val() ===''))&& ($active_index>0)) {
                //  alert();
                  $input[$active_index].inp.remove();
                  $input[$active_index].sel.remove();

              } else {
                  e.preventDefault();
                  scope.serializeValue();
                  e.stopImmediatePropagation();
                  scope.save();
                  scope.destroy();
              }
            }




        };

        this.InphandleKeyDown =function (e) {
            $active_index=parseInt(e.target.id.substr(4,e.target.id.length));
            if (isNaN($active_index )){
                $active_index = $("#REF SELECT").length-1;
            }
            if (e.which === $.ui.keyCode.ESCAPE) {
                e.preventDefault();
                scope.cancel();
                e.stopImmediatePropagation();
            }
            else if (e.which === $.ui.keyCode.ENTER) {
                e.preventDefault();
                e.stopImmediatePropagation();
               // alert('entre');
                if ($("#inp_" + $active_index) === undefined || $("#inp_" + $active_index) === '') {
                 //   alert('cas ou c est vide');
                }
                else {
                   // alert('je fais ce que je veux');
                    scope.construct('B',$active_index+1) ;
                }
            }
        };
            this.focus = function () {
            $input[$active_index]['sel'].focus();

        };

        this.loadValue = function (item) {
            $defaultValue = item[args.column.field];
            if ($.isNumeric($defaultValue)) {
                $input[0].sel.val('B');
                $("#int_" + $active_index).text('4500');
                $input[0].inp.val($defaultValue.toString().substring(4, 10));
            } else {
                $.each($defaultValue, function (value) {
                 // alert('le type est : '+$defaultValue[value]['sel']);
                    scope.construct($defaultValue[value]['sel'], value);
                    $.each($defaultValue[value], function (value2) {
                      if ($input[value][value2]!=undefined){
                          $input[value][value2].val($defaultValue[value][value2]);
                      }
                        }
                    )
                })
            }
        };


        this.serializeValue = function () {
          var $result = {};
            $result[0]={sel:'', inp:'', int:''};

            $.each($input, function(value){ $.each($input[value], function(value2){
              if ($result[value]==undefined){
                  $result[value]={sel:'', inp:'', int:''};
              }
              $result[value][value2]=$input[value][value2].val();
            })})
        return $result;
        };



        this.applyValue = function (item, state) {
            item[args.column.field] = state;
        };

        this.new_reference = function(){
         // alert('on passe à une nouvelle referece');
            $active_index=$active_index+1;
            //scope.applyValue();
            $input[$active_index]={sel:'', inp:'', int:''};

            $('<br>').appendTo($wrapper);
            $input[$active_index].sel = $("<SELECT id='sel_'"+$active_index+" tabindex='0' stype='width:30%;height:80px;border:0;outline:0'><OPTION value='B'>BC</OPTION><OPTION value='M'>MC</OPTION><OPTION value='O'>OM</OPTION><OPTION value='D'>De</OPTION><OPTION value='A'>Au</OPTION><OPTION value='F'>Fct</OPTION></SELECT>")
                .appendTo($wrapper);
            $input[$active_index].sel.width($(args.container).innerWidth()*1.3*0.25);

            $input[$active_index].int=$('<SPAN id="int_'+$active_index+'"></SPAN>').appendTo($wrapper);

            $input[$active_index].inp= $("<INPUT disabled id='inp_"+$active_index+"' ></INPUT>")
                .appendTo($wrapper);
            $input[$active_index].inp.width($(args.container).innerWidth()*1.3*0.65);


            $input[$active_index].sel.on("keydown", this.SelhandleKeyDown);
            $input[$active_index].inp.on("keydown", this.InphandleKeyDown);

            scope.position(args.position);
            $input[$active_index].sel.focus().select();

        };

        this.isValueChanged = function () {
            //return (!($input[$active_index]['inp'].val() == "" && $defaultValue == null)) && ($input[$active_index]['inp'].val() != $defaultValue);
            return true;
        };
        this.position = function (position) {
            $wrapper
                .css("top", position.top)
                .css("left", position.left)
        };
        this.validate = function () {
var escp=false;
          $.each($input, function (value1){
            value2='inp';
               // alert($input[value1][value2]+' on en est là : value 1='+value1+' et value2= '+value2);
                if (isNaN($input[value1][value2].val())&& (value2==='inp')) {
                  //  alert('non valide');
                    escp=true;
                }

                }
            )


            if (escp===false) {
                return {
                    valid: true,
                    msg: null
                }
            }
                else {
              return {
                        valid: false,
                        msg: "mauvais paramètre"

                    }
                }

        };
        this.cancel = function () {
            $input[$active_index]['inp'].val(defaultValue);
            if ($active_index===0) {
                args.cancelChanges();
            }else{
              $active_index=$active_index-1;
            }
        };
        this.save=function (){

            args.commitChanges();
        }
        this.init();
    }
})(jQuery);
