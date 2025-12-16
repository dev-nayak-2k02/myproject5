import React, { useState } from "react";
import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGamePlayStarted, setIsGamePlayStarted] = useState(true);
  let toggleStartGame = () => {
    setIsGamePlayStarted((prev) => !prev);
  };
  return (
    <div>
      {isGamePlayStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggle={toggleStartGame} />
      )}
    </div>
  );
};

export default App;
