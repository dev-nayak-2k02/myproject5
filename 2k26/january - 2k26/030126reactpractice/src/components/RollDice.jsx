import React, { useState } from "react";
import styled from "styled-components";
const RollDice = () => {
  const [rollDice, setRollDice] = useState(1);

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleDice = ()=>{
    let random = randomNumberGenerator(1, 7)
    setRollDice(prev => random)
  }
  return (
    <DiceContainer>
      <div className="dice" onClick={handleDice}>
        <img src={`/images/dices/dice_${rollDice}.png`} alt="" />
      </div>
      <p>click on dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
