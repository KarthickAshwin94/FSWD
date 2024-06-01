
var a=[10,20,30,40,50,60];
console.log("The array before doing any manipulations "+a);
a.push(100);
console.log("The array after inserting the value 100 is "+a);
a.pop();// removes the last element
console.log("The array after removing the last element is "+a);
//slice and splice 
//slice is used to generate subarray from the given array

var b=a.slice(1,4);
console.log(b);
//splice in js used to perform addition and deletion of elements in the existing array itself
// the format of splice is array_name.splice(index_position,number of elements to be deleted,element_to_be_inserted)
console.log("The array before performing any manipulations "+a);
a.splice(2,2,66,67,68,69);
//10 20 67 68 69 50 60
console.log(a);

//indexOf
//includes
//length
var d=[1,2,3,4,5,6];
console.log(d.indexOf(4));
console.log(d.includes(3));
console.log(d.length);

var num1=[12,13,14,15];
num1[0]=122
console.log(num1);
num1=[1,2,3,4,5,6];
console.log(num1);
const num2=[122,123,124,125,126];
console.log("New Operations ");
console.log(num2.length);
console.log(num2.includes(122));
console.log(num2.indexOf(123));
num2[3]=1234;
console.log(num2);