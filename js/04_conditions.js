//alert('test');

/* Structure de base IF */
/* Structure IF ... ELSE */
/* Structure IF ... ELSE IF ...  ELSE */

/* -- 1 - Structure de base IF*/
if (true) { // par défaut le IF vérifie si la condition est VRAIE (true)
     /* ... code...*/
}


var nb1 = 99;
if (nb1 < 100) {
    console.log(nb1 + ' est plus petit que 100 ');
}
/* -- 2 - Structure IF ... ESLSE */

if (true) { // par défaut le IF vérifie si la condition est VRAIE (true)
     /* ... code si condition VRAIE...*/
} else{
    /* ... code si condition FAUSSE ...*/
}

var nb2 = 399;
if (nb2 < 500) {
    console.log(nb2 + ' est plus petit que 500');
} else {
    console.log(nb2 + ' est plus grand que 500');
}

/* -- 3 - Structure IF ... ELSE IF ... ELSE */
if (true) { // par défaut le IF vérifie si la condition est VRAIE (true)
    /* ... code si condition VRAIE...*/
} else if (true) {
    /* ... code si condition 1 est FAUSSE ET la 2 est VRAIE ...*/
} else {
    /* ... code si les conditions 1 et 2 sont FAUSSES */
}

var nb4 = 50;
if (nb4 < 50) {
    console.log(nb4 + ' plus petit que 50');
} else if (nb4 > 50) {
    console.log(nb4 + ' plus grand que 50');
} else {
    console.log(nb4 + ' est égal à 50');
}


/* --EXO -- */
/*
EXERCICE
On uilise les conditions (IF...= pour vérifier l'age de l'internaute.
=>s'il est majeur je lui souhaite la bienvenue
=> s'il est mineur je  [1] lui signale et [2] le renvoie vers un autre site)
*/

// 1- je déclarer l'age de la majorité
var MajoriteFR = 18;


// 2- je demande son age à l'internaute en s'assurant que nous avons un nombre
var age = parseInt(prompt("Indiquez votre âge"));

// 3- je vérifie si l'internaute est majeur
if (age >= MajoriteFR) {// bienvenue si vrai
    alert("Bienvenue, vous êtes majeur");
} else {
        // s'il est majeur => bienvenue
        // s'il est mineur => je lui dit d'aller voir ailleurs
        alert("Allez voir un autre super site...")
        //                   => et je le redirige sur un autre site
        document.location.href= "http://www.darty.com"
        //(https://developer.mozilla.org/fr/docs/Web/API/window/LOcation)

}

var age = prompt ('age');
if (age >= 18) {
    console.log(age + 'bienvenue');
    alert ('autorisation');
} 
else {
    console.log(age + 'site interdit');
    alert('interdit');
    document.location.href ="https://www.google.com/webhp?hl=fr&ictx=2&sa=X&ved=0ahUKEwjr6sug7aPcAhXPgVwKHS5aAJoQPQgD";
 }

 


