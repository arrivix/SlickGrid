//Script Plugin
var tbl_region_2016 = [
  {"reg_2016_code": "NR_01", "reg_2016_nom": "Guadeloupe"}, 
  {"reg_2016_code": "NR_02", "reg_2016_nom": "Martinique"}, 
  {"reg_2016_code": "NR_03", "reg_2016_nom": "Guyane"}, 
  {"reg_2016_code": "NR_04", "reg_2016_nom": "La Réunion"}, 
  {"reg_2016_code": "NR_06", "reg_2016_nom": "Mayotte"}, 
  {"reg_2016_code": "NR_11", "reg_2016_nom": "Ile-de-France"}, 
  {"reg_2016_code": "NR_24", "reg_2016_nom": "Centre-Val de Loire"}, 
  {"reg_2016_code": "NR_27", "reg_2016_nom": "Bourgogne-Franche-Comté"}, 
  {"reg_2016_code": "NR_28", "reg_2016_nom": "Normandie"}, 
  {"reg_2016_code": "NR_32", "reg_2016_nom": "Hauts-de-France"}, 
  {"reg_2016_code": "NR_44", "reg_2016_nom": "Grand Est"}, 
  {"reg_2016_code": "NR_52", "reg_2016_nom": "Pays de la Loire"}, 
  {"reg_2016_code": "NR_53", "reg_2016_nom": "Bretagne"}, 
  {"reg_2016_code": "NR_75", "reg_2016_nom": "Aquitaine-Limousin-Poitou-Charentes"}, 
  {"reg_2016_code": "NR_76", "reg_2016_nom": "Languedoc-Roussillon-Midi-Pyrénées"}, 
  {"reg_2016_code": "NR_84", "reg_2016_nom": "Auvergne-Rhône-Alpes"}, 
  {"reg_2016_code": "NR_93", "reg_2016_nom": "Provence-Alpes-Côte d'Azur"}, 
  {"reg_2016_code": "NR_94", "reg_2016_nom": "Corse"}
];
var tbl_old_region =[
  {"reg_code": "R_42", "reg_nom": "Alsace", "reg_2016_code": "NR_44"}, 
  {"reg_code": "R_21", "reg_nom": "Champagne-Ardenne", "reg_2016_code": "NR_44"}, 
  {"reg_code": "R_41", "reg_nom": "Lorraine", "reg_2016_code": "NR_44"}, 
  {"reg_code": "R_72", "reg_nom": "Aquitaine", "reg_2016_code": "NR_75"}, 
  {"reg_code": "R_74", "reg_nom": "Limousin", "reg_2016_code": "NR_75"}, 
  {"reg_code": "R_54", "reg_nom": "Poitou-Charentes", "reg_2016_code": "NR_75"}, 
  {"reg_code": "R_83", "reg_nom": "Auvergne", "reg_2016_code": "NR_84"}, 
  {"reg_code": "R_82", "reg_nom": "Rhône-Alpes", "reg_2016_code": "NR_84"}, 
  {"reg_code": "R_26", "reg_nom": "Bourgogne", "reg_2016_code": "NR_27"}, 
  {"reg_code": "R_43", "reg_nom": "Franche-Comté", "reg_2016_code": "NR_27"}, 
  {"reg_code": "R_53", "reg_nom": "Bretagne", "reg_2016_code": "NR_53"}, 
  {"reg_code": "R_24", "reg_nom": "Centre", "reg_2016_code": "NR_24"}, 
  {"reg_code": "R_94", "reg_nom": "Corse", "reg_2016_code": "NR_94"}, 
  {"reg_code": "R_11", "reg_nom": "Ile-de-France", "reg_2016_code": "NR_11"}, 
  {"reg_code": "R_91", "reg_nom": "Languedoc-Roussillon", "reg_2016_code": "NR_76"}, 
  {"reg_code": "R_73", "reg_nom": "Midi-Pyrénées", "reg_2016_code": "NR_76"}, 
  {"reg_code": "R_31", "reg_nom": "Nord-Pas-de-Calais", "reg_2016_code": "NR_32"}, 
  {"reg_code": "R_22", "reg_nom": "Picardie", "reg_2016_code": "NR_32"}, 
  {"reg_code": "R_25", "reg_nom": "Basse-Normandie", "reg_2016_code": "NR_28"}, 
  {"reg_code": "R_23", "reg_nom": "Haute-Normandie", "reg_2016_code": "NR_28"}, 
  {"reg_code": "R_52", "reg_nom": "Pays de la Loire", "reg_2016_code": "NR_52"}, 
  {"reg_code": "R_93", "reg_nom": "Provence-Alpes-Côte d'Azur ", "reg_2016_code": "NR_93"}, 
  {"reg_code": "R_01", "reg_nom": "Guadeloupe", "reg_2016_code": "NR_01"}, 
  {"reg_code": "R_02", "reg_nom": "Martinique", "reg_2016_code": "NR_02"}, 
  {"reg_code": "R_03", "reg_nom": "Guyane", "reg_2016_code": "NR_03"}, 
  {"reg_code": "R_04", "reg_nom": "La Réunion", "reg_2016_code": "NR_04"}, 
  {"reg_code": "R_06", "reg_nom": "Mayotte", "reg_2016_code": "NR_06"}
];
  // la suite des données
