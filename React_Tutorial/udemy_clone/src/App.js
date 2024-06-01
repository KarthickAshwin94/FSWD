// here we will use all the components 
// now we need use all the components in components

import react from "react"
import reactDOM from "react-dom/client"
import Categories from "./components/categories";
import Flash_sale from "./components/flash_sale";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Popular_course from "./components/popular_course";
import Recommended_course from "./components/recommended_courses";
import Recommended_topic from "./components/recommended_topics";
const root=reactDOM.createRoot(document.getElementById("root"));

function App()
{
  return(
    <Navbar></Navbar>
  );
}

export default App;