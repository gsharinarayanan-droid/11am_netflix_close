import React, {useState} from 'react'

export default function CounterEx() {
    const[count,setCount]=useState(1);
    const handleadd =()=>{
        setCount(10);
    }
  return (
    <div>
        <h1>Counter ={count} </h1>
        <button onClick={handleadd}>ADD PLEASE</button> 
    </div>
  )
}
