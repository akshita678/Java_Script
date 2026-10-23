// scope of variable 
let pet ="dog" // global variable 
function animal(){
    let pet ="cat"; // local variable 
    console.log(pet) // ouptut: cat only as function prioritises local value first 

}
animal()

console.log(pet); // output : dog as cat( local variable )cant be accessed out of function 

// had var be used then ? --> No issue as var also respects functional scope 
