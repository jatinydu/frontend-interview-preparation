// Map, Filter and Reduce

//🟢 1. Definitions : 

// 🔴 Question 1: Array.map()
// Explanation: The map() method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array. It doesn't modify the original array but returns a new modified array based on the callback function's logic.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
// Output: [2, 4, 6, 8, 10]

// 🔴 Question 2: Array.filter()
// Explanation: The filter() method creates a new array with all elements that pass the test implemented by the provided function. It returns a filtered array based on the condition specified in the callback function, where only elements that satisfy the condition are included.
const ages = [15, 22, 18, 30, 12];
const adults = ages.filter(age => age >= 18);
// Output: [22, 18, 30]

// Question 3: Array.reduce()
// Explanation: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It's often used for aggregating data, such as calculating a sum, by iterating through the array and accumulating the results based on the logic in the callback function.
const numbersForSum = [1, 2, 3, 4, 5];
const sum = numbersForSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// 🟢 2. Polyfills for map, filter, and reduce

// 1. Map Polyfils : 
Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}


const arr = [2,4,2,1];

const mul = arr.myMap((cur,i,arr)=>{
   return cur*2;
})

// console.log(mul); // Output: [4, 8, 4, 2]

// 2. Filter Polyfils :

const arr_fill = [14,19,20,21,22,16];

Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){ 
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const ob = arr_fill.myFilter((cur,index,arr)=>{
    return cur >= 18;
})

// console.log(ob); // Output: [19, 20, 21, 22]

// 3. Reduce Polyfills:
const arr_red = [1,3,2,5];

Array.prototype.myReduce = function(cb,initial){
    var sum = initial;
    for(let i=0;i<this.length;i++){
       sum = cb(sum,this[i],i,this);
    }
    return sum;
}

// console.log(arr_red.myReduce((acc,curr,index,arr)=> acc+=curr,0));

// Note :- Map vs ForEach, 
// Map returns a new array while forEach modify exixting array
// On map we can chain other methods like filter, reduce etc.

// 🟢 3. Practice Questions

// Question 1: return names of the students in capital letter
const students = [
    {
        name:"jatin",
        score:78
    },
    {
        name:"elon",
        score:40
    },
    {
        name:"sungoku",
        score:90
    }
]

const names = students.map((cur,index,arr)=> cur.name.toUpperCase());
console.log(names);

// Question 2 : Return names of the students who scored more than 70
const toppers = students.filter((cur,index,arr)=> cur.score > 70).map((cur)=>cur.name);
console.log(toppers);
