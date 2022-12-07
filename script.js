/*// Урок по function

/**
 * 
 * @param {number} value 
 * @returns {number}
 */

/*function checkInput(value = 23) {
  if(value % 2 === 0) {
    return 'even';
  }
  return 'odd';
} 
console.log(checkInput()); 

// задача 1
debugger
let userInput = prompt ('Enter number: ');

function checkUserInputNumber(value) {
  if (value === "" || value === null || isNaN(value) || value === " ") {
    return false;
  }
  return true;
}

if (checkUserInputNumber(userInput)) {
  const finalUserInput = Number(userInput);
  console.log(finalUserInput); 
} else {
  console.log('try again');
}

/**
 * 
 * @param {number} value 
 * @returns {string}
 */

/* function checkUserInput(value = userInput) {
  if(value % 2 === 0) {
    return 'even';
  }
  return 'odd';
} 
console.log(checkUserInput());



// Задача №2
//debugger;

function giveResult(_value1 = 1, _value2 = "2") {
  if (typeof _value1 === typeof _value2 && _value1 > _value2) {
    return _value1;
  } else if (typeof _value1 === typeof _value2 && _value2 > _value1) {
    return _value2;
  }
  return null;
}
console.log(giveResult());

// function day №2

// функцыя яка обчислюе периметр квадрата.

let userInput = prompt("Enter value: ");

function checkUserInputValue(value) {
  if (value === "" || value === null || isNaN(value) || value === " ") {
    return false;
  }
  return true;
}

if (checkUserInputValue(userInput)) {
  const finalUserInput = Number(userInput);
  console.log(culcPerimetr());
} else {
  console.log("try again");
}



function culcPerimetr(value1 = userInput, value2 = 4) {
  return value1 * value2;
}

// задача №1
//debugger;
let userInput1 = prompt("Enter num1: ");

const leadToNumber = function (value) {
  if (value === "" || value === null || isNaN(Number(value)) || value === " ") {
    return "error";
  }
  return Number(value);
};
console.log(leadToNumber(userInput1));

const checkUserInput1 = function (num1) {
  if (isNaN(num1)) {
    return "try again";
  } else if (num1 % 2 === 0) {
    return "even";
  }
  return "odd";
};
const userInputNumber = leadToNumber(userInput1);
console.log(checkUserInput1(userInputNumber));

// задача №2
const adultAge = 18;

const isPersonAdult = function (age) {
  if (age >= adultAge) {
    return true;
  }
  return false;
};
console.log(isPersonAdult());


const isPersonAdult = function (age, AGE_ADULT = 18) {
  return age >= AGE_ADULT;
}
console.log(isPersonAdult(1));
*/

// задача №3
/*
const checkMultiplicity = function (val1, val2) {
  return val1 % val2 === 0 
};
console.log(checkMultiplicity()); 


const checkTriangle = function (side1, side2, side3) {
  return (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1);
};
console.log(checkTriangle());

// написати ф-я, яка описую периметр квадрату
//debugger
const userInputSide = prompt("Enter side:");

const checkInput = function (value) {
  if (value === "" || value === null || value === " " || isNaN(Number(value))) {
    return NaN;
  }
  return Number(value);
};

/**
 * calculate and return perimetr
 * @param {number} side 
 * @returns {number | null}

const getPerimetrSquare = function (side) {
  if (isNaN(side) || side <= 0) {
    return null;
  }
  return side + side + side + side;
};

console.log(getPerimetrSquare(checkInput(userInputSide)));
*/
// написати ф-ю, которая проверяет возраст пользователя на полнолетие

const isUserAdult = function (age, ADULT_AGE = 18) {
  return age >= ADULT_AGE;
};
console.log(isUserAdult(18));

//ф-я принимает 2 параметра и проверяет кратность первого вторым.

/**
 * multiplicity check
 * @param {number} val1
 * @param {number} val2
 * @returns {number}
 */
const checkMultiplicity = function (val1, val2) {
  return val1 % val2 === 0;
};
console.log(checkMultiplicity(20, 4));

// написати 3 числа та перевирити чи можуть бути ци числа сторонами трикутника.

const isSideTriangle = function (side1, side2, side3) {
  return (
    side1 + side2 > side3 && side3 + side2 > side1 && side1 + side3 > side2
  );
};
console.log(isSideTriangle());

// написать ф-ю, которая принимает 2 аргумента и если они одного типа, то возврашает тот который имеет большее значение ( если значения равны, то возвращает null), в другом случае (если разного типа) тоже возвращает null.

const checkOnevalueBiggerAnother = function (value1, value2) {
  if ((value1 > value2) && (typeof value1 === typeof value2)) {
    return value1;
  } else if ((value2 > value1) && typeof (value1 === typeof value2)) {
    return value2;
  } else {
    return null;
  }
  
};
console.log(checkOnevalueBiggerAnother(2, 7));

//написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).Значення для перевірки функції вводить користувач.

const userInput = prompt ('enter number: ');

const checkUserInput = function (value) {
  if ((value === "") || (value === " ") || (value === null) || (isNaN(value))) {
    return "error";
  }
  return Number(value); 
};

const checkOddorEven = function (value) {
  if (isNaN(value)) {
    return "error";
  } else if (value % 2 === 0) {
    return 'even';
  }
  return 'odd';
};

console.log(checkOddorEven(checkUserInput(userInput)));
