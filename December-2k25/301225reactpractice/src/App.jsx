import React, { useState } from 'react'
import StartGame from './components/StartGame'
import GameStarted from './components/GameStarted'
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleFunction = () =>{
    setIsGameStarted(prev => !isGameStarted)
  }
  return (
    <div>
      {
        isGameStarted ? <GameStarted/> : <StartGame isToggle={toggleFunction}/>
      }
    </div>
  )
}

export default App