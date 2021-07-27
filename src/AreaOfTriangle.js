import "./styles.css";
import { useState } from "react";
import AreaWithBH from "./AreaWithBH";
import AreaWithS from "./AreaWithS";
import AreaWithSA from "./AreaWithSA";
export default function AreaOfTriangle() {
  const [p, setP] = useState();

  function clickHandlerForOption1() {
    setP(<AreaWithBH />);
  }

  function clickHandlerForOption2() {
    setP(<AreaWithS />);
  }

  function clickHandlerForOption3() {
    setP(<AreaWithSA />);
  }

  return (
    <div>
      <h1>calculate area of triangle</h1>
      <h3>select the one of the given options</h3>

      <div>
        <p onClick={clickHandlerForOption1}>
          <input type="radio" />
          if you have height and base length
        </p>
        <p onClick={clickHandlerForOption2}>
          <input type="radio" />
          if you have 3 sides
        </p>
        <p onClick={clickHandlerForOption3}>
          <input type="radio" />
          if you have 2 sides and an angle
        </p>
      </div>

      {p}
    </div>
  );
}
