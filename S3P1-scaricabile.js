/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* let num1 = 12;
let num2 = 11;
function crazySum(a, b) {
    let res;
    if (a === b) {
        res = (a + b)*3;
        return res;
    } else {
        res = (a + b);
        return res;
    }
}
console.log(crazySum(num1, num2)); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* let num = 89;
function boundary(a) {
    if ((a === 400) || ((a>= 20) && (a<= 100))) {
        return true;
    } else {
        return false;
    }
} 
console.log(boundary(num)); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* let myString = "EPICODE";
function reverseString(source) {
    let mySourceString = source;
    let myReversedString = "";
    for (let i = mySourceString.length-1; i >= 0; i--) {
      myReversedString += mySourceString[i];
    }
    return myReversedString;
}
console.log(reverseString(myString)); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/


/* let myString = "wolverine has no patience";
function upperFirst(a) {
    let strArray = a.split(" ");
    for (let i = 0; i < strArray.length; i++) {
        word = strArray[i];
        upWord = word.substring(0, 1).toUpperCase();
        loWord = word.substring(1, word.length).toLowerCase();
        strArray[i] = upWord + loWord;
}
    let str = strArray.join(" ");
    return str;
}
console.log(upperFirst(myString)); */


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* function giveMeRandom(n) {
    let myNumbers = [];
    for (let i = 0; i < n; i++) {
      myNumbers.push(Math.floor(Math.random() * 10) + 1);
    }
    return myNumbers;
}
console.log(giveMeRandom(5)); */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* l1 = 5;
l2 = 12;
function area(x, y) {
    myArea = x * y;
    return myArea;
}
console.log(area(l1, l2)); */


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff(n) {
    res = n - 19;
    if (res > 19) {
        res *= 3;
    }
    return res;
}
console.log(crazyDiff(80)); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* function codify(str) {
    newString = str;
    if (newString === "code") {
        return newString;
    } else {
        newString = ("code"+newString);
        return newString;
    }
}
console.log(codify("Salmon")); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* let number = 21;
function check3and7(n) {
    if (n >= 1) {
        if (((n % 3) === 0) || ((n % 7) === 0)) {
            return true;
        }
    }
    return false;
}
console.log(check3and7(number)); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* let myString = "Hello World!";
function cutString (str) {
    newstring = str.slice(1, (str.length-1));
    return newstring;
}
console.log(cutString(myString)); */
