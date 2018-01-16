<?php
/**
 * Created by PhpStorm.
 * User: DELANNOY
 * Date: 13/01/2018
 * Time: 13:50
 */

require_once('slickgrid.php');
require_once('security.php');


//Obtenir les lignes modifiées
/*$table = "ligne_compte";
$colonne = ['ID(ID_ligne)', 'Fournisseur', 'Designation', 'Num_BC', 'Montant_HT', 'ID_ligne(Ligne)', 'Date_imputation(Date_imput)', 'Etat', 'Create_user(User)'];
$result=new \slickgrid\slickgrid();
$result -> get_modified_rows(0,0,0, $table, $colonne);*/

//modifier une ligne
/*$table = "ligne_compte";
$ligne[0] = ["ID" => 24, "column" => "Fournisseur", "value" => "DELL ca va marcher 345"];
$ligne[1] = ["ID" => 25, "column" => "Fournisseur", "value" => "DELL ca va marcher 4653"];
$result=new \slickgrid\slickgrid();
$result = $result -> modify_row($ligne, $table,1);
print_r($result);
*/

//ajouter une ligne
$table = "ligne_compte";
$ligne[0] = [   "Fournisseur" => "DELL ca va marcher 345",
                "ID_ligne" => 10 ,
                "Montant_HT" => 2450.34,
                "ID_annee" => 3,
                "Date_imputation" => '2018-01-01',
                "Designation" => 'Ce produit est vraiment génial',
                "Num_BC" => 4500312456,
                "Etat" => 3
            ];
$ligne[1] = [   "Fournisseur" => "DELL ca va marcher 345",
    "ID_ligne" => 10 ,
    "Montant_HT" => 23150.34,
    "ID_annee" => 3,
    "Date_imputation" => '2018-03-01',
    "Designation" => 'Ce produit est trop nul',
    "Num_BC" => 4500312436,
    "Etat" => 3
];
$result=new \slickgrid\slickgrid();
$result = $result -> add_row($ligne, $table,1);
print_r($result);






