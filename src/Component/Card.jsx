import React from 'react'
import heropng from "./assets/hero.png";

export default function Card() {
  return (
    <div>
        <div class="card" style= {{"width":"18 rem"}}>
  <img src={"heropng"} class="card-img-top" alt="hero"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}
