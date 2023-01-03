import React, { useState } from "react";
import Game from "./Game/Game";
import Result from "./Result/Result";
import QUESTIONS from "./store/questions.json";
import "./index.scss";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = QUESTIONS[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep((prev) => prev + 1);

    if (index === question.correct) {
      setCorrect((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      {step !== QUESTIONS.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
