// task1
/*
const getTextAdultOrNoAdult = function (value, ADULT_AGE = 18) {
  return value >= ADULT_AGE ? "adult" : "no adult";
};
console.log(getTextAdultOrNoAdult(16));

// ф-я всередины себе запытуэ у користувача ввод будь-чого ы повертаэ текст thanks , або try again.
debugger
const getTekstByUserInput = function () {
  const userInput = prompt("enter something");
  if (userInput === "" || userInput === null) {
    return "try again";
  }
  return "thanks";
};

console.log(getTekstByUserInput());

// task 2 switch

const season = prompt("enter month");

switch (season) {
  case "12":
  case "1":
  case "2":
    console.log("winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("spring");
    break;
  case "6":
  case "7":
  case "8":
    console.log("summer");
    break;
  case "9":
  case "10":
  case "11":
    console.log("autumn");
    break;
  default:
    console.log("404 try again");
    break;
}

// task 2 else if
const season1 = prompt("enter month");

if (season1 === "12" || season1 === "1" || season1 === "2") {
  console.log("winter");
} else if (season1 === "3" || season1 === "4" || season1 === "5") {
  console.log("spring");
} else if (season1 === "6" || season1 === "7" || season1 === "7") {
  console.log("summer");
} else if (season1 === "8" || season1 === "9" || season1 === "10") {
  console.log("autumn");
} else {
  console.log("404 try again");
}

//task3 else if

const userAge = Number(prompt("enter your age"));

if (userAge >= 0 && userAge < 2) {
  console.log("baby");
} else if (userAge < 6) {
  console.log("kinder");
} else if (userAge < 12) {
  console.log("child");
} else if (userAge < 18) {
  console.log("teenager");
} else if (userAge < 65) {
  console.log("adult");
} else if (userAge < 100) {
  console.log("old man");
} else if (userAge < 150) {
  console.log("supper");
} else {
  console.log("404 try again");
}

// task 4 else if
//debugger;
const userTime = Number(prompt("enter your time"));

const checkUserTime = function (value) {
  if (value === "" || value === " " || value === null || isNaN(value)) {
    return "error";
  }
  return value;
};

const returnToUserGreetings = function (time) {
  if (time > 6 && time < 11) {
    return "good motning";
  } else if (time >= 11 && time < 18) {
    return "good day";
  } else if (time >= 18 && time < 23) {
    return "good evening";
  } else if (time >= 23 || time <= 6) {
    return "good night";
  } else {
    return "404 try again";
  }
};

console.log(returnToUserGreetings(checkUserTime(userTime)));
*/
//task 4 switch

const userTime1 = Number(prompt("enter your time"));

const checkUserTime1 = function (value) {
  if (value === "" || value === " " || value === null || isNaN(value)) {
    return "error";
  }
  return value;
};

switch (checkUserTime1(userTime1)) {
  case 23:
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("good night");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("good morning");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    console.log("good day");
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
    console.log("good evening");
    break;
  default:
    console.log("404 try again");
    break;
  }

//task1  
