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

var arrayNew = nuovoArray(array, min, max)


function nuovoArray(array, min, max) {
    newArray = [];
    for (var i = min - 1; i < max; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};