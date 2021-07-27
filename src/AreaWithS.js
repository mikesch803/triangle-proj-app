import React from "react";
import { useState } from "react";
function AreaWithS() {
  const [side1, setside1] = useState();
  const [side2, setside2] = useState();
  const [side3, setside3] = useState();
  const [area, setArea] = useState();

  function clickHandler() {
    let a = Number(side1);
    let b = Number(side2);
    let c = Number(side3);
    let s = (a + b + c) * 0.5;
    console.log(s);
    console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
    setArea(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
  }

  return (
    <div>
      <input type="number" onChange={(e) => setside1(e.target.value)} />
      <input type="number" onChange={(e) => setside2(e.target.value)} />
      <input type="number" onChange={(e) => setside3(e.target.value)} />
      <button onClick={clickHandler}>click</button>

      <h1>Area is : {area}</h1>
    </div>
  );
}

export default AreaWithS;
