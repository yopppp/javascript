/* 1- la bouble FOR*/
/* 2- la boucle WHILE */


/* 1- la boucle for */
for  (var i = 1; i <= 10 ; i+=2){
    document.write("<h2>Instruction répétée : " + i + "</h2>");
}
/* => Syntaxe : 3 arguments
1- initialise un compteur à partir de combien je compte (par défaut la variable est 'i')
2- la condition à vérifier
3- le 'pas' d'incrémentation (généralement +1 à chaque tour ou i++)

tant_que ( compteur; condition_true; incrémentation){
    /*...CODE..*/
/*}
*/

/*2- la boucle WHILE*/
var j = 1;
while (j <= 10) {
    document.write("<h2>Istruction répétée : " + j + "</h2>");
    j++; // j = j + 1; ou j+=1;
}

/*Syntaxe

compteur;
tant ( condition_true ){
    /* ... instruction(s) à répéter ...
    incrementation; => TRES IMPORTANT sinon on fait une boucle infinie |!/

}
*/
/* -----------------------------------
                EXERCICE
J'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sue mon compte ?
---------------------------------------*/

/* boucle FOR */

for (var i = 1000; i <= 2000 ; i+=50){
    document.write("<h2> +50e : " + i + "</h2>")
}

/*boucle WHILE*/

var j = 1000;
while (j <= 2000) {
    document.write("<h2> +50e : " + j + "</h2>");
    j+=50;
}

/*boucle WHILE*/
var monCompte = 1000;
var temps = 0; //compteur de tours de boucle

while(monCompte < 2000) {
    monCompte += 50; //monCompte = monCompte + 50;
    temps++; //si je l'oublie => boucle infinie |!/
}
document.write("<h2>Fortune sur mon compte : " + monCompte + "</h2>");
document.write("<h2>J'aurai 2000 Euros dans : " + temps + " mois</h2>");
document.write("<h2>J'aurai 2000 Euros dans : " + (temps/12) + " années</h2>");

/* boucle FOR */

var tps = 0; // compteur de tours de boucle
for (var i = 1000; i <=2000; i+=50){
    document.write("<h2>le mois suivant j'ai :" + i + "</h2>");
    tps++;
}
    document.write("<h2>j'aurai 2000 euros dans : " + tps + " mois</h2>");

/* boucle FOR */

var tps = 0; // compteur de tours de boucle
for (var i = 1000; i <= 2000; i+=50) {
    document.write("<h2>mois : " + tps + "</h2>");
    document.write("<h2>le mois suivant j'ai :" + i + "</h2>");
    document.write("<h2>le mois " + tps + " j'ai : " + i + " </h2>");
    tps++;
}
document.write("<h2>j'aurai 2000 euros dans : " + tps + " mois</h2>");

document.write("<hr>");

/* Afficher un SELECT qui va de 1900 à 2020 */

document.write("<select>");
document.write("<option>1900</option>");
document.write("<option>1901</option>");
document.write("<option>...</option>");
document.write("<option>2020</option>");
document.write("</select>");

document.write("<hr>");

document.write("<select>");

for (var i = 1900; i <= 2020; i++){
    document.write("<option>" + i + "</option>");
}
document.write("</select>");