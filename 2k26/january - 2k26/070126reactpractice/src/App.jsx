import React, { useState } from 'react'
import styled from 'styled-components'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'
const App = () => {
  const [startHandler, setStartHandler] = useState(false)
  const toggleFunction =()=>{
    setStartHandler((prev) => !prev)
  }
  return (
    <div>
      {
        startHandler ? <GamePlay/> : <StartGame isToggle={toggleFunction}/>
      }
    </div>
  )
}

export default App

const Button = styled.button`
  background-color: black;
  color: white;
  width: 200px;
  padding: 10px 18px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`