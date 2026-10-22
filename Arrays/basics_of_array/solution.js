//making an array ---> it should be collection of same datatype 
// is immutable

let grocery=["apple","mango","maggi","milk"];
//Accesing this 
console.log(grocery[0]); //  output -- apple

console.log(grocery.length);  // output -- 4

console.log(typeof(grocery)); // returns object 

console.log(grocery[1200]); // returns undefined

// updation in array 
grocery[1]="Cashews";

console.log(grocery) // returns updated array



// WAP to print all elements of array 
let grocery=["apple","mango","maggi","milk"];
 
// First way ; using for loop 
for (let i = 0; i < grocery.length; i++) {
     console.log(grocery[i]);
    
}
// second way  for of loop ---> preferred way ⭐
for(let j of grocery){
    console.log(j);
} 
