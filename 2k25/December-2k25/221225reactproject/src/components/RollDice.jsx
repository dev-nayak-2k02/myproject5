import React, { useState } from 'react'
import styled from 'styled-components'
const RollDice = () => {
    let[currentDice,setCurrentDice] = useState(1)

    const rollDice = () => {
        const randomNumber = generateRandomNumber(1,7)
        setCurrentDice((prev) => randomNumber)
    }

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min)+min)
    }
  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`/images/dices/dice_${currentDice}.png`} alt="/00\/00\" />
        </div>
        <p>click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice {
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`