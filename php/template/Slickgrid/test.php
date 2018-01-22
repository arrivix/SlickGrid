<?php
require_once ('..\..\config\db_action.php');

$db = DB_action::get_instance();
$list_array_etat = $db -> get_db_select('etat', ['ID', 'Nom(TITLE)']);
$list_array_etat= json_encode($list_array_etat, JSON_NUMERIC_CHECK);

print('<DIV id="demo"></DIV><script type="text/javascript" charset="utf-8">');
print ('var $list_array_etat = ');
 print ($list_array_etat);
 print( '   
 ;
 document.getElementById("demo").innerHTML = $list_array_etat["ID"];
</script>');
/**
 * Created by PhpStorm.
 * User: DELANNOY
 * Date: 20/01/2018
 * Time: 15:29
 */