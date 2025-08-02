// 🟢 What is Event Propagation?
// Event Propagation is the mechanism that defines how events travel through the DOM tree when an event is triggered on an element.

// There are three phases in event propagation:
// 1. Capturing Phase (Capture/Trickling)
// 2. Target Phase
// 3. Bubbling Phase

// Event Propagation Phases Explained:
// Let’s say you click a button inside a div, which is inside another div:
// Code:
{/* <div id="outer">
  <div id="inner">
    <button id="btn">Click Me</button>
  </div>
</div> */}

// [1] Capturing Phase (Trickling Down)
// The event starts from the root of the DOM and trickles down to the target element.
// It goes like: document → html → body → #outer → #inner → #btn.
// [2] Target Phase
// When the event reaches the actual target element (#btn), this is called the target phase.
// [3] Bubbling Phase
// After reaching the target, the event bubbles back up to the root.
// It goes like: #btn → #inner → #outer → body → html → document.
// By default, most events bubble.


// 🟢 What is Event Bubbling?
// Event bubbling is when an event triggered on a child element propagates upward through its parent and ancestor elements in the DOM.
// const btn = document.getElementById("btn");
// const form = document.querySelector(".formEle");
// const div = document.querySelector(".divEle");

// btn.addEventListener("click", () => {
//   console.log("Button");
//   alert("Button Propogate!");
// });

// form.addEventListener("click", () => {
//   console.log("Form");
//   alert("Form Propogate!");
// });

// div.addEventListener("click", () => {
//   console.log("Div");
//   alert("Div Propogate!");
// });

// 🟢 Diffrence between Event.target, this.target vs Event.currentTarget?
// event.target: The actual DOM element that triggered the event (where the event originated).
// this: Refers to the element that the event listener is attached to.
// event.currentTarget: The element to which the event listener is currently attached, which may be different from event.target during event bubbling or capturing. 
// const btn = document.getElementById("btn");
// const form = document.querySelector(".formEle");
// const div = document.querySelector(".divEle");

// function func(event) {
//     // console.log(event.target); // this will log element where we clicked
//     // console.log(this) // this will log the element where the event listener is attached
//     // console.log(event.currentTarget); // this will log the element where the event listener is attached
//     //  this and event.currentTarget are the same in this context
// }

// btn.addEventListener("click", func);

// form.addEventListener("click", func);

// div.addEventListener("click", func);

// 🟢 What is event capturing and trickling?
// Event capturing is the opposite of event bubbling, where the event is captured from the outermost element towards the target element. By setting {capture: true}, event listeners are triggered during the capturing phase instead of the bubbling phase.
// const btn = document.getElementById("btn");
// const form = document.querySelector(".formEle");
// const div = document.querySelector(".divEle");

// btn.addEventListener("click", () => {
//   console.log("Button");
//   alert("Button Propogate!");
// });

// form.addEventListener("click", () => {
//   console.log("Form");
//   alert("Form Propogate!");
// });

// div.addEventListener("click", () => {
//   console.log("Div");
//   alert("Div Propogate!");
// }, { capture: true }); // now this will triggered in capturing phase

// 🟢 How to stop event bubbling or capturing?
// event.stopPropagation() prevents the further propagation of an event through the DOM tree. In the provided code, clicking on the form element will not trigger the click event on the div element due to event.stopPropagation() being called.
// const btn = document.getElementById("btn");
// const form = document.querySelector(".formEle");
// const div = document.querySelector(".divEle");

// btn.addEventListener("click", () => {
//   console.log("Button");
//   alert("Button Propogate!");
// });

// form.addEventListener("click", (e) => {
//   e.stopPropagation(); // This stops the event from bubbling up to the div  
//   console.log("Form");
//   alert("Form Propogate!");
// });

// div.addEventListener("click", () => {
//   console.log("Div");
//   alert("Div Propogate!");
// });

// 🟢 What is event delegation?
// Event delegation is a technique where a parent element listens for events on behalf of its children. In this code, the parent element with the class "products" listens for click events and checks if the clicked target is a span element, redirecting to a specific URL based on the span's class.
// const products = document.querySelector(".products");
// products.addEventListener("click", (e) => {
//     console.log(e.target); 
//   if (e.target.tagName === "SPAN") {
//     const name = e.target.className;
//     window.location.href = `https://example.com/product/${name}`;
//   }
// });

// 🟢 Create a model which closes by clicking on negative space.
const model = document.querySelector("#model");
const btn = document.querySelector("#btn");
const main = document.querySelector("#main");

btn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents the click event from bubbling up to the main element
    console.log("Button clicked to open model");
    model.style.display = "flex";
    console.log(model.style.display); // Log the current display style
})

main.addEventListener("click", (e) => {
    if(e.target === main) {
        console.log("Main clicked, closing model");
        model.style.display = "none";
    }
});

