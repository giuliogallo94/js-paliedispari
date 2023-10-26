let userWord = prompt("Inserisci una parola");

console.log(userWord);

const result = wordType(userWord);

function wordType(userWord) {
  let reversUserWord = userWord.split("").reverse().join("");
  console.log(reversUserWord);
  if (userWord === reversUserWord) {
    alert("palindroma");
  } else {
    alert("la parola non è palindroma");
  }
}
