<?php
/**
 * Created by PhpStorm.
 * User: DELANNOY
 * Date: 07/01/2018
 * Time: 18:18
 */
use Medoo\Medoo;
require('Medoo.php');

class DB_action
{
    // attribut de la classe
    private static $instance=null; //instance d'accès à la base de données
    private $database; //la variable de connection à la base de données.
    public $response_db; //la variable de réponse à la connexion demandée
    public $msg; //message renvoyé qui accompagne la requête
    public $alert; //message d'alerte accompagnant la requête

    // Méthode
    private function __construct(){
       $this-> database = new Medoo([
            // required
            'database_type' => 'mysql',
            'database_name' => 'compte_urafpa',
            'server' => '127.0.0.1',
            'username' => 'root',
            'password' => '',

            // [optional]
            'charset' => 'utf8',
            'port' => 3306,]);
    }

    public static function get_instance(){
        {
            if (! self::$instance)
                self::$instance = new self();
            return self::$instance;
        }
    }

    public function get_db_select($table    , $columns = null, $where = null){
        self::get_instance();
        return $this->database -> select($table, $columns, $where);
    }

    /**
     * @param $table
     * @param null $columns
     * @param null $where
     */
    public function get_db_update($table, $columns = null, $where = null){
        self::get_instance();
        $this->database-> update($table, $columns, $where);
       $alert["error"]=( $this->database->error() );
       //print_r($alert);
       //echo '<br>';
        return $alert;
    }
    public function get_db_add($table, $data)
    {
        self::get_instance();
        $this->database->insert($table, $data);
        $alert["error"] = ($this->database->error());
        //print_r($alert);
        //echo '<br>';
        return $alert  ;
    }



}