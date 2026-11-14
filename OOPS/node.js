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



// Inheritance In js 
//passing down methods or properties from parent to child 
class parent{
  hello=()=>{
    console.log("hi there ")
  }
}
// extends function is used for inheritance 
class child extends parent{

}

let obj=new child; // created a new object using new function 
obj.hello() // no error it simply prints hi there 


// another better example 
class person{
  constructor(age){
   this.species="human"
   this.age=age
  }
  eat=()=>{
    console.log("eat")
  }
   sleep=()=>{
    console.log("sleeps")
  }
  
}
let oj=new person

class doctor extends person{
   sleep=()=>{
    console.log("doesnt sleep on time ")
  }
  
}
let obj1=new doctor
obj1.sleep() // retruns doesnt sleep not sleeps as when parent and child both have same function so priority is of child class 
// this is also called method overriding 

// super keyword ; used to call parent class' s constructor from the child class 
class surgeon extends person{
  constructor(age){  // this basically gives me an error so i need to invoke parent class's constructor first 
    super(age);
    this.age=age
  }
   sleep=()=>{
    console.log("doesnt sleep on time ")
  }
  
}
let  obj2=new surgeon(56)


