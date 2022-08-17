// global this
let a = this;
console.log(a);

// inside function
function greet() {
  console.log(this);
}

greet();

// inside constructor
function Person() {
  this.name = 'Jack';
  console.log(this);
}

let person1 = new Person();
console.log(person1.name);

// inside object method
const person = {
  name: 'Jack',
  age: 25,

  // this inside method
  // this refers to the object itself
  greet() {
    console.log(this);
    console.log(`${this.name} age is ${this.age}`);
  },
};

person.greet();

// inside inner function
const personNew = {
  name: 'Jack',
  age: 25,

  // this inside method
  // this refers to the object itself
  greet() {
    console.log(this);
    console.log(`${this.name}  ${this.age}`);

    function innerFunc() {
      console.log(this);
      console.log(this.age);
    }

    innerFunc();
  },
};

personNew.greet();


const greeting = () => {
  console.log(this);
}
greeting();