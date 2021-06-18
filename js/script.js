// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
// Es: 
// a[2,11,6,77,3,4,9];
// a = 1;
// b = 3;
// mi restituisce a [11,6,77]

array = [3, 4, 2, 1, 56, 86, 45];
var min = parseInt(prompt('Inserisci un numero'));
var max = parseInt(prompt('Inserisci un numero'));
var arrayNew = nuovoArray(array, min, max);

console.log(arrayNew);

//--------FUNCTION WITH FOR-------//

// function nuovoArray(array, min, max) {
//     newArray = [];
//     for (var i = min - 1; i < max; i++) {
//         newArray.push(array[i]);
//     }
//     return newArray;
// };

//--------FUNCTION FOR EACH-------//

function nuovoArray(array, min, max) {
    newArray = [];
    array.forEach((element, index) => {
        if (min <= index <= max) {
            newArray.push(element);
        }
        return newArray;
    });
    return newArray;
}

//--------FUNCTION FILTER-------//

function myFunction(array, min, max) {
    newArray = [];
    array.filter((element, index) => {
        if (index >= min && index <= max) {
            newArray.push(element);
        }
        return newArray;
    });
    return newArray;
}
