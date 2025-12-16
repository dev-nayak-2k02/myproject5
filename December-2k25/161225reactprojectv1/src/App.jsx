import React, { useState } from 'react'
import styled from 'styled-components'
import StartGame from './components/StartGame'

const App = () => {
  const[isGamePlayStarted, setIsGamePlayStarted] = useState(false)
  let toggleStartGame = () => {
    setIsGamePlayStarted(prev => !prev)
  }
  return (
    <div>
      {
        isGamePlayStarted ? "<StartGame />" : "<GamePlay />" 
      }
    </div>
  )
}

export default App

