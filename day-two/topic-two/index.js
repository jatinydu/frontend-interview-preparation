// CURRYING Interview Question

// Question 1 : Currying

function f(a) {
    return (b) => {
         return "Works"
    }
}
console.log(f(1)(2));


// Question 2 : sum(2)(6)(1)

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6


// 3 : Write a currying fn 
//       evaluate("sum")(4)(2)
//       evaluate("multiply")(4)(2)
//       evaluate("divide")(4)(2)
//       evaluate("substract")(4)(2);

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if(operation === "sum") return a+b;
            else if(operation ==="multiply") return a*b;
            else if(operation ==="divide") return a/b;
            else if(operation ==="substract") return a-b;
            else return "Invalid Operation!"
        }
    }
}
console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));
console.log(evaluate("substr")(4)(2));


// Question 4 : Infinite Currying -> sum(1)(2)(3)....(n)

function add(a) {
    return function (b) {
        if(b) return add(a+b);
        return a;
    };
}
console.log(add(5)(2)(4)(8)())


// Question 5 : currying vs partial application

// function sum(a) {
//     return (b, c) => {
//         return a * b * c
//     }
// }

// let x = sum(10);
// x(3,12);
// x(20,12);
// x(20,13);
// OR
// sum(10)(3,12);
// sum(10)(20,12);
// sum(10)(20,13);


// Question 6 : real world example of currying => Maniplating DOM

const updateElemText = id => content => document.querySelector(`#${id}`).textContent= content;
const updateHeaderText = updateElemText('header');
updateHeaderText('Subscribe to RoadsideCoder!');


// Question 7 : Curry() implementation

function curry(func) {
    return function curriedFunc(...args) {
        // console.log(args.length, func.length);
      if(args.length >= func.length) {
        return func(...args)
      } else {
        return function(...next) {
          return curriedFunc(...args,...next);
        };
      }
    };
}
  
const sumCurry = (a, b, c) => a + b + c;

const totalSum = curry(sumCurry);
console.log(totalSum(1)(6)(5));