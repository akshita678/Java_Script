//WAP to print avg marks of given arr=[85,97,44,37,76,60]

let marks=[85,97,44,37,76,60];
let total=0;
let n=marks.length;

for(let i of marks){
    total=total+i ;
}
console.log(`Average is ${total/n}`)

//For a given array with prices of 5 items -[250,645,300,900,50] all items have 10% discount find the final discounted price 
let price=[250,645,300,900,50];
for (let i = 0; i < price.length; i++) {
      val=price[i]/10;
      console.log(` the initial price : ${price[i]} discounted :${val} `);
    
}