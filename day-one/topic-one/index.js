// Diffrence Between Let vs Var vs Const

// Let's categorize the differences into key types:
// 😀 Scope
// 😀 Hoisting
// 😀 Re-declaration and Re-assignment

// 1. Scope  🔴

// 🟢 var:
// Function-scoped: This means a var variable is accessible anywhere within the function it's declared in, regardless of block statements (like if statements or for loops).
// If declared outside any function, it becomes a global variable.
function myFunc(){
    if(true) {
        var x = 5; // x is accessible throughout the function
    }
    console.log(x); // 5
}

// 🟢 let:
// Block-scoped: This means a let variable is only accessible within the block (curly braces {}) where it's declared. This includes if blocks, for loops, while loops, and standalone blocks.
function myFunc() {
    if(true) {
        let y = 10; // y is only accessible within this block
        console.log(y); // 10
    }
    // console.log(y); // Uncaught ReferenceError: y is not defined
}

// 🟢 const:
// Block-scoped: Similar to let, const variables are also block-scoped.
function myFunc() {
    if(true) {
        const z = 15; // z is only accessible within this block
        console.log(z); // 15
    }
    // console.log(z); // Uncaught ReferenceError: z is not defined
}

// 2. Hoisting  🔴

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means you can use them before they are declared in the code, but there are differences in how var, let, and const behave with hoisting.
// 🟢 var: Hoisted to the top of its function or global scope: This means var declarations are processed before any code is executed. While the declaration is hoisted, the initialization is not. So, you can access a var variable before it's declared in the code, but its value will be undefined until the line of declaration is reached.
// console.log(varhoist); // undefined
// let varhoist = 10; // varhoist is hoisted but not initialized

// 🟢 let: Hoisted to the top of their block scope: Similar to var, let declarations are also hoisted. However, unlike var, they are not initialized with undefined. Accessing a let variable before its declaration results in a ReferenceError. This period between the start of the block and the declaration is called the Temporal Dead Zone (TDZ).
// console.log(lethoist); // Uncaught ReferenceError: Cannot access 'lethoist' before initialization
// let lethoist = 20; // lethoist is hoisted but not initialized

// 🟢 const: Hoisted to the top of their block scope: Like let, const declarations are hoisted but are also in the Temporal Dead Zone until initialized. Accessing them before declaration also results in a ReferenceError.
// console.log(consthoist); // Uncaught ReferenceError: Cannot access 'consthoist' before initialization
// const consthoist = 30; // consthoist is hoisted but not initialized

// Note:- Temporal Dead Zone (TDZ) is the period from the start of the block until the variable is declared. During this time, accessing the variable will result in a ReferenceError.

// 3. Re-declaration and Re-assignment  🔴

// 🟢 var: 
// Re-declaration allowed: You can declare the same var variable multiple times in the same scope without an error.
// var x = 10;
// var x = 20; // No error, x is now 20
// Re-assignment allowed: You can change the value of a var variable.
// var x= 10;
// x = 20; // No error, x is now 20

// 🟢 let:
// Re-declaration NOT allowed: You cannot re-declare a let variable within the same block scope. Doing so will result in a SyntaxError.
// let y = 10;
// let y = 20; // Uncaught SyntaxError: Identifier 'y' has already been declared
// Re-assignment allowed: You can change the value of a let variable.
// let y = 10;
// y = 20; // No error, y is now 20

// 🟢 const:
// Re-declaration NOT allowed: Similar to let, you cannot re-declare a const variable within the same block scope.
const z = 10;
// const z = 20; // Uncaught SyntaxError: Identifier 'z' has already been declared
// Re-assignment NOT allowed: This is the defining characteristic of const. Once a const variable is initialized, its value cannot be changed.
const e = 10;
e = 20; // Uncaught TypeError: Assignment to constant variable.

// Important Note for Objects/Arrays: While you cannot re-assign a const variable that holds an object or array, you can modify the properties of the object or the elements of the array. The const keyword only prevents re-assignment of the binding, not the mutability of the underlying value.
// ex:
const obj = { name: "John" };
// obj = { name: "Doe" }; ❌
obj.name = "Doe"; //✅

// Additional Topics 🔴

// 🟢 Variable Shadowing - we can declare a variable with the same name in an inner scope, which will shadow the outer variable. This can lead to confusion if not managed properly.
var shadow = "I am outer";
function shadowingExample() {
    var shadow = "I am inner"; // This shadows the outerVar
    console.log(shadow); // "I am inner"
}

// 🟢 Illegal Shadowing
// This occurs when trying to shadow a variable using var within the same scope where that variable is already defined using let or const.
let illegalShadow = "I am outer";
// var illegalShadow = "I am inner"; // This will throw a SyntaxError
