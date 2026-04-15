import react, {useState} from "react"
export default function Counter(){
    const[count,setCount]=useState(1);
    const handleadd =()=>{
        setCount(count+1);
    }
    return(
        <div>
        <h1>Counter={count}</h1>
        <button onClick={handleadd}>Add</button>
        </div>
    )
}
//state is used to store the data in the component
//useState is a hook it is use to acess the state 
//hook is ainbuilt function in react