var tbl_departement = [
  {"dep_code": "D_67", "reg_code": "R_42", "dep_nom": "Bas-Rhin", "dep_prefecture": "Strasbourg"}, 
  {"dep_code": "D_68", "reg_code": "R_42", "dep_nom": "Haut-Rhin", "dep_prefecture": "Colmar"}, 
  {"dep_code": "D_24", "reg_code": "R_72", "dep_nom": "Dordogne", "dep_prefecture": "Périgueux"}, 
  {"dep_code": "D_33", "reg_code": "R_72", "dep_nom": "Gironde", "dep_prefecture": "Bordeaux"}, 
  {"dep_code": "D_40", "reg_code": "R_72", "dep_nom": "Landes", "dep_prefecture": "Mont-de-Marsan"}, 
  {"dep_code": "D_47", "reg_code": "R_72", "dep_nom": "Lot-et-Garonne", "dep_prefecture": "Agen"}, 
  {"dep_code": "D_64", "reg_code": "R_72", "dep_nom": "Pyrénées Atlantiques", "dep_prefecture": "Pau"}, 
  {"dep_code": "D_03", "reg_code": "R_83", "dep_nom": "Allier", "dep_prefecture": "Moulins"}, 
  {"dep_code": "D_15", "reg_code": "R_83", "dep_nom": "Cantal", "dep_prefecture": "Aurillac"}, 
  {"dep_code": "D_43", "reg_code": "R_83", "dep_nom": "Haute Loire", "dep_prefecture": "Le Puy-en-Velay"}, 
  {"dep_code": "D_63", "reg_code": "R_83", "dep_nom": "Puy-de-Dôme", "dep_prefecture": "Clermont-Ferrand"}, 
  {"dep_code": "D_14", "reg_code": "R_25", "dep_nom": "Calvados", "dep_prefecture": "Caen"}, 
  {"dep_code": "D_50", "reg_code": "R_25", "dep_nom": "Manche", "dep_prefecture": "Saint-Lô"}, 
  {"dep_code": "D_61", "reg_code": "R_25", "dep_nom": "Orne", "dep_prefecture": "Alençon"}, 
  {"dep_code": "D_21", "reg_code": "R_26", "dep_nom": "Côte-d'Or", "dep_prefecture": "Dijon"}, 
  {"dep_code": "D_58", "reg_code": "R_26", "dep_nom": "Nièvre", "dep_prefecture": "Nevers"}, 
  {"dep_code": "D_71", "reg_code": "R_26", "dep_nom": "Saône-et-Loire", "dep_prefecture": "Mâcon"}, 
  {"dep_code": "D_89", "reg_code": "R_26", "dep_nom": "Yonne", "dep_prefecture": "Auxerre"}, 
  {"dep_code": "D_22", "reg_code": "R_53", "dep_nom": "Côtes d'Armor", "dep_prefecture": "Saint-Brieuc"}, 
  {"dep_code": "D_29", "reg_code": "R_53", "dep_nom": "Finistère", "dep_prefecture": "Quimper"}, 
  {"dep_code": "D_35", "reg_code": "R_53", "dep_nom": "Ille-et-Vilaine", "dep_prefecture": "Rennes"}, 
  {"dep_code": "D_56", "reg_code": "R_53", "dep_nom": "Morbihan", "dep_prefecture": "Vannes"}, 
  {"dep_code": "D_18", "reg_code": "R_24", "dep_nom": "Cher", "dep_prefecture": "Bourges"}, 
  {"dep_code": "D_28", "reg_code": "R_24", "dep_nom": "Eure-et-Loir", "dep_prefecture": "Chartres"}, 
  {"dep_code": "D_36", "reg_code": "R_24", "dep_nom": "Indre", "dep_prefecture": "Châteauroux"}, 
  {"dep_code": "D_37", "reg_code": "R_24", "dep_nom": "Indre-et-Loire", "dep_prefecture": "Tours"}, 
  {"dep_code": "D_41", "reg_code": "R_24", "dep_nom": "Loir-et-Cher", "dep_prefecture": "Blois"}, 
  {"dep_code": "D_45", "reg_code": "R_24", "dep_nom": "Loiret", "dep_prefecture": "Orléans"}, 
  {"dep_code": "D_08", "reg_code": "R_21", "dep_nom": "Ardennes", "dep_prefecture": "Charleville-Mézières"}, 
  {"dep_code": "D_10", "reg_code": "R_21", "dep_nom": "Aube", "dep_prefecture": "Troyes"}, 
  {"dep_code": "D_51", "reg_code": "R_21", "dep_nom": "Marne", "dep_prefecture": "Châlons-en-Champagne"}, 
  {"dep_code": "D_52", "reg_code": "R_21", "dep_nom": "Haute Marne", "dep_prefecture": "Chaumont"}, 
  {"dep_code": "D_2A", "reg_code": "R_94", "dep_nom": "Corse-du-Sud", "dep_prefecture": "Ajaccio"}, 
  {"dep_code": "D_2B", "reg_code": "R_94", "dep_nom": "Haute Corse", "dep_prefecture": "Bastia"}, 
  {"dep_code": "D_25", "reg_code": "R_43", "dep_nom": "Doubs", "dep_prefecture": "Besançon"}, 
  {"dep_code": "D_39", "reg_code": "R_43", "dep_nom": "Jura", "dep_prefecture": "Lons-le-Saunier"}, 
  {"dep_code": "D_70", "reg_code": "R_43", "dep_nom": "Haute Saône", "dep_prefecture": "Vesoul"}, 
  {"dep_code": "D_90", "reg_code": "R_43", "dep_nom": "Territoire de Belfort", "dep_prefecture": "Belfort"}, 
  {"dep_code": "D_27", "reg_code": "R_23", "dep_nom": "Eure", "dep_prefecture": "Évreux"}, 
  {"dep_code": "D_76", "reg_code": "R_23", "dep_nom": "Seine Maritime", "dep_prefecture": "Rouen"}, 
  {"dep_code": "D_75", "reg_code": "R_11", "dep_nom": "Paris", "dep_prefecture": "Paris"}, 
  {"dep_code": "D_77", "reg_code": "R_11", "dep_nom": "Seine-et-Marne", "dep_prefecture": "Melun"}, 
  {"dep_code": "D_78", "reg_code": "R_11", "dep_nom": "Yvelines", "dep_prefecture": "Versailles"}, 
  {"dep_code": "D_91", "reg_code": "R_11", "dep_nom": "Essonne", "dep_prefecture": "Évry"}, 
  {"dep_code": "D_92", "reg_code": "R_11", "dep_nom": "Hauts-de-Seine", "dep_prefecture": "Nanterre"}, 
  {"dep_code": "D_93", "reg_code": "R_11", "dep_nom": "Seine-St-Denis", "dep_prefecture": "Bobigny"}, 
  {"dep_code": "D_94", "reg_code": "R_11", "dep_nom": "Val-de-Marne", "dep_prefecture": "Créteil"}, 
  {"dep_code": "D_95", "reg_code": "R_11", "dep_nom": "Val-D'Oise", "dep_prefecture": "Cergy"}, 
  {"dep_code": "D_11", "reg_code": "R_91", "dep_nom": "Aude", "dep_prefecture": "Carcassonne"}, 
  {"dep_code": "D_30", "reg_code": "R_91", "dep_nom": "Gard", "dep_prefecture": "Nîmes"}, 
  {"dep_code": "D_34", "reg_code": "R_91", "dep_nom": "Hérault", "dep_prefecture": "Montpellier"}, 
  {"dep_code": "D_48", "reg_code": "R_91", "dep_nom": "Lozère", "dep_prefecture": "Mende"}, 
  {"dep_code": "D_66", "reg_code": "R_91", "dep_nom": "Pyrénées Orientales", "dep_prefecture": "Perpignan"}, 
  {"dep_code": "D_19", "reg_code": "R_74", "dep_nom": "Corrèze", "dep_prefecture": "Tulle"}, 
  {"dep_code": "D_23", "reg_code": "R_74", "dep_nom": "Creuse", "dep_prefecture": "Guéret"}, 
  {"dep_code": "D_87", "reg_code": "R_74", "dep_nom": "Haute Vienne", "dep_prefecture": "Limoges"}, 
  {"dep_code": "D_54", "reg_code": "R_41", "dep_nom": "Meurthe-et-Moselle", "dep_prefecture": "Nancy"}, 
  {"dep_code": "D_55", "reg_code": "R_41", "dep_nom": "Meuse", "dep_prefecture": "Bar-le-Duc"}, 
  {"dep_code": "D_57", "reg_code": "R_41", "dep_nom": "Moselle", "dep_prefecture": "Metz"}, 
  {"dep_code": "D_88", "reg_code": "R_41", "dep_nom": "Vosges", "dep_prefecture": "Épinal"}, 
  {"dep_code": "D_09", "reg_code": "R_73", "dep_nom": "Ariège", "dep_prefecture": "Foix"}, 
  {"dep_code": "D_12", "reg_code": "R_73", "dep_nom": "Aveyron", "dep_prefecture": "Rodez"}, 
  {"dep_code": "D_31", "reg_code": "R_73", "dep_nom": "Haute Garonne", "dep_prefecture": "Toulouse"}, 
  {"dep_code": "D_32", "reg_code": "R_73", "dep_nom": "Gers", "dep_prefecture": "Auch"}, 
  {"dep_code": "D_46", "reg_code": "R_73", "dep_nom": "Lot", "dep_prefecture": "Cahors"}, 
  {"dep_code": "D_65", "reg_code": "R_73", "dep_nom": "Hautes Pyrénées", "dep_prefecture": "Tarbes"}, 
  {"dep_code": "D_81", "reg_code": "R_73", "dep_nom": "Tarn", "dep_prefecture": "Albi"}, 
  {"dep_code": "D_82", "reg_code": "R_73", "dep_nom": "Tarn-et-Garonne", "dep_prefecture": "Montauban"}, 
  {"dep_code": "D_59", "reg_code": "R_31", "dep_nom": "Nord", "dep_prefecture": "Lille"}, 
  {"dep_code": "D_62", "reg_code": "R_31", "dep_nom": "Pas-de-Calais", "dep_prefecture": "Arras"}, 
  {"dep_code": "D_44", "reg_code": "R_52", "dep_nom": "Loire Atlantique", "dep_prefecture": "Nantes"}, 
  {"dep_code": "D_49", "reg_code": "R_52", "dep_nom": "Maine-et-Loire", "dep_prefecture": "Angers"}, 
  {"dep_code": "D_53", "reg_code": "R_52", "dep_nom": "Mayenne", "dep_prefecture": "Laval"}, 
  {"dep_code": "D_72", "reg_code": "R_52", "dep_nom": "Sarthe", "dep_prefecture": "Le Mans"}, 
  {"dep_code": "D_85", "reg_code": "R_52", "dep_nom": "Vendée", "dep_prefecture": "La Roche-sur-Yon"}, 
  {"dep_code": "D_02", "reg_code": "R_22", "dep_nom": "Aisne", "dep_prefecture": "Laon"}, 
  {"dep_code": "D_60", "reg_code": "R_22", "dep_nom": "Oise", "dep_prefecture": "Beauvais"}, 
  {"dep_code": "D_80", "reg_code": "R_22", "dep_nom": "Somme", "dep_prefecture": "Amiens"}, 
  {"dep_code": "D_16", "reg_code": "R_54", "dep_nom": "Charente", "dep_prefecture": "Angoulême"}, 
  {"dep_code": "D_17", "reg_code": "R_54", "dep_nom": "Charente-Maritime", "dep_prefecture": "La Rochelle"}, 
  {"dep_code": "D_79", "reg_code": "R_54", "dep_nom": "Deux-Sèvres", "dep_prefecture": "Niort"}, 
  {"dep_code": "D_86", "reg_code": "R_54", "dep_nom": "Vienne", "dep_prefecture": "Poitiers"}, 
  {"dep_code": "D_04", "reg_code": "R_93", "dep_nom": "Alpes de Haute Provence", "dep_prefecture": "Digne-les-Bains"}, 
  {"dep_code": "D_05", "reg_code": "R_93", "dep_nom": "Hautes-Alpes", "dep_prefecture": "Gap"}, 
  {"dep_code": "D_06", "reg_code": "R_93", "dep_nom": "Alpes Maritimes", "dep_prefecture": "Nice"}, 
  {"dep_code": "D_13", "reg_code": "R_93", "dep_nom": "Bouches-du-Rhône", "dep_prefecture": "Marseille"}, 
  {"dep_code": "D_83", "reg_code": "R_93", "dep_nom": "Var", "dep_prefecture": "Toulon"}, 
  {"dep_code": "D_84", "reg_code": "R_93", "dep_nom": "Vaucluse", "dep_prefecture": "Avignon"}, 
  {"dep_code": "D_01", "reg_code": "R_82", "dep_nom": "Ain", "dep_prefecture": "Bourg-en-Bresse"}, 
  {"dep_code": "D_07", "reg_code": "R_82", "dep_nom": "Ardèche", "dep_prefecture": "Privas"}, 
  {"dep_code": "D_26", "reg_code": "R_82", "dep_nom": "Drôme", "dep_prefecture": "Valence"}, 
  {"dep_code": "D_38", "reg_code": "R_82", "dep_nom": "Isère", "dep_prefecture": "Grenoble"}, 
  {"dep_code": "D_42", "reg_code": "R_82", "dep_nom": "Loire", "dep_prefecture": "Saint-Étienne"}, 
  {"dep_code": "D_69", "reg_code": "R_82", "dep_nom": "Rhône", "dep_prefecture": "Lyon"}, 
  {"dep_code": "D_73", "reg_code": "R_82", "dep_nom": "Savoie", "dep_prefecture": "Chambéry"}, 
  {"dep_code": "D_74", "reg_code": "R_82", "dep_nom": "Haute Savoie", "dep_prefecture": "Annecy"}, 
  {"dep_code": "D_971", "reg_code": "R_01", "dep_nom": "Guadeloupe", "dep_prefecture": "Basse-Terre"}, 
  {"dep_code": "D_972", "reg_code": "R_02", "dep_nom": "Martinique", "dep_prefecture": "Fort-de-France"}, 
  {"dep_code": "D_973", "reg_code": "R_03", "dep_nom": "Guyane", "dep_prefecture": "Cayenne"}, 
  {"dep_code": "D_974", "reg_code": "R_04", "dep_nom": "La Réunion", "dep_prefecture": "Saint-Denis"}, 
  {"dep_code": "D_976", "reg_code": "R_06", "dep_nom": "Mayotte", "dep_prefecture": "Mamoudzou"}
];
 
 /**
* Fonction de récupération des données correspondant au critère de recherche
* @param   {String} condition - Chaine indiquant la condition à remplir
* @param   {Array}  table - Tableau contenant les données à extraire
* @returns {Array}  result - Tableau contenant les données extraites
*/
function getDataFromTable( condition, table) {
  // récupération de la clé et de la valeur
  var cde = condition.replace(/\s/g, '').split('='),
      key = cde[0],
      value = cde[1],
      result = [];
  
  // retour direct si *
  if (condition === '*') {
    return table.slice();
  }
  // retourne les éléments répondant à la condition
  result = table.filter( function(obj){
       return obj[key] === value;
    });
  return result;
}

