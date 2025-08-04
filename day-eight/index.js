// 🟢 What is Class?
// in js class is like blueprint for creating objects, we can use single class to create multiple object instances.
// class keyword is used to define class in js.

// 🟢 Constructor in class
// Constructor is a speacial type of method of class that is used to initialize objects

// Example: 
class Person{
// now we can define constructor method
    constructor(name,age){ // constructor keyword is used to define constructor method
        this.name = name; // this keyword is used to refer to the current object instance
        this.age = age;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }
}

// 🟢 How to create object of a class?
// we can create object from class using new keyword
const p1 = new Person('Jatin','24');
const p2 = new Person('John','30');

// 🟢 How to convert above class into functional constructor.
function Per(name,age){
    this.name = name;
    this.age = age;
}

Per.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
}

const p3 = new Per('Jatin','24');
console.log(p1);
console.log(p3);

// 🟢 Inheritance in class and super()
// In javascript we can inherit the properties and methods of parent class to its child class using extend keyword.
// This process of inheriting properties from parent is called inheritance.

class Enginner{
    constructor(type,name){
        this.type = type;
        this.name = name;
    }

    intro(){
        console.log(`hello my name is ${this.name} and i am a ${this.type}`);
    }
}

class Software extends Enginner{
    constructor(type, name, languages){
       super(type,name);
       this.languages = languages;
    }

    getLangs(){
        console.log(`programming languages i know are ${this.languages}`);
    }
}

const e1 = new Enginner('Civil','Jay');
const s1 = new Software('CS','Jatin',['Js','Ts','Python']);

console.log(e1);
console.log(s1);

// Super keyword 
// The super() function is used to call the constructor of the parent class from from the child class.
// it helps the child class inherit properties and methods from the parent.

// Why must super br called before using this in a supclass constructor?
// in a subclass, you must call super() before acccessing this, otherwise js will throw a referenceError. 
// this is because the this context isn't initialized until the parent constructor has been called.

// 🟢 Static keyword and factory function
// The static keyword is used inside classes to define methods or properties that belongs to the class itself,
// not to the instance of the class.

// why use static keyword
// > to create utility functions or contants that dont need to access instance property.
// > to avoid creating the same method for each object.
// > to provide gloabl functionality related to class.
// to call static method : className.staticMethodName()
class A{
    static log(){
        console.log('inside A');
    }
}

A.log(); //inside A

// Factory Functions in js
// A Factory function is a function that returns a new object everytime it is called.
// its an alternative to classes or constructor functions to create multiple similar objects.
function Student(name,age){
    return {
       name,
       age,
       sayHello:function(){
         console.log(`hello ${this.name}`);
       }
    }
}

const j = Student('Jatin',24);
j.sayHello();

// 🟢 Getter and Setter functions
class PersonClass{
    set pName(name){ //exactly have 1 parameter
        this.name = name;
    }
    get pName(){
        console.log(this.name);
    }
}

const p = new PersonClass();
p.pName = "Jatin";  // PersonClass{name:Jatin}
p.pName; // Jatin