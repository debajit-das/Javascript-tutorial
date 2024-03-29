//  Classes & Objects

// Prototypes in JS
/* A javaScript object is an entity having state and behavior (properties and methods)
JS objects have a special property called prototype.
We can set prototypes using __proto__ */

const student = {
  name: "Debajit Das",
  age: 21,
  profession: "Web Developer",
  skills: ["HTML5", "CSS3", "JS", "React JS", "Tailwind", "Bootstrap"],
  printAge: function () {
    console.log("Age =", this.age); //this.age means student.age
  },
};

const employees = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};
const employee1 = {
  salary: 50000,
};
employee1.__proto__ = employees; // Example how to include prottypes in a object
// but when object & prototype have same method, object's method will be used.

// Classes in JS
/* Class is a program-code tempalte for creating objects.
Those objects will have some states (variables) & some behaviours (functions) inside it. */
class car {
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}
let firstCar = new car();
firstCar.setBrand("Mustang");
let secondCar = new car();
secondCar.setBrand("Jaguar");

/* constructor() method is :
    autometically invocked by new
    initializes objects  */

// Inheritance in JS
/* Inheritance is passing down properties & methods from parent Class to child class */
class parent {
  hello() {
    console.log("Hello");
  }
}
class child extends parent {}
let obj = new child();
//if child and parent have same method, child's method will be used. [Methd overriding]

// Super Keyword
/* The super keyword is used to call the constructor of its parent class to access the parent's properties and methods */

class Person {
  constructor() {
    this.species = "Homo Sepience";
  }

  eat() {
    console.log("Eat");
  }
}

class Engineer extends Person {
  constructor(branch) {
    super(); //to invoke parent class constructor
    this.branch = branch;
  }
  work() {
    console.log("Code and develop something");
  }
}
let debajitObj = new Engineer("chemical engineer");
