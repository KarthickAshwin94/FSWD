 var prompt=require("prompt-sync")();
function guess(num1)
{
    var num2=Math.floor(Math.random()*10)+1;
    if(num1==num2)
    {
        console.log("You guessed the correct number");
    }
    else 
    {
        console.log("You guessed the wrong number and the random number is "+num2);
    }
}

var a=prompt("Enter the random number which is to be checked ");
guess(a);

for(var i=0;i<10;i++)
{
    console.log(i);
}