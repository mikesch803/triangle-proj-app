import React from "react";
import "./quiz.css";
import { useState, useRef } from "react";
function Quiz() {
  const queList = useRef(null);
  const [score, setScore] = useState();
  const correctAns = ["AB^2 + BC^2 = AC^2", "20", "45", "90", "90"];

  function clickHandler() {
    let index = 0;
    var points = 0;
    const data = new FormData(queList.current);
    for (let input of data.values()) {
      if (input === correctAns[index]) {
        points++;
      }
      index++;
    }

    setScore("your score is " + points);
  }

  return (
    <div className="main">
      <form ref={queList}>
        <div className="que-container">
          <h3>
            1. The Pythagorean Theorem states that: "The square of the
            hypotenuse of a right angle triangle is equal to the sum of the
            squares of the other two sides." This means that, in a right
            triangle ABC with hypotenuse AC:
          </h3>
          <label>
            <input required type="radio" value="AB * AC = BC^2" name="que-1" />
            AB * AC = BC^2
          </label>
          <label>
            <input
              required
              type="radio"
              value="(AB + BC) (AB - BC) = AC^2"
              name="que-1"
            />
            (AB + BC) (AB - BC) = AC^2
          </label>
          <label>
            <input
              required
              type="radio"
              value="AB^2 + BC^2 = AC^2"
              name="que-1"
            />
            AB^2 + BC^2 = AC^2
          </label>
        </div>

        <div className="que-container">
          <h3>
            2. There is a triangle XYZ where XY is perpendicular to YZ and angle
            X = 70 degrees. What is the measure of angle Z?
          </h3>
          <label>
            <input required type="radio" value="130" name="que-2" />
            130
          </label>
          <label>
            <input required type="radio" value="20" name="que-2" />
            20
          </label>
          <label>
            <input required type="radio" value="110" name="que-2" />
            110
          </label>
        </div>

        <div className="que-container">
          <h3>
            3. There is a right triangle PQR where: angle Q = 90 degrees; angle
            P = angle R. What is the measure of angles P and R?
          </h3>
          <label>
            <input required type="radio" value="45" name="que-3" />
            45
          </label>
          <label>
            <input required type="radio" value="90" name="que-3" />
            90
          </label>
          <label>
            <input required type="radio" value="65" name="que-3" />
            65
          </label>
        </div>

        <div className="que-container">
          <h3>
            4. A right triangle, ABC, is given, where angle B = 90 degrees. The
            side AB is extended past angle B to form an exterior angle, X. What
            is the measure in degrees of angle X?
          </h3>
          <label>
            <input required type="radio" value="45" name="que-4" />
            45
          </label>
          <label>
            <input required type="radio" value="256" name="que-4" />
            256
          </label>
          <label>
            <input required type="radio" value="90" name="que-4" />
            90
          </label>
        </div>

        <div className="que-container">
          <h3>
            5. If the measure of one of the internal angles of a triangle is
            95°, then which of the following cannot be the measure of remaining
            angles?
          </h3>
          <label>
            <input required type="radio" value="50" name="que-5" />
            50
          </label>
          <label>
            <input required type="radio" value="80" name="que-5" />
            80
          </label>
          <label>
            <input required type="radio" value="90" name="que-5" />
            90
          </label>
        </div>
      </form>
      <button className="btn-submit" onClick={clickHandler}>
        submit
      </button>
      {score && <h4>{score}</h4>}
    </div>
  );
}

export default Quiz;
