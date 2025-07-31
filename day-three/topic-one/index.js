// // CALL, APPLY & BIND Interview Question


// // Question 1 : What is Call?
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an object as an argument (parameter).
// With call(), an object can use a method belonging to another object.

// function sayHello(){
//     return "Hello " + this.name;
// }
          
// var obj = {name: "Jatin"};        
// console.log(sayHello.call(obj));

// passing arguments to call
// function sayHello(h){
//     console.log(`${h} ${this.name}`);
// }

// var obj = {
//     name:"Jatin"
// };

// sayHello.call(obj,"Hello"); 


// // Question 2 : What is Apply?
// Similar to call(), but takes arguments as an array.
// Useful when you have arguments in an array.
function sayHello(day){
    return "Hello " + this.name + " today is " + day ;
}
          
var obj = {name: "Jatin"};        
console.log(sayHello.apply(obj, ["Monday"])); 


// // Question 3 : What is Bind?
// Returns a new function with the specified this context.
// Doesn’t invoke the function immediately.
// Useful when you want to call the function later.

// function sayHello(){
//     return "Hello " + this.name;
// }
          
// var obj = {name: "Jatin"};          
// const helloFn = sayHello.bind(obj);
// console.log(helloFn())

// // Question 4 : Output

const person = { name: 'Jatin' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));


// // Question 5 : Call with function inside object

const age = 10;
var human = {
  name: "Jatin",
  age: 20,
  getAge: function(){
    return this.age;
  }
}

var human2 = {age:  24};
human.getAge.call(human2);


// // Question 6 : Output

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this)); 
}, 0);


// // Question 7 : Call printAnimals such that it prints all animals in object

const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
];
  
// function printAnimals(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
// }

// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i); 
// }


// // Question 8 : apply to append an array to another

// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.info(array); 


// // Question 9 - Using apply to enhane built-in functions

// // Find min/max number in an array
const numbers = [5,6,2,3,7];

// console.log(Math.max.apply(null, numbers));

console.log(Math.min.apply(null,numbers));

// // Question 10 : How will you Create a bound function

// function f() {
//     alert( this ); // ?
//   }
  
//   let user = {
//     g: f.bind(null)
// };
  
// user.g();


// // Question 11 : Bind Chaining?

// function f() {
//     alert(this.name);
//   }
  
// f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
  
// f();


// // Question 12 : Fix the code

// function checkPassword(success, failed) {
//     let password = prompt("Password?", '');
//     if (password == "Jatinydu") success();
//     else failed();
// }
  
// let user = {
//     name: 'Jatin Kumar',
  
//     loginSuccessful() {
//       console.log(`${this.name} logged in`);
//     },
  
//     loginFailed() {
//       console.log(`${this.name} failed to log in`);
//     },
  
// };
  
// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));


// // Question 13 : Partial application for login

// function checkPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "Jatin Kumar") ok();
//     else fail();
// }
  
// let user = {
//     name: 'Jatin Kumar',
  
//     login(result) {
//       console.log(this.name + (result ? ' login successful' : ' login failed') );
//     }
// };
  
// askPassword(?, ?);


// // Question 14 :  Explicit Binding with Arrow Function

// const age = 10;

// var person = {
// 	name: "Jatin",
//   age: 20,
//   getAgeArrow: () => console.log(this.age),
//   getAge: function() {
//     console.log(this.age);
//   }
// }

// var person2 = {age:  24};
// person.getAge.call(person2); 
// person.getAge.call(person2);


// // Question 15 : Call Method Polyfill

// let car1 = {
//     color: 'Red',
//     company: 'Ferrari',
//   };
  
//   let car2 = {
//     color: 'Blue',
//     company: 'BMW',
//   };
  
//   let car3 = {
//     color: 'White',
//     company: 'Mercedes',
//   };
  
//   function purchaseCar(currency, price) {
//     console.log(
//       `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
//     );
// };

// Function.prototype.myCall = function (currentContext = {}, ...arg) {
//     if (typeof this !== 'function') {
//       throw new Error(this + "it's not callable");
//     }
//     currentContext.fn = this;
//     currentContext.fn(...arg);
// };
// purchaseCar.myCall(car3, '₹', '60,00,000');


// // Question 16 : Apply Method Polyfill

// Function.prototype.myApply = function (currentContext = {}, arg = []) {
//     if (typeof this !== 'function') {
//       throw new Error(this + "it's not callable");
//     }
//     if (!Array.isArray(arg)) {
//       throw new TypeError('CreateListFromArrayLike called on non-object')
//     }
//     currentContext.fn = this;
//     currentContext.fn(...arg);
  
// };
// purchaseCar.myApply(car2, ['₹', '50,00,000']);


// // Question 17 : Bind Method Polyfill

// Function.prototype.myBind = function (currentContext = {}, ...arg) {
//     if (typeof this !== 'function') {
//       throw new Error(this + "cannot be bound as it's not callable");
//     }
//     currentContext.fn = this;
//     return function () {
//       return currentContext.fn(...arg);
//     };
// };

// const initPurchaseBmw = purchaseCar.myBind(car1, '₹', '1,00,00,000');
// initPurchaseBmw();

