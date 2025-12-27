import React, { useState } from 'react'
import StartGame from './componets/StartGame'
const App = () => {
  const[isGameStarted, setIsGameStarted] = useState(false)
  let toggleButton = () => {
    setIsGameStarted(prev => !isGameStarted)
  }
  return (
    <div>
      {
        isGameStarted 
      }
    </div>
  )
}

export default App