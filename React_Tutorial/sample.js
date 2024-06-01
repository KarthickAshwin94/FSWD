// function one()
// {
//     var grandFather="Mike"
//     two(grandFather)
// }

// function two(gf)
// {
//     var father="John"
//     three(gf,father)
  

// }

// function three(gF,F)
// {
//     var child="Sam"
//     console.log("I am "+child+" and father name is "+F+" and my grandfather name is "+gF);

// }

// one();

// now we need to pass the values from function one to two and from two we need to pass the value to three



// Expressions are something which produces some value
// for example when we add 1+1 we get 2 which produces some value
// When we have a function which returns hello and when we call that function it also produces some value


// functions are example for expressions because they return a value 
// map is also an expression because they also return values
// if-else, for loop are examples for statements


var a=[1,2,3,4,5,6,7,8]

var a1=a.map(function(item){
    return(item*2);
})

console.log(a1);

