//  basic sof javascript 

// normal function 
function add1(a,b)
{
    console.log(a+b);
}
add1(10,20);

//anonymous function

var add2=function(a,b)
{
    console.log(a+b);
}
add2(20,20);

//arrow functions 

var add3=(a,b)=>{
    console.log(a+b);
}

add3(100,100);

// now we will see template literals 

console.log(`Hello all! I am Karthick Aswhin.
I am 22 years old 
and I love to reveiw smartphones `);

//  we can also use backticks when we want to insert more than 1 html element at the same time

// now we will see destructuring assignment

var arr1=[10,20,30,40];
//instead of using individual variables we can use destructuring assignment
var [a,b,c]=arr1;
console.log(a,b,c);

// now let us see destructuring assignment for objects

var person1={
    name:"Karthick Ashwin",
    place:"Chennai",
    Roll_No:200801094,
    Skills:"Web_Development"
}

var {name,place}=person1;
var {Skills}=person1;
console.log(name,place);
console.log(Skills);

// now we will see  spread and rest operators in javascript

// rest operator is ...

var great=(a,b,...c)=>{
    if(a>b)
    {
        console.log(`${a} is greater than ${b}`);
    }
    else {
        console.log(`${b} is greater than ${a}`);
    }
    console.log(c);
}

great(10,20,30,40,50,60);


// now we will see spread operator which is ...

var a1=[10,20,30,40];
var a2=[...a1,50,60];
console.log(a2);


//now we will see default parameters in javascript

function small(a,b=20)
{
    if(a<b)
    {
        console.log(`${a} is smaller than ${b}`)
    }
    else 
    {
        console.log(`${b} is smaller than ${a}`);
    }
}

small(10,5);

// now we will see classes and objects in javascript

class student{
    constructor(name,roll_no,age,place)
    {
        this.name=name;
        this.roll_no=roll_no;
        this.age=age;
        this.place=place;
    }
    //now we will declare a function to print the values 

    studentdetails()
    {
        console.log(`The name of the student is ${this.name}`);
        console.log(`The student's roll number is ${this.roll_no}`);
        console.log(`The age of the student is ${this.age}`);
        console.log(`The Student is from ${this.place}`);
    }
}
var Karthick=new student("Karthick Aswhin",200801094,22,"Chennai");
Karthick.studentdetails();
var Ganesh=  new student("Ganesh Kumar",200801066,22,"Chennai");
Ganesh.studentdetails();

// now we will see callback

// now we need to write a function to add them first and then find product of them



function bye()
{
    console.log("Bye guys ");
}
function hello(bye)
{
    console.log("Hello guys ");
    bye();
}

hello(bye);

//now we see promises in javascript

// lets say we order a laptop from amazon and we wanted to know the status of the laptop 


class Cars {
    constructor(name,color,price,points)
    {
        this.name=name;
        this.color=color;
        this.price=price;
        this.points=points;
    }
    carsdisplay()
    {
        console.log(`The name of the car is ${this.name}`);
        console.log(`The color of the car is ${this.color}`);
        console.log(`The price of the car is ${this.price}`);
        console.log(`The score provided to the car on a scale of 10 is ${this.points}`);
    }

}
//object creation 
 var honda=new Cars("honda","blue",1000000,8);
 honda.carsdisplay();
 var tata=new Cars("Tata","Black",1000000,9);
 tata.carsdisplay();


//  Promises in Javascript

var amazon=new Promise(function(resolve,reject){
    var status=false;
    if(status==true)
    {
        resolve("Yes, the order was received");
    }
    else{
        reject("No, I haven't received the order");
    }
})

amazon.then(function(msg1){console.log(msg1);}) .catch(function(msg2){console.log(msg2);})


console.log("This is task1 ");
setTimeout(function(){console.log("This is task2");},5000);
console.log("This is task3");


// now let us see some methods of array used in javascript

// for each method

var numbers1=[10,20,30,40];
numbers1.forEach(function(data,index){
    console.log(`${data}:${index}`);
})

//  to remove duplicate elements we can use set

console.log(new Set(numbers1));

// filter methd in array

var numbers2=numbers1.filter(function(data,index){
    if(data%2==0)
    {
        return true;
    }
})
console.log(numbers2);

// map method in array 

var numbers3=numbers1.map(function(data,index)
{
    return(data*data);
})
console.log(numbers3);

var amazon =new Promise(function(resolve,reject){

    var status=true;
    if(status==true)
    {
        resolve("Yes");
    }
    else{
        reject("No");
    }
})