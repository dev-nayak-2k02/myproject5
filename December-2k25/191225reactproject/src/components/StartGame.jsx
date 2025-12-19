import React from 'react'
import styled from 'styled-components'
const StartGame = () => {
  return (
    <div>
        <div>
            <img src="/images/dices.png" alt="___" />
        </div>
        <div>
            <h1>Dice Game</h1>
            <Button>Click me</Button>
        </div>
    </div>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
`

const Button = styled.button`
    width: 220px;
    padding: 10px 18px;
    border-radius: 5px;
    color: white;
    background-color: #000000;
`