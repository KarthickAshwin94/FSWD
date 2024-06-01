// object literal
// var person={
//     name:"Karthick Ashwin",
//     age:22,
//     place:"Chennai"
// }
// console.log(person);
// console.log(person["name"]);
// console.log(person.age);
// console.log(person["place"]);
// person.name="Ashwin Karthick";
// console.log(person);

//array of objects

// var students=[
//     {
//         name:"Karthick",
//         age:22,
//         place:"Chennai"
//     },
//     {
//         name:"Ashwin",
//         age:20,
//         place:"Germany"
//     }
// ]
// console.log(students);
// console.log("-----------------");
// for(var i=0;i<students.length;i++)
// {
//     console.log(students[i]);
// }
// console.log("The list of student names are ");
// for(var i=0;i<students.length;i++)
// {
//     console.log(students[i].name);
// }


//receipe book in js
//each receipe can be represented as an object
// create an object literal for your favorite list of receipes as an array


// cars.map(value => console.log(value));




// cars.map(values =>console.log(values));// instead of using for loop to traverse an array we can use map 

//this is how a normal function looks in js 

// function fact(num1)
// {
//     while(true)
//     {
//         if(num1!=0)
//         {
//             return num1*fact(num1-1);
//         }
//         else 
//         {
//             return 1;
//         }
//     }
// }
// now lets implement the above function in arrow function format

// const fact=(num1)=>{
//     while(true)
//     {
//         if(num1!=0)
//         {
//             return num1*fact(num1-1);
//         }
//         else 
//         {
//             return 1;
//         }
//     }
// }



// var prompt=require("prompt-sync")();
// var a=prompt("Enter a number to find factorial ");
// var res=fact(a);
// console.log("The factorial of the number "+a+" is "+res);

var receipe =[
    {
        name:"Panner Butter Masala",
        ingridients:["Panner","Butter","Masala"],
        instructions:["Take some panner","Fry it","Mix with gravy","Serve it"]
    },
    {
        name:"Dosa",
        ingridients:["Batter","Salt"],
        instructions:["Grind the batter well","Make the dosa"]
    }
]
for(var i=0;i<receipe.length;i++)
{
    console.log(receipe[i]["name"]);
}

