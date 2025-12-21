import React, { useState } from "react";
import styled from "styled-components";
import StartGame from "./components/StartGame";
const App = () => {
  let [isGameStarted, setIsGameStarted] = useState(false);
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
