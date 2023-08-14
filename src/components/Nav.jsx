import React from "react";
import TotalScore from "./TotalScore";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
const Nav = ({
  number,
  setNumber,
  choosenumber,
  setChoosenumber,
  error,
  setError,
  values,
  setValues,
}) => {
  const arr = [1, 2, 3, 4, 5, 6];

  console.log(number);
  console.log(choosenumber);
  console.log(values);
  useEffect(() => {
    if (number != null) {
      setError(null);
    }
  }, [choosenumber]);
  console.log(choosenumber);
  useEffect(() => {
    if (choosenumber != 0 && choosenumber != null && number === choosenumber) {
      setValues((prev) => prev + choosenumber);
    } else if (choosenumber != 0 && choosenumber != null) {
      setValues((prev) => prev - 1);
    }
    setChoosenumber(null);
  }, [number]);

  return (
    <div className="nav">
      <div className="left">
        <h1>{values}</h1>
        <p>Total Score</p>
      </div>
      <div className="totalscore">
        <div className="right">
          {arr.map((value, i) => (
            <Box
              onClick={() => setChoosenumber(value)}
              isSelected={value === choosenumber}
              key={i}
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Select your number</p>
      </div>
    </div>
  );
};

export default Nav;
const Box = styled.div`
  height: 44px;
  width: 40px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
