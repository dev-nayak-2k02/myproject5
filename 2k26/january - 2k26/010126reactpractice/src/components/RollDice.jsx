import React from 'react'
import styled from 'styled-components'
const RollDice = () => {
  return (
    <DiceContainer>
        <div className='dice'>
            <img src="/images/dices/dice_1.png" alt="000" />
        </div>
        <p>click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
`