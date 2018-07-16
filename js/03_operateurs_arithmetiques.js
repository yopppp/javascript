//alert('Hi');

/* ===== 1 - Les opérateurs ===== */
/* ===== 2 - Les écritues simplifiées ====*/

/* ===== 1 - Les opérateurs ====== */
// Je déclare mes variables / constantes en début de fichier
// Je peux en déclarer plusieurs à la volée :
var nb1, nb2, resultat;

// J'affecte des valeurs à certaines variables
nb1 = 10;
nb2 = 5;

/* -- 1 - Additionner avec '+' */
resultat = nb1 + nb2;
console.log(resultat);

/* --2 - Soustraire avec '-' */
resulat = nb1 - nb2;
console.log(resultat);

/* -- 3 - Multiplier avec '*' */
resultat = nb1 * nb2;
console.log(resultat);

/* -- 4 - Diviser avec '/' */
resultat = nb1 / nb2;
console.log(resultat);

/* -- 5 - Le reste d'une division avec Le Modulo '%' */
resultat = nb1 % nb2;
console.log(resultat);

//je réaffecte un chiffre à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log('Le reste de la division de ' + nb1 + ' par ' + nb2 + ' est egal à : ' + resultat);


/* ===== 2 - Les écritures simplifiées ===== */
var ex = 15;
ex = ex + 5;
console.log(ex);

ex += 5; //lui même plus quelque chose
console.log(ex);

nb1 -= 5;
console.log(nb1);


/* ===== 3 - L'incrémentation et la décrémentation ===== */
var nb1 = 1;
nb1 = nb1 + 1; // nb1 += 1

nb1++; // ++ = + 1
nb1+2; // +2 = +2

/* /!\ selon l'ordre le calcul n'est pas fait au même moment*/
resultat_1 = --nb1;
resultat_2 = nb1--;
resultat_1 == resultat_2; // => true uniquement à la fin des calculs

/*
--nb1 => calcule toute de suite
nb1-- => commence à la valeur de nb1 PUIS calcule

pareil avec ++
*/
var HT = prompt('prix HT');
var TTC = HT * 1.2;
console.log( TTC );

var HT = prompt('prix HT');
var tva = 1.2;
var ttc = ht * tva;
console.log('prix ttc : ' + ttc);
alerte('prix ttc : ' + ttc);
document.write('<h3>prix ttc : ' + ttc + '</h3>');