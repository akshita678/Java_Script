/*Create an Array  To store companies 'Bloomberg' Microsoft' Uber' Google 'IBM 'Netflix '
Remove the first company from the array 
Remove Uber and add Ola  In its place 
Add Amazon in the end  */

let company=["Bloomberg","Microsoft", "Uber","Google ","IBM", "Netflix "]
// removing first element from array --> shift
company.shift(); 

//Remove Uber and add Ola  In its place  ---> splice  ( 1 as shift function modified company arr)
company.splice(1,1,"Ola");

// Adding element in end ---> push()
company.push("Amazon")
