// 2
let a = 5;
let b = 10;
let c = a + b;
console.log(`The sum of a and b is: ${c}`);

// 3
// let userName = prompt("Enter your name");
// let answer = (userName)? `Hi ${userName}`: `Invalid name`;
// console.log(answer);

// 4
a = 3;
b = 6;
c = Math.max(a, b);
console.log(`Max num: ${c}`);

// 5
// let number = prompt("Enter a number");
// if(typeof(number) === "number"){
//   let condition = (number % 2 == 0 )? `The number ${number} is even` : `The number ${number} is odd`;
//   console.log(condition);
// }else{
//   console.log("Invalid input");
// }

// 6
let ten = 10;
while (ten > 0) {
  console.log(ten);
  ten--;
}

// 7
/*let input;
do {
  input = prompt("Enter a number greater than 100");
} while (Number(input) < 100);
console.log(`You entered a number greater than 100: ${input}`);*/

// 8
function isEven(num) {
  return num % 2 === 0;
}
console.log(`The number 2 is even: ${isEven(2)}`);
console.log(`The number 3 is even: ${isEven(3)}`);

// 9
function convertedCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log(`30ºC is equivalent to ${convertedCelsiusToFahrenheit(30)}ºF`);

// 10
const person = {
  personalName: "Ana",
  age: 38,
  city: "Bs. As",
  setCity(newCity) {
    this.city = newCity;
  },
  showInfo() {
    console.log(
      `Person: ${this.personalName} Age: ${this.age} City: ${this.city}`
    );
  },
};

person.showInfo();
person.setCity("Barcelona");
person.showInfo();

// 11
const book = {
  title: "El Tunel",
  author: "Ernesto Sabato",
  year: 1948,

  itsOld() {
    const presentYear = new Date().getFullYear();
    const isOld = presentYear - this.year > 10;
    console.log(`The book "${this.title}" is old: ${isOld}`);
  },
};

book.itsOld();

// 12
let originalNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multipliedNums = originalNums.map( number => number *2);
console.log(`Original numbers: ${originalNums} \nNumbers multiplied by two: ${multipliedNums}`);

// 13
let evens = [];

for (let i = 1; i < 21; i++) {
  if (i < 11 && i % 2 === 0) {
    evens.push(i);
  }
}

console.log(`First ten even numbers: ${evens}`);

// 14
const pElements = document.querySelectorAll(".paragraph");
const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  pElements.forEach((p) => (p.style.color = "blue"));
});

// 15
const text = document.getElementById("textBox");
const alertButton = document.getElementById("alertButton");
alertButton.addEventListener("click", () => {
  alert(`Your input: ${text.value}`);
});

// 16
const listElements = document.getElementsByClassName("elementList");
Array.from(listElements).forEach(element => {
  element.addEventListener("click", () => {
    console.log(element.textContent);
  });
});

// 17
const textBlock = document.getElementById("textBlock");
const disableButton = document.getElementById("disableButton");
const enableButton = document.getElementById("enableButton");

disableButton.addEventListener("click", () => {
  textBlock.disabled = true;
});

enableButton.addEventListener("click", () => {
  textBlock.disabled = false;
});

// 18
const mail = document.getElementById("mail");
const bSave = document.getElementById("saveB");
const bRemove = document.getElementById("removeB");
const msj = document.getElementById("msj");

bSave.addEventListener("click", () => {
  if (mail.value) {
    msj.textContent = mail.value;
    localStorage.setItem("email", mail.value);
    console.log(`Saved: ${msj.textContent}`);
  } else {
    console.log("Email is empty");
  }
});

bRemove.addEventListener("click", () => {
  const info = localStorage.getItem("email");
  if (info) {
    msj.textContent = "";
    localStorage.removeItem("email");
    console.log(`Removed`);
  } else {
    console.log("There is nothing to remove");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const info = localStorage.getItem("email");
  if (info) {
    msj.textContent = info;
    console.log(`Restored: ${info}`);
  } else {
    console.log("Not restored");
  }
});
