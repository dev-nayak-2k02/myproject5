import React, { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';
const App = () => {
  const[isGameStarted, setIsGameStarted] = useState(true);
  const buttonToggle = ()=> {
    setIsGameStarted((prev) => !isGameStarted)
  }
  return (
    <div>
      {
        isGameStarted ? <GamePlay/> : <StartGame isToggle = {buttonToggle}/>
      }
    </div>
  )
}

export default App

