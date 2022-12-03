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

*/

// Задача №2
debugger;

function giveResult(_value1 = 1, _value2 = "2") {
  if (typeof _value1 === typeof _value2 && _value1 > _value2) {
    return _value1;
  } else if (typeof _value1 === typeof _value2 && _value2 > _value1) {
    return _value2;
  }
  return null;
}
console.log(giveResult());
