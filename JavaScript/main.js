// we will get the input from the input field
var a=document.getElementById("one");
//we will generate a random number
var b=Math.floor(Math.random()*10)+1;
var count=3;
if(b>5)
{
    b=b-5;
}
var c=document.getElementById("two");
c.addEventListener("click",function()
{
    if(a.value==b)
    {
        document.getElementById("three").textContent="You guessed it right, Great job!"
        document.getElementById("four").textContent="The remaining chances are "+count;
        alert("You guessed the correct number!");
    }
    else 
    {
        document.getElementById("three").textContent="You guessed the wrong number, try again!";
        document.getElementById("four").textContent="The remaining chances are "+count;
        count--;
        if(count==0)
        {
            alert("The random number is "+b);
        }
        else 
        {
            alert("you guessed the wrong number");
        }
    }
})
