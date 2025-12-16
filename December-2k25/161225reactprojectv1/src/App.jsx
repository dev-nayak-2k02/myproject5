import React from 'react'
import styled from 'styled-components'
import StartGame from './components/StartGame'

const App = () => {
  return (
    <div>
      <StartGame/>
    </div>
  )
}

export default App

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
`