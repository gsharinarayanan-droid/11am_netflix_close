import React, { useEffect, useState } from 'react'
import axios from "axios";
 

export default function TodoList()
 {
    const[fruits,setfruits]=useState("");
   const[fruitslist,setfruitslist]=useState([]);
    const handletodo=(e)=>{
       setfruits(e.target.value);
    };
   const handleadd=async()=>{
      let body={
        task:fruits
      }
        let data=axios.post("http://localhost:3000/todoList",body)
        alert("data sent succesfully");  
    }
  return (
    <div>
        <h1>fruits list</h1>
        <input onChange={handletodo}placeholder='Enter ur list'/>
        <button onClick={handleadd}>Submit</button>
    </div>
  )
}


