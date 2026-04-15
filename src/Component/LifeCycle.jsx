import React, { useEffect } from 'react'

export default function LifeCycle() {
    useEffect(()=>{
        handlecheck();

    })
    const handlecheck=()=>{
        console.log("hi luffy");
    }
  return (
    <div>
        {console.log("hi hari")}
        <h1>LifeCycle</h1>

    </div>
  )
}
