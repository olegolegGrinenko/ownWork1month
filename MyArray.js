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

*/

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