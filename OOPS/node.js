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

// creation of prototype :

// Making student the prototype of Rashmi
Rashmi.__proto__ = student; 

// Now Rashmi can use the student's function!
Rashmi.printMarks(); 





class car {
  // 1. The constructor must accept the parameter
  constructor(brandname) {
    console.log("my own constructor"); 
    // 2. Set the property right here using 'this'
    this.brandname = brandname; 
  }

  start = () => {
    console.log(`${this.brandname} start`);
  }

  stop = () => {
    console.log(`${this.brandname} stop`);
  }

  // This method now just reads the property already saved on the object
  printBrand() {
    console.log(this.brandname);
  }
} 

// Now passing "audi" works perfectly because the constructor catches it!
let audi = new car("audi"); 

audi.start();      // Output: audi start
audi.printBrand(); // Output: audi

