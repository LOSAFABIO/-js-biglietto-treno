
/*

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e 
l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) .
va applicato uno sconto del 20% per i minorenni.
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

const userKm = prompt( " Numero Kilometri " )
console.log(userKm)

const userAge = prompt ( " Età " )
console.log(userAge)

const costKm = 0.21
console.log(costKm)

let userCost = (userKm * costKm);
userCost = userCost.toFixed(2);

/*
let userDiscountLess18 = ([userKm * costKm] * 0.2);
userDiscountLess18 = userDiscountLess18.toFixed(2);
console.log(userDiscountLess18);

let userDiscountMore65 = ([userKm * costKm] * 0.4);
userDiscountMore65= userDiscountMore65.toFixed(2);
console.log(userDiscountMore65);
*/

if ( userAge < 18 ){
    document.writeln((userCost - ([userKm * costKm] * 0.2)).toFixed(2));
    //In questa verione non posso vedere in console l'effettivo sconto ma solo il calcolo finale scontato.
//L'altra versione al posto di ([userKm * costKm] * 0.2)) si mette userDiscountLess18 e possiamo vedere anche lo sconto applicato.

} 
else if ( userAge > 65 ) { 
    document.writeln((userCost - ([userKm * costKm] * 0.4)).toFixed(2));
        //In questa verione non posso vedere in console l'effettivo sconto ma solo il calcolo finale scontato.
//L'altra versione al posto di ([userKm * costKm] * 0.4)) si mette userDiscountMore e possiamo vedere anche lo sconto applicato.

}
else {  
    document.writeln(userCost);
}

console.log(userCost);
