import React from 'react'
import styled from 'styled-components'
const StartGame = () => {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <div className="start-button">
                <Button>click me</Button>
            </div>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 5.7px;

    .content {
        h1 {
            font-size: 96px;
            font-weight: 700;
            white-space: nowrap;
        }
    }
`

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  width: 200px;
  border-radius: 5px;
`