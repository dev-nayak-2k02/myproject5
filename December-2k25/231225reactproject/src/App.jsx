import React, { useState } from "react";
import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
const App = () => {
  let [isGameStarted, setIsGameStarted] = useState(true);
  const ToggleGameplay = () => {
    setIsGameStarted((prev) => !isGameStarted);
  };
  return (
    <div>
      {isGameStarted ? <GamePlay /> : <StartGame isToggle={ToggleGameplay} />}
    </div>
  );
};

export default App;
