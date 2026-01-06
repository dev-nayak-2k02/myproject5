import React, { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'
const App = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const toggleGame = ()=>{
    setGameStarted((prev) => !gameStarted);
  }
  return (
    <div>
      {
        gameStarted ? <GamePlay/> : <StartGame isToggle={toggleGame}/>
      }
    </div>
  )
}

export default App