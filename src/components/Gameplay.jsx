import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import { useEffect } from "react";
const Gameplay = ({ number, setNumber, error, setError }) => {
  const [choosenumber, setChoosenumber] = useState(null);
  const [values, setValues] = useState(2);
  const randomgenerate = () => {
    if (choosenumber != null) {
      setNumber(Math.floor(Math.random() * 6) + 1);
    } else {
      setError("*Please select a number to proceed*");
      number = null;
    }
  };
  const [istoggle, setisToggle] = useState(false);
  const rules = () => {
    setisToggle((prev) => !prev);
  };
  const reset = () => {
    setValues(0);

    setisToggle(false);
    setChoosenumber(0);
    setError(null);
    setNumber(1);
  };
  return (
    <div>
      <Nav
        number={number}
        setNumber={setNumber}
        choosenumber={choosenumber}
        setChoosenumber={setChoosenumber}
        error={error}
        setError={setError}
        values={values}
        setValues={setValues}
      />
      <div className="container_container">
        <div className="dice_container">
          <div className="dice">
            <p>{error}</p>;
            <img
              src={`/images/dice_${number}.png`}
              alt="dice"
              onClick={randomgenerate}
            />
          </div>
          <p>Click on the dice</p>
          <button className="white" onClick={reset}>
            Reset
          </button>
          <button className="black" onClick={rules}>
            {istoggle ? "Hide Rules" : "Show Rules"}
          </button>
        </div>
        {istoggle && (
          <div className="show">
            <p>RULES:-</p>
            <p>
              {" "}
              1. Select numbers from the left side of the screen first that will
              be your first number.
            </p>
            <p>
              2. Click on the image of the dice and the number shown will be
              your second number.{" "}
            </p>
            <p>
              3. If the first and second number is same then your total score
              will be incremented by the first number else it will be
              decremented by 1.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gameplay;
