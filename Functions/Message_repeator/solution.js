function abx(n,t){
    console.log(`msg is ${n},times is ${t}`)
    for (let i = 0; i < t; i++) {
        console.log(n);
        
    }
    
    // bug console.log(n*t); // Error --> NAn --> not  anumber in js we cant multiply a string with number and expect it ot repeate
}
let n =prompt("enter msg to be displayed");
let t =parseInt(prompt("enter number of times msg needs  to be displayed"));
abx(n,t); 
