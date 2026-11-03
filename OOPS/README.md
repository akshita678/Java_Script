# My Learning Notes: JavaScript OOP (Classes, Objects & Prototypes)

This is my personal notebook for learning Object-Oriented Programming in JavaScript. It covers how objects, classes, constructors, and prototypes work, plus some common mistakes I made while learning.

---

## 1. Objects and Prototypes

### What is an Object?
An object is like a container that stores variables (properties) and functions (methods) together.

```javascript
const student = {
  marks: 98,
  name: "steve",
  printMarks: () => {
    console.log("marks", student.marks);
  }
}; 

const Rashmi = {
   marks: 90,
};
```

### What is a Prototype?
In JavaScript, every object gets a special default property inside it. We can use `__proto__` (with two underscores on each side) to pass functions from one object to another.

```javascript
// Making student the prototype of Rashmi
Rashmi.__proto__ = student; 

// Now Rashmi can use the student's function!
Rashmi.printMarks(); 
```

### Important Rule:
If both the object and its prototype have a method with the **same name**, the object's own method will be used first!

---

## 2. Classes and Creating Objects

A class is just a **blueprint** for creating the same types of objects easily.

```javascript
class car {
  start = () => {
    console.log("start");
  }
  stop = () => {
    console.log("stop");
  }
  
  // This is a regular function method
  brand() {
    console.log(this.brandname);
  }

  // Constructor: This runs AUTOMATICALLY when we create a new object.
  // We use 'this' to assign values to our new object.
  constructor(brandname) {
    console.log("my own constructor"); 
    this.brandname = brandname; 
  }
} 

// Creating a new object from the class using the 'new' keyword
let audi = new car("audi"); 
```

---

## ⚠️ Mistakes I Made (And How to Fix Them)

### Mistake 1: Forgetting to put arguments in the Constructor
* **What I did wrong:** I passed `"audi"` into `new car("audi")`, but my constructor brackets were totally empty `constructor()`. Because of this, JavaScript ignored the word `"audi"` completely.
* **The Fix:** You MUST catch the name inside the constructor brackets first, and then use `this.brandname = brandname` to lock it into the object.

```javascript
// ❌ WRONG: The constructor ignores the data
class car {
  constructor() { } 
}
let audi = new car("audi"); 

// ✅ RIGHT: The constructor catches the data and saves it
class car {
  constructor(brandname) {
    this.brandname = brandname; 
  }
}
let audi = new car("audi");
```

### Mistake 2: Mixing up Arrow Functions and `this`
* **What I learned:** Arrow functions (`() => {}`) and regular functions (`brand() {}`) handle the `this` keyword differently. 
* **The Fix:** If you want to use `this` easily inside your class methods to read object data, it is usually safer to use regular functions like `brand() { console.log(this.brandname); }`.
