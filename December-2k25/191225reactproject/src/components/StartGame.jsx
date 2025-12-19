import React from 'react'
import styled from 'styled-components'
const StartGame = () => {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" alt="___" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button>Click me</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;

    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }


    }
`

const Button = styled.button`
    width: 220px;
    padding: 10px 18px;
    border-radius: 5px;
    color: white;
    background-color: #000000;
`