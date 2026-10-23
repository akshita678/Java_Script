function sum(n,t){
    return n+t; // return is a reserved keyword that returns a value out of function any statement after this wont be executed 
   
  
}
// Converting the string inputs into integers 🔢
let n =parseInt(prompt("enter number 1"));
let t =parseInt(prompt("enter number 2"));

// Calling the function and saving the returned value 📥
let ans=sum(n,t); 

// Displaying the final result 🎉
console.log(`sum of the numbers is ${ans}`)
