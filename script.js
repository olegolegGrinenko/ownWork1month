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

function GetUserInformation (name, secondName, age) {
  this.name = name;
  this.secondName = secondName;
  this.age = age;
  this.logNameAndSecondName = function() {
    let nameAndSecondName = this.name + this.secondName;
    console.log(nameAndSecondName);
  };
}
const olegInformation = new GetUserInformation ("Oleg", "Grinenko", 24);
console.log(olegInformation); 
olegInformation.logNameAndSecondName();

// Task 1
let userInfo = {
  name: "Vasya",
  age: 30,
}
Object.assign(userInfo,{['likes js']:true, city: "Uzhhorod"});
console.log(userInfo);

// task 2
let userInfo = {
}

userInfo.name = "Vasya";
console.log(userInfo);
userInfo.age = 30;
console.log(userInfo);
userInfo.name = "Lena";
console.log(userInfo);
delete userInfo.name;
console.log(userInfo);

let country = {
  name: "Ukraine",
  area: 603700,
  population: 52000000,
}
userInfo.logPopulationDensity()  {
  let populationDensity = this.population / this.HTMLAreaElement;
  console.log(populationDensity) ;
};

console.log(userInfo);
// Task 3
const contry = {
  name: "Ukraine",
  area: 603700,
  population: 52000000, 
}
contry.logPopulationDensity = function() {
  let populationDensity = this.area / this.population;
  console.log(populationDensity);
}
contry.logPopulationDensity();
*/
// Task 3.1
function ShowInformationContry (name, area, population) {
    this.name = name;
    this.area = area;
    this.population = population;
    this.logPopulationDensity = function() {
    let populationDensity = this.area / this.population;
    console.log(populationDensity);
  };
}
const contryUkraine = new ShowInformationContry ("Ukraine", 603700, 4381500);
console.log(contryUkraine.logPopulationDensity());

// 