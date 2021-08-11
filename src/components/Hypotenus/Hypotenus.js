import React from "react";
import "./hypotenus.css";
import { useState } from "react";

function Hypotenus() {
  const [side1, setside1] = useState();
  const [side2, setside2] = useState();
  const [result, setResult] = useState();
  function clickHandler() {
    let a = Number(side1);
    let b = Number(side2);

    let s = Math.sqrt(a * a + b * b);
    console.log(s);
    //console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
    if (s) {
      setResult(s.toFixed(2));
    } else {
      setResult();
    }
  }
  return (
    <div className="main">
      <h1>Enter the lengths of sides of right angle triangle</h1>
      <input
        onChange={(e) => setside1(e.target.value)}
        placeholder="Enter 1st side "
      />
      <input
        onChange={(e) => setside2(e.target.value)}
        placeholder="Enter 2nd side "
      />
      <button className="btn-hypo" onClick={clickHandler}>
        calculate
      </button>
      {result && <h1 className="result">Hypotenus is {result}</h1>}
    </div>
  );
}

export default Hypotenus;
