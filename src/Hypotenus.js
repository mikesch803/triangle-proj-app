import React from 'react'
import {useState} from "react"

function Hypotenus() {
  const [side1, setside1] = useState()
  const [side2, setside2] = useState()
  const [result, setResult] = useState()
  function clickHandler(){
    let a = Number(side1)
    let b = Number(side2)
  
    let s = Math.sqrt(a*a+b*b);
    console.log(s)
    //console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
    setResult(s.toFixed(2))
  }
  return (
    <div>
      <h1>Enter the lengths of sides of right angle triangle</h1>
      <input onChange={e=>setside1(e.target.value)}/>
      <input onChange={e=>setside2(e.target.value)}/>
      <button onClick={clickHandler}>click</button> 
      <h1>{result}</h1>
    </div>
  )
}

export default Hypotenus
