import {useState} from 'react'
let datas =[
        {Name:"Theri", rating:8.5},
        {Name:"Kubera",rating:10},
        {Name:"Idly Kadai",rating:7},
        {Name:"VIP",rating:10},
        {Name:"Mari",rating:9},
] 

export default function Moviedetails() {
    const[details,setdetails]=useState(datas);
  return (
    <div>
        <h1>Movie Info</h1>
        {details.map((data)=>(
        <div style={{width:"100%",textAlign:"right",paddingleft:"100px"}}>
            <h2>Name:{data.Name}</h2>
            <h2>Rating:{data.rating}</h2>
        </div>
    
  ))}
  </div>
);
 }

