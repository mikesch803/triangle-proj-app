import React from "react";
import { useState } from "react";
import "./AreaWithBH.css";
function AreaWithBH() {
  const [base, setBase] = useState();
  const [height, setHeight] = useState();
  const [area, setArea] = useState();

  function clickHandler() {
    console.log(0.5 * base * height);
    setArea(0.5 * base * height);
  }

  return (
    <div className="main">
      <input
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Enter Height"
      />
      <input
        onChange={(e) => setBase(e.target.value)}
        placeholder="Enter Base"
      />
      <button className="btn-bh" onClick={clickHandler}>
        calculate
      </button>
      {area && <h1>Area is : {area}</h1>}
    </div>
  );
}

export default AreaWithBH;
