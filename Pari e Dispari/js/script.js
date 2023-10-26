let oddOrEven = prompt("Scegli pari o dispari?");
let userChoice = oddOrEven.toLowerCase();
console.log(userChoice);

let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

const pcNumber = genarateRandomNumber(1, 5);
console.log(pcNumber);

function genarateRandomNumber(min, max) {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  return rndNumber;
}

function oddEven(x, y) {
  const sum = x + y;
  let result = "";
  if (sum % 2 === 0) {
    result = "pari";
  } else {
    result = "dispari";
  }

  return result;
}
let numberType = oddEven(userNumber, pcNumber);

if (numberType === userChoice) {
  finalMessage = "L'utente Vince";
} else {
  finalMessage = "PC Vince";
}
console.log(finalMessage);

document.querySelector("h1").innerHTML = finalMessage;
