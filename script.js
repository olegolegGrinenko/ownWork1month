// Урок по if else

const userAge = 24;
let minAge = 18;

if (userAge >= minAge) {
  console.log("yes");
} else {
  console.log("no");
}

userAge >= minAge ? console.log("yes") : console.log("no");

let number = 46;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

const userAge1 = 14;
if (userAge1 >= 6 && userAge1 < 18) {
  console.log("child");
} else {
  console.log("adult");
}

const number1 = 58;
const positiveNum = 0;
if (number1 >= positiveNum) {
  console.log("positive");
} else {
  console.log("negative");
}

let num1 = 12;
let num2 = 32;
const result1 = num1 - num2;
const result2 = num1 * num2;

if (num1 > num2) {
  console.log(result1);
} else {
  console.log(result2);
}

const num3 = 21;
if (num3 % 7 === 0 && num3 % 3 === 0) {
  console.log("you win");
} else {
  console.log("you loose");
}
