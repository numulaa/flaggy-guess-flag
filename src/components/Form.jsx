import React from "react";
import { useState } from "react";
import "./form.css";

export default function Form({ flag }) {
  const [answer, setAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setAnswer((prevAnswer) => value);
  }
  function handleCheck() {
    setCheckAnswer((prevAnswer) => answer);
    console.log(checkAnswer);
    console.log(answer);
    setAnswer("");
  }
  return (
    <>
      <p className="result-text">
        {checkAnswer.toLowerCase() === flag.countryName.toLowerCase()
          ? `Yuhuuuu, It's ${flag.countryName}`
          : `Oops, try again!`}
      </p>

      <div>
        <input
          className="input-field"
          type="text"
          placeholder="guess the name"
          name="name"
          value={answer}
          onChange={handleChange}
        ></input>
        <button className="check-button" onClick={handleCheck}>
          Check
        </button>
      </div>
    </>
  );
}
