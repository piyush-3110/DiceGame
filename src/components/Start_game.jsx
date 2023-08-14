import React from "react";
import Button from "./Button";

const Start_game = ({ toggle }) => {
  return (
    <main>
      <div className="container">
        <div className="child1">
          <img src="/images/dices 1.png" alt="dice_image"></img>
        </div>
        <div className="child2">
          <h1>DICE GAME</h1>
          <button onClick={toggle}>Play Now</button>
        </div>
      </div>
    </main>
  );
};

export default Start_game;
