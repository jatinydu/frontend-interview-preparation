// THIS KEYWORD

// Question 1 : this keyword

let a = 5

console.log(this.a);


// Question 2 : this inside Method

let user = {
    name: "Piyush",
    age: 24,
      getDetails() {
          console.log(this.name)
      }
};
  
user.getDetails(); 


// Question 3 : nested object 

let user = {
    name: "Piyush",
    age: 24,
      childObj:{
          newName:"Roadside Coder",
          getDetails() {
              console.log(this.newName, "and" ,this.name)
          }
      }
};
  
user.childObj.getDetails(); 


// Question 4 : Class & Constructor

class user {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const User = new user("Piyush") 
User.getName();


// Question 5 : Output

const user = {
    firstName: 'Piyush!',
    getName() {
      const firstName = 'Piyush!';
      return this.firstName;
    }
};

console.log(object.getMessage());


// Question 6 : What is the result of accessing its `ref`? Why?

function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
  
alert( user.ref.name ); // What's the result?


// Question 7 : What logs to console the following code snippet:

const user = {
    name: 'Piyush Agarwa;!',
    logMessage() {
      console.log(this.name); 
    }
};
setTimeout(user.logMessage, 1000);


// Question 8 : Output

const user = {
    name: 'Piyush',
    greet() {
      return `Hello, ${this.name}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.name}!`;
    }
};
console.log(user.greet());    
console.log(user.farewell()); 


// Question 9 :

let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Question 10 : Output

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);


// Question 11 : Implement this Code

const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total);

// My Answer
var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};
