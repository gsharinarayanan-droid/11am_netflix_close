import React,{useState} from 'react'

export default function Character() {
    const[data,setdata]=useState(["Hari","Ram","Ravi","Pavan"]);
  return (
    <div>
        {data.map((da)=>(
            <h1>{da}</h1>
        ))}
        
    </div>
  )
}

  


