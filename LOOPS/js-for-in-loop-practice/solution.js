const grocery={
    apple:7.8,
    banana:6.7 ,
    carrots:"Not sweet",
    Capsicum:8.9,
    Rice:1.5,
    milk:"Milk_Point"

   
}
let count_items=0;
for( let val in grocery){
   if(typeof(grocery[val])=="number"){
    count_items=count_items+1;
   }
}
console.log(count_items);