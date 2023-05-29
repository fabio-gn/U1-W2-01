/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* I principali data-type di Javascript sono "Number", "String", e "Bool", "null" e "undefined". i dati di tipo number rappresentano numeri, con cui
si possono eseguire una serie di operazioni matematiche. Sotto forma di "string" invece possono essere raccolti e concatenati dei caratteri, numeri
compresi, i quali però verranno considerati solo come successione di simboli e non come numeri validi per fare delle operazioni. il datatype "bool"
invece racchiude solo due valori, "true" e "false", necessari a far funzionare il codice: per esempio, se un certo confronto ci da come risultato
"true", il codice può fare una certa cosa, oppure farne una diversa qualora il risultato fosse "false". "undefined" e "null" invece sono gli unici 
valori di loro stessi, potremmo dire forse che si tratta di valori "vuoti". quando per esempio non si assegna il valore ad una variabile dichiarata,
questo di default risulta essere "undefined".   */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName;
myName = "Fabio";
console.log("ESERCIZIO 2-- my name is: ", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
let sum = num1 + num2;
console.log( "ESERCIZIO 3-- 12 + 20 =", sum);

// oppure
// console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log("ESERCIZIO 4-- x = ? -->", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Giannasi";
console.log("ESERCIZIO 5-- change 'myName' to: ", myName);

// const mySurname = "Giannasi";
// mySurname = "Rossi";


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6-- differenza di 4 e x: ", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log("ESERCIZIO 7A-- are name1 and name2 the same? ", name1 === name2);
console.log("ESERCIZIO 7B-- are name1 and name2 still the same? ", name1.toLowerCase === name2.toLowerCase);
