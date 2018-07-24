/* Comparaison */

/* 1- comparer la VALAEUR */
/* 2- comparer la valeur et le type */
/* 3- vérifier que 2 valeurs sont DIFFERENTES ... en valeur */
/* 3- vérifier que 2 valeurs sont DIFFERENTES ... en valeur ET en type */

/* 1 - comparer la VALEUR */
// => le signe == signifie 'egal' RAPPEL le = c'est de l'affectation (stockage de données dans une variable)
var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); // => => TRUE

/* 2- comparer la valeur ET le type */
// => le signe === signifie 'STRICTEMENT égal'
var nb1 = 123;
var nb2 = "123";
console.log(nb1 === nb2); // =>FALSE

/* 3- vérifier que 2 valeurs sont DIFFERENTES ... en valeur */
// le signe !=
console.log(nb1 != nb2); //=> FALSE

/* 4- vérifier que 2 valeurs sont DIFFERENTES ... en valeur ET en type */
// le signe !==
console.log(nb1 !== nb2); // => TRUE

/* --------------------------------
                EXERCICE :
J'arrive sur un espace Sécurisé au moyen du prénom et d'un mot de passe.
Je dois saisir mon prénom et mdp pour être authentifié sur le site (les infos sont en BDD ici dans mes variables prenom et mpd).
En cas d'echec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accuielle.
------------------------------------*/

var prenom = "mila";
var mdp = 123;
// mdpLog = "123";
//1 -- Demander son prénom à l'utilisateur avec un prompt
var prenomLog = prompt('entrez votre prénom');

// 2-- je vérifie si le prénom saisi correspond à celui en base de données
if (prenom === prenomLog){
    // 2a. Si tout est ok, je continu la vérifivcation avec le MDP 
    // 2a1. Demande a mon utilisateur son MDP avec un prompt
    var mdpLog = parseInt(prompt('ton mdp ?'));
    if (mpd === mdpLog){
       // => les MPD corrspondent => bienvenue  
       alert('bienvenue');
    } else {
        // => les MDP ne correspondent pas => alert('erreur MDP');
        alert('erreur MDP');
    }
} else{
    // 2b. Les prénoms ne correspondent pas => j'en informe l'internaute
    alert('erreur PRENOM');
}
    
       
           
            

    

var prenom = 'jean';
var mdp = 'aaa';
var reponse = window.prompt('prenom ?');

 if (prenom === reponse) {
    var reponse2 = window.prompt('mdp');
    
    if(mdp === reponse2) {
        alert('bienvenue');
    } else{
         alert("erreur");
     }
 } else{
     alert('erreur')
 }

/*if (prenom === reponse) {
    var reponse2 = window.prompt('mdp');
    
} else {
    alert("prenom faux");
    
}

if (mdp === reponse2) {
    alert('bienvenue');
} else {
    alert("erreur");
}*/
// window.prompt('mpd ?');
// alert('bienvenue');
