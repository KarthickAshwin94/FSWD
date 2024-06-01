// var a=[10,20,30,40,50];
// a.forEach(function(data,index)
// {
//     console.log(`The value is ${data} and the index is ${index}`);
// })


class Cars {
    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }
    carsdisplay()
    {
        console.log(`The name of the car is ${this.name } and price of teh car is ${this.price}`);
    }
}

//  create an object for the class 

var bmw=new Cars("bmw",10000000);
// bmw is an instance for the class Cars
bmw.carsdisplay();

// lets create another object for the class cars

var honda=new Cars("honda",1000000);
// honda is an instance for the class Cars
honda.carsdisplay();

//  for loop in array 

var arr1=[10,20,30,40];
for(var i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}

// now we can use for each method for arrays 
arr1.forEach(function(data,index){

    console.log(`The index of the element is ${index} and the value of the element is ${data}`);
})

//  now let us see default parameters in functions 

function add(a,b=20)
{
    console.log(a+b);
}
add(10);


function join1(...num1)
{
    console.log(num1);
    console.log(num1.join(','));
}
join1(10,20,30);

