//------fahrenheit to celcius-----------

/*var f= prompt("Enter the Fahrenheit tempareture :");

var c=(f-32)*5/9;
document.write("celcius"+c);*/

////------ celcius to fahrenheit -----------

/*let c=parseFloat( prompt("Enter the celcius tempareture :"));

let f=(c*9/5)+32;
//document.write("Fahrenheit is"+":" +c+"degree");
console.log(f);*/

//------tempatature-------
 let tempareture=document.querySelector("#number");
function mytemp(){
    let inputtemp=parseFloat(document.getElementById("number").value);
    let celsius = (inputtemp - 32) * 5 / 9;
    document.getElementById("result").innerText = `Celsius: ${celsius.toFixed(2)}°C`;
}