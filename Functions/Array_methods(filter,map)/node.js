// given marks=[12,67,89,99,56,78,98] 
// a) filter out marks greater than 70 

let marks=[12,67,89,99,56,78,98] ;
const answer=marks.filter((val)=>{
    return val>70
})
console.log(answer);


// to create a new array using map  
let a=[12,3,4,56,78];
let nw=a.map((val)=>{
    return val*2;
}) 
console.log(nw)