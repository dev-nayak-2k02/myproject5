import React, { useState } from "react";
import styled from "styled-components";
const RollDice = () => {
  const [rollDice, setRollDice] = useState(0);

  const generteRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRoll = ()=>{
    let random = generteRandomNumber(1, 7);
    setRollDice(prev => random)
  }

  return (
    <DiceContainer>
      <div className="dice" onClick={diceRoll}>
        <img src={`/images/dices/dice_${rollDice}.png`} alt="000" />
      </div>
      <p>click on dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
  }
`;
