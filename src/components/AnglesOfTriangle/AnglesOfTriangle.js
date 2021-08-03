import React from "react";
import "./anglesoftriangle.css";
import { useState } from "react";
function AnglesOfTriangle() {
  const [angleA, setAngleA] = useState();
  const [angleB, setAngleB] = useState();
  const [angleC, setAngleC] = useState();
  const [result, setResult] = useState();

  function clickHandler() {
    let a = Number(angleA);
    let b = Number(angleB);
    let c = Number(angleC);
    let s = a + b + c;
    console.log(s === 180);
    //console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
    if (s === 180) {
      setResult("all angles makes a traiangle");
    } else {
      setResult("sorry, it doesn't make a triangle");
    }
  }
  return (
    <div className="main">
      <h1>
        Enter the angles in below input boxes and we will tell you if those
        angles make a Triangle
      </h1>
      <label></label>
      <input
        placeholder="Enter 1st angle"
        type="number"
        onChange={(e) => setAngleA(e.target.value)}
      />
      <input
        placeholder="Enter 2nd angle"
        type="number"
        onChange={(e) => setAngleB(e.target.value)}
      />
      <input
        placeholder="Enter 3rd angle"
        type="number"
        onChange={(e) => setAngleC(e.target.value)}
      />
      <button className="btn-angle" onClick={clickHandler}>
        calculate
      </button>
      <h1>{result}</h1>
    </div>
  );
}

export default AnglesOfTriangle;
