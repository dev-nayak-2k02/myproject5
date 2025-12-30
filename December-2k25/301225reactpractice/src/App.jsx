import React, { useState } from 'react'
import StartGame from './components/StartGame'
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  return (
    <div>
      {
        isGameStarted 
      }
    </div>
  )
}

export default App