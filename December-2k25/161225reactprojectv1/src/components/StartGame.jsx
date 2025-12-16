import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
`

const StartGame = () => {
  return (
    <Container>
        <img src="/images/dices.png" alt="00" />
        <div>
            <h1>Dice game</h1>
            <Button>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
`