import React from "react";
import "./quiz.css";
import { useState } from "react";
function Quiz() {
  const question = [
    {
      id: 1,
      questionText:
        'The Pythagorean Theorem states that: "The square of the hypotenuse of a right angle triangle is equal to the sum of the squares of the other two sides." This means that, in a right triangle ABC with hypotenuse AC:',
      answerOptions: [
        { answerText: "AB * AC = BC^2", isCorrect: false },
        { answerText: "(AB + BC) (AB - BC) = AC^2", isCorrect: false },
        { answerText: "AB^2 + BC^2 = AC^2", isCorrect: true },
        { answerText: "(AB + AC)^2 = BC^2", isCorrect: false }
      ]
    },
    {
      id: 2,
      questionText:
        "There is a triangle XYZ where XY is perpendicular to YZ and angle X = 70 degrees. What is the measure of angle Z?",
      answerOptions: [
        { answerText: "130", isCorrect: false },
        { answerText: "20", isCorrect: true },
        { answerText: "110", isCorrect: false },
        { answerText: "90", isCorrect: false }
      ]
    },
    {
      id: 3,
      questionText:
        "There is a right triangle PQR where: angle Q = 90 degrees; angle P = angle R. What is the measure of angles P and R?",
      answerOptions: [
        { answerText: "45", isCorrect: true },
        { answerText: "90", isCorrect: false },
        { answerText: "65", isCorrect: false },
        { answerText: "75", isCorrect: false }
      ]
    },
    {
      id: 4,
      questionText:
        "A right triangle, ABC, is given, where angle B = 90 degrees. The side AB is extended past angle B to form an exterior angle, X. What is the measure in degrees of angle X?",
      answerOptions: [
        { answerText: "135", isCorrect: false },
        { answerText: "45", isCorrect: false },
        { answerText: "256", isCorrect: false },
        { answerText: "90", isCorrect: true }
      ]
    },
    {
      id: 5,
      questionText:
        "If the measure of one of the internal angles of a triangle is 95°, then which of the following cannot be the measure of remaining angles?",
      answerOptions: [
        { answerText: "10", isCorrect: false },
        { answerText: "50", isCorrect: false },
        { answerText: "80", isCorrect: false },
        { answerText: "90", isCorrect: true }
      ]
    }
  ];

  const [score, setScore] = useState(0);
  const [currentQue, setCurrentQue] = useState(0);
  const [showscore, setshowscore] = useState(false);

  function clickHandler(isCorrect) {
    const nextQue = currentQue + 1;
    if (isCorrect) {
      setScore(score + 1);
    }
    if (nextQue < question.length) {
      setCurrentQue(nextQue);
    } else {
      setshowscore(true);
    }
  }

  return (
    <div className="main">
      <h1>Test your knowledge about triangles</h1>
      {showscore ? (
        <h2>
          Your score is {score}/{question.length}
        </h2>
      ) : (
        <div className="que-ans-section">
          <div className="que-section">
            <span>{currentQue + 1 + ". "}</span>{" "}
            {question[currentQue].questionText}
          </div>
          <div className="ans-section" key={question[currentQue].id}>
            {question[currentQue].answerOptions.map((item) => {
              return (
                <button
                  className="btn-opn"
                  onClick={() => clickHandler(item.isCorrect)}
                  key={item.answerText}
                >
                  {" "}
                  {item.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
