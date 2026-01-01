import React, { useState } from "react";
import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
const App = () => {
  let [isGameStarted, setIsGameStarted] = useState(true);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !isGameStarted);
  };
  return (
    <div>
      {isGameStarted ? <GamePlay /> : <StartGame isToggle={toggleGamePlay} />}
    </div>
  );
};

export default App;
