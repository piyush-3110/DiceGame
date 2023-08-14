import "./App.css";
import Gameplay from "./components/Gameplay";
import Start_game from "./components/Start_game";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(false);
  const [number, setNumber] = useState(1);
  const [error, setError] = useState(null);
  const togglegame = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      {toggle ? (
        <Gameplay
          number={number}
          setNumber={setNumber}
          error={error}
          setError={setError}
        />
      ) : (
        <Start_game toggle={togglegame} />
      )}
    </>
  );
}

export default App;
