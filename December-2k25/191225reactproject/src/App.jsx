import React, { useState } from 'react'
import StartGame from './components/StartGame'
const App = () => {
  let[isGameStarted, setIsGameStarted] = useState(false)
  const toggleGamePlay = () =>{
    setIsGameStarted(prev => !prev)
  }
  return (
    <div>
      {
        
      }
    </div>
  )
}

export default App