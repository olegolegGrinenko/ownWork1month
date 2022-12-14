/* function calcSumm(numOne, numTwo) {
  console.log(numOne);
  console.log(numTwo);
}
console.log(calcSumm(1,2));

function showMessage () {
  if(2 > 1) {
    console.log('message');
  }
};

console.log(showMessage());

// task1 цикли
let count = 0;
while (count < 4) {
  const userInput = prompt("enter password");
  if (userInput !== "1111" && count <= 3) {
    console.log("try again");
    count++;
    continue;
  }
  console.log("its true");
  break;
} 

// task1 for
const PIN_CODE = "1111";
for (let i = 0; i < 4; i++) {
  const userInput = prompt("enter password");
  if (userInput !== PIN_CODE) {
    console.log("try again");
    continue;
  }
  console.log("its true");
  break;
}
// Homework task 1 for
for (let i = 0; i < 3; i++) {
  const userInput = Number(prompt("enter value"));
  if (userInput > 15 && userInput < 35 && userInput % 6 === 0) {
    console.log("its true");
    break;
  } else if (i === 2) {
    console.log ("attempts are over")
  }
}
//task 1 while
let count = 0;
while (true) {
  const userInput = Number(prompt("enter value"));
  if (userInput > 15 && userInput < 35 && userInput % 6 === 0) {
    console.log("its true");
    break;
  } 
  if (count === 2) { 
  console.log("attempts are over");
  break;
  }
  count++
  continue;
} 

// Task 2while
while (true) {
  const userInput = prompt("enter value");
  if (userInput !== "12") {
    console.log("try again");
    continue;
  }
  console.log("you win");
  break;
}

// Task 3 while
const PIN_CODE = "1111";
let count = 0;
while (true) {
  const userInput = prompt("enter pin-code");
  if (userInput === PIN_CODE ) {
    console.log("you win");
    break;
  } 
  if (count === 3) {
    console.log("you loose");
    break;
  }
  console.log("try again");
  count++;
  continue;
}


// Task 3 for
const PIN_CODE = "1111";
for (let i = 1; i < 4 ; i++) {
  const userInput = prompt("enter pin-code");
  if (userInput === PIN_CODE) {
    console.log("you win");
    break;
  }
  if (i === 3) {
    console.log("you loose");
  }
}

const BEGIN = 1950;
const END = 2030;
for (let i = BEGIN; i <= END; i++) {
    if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0 ) {
      console.log(i);
    }
}

// Task 2
function getUserInput() {
  while (true) {
    const userInput = prompt("enter 15 - 25: ");
    if (
      isNaN(Number(userInput)) ||
      userInput === null ||
      userInput === "" ||
      userInput === " "
    ) {
      continue;
    }
    if (Number(userInput) >= 15 && Number(userInput) < 25) {
      return Number(userInput);
    }
  }
}
console.log(getUserInput());

// task 3
function getNumber(BEGIN, END) {
  for (let i = BEGIN; i >= END; i--) {
    if (i % 2 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
}
console.log(getNumber(100, 0));
*/