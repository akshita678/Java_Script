
// take a number input n and calculate sum of n numbers and product using reduce function 
let n =prompt("enter number")

let a=[];
for (let i = 1; i <=n; i++){
     a.push(i);
} 

sum=a.reduce((res,val)=>{
    return res+val;
})
product=a.reduce((res,val)=>{
    return res*val;
})
console.log(sum,product);