/**
* Fonction d'ajout des <option> à un <select>
* @param   {String} id_select - ID du <select> à mettre à jour
* @param   {Array}  liste - Tableau contenant les données à ajouter
* @param   {String} valeur - Champ pris en compte pour la value de l'<option>
* @param   {String} texte - Champ pris en compte pour le texte affiché de l'<option>
* @returns {String} Valeur sélectionnée du <select> pour chainage
*/
function updateSelect( id_select, liste, valeur, texte){
  var oOption,
      oSelect = document.getElementById( id_select),
      i, nb = liste.length;
  // vide le select
  oSelect.options.length = 0;
  // désactive si aucune option disponible
  oSelect.disabled = nb ? false : true;
  // affiche info nombre options, facultatif
  setNombre( oSelect, nb);
  // ajoute 1st option
  if( nb){
    oSelect.add( new Option( 'Choisir', ''));
    // focus sur le select
    oSelect.focus();
  }
  // création des options d'après la liste
  for (i = 0; i < nb; i += 1) {
    // création option
    oOption = new Option( liste[i][texte], liste[i][valeur]);
    // ajout de l'option en fin
    oSelect.add( oOption);
  }
  // si une seule option on la sélectionne
  oSelect.selectedIndex = nb === 1 ? 1 : 0;
  // on retourne la valeur pour le select suivant
  return oSelect.value;
}

