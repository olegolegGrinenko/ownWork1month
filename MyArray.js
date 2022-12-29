/*
function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
}

function MyArray() {
  this.length = 0;
}

MyArray.prototype = new MyArrayPrototype();

console.log(MyArray);

// Task 2

const man = {
    name: "Bred",
    sname: "Pit",
    gender: "male",
    age: 58,
}

const user = {
    role: "client",
}

user.__proto__= man;

console.log(user);



const funcForMan = {
  sleep: function () {
    console.log(this.name, "sleeping")
  },
  eat: function () {
    console.log(this.name, "eating")
  }
}
 
const man = {
  name: "Bred",
  sname: "Pitt",
}

man.__proto__ = funcForMan;
console(man.eat());


function FuncForUser () {
  this.fullName = function () {
    return `${this.fname} ${this.lname}`; 
  }
}

function User (fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

User.prototype = new FuncForUser ();

const user1 = new User('Bred', 'Pitt');
const user2 = new User('Brer', 'Pitet');
console.log(user1.fullName());

console.log(user1.fullName === user2.fullName);

let arrTwo = ["Vanya", "John", "Olya"];
let reduceValueTwo = arrTwo.reduce(function (previosValue, item, index, array) {
  return `${item}, ${previosValue}`;
});
console.log(`Users: ${reduceValueTwo}`);
 

// Task 2
let arrUsers = ["Vanya", "Ishtvan"];
arrUsers.push("Olya");
console.log(arrUsers);

arrUsers.splice(1, 1, "Petya");
console.log(arrUsers);

let removed = arrUsers.splice(0, 1);
console.log(removed);

arrUsers.splice(0, 0, "Masha", "Pasha");
console.log(arrUsers);


// Task 3
let arr = ['Vanya', 'Ishtvan', 'Olya',];
arr.splice(0, 1);
console.log(arr);

arr.splice(0, 0, 'Vanya');
console.log(arr);


// Task 4
let str = "Vanya,Ishvat,Olya";

let arr = str.split(',');
console.log(arr);

// Task 5
const funcForCattle = {
  addWater : function () {
    console.log(this.name, 'add watter');
  },
  deleteWater: function () {
    console.log(this.name, 'delete water');
  },
  work: function () {
    console.log (this.name, 'the cattle is work');
  },

}

const cattle = {
  name: "cattle",
  color : "blue",
  volume : "250 ml",
  power : "1 kw",
}

cattle.__proto__ = funcForCattle;

console.log(cattle.addWater());
console.log(cattle.deleteWater());
console.log(cattle.work());
*/
// Home task
/* написати скрипт, який створює об'єкт Товар з 
властивостями:  назва, ціна, валюта
методами: показати усю інформацію про товар,  установити знижку на ціну і повернути нову ціну з урахуванням знижки */

function MethodForProduct() {
  this.showInfo = function () {
    return `${this.name} ${this.price} ${this.currency}`;
  };
  this.addSale = function (value) {
    if (value > 100) {
      return `sale ${value / 10} ${this.currency}`;
    } else {
      return "haven`t sale";
    }
  };
}
function Product(name, price, currency) {
  this.name = name;
  this.price = price;
  this.currency = currency;
}

Product.prototype = new MethodForProduct();

const product1 = new Product("dress", 211, "$");

console.log(product1.addSale(211));
console.log(product1.showInfo());
