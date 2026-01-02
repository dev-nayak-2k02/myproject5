import React, { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const toggleGame = () =>{
    setIsGameStarted((prev)=> !isGameStarted)
  }
  return (
    <div>
      {
        isGameStarted ? <GamePlay/> : <StartGame isToggle={toggleGame}/>
      }
    </div>
  )
}

export default App