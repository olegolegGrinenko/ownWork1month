/*
const product = {
  name: "dress",
  price: 123,
  currency: "uah",
  showInfo () {
    let info = (`name: ${this.name},
price: ${this.currency + " " + this.price}`) ;
    console.log(info);
  }
};
console.log(product.showInfo());

//Task 1
const father = {
  Anton: "farher",
};

const mother = {
  Elena: "mother",
};

const son = {
  Danyl: "son",
};

const shooseFamily = function() {
  while (true) {
    const userInput = prompt (`choose unswer: Anton or Elena or Danyl`);
    if (userInput === "Anton") {
      for (const key in father) {
        console.log(`${key} : ${father[key]}`);
      }
      break;
    }
    else if (userInput === "Elena") {
      for(const key in mother) {
        console.log(`${key}: ${mother[key]}`);
      }
      break;
    }
    else {
      console.log("Try again!");
    }
    continue;
  }
};
console.log(shooseFamily());

// Task 2
/*Написати функцію, яка повертає об'єкт родина з властивостями, які мають вигляд:
ключ - ім'я члена родини, а значення - хто із членів родини
(мінімум родина з 3 осіб)
Інформацію про особу запитувати у користувача.
Вивести отриманий об'єкт за допомогою for..in 

const createFamily = function () {
  const family = {};
  for (let i = 0; i < 3; i++) {
    const key = prompt("введіть ім'я члена родини");
    const keyValue = prompt("введіть ким з членів родини є");
    if (
      key !== "" &&
      key !== " " &&
      key !== null &&
      keyValue !== "" &&
      keyValue !== " " &&
      keyValue !== null
    ) {
      family[key] = keyValue;
    } 
    else console.log("try again");
  ;
  }
  return family;
};

const userFamily = createFamily();
for (const key in userFamily) {
  console.log(`${key} : ${userFamily[key]}`);
}


const array = [];
console.log(array); 
*/