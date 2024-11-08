let counter=0;
const mysubvalue=document.getElementById("mysub");
const myreset=document.getElementById("reset");
const myplusbtn=document.getElementById("myplus").addEventListener('click',function(){
    counter++;
    const countervalue=document.getElementById('count2');
    countervalue.innerHTML=counter;
});
mysubvalue.addEventListener('click',function(){
    counter--;
    const countervalue=document.getElementById('count2');
    countervalue.innerText=counter;
});
myreset.addEventListener('click',function(){
    counter=0;
    const resetvalue=document.getElementById('count2');
    resetvalue.innerText=counter;
})