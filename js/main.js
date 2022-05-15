// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*-------------------------
    FUNCTIONS
--------------------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*-------------------------
    MAIN
--------------------------*/
const numbersRandom = [];
// genero 5 numeri casuali e li inserisco nell'array numbersRandom
while(numbersRandom.length < 5) {
    const number = getRndInteger(1, 100);
    if(!numbersRandom.includes(number)) {
        numbersRandom.push(number);
    }
}