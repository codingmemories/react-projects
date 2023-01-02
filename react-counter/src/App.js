import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="counter-block">
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button
          type="button"
          aria-label="Minus"
          className="minus"
          onClick={() => setCount((prev) => prev - 1)}
        >
          <AiOutlineMinus />
        </button>
        <button
          type="button"
          aria-label="Plus"
          className="plus"
          onClick={() => setCount((prev) => prev + 1)}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default App;
