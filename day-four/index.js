// Promise in js

// 🟢 Synchronous and Asynchronous code

// Sync code - When code is executed line by line
// console.log("line 1");
// console.log("line 2");
// console.log("line 3");
// output : 
// line 1
// line 2
// line 3

// Async Code
// When code execution is not synchronous
// console.log('async line 1');
// setTimeout(()=>{
//     console.log('async line 2')
// },2000)
// console.log("async line 3");
// Output:
// async line 1
// async line 3
// async line 2

// Note : Js execute synchronous codes first than it exceutes async codes/

// For better understanding of Promises we should know callbacks first.

// 🟢 What is callback?
// A callback is a function passed as an argument to another function to be executed later.
// Why it is used?
// JavaScript is single-threaded and asynchronous. Callbacks allow us to:
// > Perform tasks after completion of another task (e.g., fetching data).
// > Avoid blocking the main thread.
// > Handle events, delays, or server responses efficiently.
// Example : 
// console.log('api start...');
// const res = function getApiRes(){
//     setTimeout(()=>{
//         return "api responce generated!";
//     },2000)
// }()
// console.log(res); // undefined
// console.log('api end...')
// in Above example we will get res as undefined
// to solve this we need to use callback so that we can get the responce properly

// Callback ex:
console.log('api start...');

function getApiRes(cb){
    setTimeout(()=>{
        cb();
    },2000)
}

getApiRes(()=>{
     console.log("api res got!")
})

console.log('api end...')

// 🟢 What is Callback Hell?
// Callback Hell happens when multiple nested callbacks make code:
// Hard to read
// Difficult to maintain
// Error-prone
// ex: 
// function registerUser(callback) {
//     setTimeout(() => {
//       console.log("1. User registered");
//       callback();
//     }, 1000);
//   }
  
//   function sendWelcomeEmail(callback) {
//     setTimeout(() => {
//       console.log("2. Welcome email sent");
//       callback();
//     }, 1000);
//   }
  
//   function fetchUserPreferences(callback) {
//     setTimeout(() => {
//       console.log("3. User preferences fetched");
//       callback();
//     }, 1000);
//   }
  
//   function showDashboard() {
//     setTimeout(() => {
//       console.log("4. Dashboard shown");
//     }, 1000);
//   }
  
  // Callback Hell (Pyramid of Doom)
//   registerUser(() => {
//     sendWelcomeEmail(() => {
//       fetchUserPreferences(() => {
//         showDashboard();
//       });
//     });
//   });
  
// While the output looks fine, the code is deeply nested, making it:
// Hard to read
// Hard to maintain
// Hard to handle errors

// To solve this callback hell issue Promise was introduced.
// 🟢 What is Promise?
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Think of it as a placeholder for a value that you will receive in the future.
// States of a Promise
// > Pending – Initial state, neither fulfilled nor rejected.
// > Fulfilled – The operation completed successfully.
// > Rejected – The operation failed.
// Ex: 
// const fetchData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let success = false; // you can use random number generator to randomize its value
//         if(success) resolve({success:true, message:"res generated succesfully!"})
//         else reject("Status : 500 - Server Error")
//     },2000)
// })

// fetchData.then((data)=>{
//      console.log(data);
// }).catch((error)=>{
//    console.error(error);
// })

// Promise Chaining
// You can chain multiple .then() blocks to perform sequential async tasks.
// Lets try to implement user registration flow using promise
const register = async() => {
    console.log("✴️ flow start ...")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("1 : user registered!");
        },2000)
    })
}

const sendVerifyMail = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("2 : email verified!")
        },1000)
    })
}

const showUserDashboard = () => {
    return new Promise((res,rej)=>{
       setTimeout(()=>{
         res("3 : show dashboard!")
       },1000)
    })
}

// register().then((data)=>{
//      console.log(data);
//      return sendVerifyMail();
// }).then((data)=>{
//     console.log(data);
//     return showUserDashboard();
// }).then((data)=>{
//     console.log(data);
//     console.log("☪️ flow end ...")
// }).catch(()=>{
//     console.log("🎡 unexpected error!")
// })

// Problem with promise chaining
// Only one catch() is needed for the entire chain. If any .then() fails, it jumps to .catch().


// 🟢 Promise Combinators
// Promise combinators are static methods provided by the Promise object that allow you to handle multiple promises at once in different ways.
// Most Common Promise Combinators
// > Promise.all() - waits for all promises to fulfill (or rejects if any fail)
// > Promise.allSettled() - Waits for all promises to finish (fulfilled or rejected)
// > Promise.race() - Returns the result of the first settled promise (fulfilled or rejected)
// > Promise.any() - Returns the first fulfilled promise (ignores rejections)

// Promise.all()
// used when You want to wait for multiple promises to complete successfully. If any promise fails, the whole thing fails.
// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); // [10, 20, 30]
// });

// Promise.allSettled()
// Used when You want to know the result of all promises, whether they succeeded or failed.
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");

Promise.allSettled([p1, p2]).then((results) => {
  console.log(results);
});

// Output: 
// [
//     { status: 'fulfilled', value: 'Success' },
//     { status: 'rejected', reason: 'Error' }
// ]

// Promise.race()
// You want to act on the first completed promise, regardless of success or failure.
const fast = new Promise((res,rej) => setTimeout(() => rej("Fast!"), 100));
const slow = new Promise((res,rej) => setTimeout(() => res("Slow..."), 1000));

Promise.race([fast, slow]).then((value) => {
  console.log(value); // "Fast!" - if res
}).catch((err)=>{
    console.log(err); // "Fast!" - if rej
});

// Promise.any()
// You want the first successfully resolved promise. Ignores all rejections.
Promise.any([fast, slow]).then((value) => {
  console.log(value); // Slow!
})


// 🟢 What is async / await?
// async and await are syntactic sugar over Promises.
// They make asynchronous code look and behave like synchronous code, improving readability and error handling.

// async Keyword
// > Used before a function to turn it into an asynchronous function.
// > An async function always returns a Promise, even if you return a non-promise value.
async function greet() {
    return "Hello Jatin";
}
  
greet().then(console.log); // Output: Hello Jatin

// await Keyword
// > Used inside async functions.
// > Pauses execution of the function until the Promise resolves or rejects.
// > Allows writing step-by-step logic like synchronous code.

function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("✅ Data fetched!");
      }, 2000);
    });
  }
  
  async function showData() {
    console.log("Fetching data...");
    const result = await getData(); // waits for promise to resolve
    console.log(result);
    console.log("All done!");
  }
  
  showData();
  