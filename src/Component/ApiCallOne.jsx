import React ,{useState} from 'react'

export default function ApiCallOne() {
  const[apidata,setapidata]=useState([]);
    const handlefetch =async()=>{
        let datas=await fetch("https://fakestoreapi.com/products");
        let res= await datas.json();
        console.log(res);
        setapidata(res);

    }
  return (
    <div>
        <button onClick={handlefetch}>ApiCall</button>
        {apidata.products.map((da)=> (
          <div>
            <h2>{da.title}</h2>
            <img src={da.image} height={200} width={200}/>
            <h3>{da.price}</h3>
          </div>
        ))}


    </div>
  )
}
