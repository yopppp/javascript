var trente_et_un = 1;
var vingt_huit = 2;
var trente_et_un = 3;
var trente = 4;
var trente_et_un = 5;
var trente = 6;
var trente_et_un = 7;
var trente_et_un = 8;
var trente = 9;
var trente_et_un = 10;
var trente = 11;
var trente_et_un = 12;

var mois = prompt("numero du mois");
if (trente_et_un === mois){
    alert('trente et un')
} else{

}
var nbmois = parseInt(prompt('mois : '));

if(date == 1){
    alert('31 jours');
}else if(date == 2){
    alert('28 jours');
}else if(date == 3){
    alert('31 jours');
}else if(date == 4){
    alert('30 jours');
}else if(date == 5){
    alert('31 jours');
}else if(date == 6){
    alert('30 jours');
} else if (date == 7) {
    alert('28 jours');
} else if (date == 8) {
    alert('31 jours');
} else if (date == 9) {
    alert('30 jours');
} else if (date == 10) {
    alert('31 jours');
} else if (date == 11) {
    alert('30 jours');
}
 

var mois = parseInt(prompt("quel mois on est ?", "<saisis un chiffre entre 1 et 12>"));
if (mois === 2){ //2 => février => 28 jours
    document.write("le mois n° " + mois + " a 28 jours");
} else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){ // 30 jours => avril, juin, septembre, novembre}
    document.write("le mois n° " + mois + "a 30 jours");
} else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)){ // janvier, mars, mai, juillet, août, octobre et décembre}
    document.write("le mois n° " + mois + "a 31 jours");
} else {
    document.write("ton mois n° " + mois + "est inconnu !");
}