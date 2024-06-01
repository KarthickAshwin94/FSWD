import react from "react"
import reactDOM from "react-dom/client"
import './style.css'
import first_name from './data'
import {last_name,age } from './data'

const root=reactDOM.createRoot(document.getElementById("root"));
// now we can create a component
// Previously the components are made using classes 
// Now a days the components are made using functions
// The First letter of the function name must be in capital
function Navbar()
{
  return (<div>
    <ul>
      <li> <a href="#">Home</a> </li>
      <li> <a href="#">Contact</a> </li>
      <li> <a href="#">Feedback</a> </li>
    </ul>
  </div>)
}

// About component
function About()
{
  return(
    <div>
      <h1>About Us</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, facilis soluta nemo deleniti esse possimus sint id minima temporibus omnis hic laboriosam at ab optio nam cum impedit illum corporis!</p>
    </div>
  )
}
 
root.render(<div>
  <h1>{first_name}</h1>
  <h1>{last_name}</h1>
  <h1>{age}</h1>
</div>)