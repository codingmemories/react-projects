import React from "react";
import QUESTIONS from "../store/questions.json";
import party from "../assets/party.jpg";

export default function Result({ correct }) {
  return (
    <>
      <div class="card text-center m-auto mt-5" style={{ width: "25rem" }}>
        <div class="card-body">
          <img src={party} alt="icon" width={100} style={{ margin: "1rem" }} />
          <p class="card-text">
            Right answers {correct} of {QUESTIONS.length}
          </p>
          <a className="btn-style text-center btn btn-outline-danger" href="/">
            Try again
          </a>
        </div>
      </div>
    </>
  );
}
