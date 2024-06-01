//now we need to write a program to generate otp but we need to get the number of digits as input from the user
var prompt=require("prompt-sync")();
var n=prompt("Enter the number of digits in the otp");

var otp=generateOTP(n);
console.log("The OTP is "+otp);


function generateOTP(n)
{
    var str1="";
    for(var i=0;i<n;i++)
    {
        str1+=(Math.floor(Math.random()*10)).toString();
    }
    return str1;
}
