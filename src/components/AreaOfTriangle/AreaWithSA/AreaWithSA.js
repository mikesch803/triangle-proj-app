import React from "react";
import "./areawithsa.css";
import { useState } from "react";
function AreaWithSA() {
  const [side1, setside1] = useState();
  const [side2, setside2] = useState();
  const [angle, setAngle] = useState();
  const [area, setArea] = useState();

  function clickHandler() {
    let a = Number(side1);
    let b = Number(side2);
    let c = Number(angle);
    // let s = (a+b+c)*0.5;
    // console.log(s)
    console.log((b * a * Math.sin((c * Math.PI) / 180)) / 2);
    setArea(((b * a * Math.sin((c * Math.PI) / 180)) / 2).toFixed(2));
  }

  return (
    <div className="main">
      <input
        placeholder="Enter side 1"
        type="number"
        onChange={(e) => setside1(e.target.value)}
      />
      <input
        placeholder="Enter side 2"
        type="number"
        onChange={(e) => setside2(e.target.value)}
      />
      <input
        placeholder="Enter angle"
        type="number"
        onChange={(e) => setAngle(e.target.value)}
      />
      <button className="btn-sa" onClick={clickHandler}>
        calculate
      </button>

      {area && <h1>Area is : {area}</h1>}
    </div>
  );
}

export default AreaWithSA;
