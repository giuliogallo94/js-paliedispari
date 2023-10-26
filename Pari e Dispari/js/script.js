let userChoice = prompt("Scegli pari o dispari?");
console.log(userChoice);

let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

const pcNumber = genarateRandomNumber(1, 5);
console.log(pcNumber);

function genarateRandomNumber(min, max) {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  return rndNumber;
}

let numberType = oddEven(userNumber, pcNumber);
console.log(result);

function oddEven(x, y) {
  const sum = x + y;

  if (sum % 2 === 0) {
    result = "pari";
  } else {
    result = "dispari";
  }
}

if (result === userChoice) {
  finalMessage = "L'utente ha vinto";
} else {
  finalMessage = "L'utente ha perso";
}
console.log(finalMessage);
