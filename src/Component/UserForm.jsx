import React,{useState} from 'react'

export default function UserForm(){
  const [name,setname]=useState("");
  const[phone,setphone]=useState("");
  const[email,setemail]=useState("");
  const[show,setshow]=useState(false);
  const handlename=(e)=>{
    setname(e.target.value);
  }
  const handlephone=(e)=>{
    setphone(e.target.value);
  }
  const handleemail=(e)=>{
   setemail(e.target.value);
  }
  const handlesubmit=(e)=>{
    setshow(true);
  }
  
  return (
    <div>
  
   {!show ? <div>
      <h1>User Form</h1>
      <input onChange={handlename} type="text" placeholder="Enter ur name"/>
      <br/><br/>
      <input onChange={handlephone} type="text" placeholder="Enter ur number"/>
      <br/><br/>
      <input onChange={handleemail} type ="E-mail" placeholder ="Enter ur mail"/>
      <br/><br/>
      <button onClick={handlesubmit}>Submit</button>
      </div>
      :null}

    {show ? 
      <div>
        <h1>Form submitted</h1>
        <h2>Name: {name}</h2>
        <h2>phone: {phone}</h2>
        <h2>email:{email}</h2>

      </div>
:null}
      <br/><br/> 
      </div>
  )
  }
  

