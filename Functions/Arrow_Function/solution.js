
// Arrow function of this :
count_vowel=0;
count=(n)=>{
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
