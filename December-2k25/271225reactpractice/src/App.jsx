import React, { useState } from 'react'
import StartGame from './componets/StartGame'
import GamePlay from './componets/GamePlay'
const App = () => {
  const[isGameStarted, setIsGameStarted] = useState(true)
  let toggleButton = () => {
    setIsGameStarted(prev => !isGameStarted)
  }
  return (
    <div>
      {
        isGameStarted ? <GamePlay/> : <StartGame isToggle={toggleButton}/>
      }
    </div>
  )
}

export default App