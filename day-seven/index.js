// 🟢 Why There is a saying that everything in js is an Object
// JavaScript is a prototype-based language, and many values—especially non-primitive ones—are built from or behave like objects.

// Functions are objects:
// function greet() {}
// greet.name  // 'greet'
// greet.length  // 0
// greet.sayHi = () => "Hi"; // Add property like an object

// const arr = [1, 2, 3];
// console.log(typeof arr); // 'object'

// Dates, RegExps, Errors are also special objects.

// Primitives behave like objects temporarily (boxing)
// Example:
// let str = "hello";
// console.log(str.toUpperCase()); // 'HELLO'
// Behind the scenes, JS does this:
// new String(str).toUpperCase(); // Temporarily wraps 'hello' in a String object

// 🟢 Object.prototype vs Object._proto__

// Object.prototype:
// It is the prototype object that all plain objects inherit from in JavaScript.
// It's at the top of the prototype chain.

// __proto__ :
// It's a property of an object that points to its prototype (i.e., the object it inherits from).

// 🟢 Prototype Chaining
// Prototype chaining is the process of JavaScript objects inheriting properties and methods from other objects through their [[Prototype]] (aka __proto__).
const grandParent = {
  familyName: "Smith",
};

const parent = Object.create(grandParent);
parent.job = "Engineer";

const child = Object.create(parent);

console.log(grandParent);
console.log(parent); 
console.log(child);

console.log(child.familyName); // 'Smith' - inherited from grandParent
console.log(child.job); // 'Engineer' - inherited from parent

// 🟢 Function Contructors and New kayword in js
// A function constructor is just a regular function that's used to create and initialize objects.
// By convention, constructor function names start with a capital letter to distinguish them from regular functions.
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//       console.log(`Hi, I’m ${this.name}`);
//     };
//   }
// What does the new keyword do?
// When you call a function with new, like new User("Jatin", 23), JavaScript does 4 things under the hood:
// 🔍 What happens internally:
// const user1 = new User("Jatin", 23);
// 1. Creates a new empty object.
// const obj = {};
// 2. Sets the __proto__ of the object to the constructor’s prototype:
// obj.__proto__ = User.prototype;
// 3. Binds this to the new object, and executes the constructor:
// User.call(obj, "Jatin", 23);
// 4. Returns the object unless the constructor explicitly returns something else.
// Final result:
// const user1 = {
//     name: "Jatin",
//     age: 23,
//     sayHi: function () {
//       console.log("Hi, I’m Jatin");
//     },
//     __proto__: User.prototype
//   };

// 🟢 Prototypal Inheritance
// Prototypal inheritance is a feature in JavaScript where one object can inherit the properties and methods of another object.
// Instead of classes (like in Java or C++), JavaScript uses objects and prototypes to build inheritance chains
// const user = {
//     name: "Jatin",
//     greet() {
//       console.log(`Hello, I am ${this.name}`);
//     }
//   };
// const admin = Object.create(user);
// admin.role = "admin";
// admin.greet(); // Hello, I am Jatin
// console.log(admin.role); // admin

// When you try to access a property or method:
// > JS looks on the object itself.
// > If not found, it looks at __proto__ (i.e., its prototype).
// > This chain continues until null.
// > This is known as the prototype chain.


// 🟢 What is setPrototypeof?
// Object.setPrototypeOf(obj, prototype) is used to manually set the prototype of an existing object.
const animal = {
    speak() {
      console.log("Animal speaks");
    }
  };
  
  const dog = {
    bark() {
      console.log("Dog barks");
    }
  };
  
  // Set animal as prototype of dog
  Object.setPrototypeOf(dog, animal);
  
  dog.bark();   // Dog barks
  dog.speak();  // Animal speaks ← inherited from animal

//   This is the same as:
// dog.__proto__ = animal;
  

// 🟢 What is instanceOf?
// The instanceof operator checks if an object is an instance of a specific constructor function.
function Anime(name,genre){
    this.name = name;
    this.genre = genre;
}

const a1 = new Anime("Naruto","shonen");
console.log(Anime);
console.log(a1 instanceof Anime); // true
console.log(a1 instanceof Object); // true

// 🟢 How can you create an object without a prototype in js?
const obj = Object.create(null);
console.log(obj); //object{}

// 🟢 Deep clone an Object in js
const original = {
    name:"Jatin",
    age:24
}

// Using JSON methods
const deepClone = JSON.parse(JSON.stringify(original));

// Using structuredClone (available in modern browsers)
const deepClone2 = structuredClone(original);

// Using a custom function
function deepCloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }
    const clone = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        clone[key] = deepCloneObject(obj[key]); 
    }
    return clone;
}
