import React from "react";

const TotalScore = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="right">
      {arr.map((value, i) => (
        <div className="box" key={i}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default TotalScore;
