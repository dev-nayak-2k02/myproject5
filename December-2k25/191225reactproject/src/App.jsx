import React, { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
const App = () => {
  let [isGameStarted, setIsGameStarted] = useState(true);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
      {isGameStarted ? <GamePlay /> : <StartGame istoggle={toggleGamePlay} />}
    </div>
  );
};

export default App;
