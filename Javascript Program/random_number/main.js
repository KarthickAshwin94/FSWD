// first we wil get the input from the user 

var a=document.getElementById("one");
//now we will generate a random number from 1 to 5

var b=Math.floor(Math.random()*10)+1;
if(b>5)
{
    b=b-5;// in order to keep the number from 1 to 5
}
var count=3;
function guess()
{
    if(a.value==b)
    {
        alert("You guessed the correct number");
        document.getElementById("three").textContent=" you guessed it right";
        document.getElementById("four").textContent="Chances pending are "+count;
    }
    else 
    {
        count--;
        alert("You guessed the wrong number, remaining chances are "+count);
        document.getElementById("three").textContent=" you guessed it wrong";
        document.getElementById("four").textContent="Chances pending are "+count;
        if(count==0)
        {
            alert("You guessed the wrong number and the random number is "+b);
        }
    }
}