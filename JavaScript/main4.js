//now when the user clicks the button we need to remove the hidden class from the gray_layer class
// read the values of the gray layer class
var gray=document.querySelector(".gray_layer");
var btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(){
    gray.classList.remove("hidden");
})

var close=document.getElementById("close");
close.addEventListener("click",function(){
    gray.classList.add("hidden");
})