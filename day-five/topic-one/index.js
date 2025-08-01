// 🟢 What is debouncing?
// Debouncing is a technique used to limit the rate at which a function is executed. 
// It ensures that a function is only called once, after a specified delay, and only if no other event happened during that delay.

// 🟢 Real-Life Analogy
// Imagine you're typing in a search box. You don’t want to send a request for every keypress. Instead, wait for the user to pause typing, and then send the request.

// 🟢 Where it is used?
// Live Search/Input Fields  -	Avoid making API calls on every keystroke
// Window Resize Events  -  Avoid running logic on every tiny resize
// Scroll Events  -  Limit the number of scroll handler calls
// Button Click (spam prevention)  -  Avoid function being called multiple times

// 🟢 What is Throttling?
// Throttling ensures that a function is called at most once in a specified time interval — even if the event occurs many times.
// Think of throttling as: “Run the function at regular intervals no matter how often it’s triggered.”

// 🟢 Real-Life Analogy:
// Imagine you're scrolling a page, and there's a scroll event listener. Without throttling, it could fire hundreds of times per second. With throttling, you limit it to run, say, once every 100ms.
// Ex: twitter feed, infinite scroll

// 🔴 Question 1 : Create a button UI and add debounce as follows
// --> Show button presses <X> times, every time button is pressed.
// --> increase trigger <Y> times, count after 800 ms of debounce.
// var BtnCount = 0;
// var DebounceCount = 0;

// const btn = document.getElementById("btn");
// const countDisplay = document.getElementById("btnCnt");
// const debounceDisplay = document.getElementById("debounceCnt");

// const debouncedCnt = _.debounce(()=>{
//     debounceDisplay.innerHTML = ++DebounceCount;
// },800)

// btn.addEventListener("click", () => {
//     countDisplay.innerHTML = ++BtnCount;
//     debouncedCnt();
// })

// 🔴 Question 2 : Create a button UI and add throttling as follows
// --> Show button presses <X> times, every time button is pressed.
// --> increase trigger <Y> times, count after 800 ms of throttling.
var ThrottleCount = 0;
var BtnCount = 0;
var DebounceCount = 0;

const btn = document.getElementById("btn");
const countDisplay = document.getElementById("btnCnt");
const debounceDisplay = document.getElementById("debounceCnt");
const throttleDisplay = document.getElementById("throttleCnt");

// const debouncedCnt = _.debounce(()=>{
//     debounceDisplay.innerHTML = ++DebounceCount;
// },800)

const throttling = _.throttle(() => {
    throttleDisplay.innerHTML = ++ThrottleCount;
},1000)

// btn.addEventListener("click", () => {
//     countDisplay.innerHTML = ++BtnCount;
//     // debouncedCnt();
//     throttling();
// })

// 🔴 Question 3 : Implement polyfills for debounce
const useDebounce=(cb,d)=>{
    let timer;
    return function(...args){
      if(timer) clearTimeout(timer); 
      timer = setTimeout(() => {
        cb.apply(this,args);
      },d)
    }
}

const debouncedCnt = useDebounce(()=>{
    debounceDisplay.innerHTML = ++DebounceCount;
},800)

btn.addEventListener("click", () => {
    countDisplay.innerHTML = ++BtnCount;
    debouncedCnt();
    throttling();
})

// 🔴 Question 4 : Implement polyfills for throttle
const useThrottle=(cb,d)=>{
    let last = 0;
   return function(...args){
       let now = new Date().getTime();
       if(now - last < d) return;
       last = now;
       return cb(...args);
   }
}
