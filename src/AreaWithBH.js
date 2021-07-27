import React from "react";
import { useState } from "react";
function AreaWithBH() {
  const [base, setBase] = useState();
  const [height, setHeight] = useState();
  const [area, setArea] = useState();

  function clickHandler() {
    console.log(0.5 * base * height);
    setArea(0.5 * base * height);
  }

  return (
    <div>
      <input onChange={(e) => setHeight(e.target.value)} />
      <input onChange={(e) => setBase(e.target.value)} />
      <button onClick={clickHandler}>click</button>

      <h1>Area is : {area}</h1>
    </div>
  );
}

export default AreaWithBH;
