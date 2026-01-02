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
            <Button>click me</Button>
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
    width: 200px;
    padding: 10px 18px;
    background-color: black;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.3s background ease;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease;
    }
`