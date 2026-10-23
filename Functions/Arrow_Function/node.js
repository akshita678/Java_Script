// create a function and an arrow function which takes string as an input and returns number os vowels in it 
let count_vowel=0;
function count(n){ 
    for(let i of n){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            count_vowel=count_vowel+1;
        }
    }
    return count_vowel;
}

n=prompt("enter string ");
let ans=count(n) 
console.log(ans);


