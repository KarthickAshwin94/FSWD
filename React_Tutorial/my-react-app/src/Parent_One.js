// now import child component here so that we can call the child component from here
import Child_One from './Child_One'
function Parent_One()
{
    return(
        <div>
            <h1>I am Parent</h1>
            <Child_One parentName={"Mike"}></Child_One>
        </div>
    )

}

export default Parent_One
