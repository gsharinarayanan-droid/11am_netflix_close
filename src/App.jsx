import MovieView from "./Component/MovieView"
//import "./App.css"
import Counter from "./Component/Counter"
import Character from "./Component/Character"
import Moviedetails from "./Component/Moviedetails"
import ApiCallOne from "./Component/ApiCallOne"
import LifeCycle from "./Component/LifeCycle"
import CounterEx from "../PracticeFolder/CounterEx"
import UserForm from "./Component/UserForm"
import Basic from "../PracticeFolder/Basic"
import { BrowserRouter,Router,Route,Link, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./Component/Home"
import TodoList from "./Component/TodoList"
import MovieBook from "./Component/MovieBook"
import Card from "./Component/Card"

  function App(){
   // const moviedata=[
  {/*{
    name:"kubera",
    rent:200
 },
 {
  name:"Good Night",
  rent:290
 },
 {
    name:"Kara",
    rent:500
 },
 {
  name:"VIP",
  rent:100
 },
 {
  name:"Raayan",
  rent:340
 },
 {
  name:"idly kadai",
  rent:50

 },

  ]*/}

{/*const handleClick=(nu)=>{
  console.log(nu);
        
    }*/}

  return(
    <div>
      {/*<MovieView/>
     <Counter/>     
     <Character/>
     <Moviedetails/>
     <ApiCallOne/>
    <LifeCycle/>
     <CounterEx/>
     <UserForm/>
     <Basic/>/*}

    
   {/* <Routes>
       <Route path="/"element={<MovieView/>}/>
       <Route path="/product" element={<Counter/>}/>
       <Route path ="/about"element={<Character/>}/>
       <Route path ="/details" element={<UserForm/>}/>
      <Route path="/contact"element={<Moviedetails/>}/>
     <Route path="/a" element={<Home/>}/>
      </Routes>
     
    </BrowserRouter> 

    
{/*<TodoList/>
{moviedata.map((da,index)=>(
  <MovieBook handleClick={handleClick} key={index}name={da.name}rent={da.rent}/>
))}*/}
  <Card/>
  <h1>Audiiiiiiiiiiiiiiiiii</h1>

</div>
  );
}

export default App;


