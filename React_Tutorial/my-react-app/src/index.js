
// function Name_Two()
// {
//   return(
//     <div style={{backgroundColor:"blue",color:"white",padding:"20px",margin:"10px"}} >
//       <h1>Sriram</h1>
//       <h1>Agriculture</h1>
//     </div>
//   )
// }

// function Name_Three()
// {
//   return(
//     <div style={{backgroundColor:"blue",color:"white",padding:"20px",margin:"10px"}} >
//       <h1>Kamalesh</h1>
//       <h1>ECE</h1>
//     </div>
//   )
// }

// Now we need use map function in order to reduce the repetation of the components

// var arr1=[" Karthick "," Ashwin "," Sriram "]
// root.render(
//   <div>
//     <Name_One id={
//       arr1.map(function(item){
//         return (item)
//       })
//     }></Name_One>
//   </div>
// )

// now we use the map function as props to the component

// Now we will place the component inside the map function

// var arr1=["Karthick","Ashwin","Sriram"]
// root.render(
//   <div>
//    {
//     arr1.map(function(item)
//   {
//     return <h1>{item}</h1>
//   })
//    }
//   </div>
// )

// Expressions are something which produces some value
// for example when we add 1+1 we get 2 which produces some value
// When we have a function which returns hello and when we call that function it also produces some value


// functions are example for expressions because they return a value 
// map is also an expression because they also return values
// if-else, for loop are examples for statements



// now we will define three components

// var arr1=["Karthick","Ashwin","Sriram"]

import react from "react"
import reactDOM from "react-dom/client"

const root=reactDOM.createRoot(document.getElementById("root"));

function One_Detail(name)
{
  return(
    <div style={{backgroundColor:"purple",color:"white",padding:"20px",margin:"10px",width:"500px"}}>
      <h1>{name.id}</h1>
      <h1>{name.author}</h1>
    </div>
  )
}
// since we are using vanilla javascript we need to use {}
// now we will create array of objects 
var books=[
  {
    name:"Rich Dad Poor Dad",
    author:"Robert Kiyosaki"
  },
  {
    name:"Atomic Habits",
    author:"James Clear "
  },
  {
    name:"Mindset",
    author:"Carol S"
  }
]
root.render(

  <div>
    
    {
      books.map(function(item)
    {
      return(<One_Detail id={item.name} author={item.author}></One_Detail>)
    })
    }
  </div>
)
