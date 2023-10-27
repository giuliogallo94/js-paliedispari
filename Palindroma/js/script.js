// ESECUZIONE DEL PROGRAMMA

let userWord = prompt("Inserisci una parola");

console.log(userWord);

const result = wordType(userWord);

/****************************/
// DICHIARAZIONE DELLE FUNZIONI
/**
 *
 * @param {string} userWord la parola da analizzare
 * @returns {boolean} true se palindroma, false altrimenti
 */
function wordType(userWord) {
  let reversUserWord = userWord.split("").reverse().join("");
  console.log(reversUserWord);
  if (userWord === reversUserWord) {
    alert("palindroma");
  } else {
    alert("la parola non è palindroma");
  }
}

// Metodo per invertire la parola
// let invertWord = "";
// for (let i = userWord.length - 1; i >= 0; i--) {
//   invertWord += userWord[i];
// }
// return invertWord;
