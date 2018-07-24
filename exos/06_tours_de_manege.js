




var tps = 0;
var tours = parseInt(prompt("nombre de tours ?", "<saisir un chiffre entre 1 et 10>"));
for (var i = 1; i = tours; i+=1){
document.write("<h2>C'est le tour du manège n°:" + i + "</h2>");
    tps++;
}

/* 1-- boucle FOR */
var manege = 0;
for(var i = 1; i <= 10 ;i++){
    document.write("tour de manege n° " + i + "<br>");
}

/* 1-- boucle WHILE */
var manege = 0;
while(manege < 10){
    manege++;
    document.write("tour de manège n° " + manege + "<br>");
}

/* 2-- boucle FOR */
var question = parseInt(prompt("Combien de tours tu fais ?"));
for (var tour = 1; tour <= question; tour++){
    document.write("tour de manège n° " + tour + "<br>");
}
document.write("<hr>");

/* 2-- boucle WHILE */
var combien = parseInt(prompt("combien de tours ?"));
var compteur = 1;
while (compteur <= combien) {
    document.write("tu as fait " + compteur + " tour de manège <br>");
    compteur++;
}
document.write("<hr>");