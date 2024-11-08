/*let head=document.getElementById("heading");
console.dir(head);*/

//getclass
/*let headings=document.getElementsByClassName("heading2");
console.dir(headings);
console.log(headings);*/
//get tag
/*let para=document.getElementsByTagName("p");
console.dir(para);
console.log(para);*/

//quaryselestor
/*let allel=document.querySelectorAll(".heading2");
console.dir(allel);
console.log(allel);*/
//style-------

/*let div=document.querySelector("div");
div.style.backgroundColor="green"; 
div.style.fontSize="25px";
div.style.color="white";*/
///------ insert element------
/*let newbtn=document.createElement("button");
newbtn.innerText="click me!"
console.log(newbtn)
let ele=document.querySelector(".box");
ele.style.backgroundColor="green"; 

ele.prepend(newbtn);
ele.before(newbtn);
ele.after(newbtn);
ele.append(newbtn);//lastone tar priority besi
//remove----
let para=document.querySelector("p");
para.remove();*/

///-----
/*let newbtn=document.createElement("button");
newbtn.innerText="click me!"
newbtn.style.color="white";
newbtn.style.backgroundColor="blue";
console.log(newbtn)
let ele=document.querySelector("body");
ele.style.backgroundColor="green"; 
ele.prepend(newbtn);*/

//-------

/*let para=document.querySelector(".contant");
para.classList.add("newclass");*/

///------event-----
/*let mypara=document.querySelector("#paraid");
function mymassage(){
   mypara.innerText="congratulations! You do it";
}*/

///----img click-----
let myimg=document.querySelector("#orangy");
function mypicture1(){
   myimg.src="orange.jpg";
}
function mypicture2(){
   myimg.src="watermelon.jpg";
}