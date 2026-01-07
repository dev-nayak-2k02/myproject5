import React from 'react'
import styled from 'styled-components'

const StartGame = ({isToggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={isToggle}>click me</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    width: 1180px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .content {
        display: flex;
        flex-direction: column;
        align-items: end;

        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`

const Button = styled.button`
  background-color: black;
  color: white;
  width: 200px;
  padding: 10px 18px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`