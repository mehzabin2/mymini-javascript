/*let fullName= prompt("enter your full name:");
let username="@"+fullName+fullName.length;
console.log(username);*/
//----mark sun and average---
/*let marks=[85,97,44,37,76,60];
let sum=0;
for (let i=0;i<marks.length;i++){
    sum +=marks[i];
}
let avg=sum/marks.length;
console.log(`avarage marks of the class=${avg}`);
//console.log(sum); sum of marks*/

       //-----question-3----

/* for a given array with prices of 5 items ->[250,645,300,900,50]
All items have an offer of 10% OFF on them.change the array
to store final price after applying offer.*/
/*let items=[250,645,300,900,50];

let price=0;
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
    price+=items[i];
}
console.log(price);*/

  //------question-4-----

  /*let companies =["bloombarg","microsoft","uber","daraz","amazon"];
   companies .shift();
   console.log(companies);//remove first company*/

   /*let companies =["bloombarg","microsoft","uber","daraz","amazon"];
   companies .splice(2,0,'Ola');
   console.log(companies)//remove uber and replace Ola on it's place*/

   /*let companies =["bloombarg","microsoft","uber","daraz","amazon"];
   companies .push("Amazon");
   console.log(companies);//add Amazon in the end */
   
   //-------------function question -1-------------

   /*create afunction using the"function"key word that tales astring as as argument & 
   return the number of vowels in the string*/
 /*Here’s how it works step-by-step:

You call countvowel("hello").
The function initializes count to 0 and defines vowels as "aeiouAEIOU".
It enters the loop and checks each character in "hello":
h: not a vowel
e: is a vowel → increment count to 1
l: not a vowel
l: not a vowel
o: is a vowel → increment count to 2
After the loop completes, it hits return count;, which returns 2.
Finally, console.log prints 2 to the console.
-----code------
   function  countvowel(str){
    let count=0;
    const vowels="aeiouAEIOU";
      for(let i=0;i<str.length;i++){
       if(vowels.includes(str[i])){
        count++;
       }
      }
      return count;
   }
   console.log(countvowel("hello"));
   ----for unknown letter----*/
   /*function myvowel(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"|str[i]==="u"){
           count++;
        }

   }
   return count;
}
//const userInput = prompt("Enter a string:");
//console.log(`Number of vowels: ${myvowel(userInput)}`);
console.log(count);*/
//------------function question -2- using arrow function in question 2----------
/*const countvowel = (str) =>{
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"|str[i]==="u"){
           count++;
        }

   }
   return count;
}*/
//one dimentional array 
//create a function called higest score that receive a 1d array called scores and return the highest score
/*console.clear();
function higherScore(score){
    let max=score[0];
  for(let i=1;i<score.length;i++){
   if(max<score[i]){
      max=score[i];
   }
  }
  return max;
}
let score=[21,25,47,99,34,45];
let maxScore = higherScore(score);
console.log(maxScore);*/
 /// 2D array----
 /*function highestRunscore(playerinfo){
   let highscorer=playerinfo[0][0];
   let highscore=playerinfo[0][1];
   for(let i=1;i<playerinfo.length;i++){
      if(highscore<playerinfo[i][1]){
         highscore=playerinfo[i][1];
         highscorer=playerinfo[i][0];
      }
   }
  return highscorer;
 }
 let playerinfo=[["mehzabin",95],["zabin",99],["meh",77],["mehzabi",98]];
 let res=highestRunscore(playerinfo);
 console.log(res);*/
 ////---------

 /*let h1=document.querySelector("h1");
 console.log(h1.innerText);
 h1.innerText=h1.innerText + " from Daffodil student";*/
  
//------

/*let divs =document.querySelectorAll(".box");
let i=1;
for(div of divs){
  div.innerText=`value ${i}`;
  i++;
}*/
 ///----question-5------
 /*create a toggle button that changes the screen to dark-mode when clicked &light-mode
 when clicked again.*/
 let modeBtn=document.querySelector("#mode");