import React from "react";
import QUESTIONS from "../store/questions.json";
import "../../src/index.scss";

export default function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / QUESTIONS.length) * 100);

  return (
    <>
      <div class="card text-center m-auto mt-5" style={{ width: "25rem" }}>
        {/* progress */}
        <div
          className="progress m-3 mb-1"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        {/* card content */}
        <div class="card-body" style={{}}>
          <h5 class="card-title">{question.title}</h5>
          <ul>
            {question.variants.map((text, index) => (
              <li
                onClick={() => onClickVariant(index)}
                key={text.id}
                style={{ marginLeft: "-2rem", width: "110%" }}
                className="card-text text-start"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
