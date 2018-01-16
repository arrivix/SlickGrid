<?php
/**
 * Created by PhpStorm.
 * User: DELANNOY
 * Date: 10/01/2018
 * Time: 22:29
 *
 * Nouvelles Tables : slickgrid_update
 */

namespace slickgrid;
include_once('../config/db_action.php');

class slickgrid
{
    public $id;
    public $result;

    /**
     * slickgrid constructor.
     */
    public function __construct()
    {
        $this->db = \DB_action::get_instance();
    }

    /**
     * @param $last_known_ID_update
     * @param $updated_table
     * @return array
     */
    function get_lastupdate($last_known_ID_update, $update_table)
    {

        $result = $this->db->get_db_select('slickgrid_update', ['ID', 'Nom', 'ID_mod'], ['ID[>]' => $last_known_ID_update, 'Nom[=]' => $update_table, 'ORDER' => 'ID']);
        return $result;
    }

    /**
     * @param $last_known_ID_update
     * @param $updated_table
     * @return array
     */
    function get_lastadd($last_known_ID_add, $add_table)
    {
        $result = $this->db->get_db_select('slickgrid_add', ['ID', 'Nom', 'ID_mod'], ['ID[>]' => $last_known_ID_add, 'Nom[=]' => $add_table, 'ORDER' => 'ID']);
        return( $result);
    }

    /**
     * @param $last_known_ID_update
     * @param $updated_table
     * @return array
     */
    function get_lastdelete($last_known_ID_delete, $del_table)
    {

        $result = $this->db->get_db_select('slickgrid_delete', ['ID', 'Nom', 'ID_mod'], ['ID[>]' => $last_known_ID_delete, 'Nom[=]' => $del_table, 'ORDER' => 'ID']);
        return $result;
    }

    function get_value($table, $column, $ID_ligne)
    {
        $result = $this->db->get_db_select($table, $column, ['ID[=]' => $ID_ligne, 'ORDER' => 'ID']);
        return $result;
    }

    function get_modified_rows($last_known_ID_update, $last_known_ID_add, $last_known_ID_delete, $table, $colonne)
    {
        $result_update = $this->get_lastupdate($last_known_ID_update, $table);
        $result_add = $this->get_lastadd($last_known_ID_add, $table);
        $result_delete = $this->get_lastdelete($last_known_ID_delete, $table);
        $result_changed_row = array_merge($result_update, $result_add);
        $ID_mod = (array_column($result_changed_row, 'ID_mod'));
        $result_changed_row = $this->get_value($table, $colonne, $ID_mod);
        $send_json = array();
        if (count($result_update) <> 0) {
            $send_json["last_update_id"] = $result_update[count($result_update) - 1]['ID'];
        } else {
            $send_json["last_update_id"] = $last_known_ID_update;
        }
        if (count($result_add) <> 0) {
            $send_json["last_add_id"] = $result_add[count($result_add) - 1]['ID'];
        } else {
            $send_json["last_add_id"] = $last_known_ID_add;
        }
        if (count($result_add) <> 0) {
            $send_json["last_delete_id"] = $result_delete[count($result_delete) - 1]['ID'];
        } else {
            $send_json["last_delete_id"] = $last_known_ID_delete;
        }
        $send_json["modified_row"] = $result_changed_row;
        $send_json = json_encode($send_json);
        return $send_json;
    }

    function modify_row($ligne, $table, $id_user)
    {
        $i=0;
        foreach($ligne as $row_ligne) {

            $st = $this -> db->get_db_update($table, [$row_ligne['column'] => $row_ligne['value'], 'Modification_user' => $id_user], ['ID[=]' => $row_ligne['ID']]);
            $result [$i] = $st["error"];
            $i=+1;
        }
        return $result;
    }
    function add_row($ligne, $table, $id_user)
    {
        $i=0;
        foreach($ligne as $row_ligne) {
            $row_ligne ['Create_user'] = $id_user;
            $st = $this -> db->get_db_add($table, $row_ligne);
            $result [$i] = $st["error"];
            $i=+1;
        }
        return $result;
    }
}