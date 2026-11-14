# My Learning Notes: JavaScript OOP (Classes, Objects & Prototypes)

This is my personal notebook for learning Object-Oriented Programming in JavaScript. It covers my `oops` folder structure, how objects, classes, constructors, prototypes, and inheritance work, plus some common mistakes I made while learning.

---

## 📁 Folder Structure (`oops`)

Here is how my `oops` folder is organized inside my `JS` repository:

```text
oops/
├── Notes/
│   └── README.md       # This complete OOP learning notebook
└── practice/
    ├── README.md       # Review and overview of my practice questions
    └── practice.js     # Solutions to my 2 OOP practice questions
```

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

## 3. Inheritance (`extends` & `super`)

### What is Inheritance?
Inheritance is passing down properties and methods from a **parent class** to a **child class**. We use the `extends` keyword to connect them.

```javascript
class parent {
  hello = () => {
    console.log("hi there");
  }
}

// 'extends' passes parent's properties & methods to child
class child extends parent {
}

let obj = new child(); 
obj.hello(); // Prints "hi there" with no errors!
```

### Method Overriding
Just like with prototypes, if both the **parent class** and the **child class** have a method with the **same name**, the **child's method wins** (gets priority). This is called **Method Overriding**.

```javascript
class person {
  constructor(age) {
    this.species = "human";
    this.age = age;
  }
  eat = () => {
    console.log("eat");
  }
  sleep = () => {
    console.log("sleeps");
  }
}

class doctor extends person {
  // This overrides the parent's sleep() method
  sleep = () => {
    console.log("doesnt sleep on time");
  }
}

let obj1 = new doctor();
obj1.sleep(); // Prints "doesnt sleep on time" (Child wins!)
```

### The `super` Keyword
The `super()` keyword is used inside a child class to call the **parent class's constructor**. If a child class has its own `constructor`, you **must** call `super()` before using the `this` keyword.

```javascript
class surgeon extends person {
  constructor(age) {
    super(age); // Calls person's constructor first & passes 'age' up to it
    this.age = age; 
  }
  sleep = () => {
    console.log("doesnt sleep on time");
  }
}

let obj2 = new surgeon(56);
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

### Mistake 3: Using `this` in a Child Constructor without `super()`
* **What I did wrong:** When I wrote a `constructor(age)` inside my child class (`surgeon`) and tried to use `this.age = age` right away, JavaScript threw a ReferenceError.
* **The Fix:** In a child class constructor, you MUST invoke the parent's constructor first using `super()` before touching `this`.

```javascript
// ❌ WRONG: Throws an error because super() wasn't called first
class surgeon extends person {
  constructor(age) {
    this.age = age; // ReferenceError!
  }
}

// ✅ RIGHT: Call super() first to set up the parent class
class surgeon extends person {
  constructor(age) {
    super(age); 
    this.age = age;
  }
}
```

### Mistake 4: Calling the Object itself like a Function (`obj2(56)`)
* **What I did wrong:** After creating the object (`let obj2 = new surgeon`), I tried passing the value directly into the object by calling it like a function: `obj2(56)`. JavaScript threw a `TypeError: obj2 is not a function` because an object is a container, not a function.
* **The Fix:** Pass the constructor value (`56`) into the **class name** at the exact moment you create the object with `new`.

```javascript
// ❌ WRONG: Creating the object empty, then calling the object like a function
let obj2 = new surgeon;
obj2(56); // TypeError: obj2 is not a function!

// ✅ RIGHT: Pass the value inside the class brackets when using 'new'
let obj2 = new surgeon(56);
```
