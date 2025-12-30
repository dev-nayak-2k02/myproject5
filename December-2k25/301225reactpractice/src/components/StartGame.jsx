import React from 'react'
import styled from 'styled-components'
const StartGame = () => {
  return (
    <MainContainer>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        <div className='flex'>
            <h1>DICE GAME</h1>
            
        </div>
    </MainContainer>
  )
}

export default StartGame

const MainContainer = styled.div`
    max-width: 1180px;
    height: 100vh;
    margin: 0 auto;

`

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 18px;
    width: 220px;
    border-radius: 5px;
`