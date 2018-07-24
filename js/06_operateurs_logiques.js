/* 1- le ET : && ou AND */
/* 2- Le OU : || ou OR (| pipe => alt gr + 6)*/
/* 3- Le ! (contraire de) */

/* 1- le ET : && ou AND */
/*
=> SI je cumule plusieurs conditions
*/
var prenom = "mila";
var prenomlog = prompt('prénom ?');
var mdp = 123;
var mdpLog = parseInt(prompt('mdp?'));

if( (prenom === prenomLOg) && (mdp === mdpLog) ) {
    /* ... code si TOUT est vrai */
}

/* Table des &&*/
/*
if ( A && B ){...}

=> si A est Faux et B est Vrai => FAUX
=> si A est Vrai et B est Faux => FAUX
=> si A est Faux et B est Faux => FAUX
=> si A est Vrai et B est Vrai => VRAI

*/

/*2- le OU : || ou OR (| pipe => alt gr + 6) */
/*
=> Si au moins 1 condition est Vraie
*/
/* 
Table des ||

=> si A est Faux et B est Vrai => VRAI                 
=> si A est Vrai et B est Faux => VRAI
=> si A est Faux et B est Faux => FAUX
=> si A est Vrai et B est Vrai => VRAI
*/

/*3- Le ! (contraire de ) */
var userLog = true;

if (userLog == false){
    /* ... code si user non Loggé */
}

if (!userLog){
    /* ... code si user non Loggé */
}