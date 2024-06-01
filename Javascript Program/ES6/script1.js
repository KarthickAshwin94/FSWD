// we have 3 types of functions 
//normal function, anonymous function,arrow function 

//normnal function 

function phone1()
{
    console.log("Apple");
}
phone1();

// now we will write anonymous function
 var phone2=function()
 {
    console.log("Oneplus");
 }
 phone2();
 

 // now we will write arrow functions 

 var phone3=()=>
 {
    console.log("Samsung");
 }
 phone3();

//normal function
 function add1(a,b)
 {
    console.log(a+b);
 }
 add1(10,10);


 //anonymous function
 var add2=function(a,b)
 {
    console.log(a+b);
 }
 add2(10,12);

 //arrow function

 var add3=(a,b)=>{
    console.log(a+b);
 }

 add3(100,100);


//   what is the advantage of using backticks in javascript 
//  the advantage of using backticks is similar to \n it helps us write strings in muliplr lines
 console.log(`Hello
 how are you 
 I am fine
 how it is going keep going `);

 var name1="ashwin";
 console.log("My name is "+name1);

 //now let's see the use of template literals using backticks 
  var name2="Karthick Ashwin";
  console.log(`My name is ${name2}`);


  // now lets see what is destructring in Java script

  var a=[10,20,30,40];
  num1=a[0];
  num2=a[1];
  num3=a[2];
  num4=a[3];

  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num4);
 
//instead of assigning each values to the variables individually we can use destructuring 
  var arr1=[100,200,300,400];
  var [num1,num2,num3,num4]=arr1;
  console.log(num1,num2,num3,num4);

//destructuring in objects
//here we need to specify the same attribute name used inside the object as the variable name 
  var person={
    name:"Ashwin",
    age:12
  }

  var {age}=person
  var {name}=person;
  
  console.log(name);
  console.log(age);

//   Spread and Rest operator

// Rest Operator is ... and then specify a variable c which will store the rest of the values in the array format

//example

function rest(a,b)
{
    console.log(a+b);
} 
rest(10,20,30);
// it will take 10 and 20 and print the sum as 30. 

// so now we can use rest operator 

function rest2(a,b,...c)
{
    console.log(a+b);
    console.log(c);
}
rest2(10,20,30,40,50);


//spread operator also uses ...
var num1=[10,20,30];
var num2=[...num1,40,50];
console.log(num1);
console.log(num2);


// default parameter

var add10=(a,b=20)=>{
    console.log(a+b);
}
//  So when we pass only one value it will take the default values 
add10(10);   
// When we pass the required number of values it ignore the default values
add10(10,40);


// now we will see classes in javascript

// classes in javascript is similar to object literals

// class name must start with a capital letter which is a convention

class Student {
     name="";
     mark=0;

     studentDetails()
     {
        //  we need to specify this.name and this.mark in order to use tha variables defined within the class
        console.log(`My name is ${this.name}`);
        console.log(`My mark is ${this.mark}`)
     }

}
var karthick=new Student();
//  now we have created an object for the class student

karthick.name="Karthick Ashwin";
karthick.mark=100;
karthick.studentDetails();

// now we will create another object 

var sriram =new Student();
sriram.studentDetails();
 

class mobile{
    name="";
    price=0;
    points=0;

    mobileSpec()
    {
        console.log();
        console.log(`The name of the mobile is ${this.name}`);
        console.log(`The price of ${this.name} is ${this.price}`);
        console.log(`The points awarded to the mobile is ${this.points}`);
        console.log();
    }
}
// now we will create 2 objects for the class mobile
var Apple=new mobile();
Apple.name="Apple";
Apple.price=100000;
Apple.points=8;
Apple.mobileSpec();

var Oneplus=new mobile();
Oneplus.name="oneplus";
Oneplus.price=70000;
Oneplus.points=8;
Oneplus.mobileSpec();


// now we will see how to create a constructor

