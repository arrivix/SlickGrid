<?php
/**
 * Created by PhpStorm.
 * User: DELANNOY
 * Date: 13/01/2018
 * Time: 14:31
 */

class security

{
    // Données entrantes
    public static function bdd($string)
    {
        // On regarde si le type de string est un nombre entier (int)
        if(ctype_digit($string))
        {
            $string = intval($string);
        }
        // Pour tous les autres types
        else
        {
            $string = mysql_real_escape_string($string);
            $string = addcslashes($string, '%_');
        }

        return $string;

    }
    // Données sortantes
    public static function html($string)
    {
        return htmlentities($string);
    }
}
?>
