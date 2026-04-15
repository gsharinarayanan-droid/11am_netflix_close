import React, { useState } from 'react'

export default function MovieBook({name,rent,handleClick}) {
  const[data,setdata]=useState([1,54,7,90]);
  return (
    <div>
        <h1>Movie Name:{name} </h1>
        <h2>Ticket:{rent} </h2>
        <button onClick={()=> handleClick("data")}>Book</button>
    </div>
  )
}
