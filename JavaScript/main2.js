// first we need to read the contents of the div tag in order to change its existing contents 

var a=document.querySelector(".red");
//now we read the contents of btn1 and btn2

var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
btn1.addEventListener("click",function(){
    a.classList.add("black");
})

btn2.addEventListener("click",function(){
    a.classList.remove("black");
})
