import "./areaoftriangle.css";
import { useState } from "react";
import AreaWithBH from "./AreaWithBH/AreaWithBH";
import AreaWithS from "./AreaWithS/AreaWithS";
import AreaWithSA from "./AreaWithSA/AreaWithSA";
export default function AreaOfTriangle() {
  const [comp, setComp] = useState();

  function clickHandlerForOption1() {
    setComp(<AreaWithBH />);
  }

  function clickHandlerForOption2() {
    setComp(<AreaWithS />);
  }

  function clickHandlerForOption3() {
    setComp(<AreaWithSA />);
  }

  return (
    <div>
      <h1>Calculate area of triangle</h1>
      <h3>select the one of the given options:</h3>

      <div className="para">
        <p onClick={clickHandlerForOption1}>
          if you have height and base length
        </p>
        <p onClick={clickHandlerForOption2}>if you have 3 sides</p>
        <p onClick={clickHandlerForOption3}>if you have 2 sides and an angle</p>
      </div>

      {comp}
    </div>
  );
}
