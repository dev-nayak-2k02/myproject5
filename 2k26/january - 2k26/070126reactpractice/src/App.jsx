import React from 'react'
import styled from 'styled-components'
const App = () => {
  return (
    <div>
      <Button>click me</Button>
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