/**
* Affichage du nombre d'<option> présentes dans le <select>
* @param {Object} obj - <select> parent
* @param {Number} nb - nombre à afficher
*/
function setNombre( obj, nb){
  var oElem = obj.parentNode.querySelector('.nombre');
  if( oElem){
    oElem.innerHTML = nb ? '(' +nb +')' :'';
  }
}

/**
* fonction de chainage des <select>
* @param {String|Object} ID du <select> à traiter ou le <select> lui-même
*/
function chainSelect( param){
  // affectation par défaut
  param = param || 'init';
  var liste,
      id     = param.id || param,
      valeur = param.value || '';
      
  // test à faire pour récupération de la value
  if( typeof id === 'string'){
     param = document.getElementById( id);
     valeur = param ? param.value : '';
  }

  switch (id){
    case 'init':
      // récup. des données
      liste = getDataFromTable( '*', tbl_region_2016);
      // mise à jour du select
      valeur = updateSelect( 'new_region', liste, 'reg_2016_code', 'reg_2016_nom');
      // chainage sur le select lié
      chainSelect('new_region');
      break;
    case 'new_region':
      // récup. des données
      liste = getDataFromTable( 'reg_2016_code=' +valeur, tbl_old_region);
      // mise à jour du select
      valeur = updateSelect( 'old_region', liste, 'reg_code', 'reg_nom');
      // chainage sur le select lié
      chainSelect('old_region');
      break;
    case 'old_region':
      // récup. des données
      liste = getDataFromTable( 'reg_code=' +valeur, tbl_departement);
      // mise à jour du select
      valeur= updateSelect( 'departement', liste, 'dep_prefecture', 'dep_nom');
      // chainage sur le select lié
      chainSelect('departement');
      break;
    case 'departement':
      // affichage final
      document.getElementById('prefecture').value = valeur;
      break;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var oSelects = document.querySelectorAll('#liste select'),
      i, nb = oSelects.length;
  // affectation de la fonction sur le onchange
  for( i = 0; i < nb; i += 1) {
    oSelects[i].onchange = function() {
        chainSelect(this);
      };
  }
  // init du 1st select
  if( nb){
    chainSelect('init');
  }
});