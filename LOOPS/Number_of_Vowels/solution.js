

let n = prompt("Enter word to find number of vowels");
c=n.length;
s=n.toLowerCase(); // Imp to write parenthesis as its a built in function unlike length
let num=0;

for(let i=0;i<c;i++){
    if(s[i]=="a" ||s[i]=="e" || s[i]=="i"||s[i]=="o" ||s[i]=="u"){
       console.log(s[i]);
       num=num+1;

    }
}
console.log(num);