class laptop{

    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }

    laptopspec(){
        console.log(`The name of the laptop is ${this.name}`);
        console.log(`The price of the laptop is ${this.price}`);
    }
}

//now we will create an object for the above class and pass the values to it while creating the object itself

var dell=new laptop("dell",100000);
dell.laptopspec();

var mac=new laptop("mac",100000);
mac.laptopspec();


// Now we  will see what is callback in javascript

// A callback function is a function which is passed as an argument to another function

//  now let us see an example

function chocolate()
{
    console.log("I am eating chocolate now");
}
function shop(chocolate)
{
    console.log("I went to shop")
    chocolate();
}
shop(chocolate);
// now when we call shop function we also pass chocolate function with it so after executing shop function we will execute chocolate function


//  Promises in javascript

// Synchronous does not support parallel processing which means it can execute only one task at a time

// Asynchronous means executing more than 1 task at the same time it supports parallel processing

// setTimeout(function_name,time_in_ms); this is used to call a function after some time in seconds

// function display()
// {
//     console.log("Hello there!");
// }
// setTimeout(display,5000);


console.log("one");

setTimeout(function(){
    console.log("Two");
},
5000
)
console.log("three");

//  So in the above example are examples of asynchronous functions because after printing one, it printed three and then it printed two

// Promise in javascript

//promise is an object and it has 2 states namely resolve and reject

var amazon=new Promise(function(resolve,reject){
    var delivered=true;
    if(delivered==true)
    {
        resolve("The laptop delived, pay the amount!");
    }
    else {
        reject("Sorry for the delay raise a complaint");
    }
})

amazon.then(function(msg1){
    console.log(msg1);
})
.catch(function(msg2){
    console.log(msg2);
})


// declaring a class in javascript

 class Cars{
    constructor(name,price,color,points)
    {
        this.name=name;
        this.price=price;
        this.color=color;
        this.points=points;
    }
    carsdisplay()
    {
        console.log(`The name of the car is ${this.name}`);
    }
 }
 // creating an object for the cars class
 var honda=new Cars("honda",1200000,"black",9);
 honda.carsdisplay();


//  await keyword is used in asynchronous functions 

//let us consider the following example 


var result=new Promise(function(resolve){

    setTimeout(function(){
        resolve("Delivered successfully");
    },5000);
})

async function waiting()
{
    var res= await result;
    console.log(res);
}
waiting();

// now let us see array methods in javascript

var arr2=[10,20,30,40];
//traversing an array using normal for loop
for(var i=0;i<arr2.length;i++)
{
    console.log(arr2[i]);
}
console.log("------");
// traversing an array using for each loop

// for each loop can only be used with array

arr2.forEach(function(data,index){

    console.log(`${data}:${index}`); 
})

// import the prompt function from prompt-sync

var prompt=require("prompt-sync")();
var fruits=["Apple","Mango","Orange","banana"];
var req=prompt("Enter the fruit name");

// var f=0;
// for(var i=0;i<fruits.length;i++)
// {
//     if(req==fruits[i])
//     {
        
//         console.log(`${fruits[i]}:${i}`);
//         f=1;
//         break
//     }
// }

var f=0;
// using for-each loop
fruits.forEach(function(data,i){
    data=data.toLowerCase();
    req=req.toLowerCase();
    if(data==req)
    {
        console.log(`${data}:${i}`);
        f=1;
    }
    
}
)
if(f==0)
{
    console.log("-1") ;
}

// filter method in array 

var arr3=[1,2,3,4,5,6,7,8,9,10];
var even1=arr3.filter(function(data){
    if(data%2==0)
    {
        return true;
    }
    else{
        return false;
    }
})
console.log(even1);

var numbers=[23,33,67,22,12,77];
var res1=numbers.find(function(data){

    if(data>50)
    {
        return true;
    }
   
})
console.log(res1);

// map function in java is used with arrays where it is used to modify each and every element of the array
 
const numbers1=[1,2,3,4,5];

var numbers2=numbers1.map(function(data){

    return(data*data);
})

console.log(numbers2);



