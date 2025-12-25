import React, { useState } from "react";
import styled from "styled-components";
const RollDice = () => {
  const [roleDice, setRoleDice] = useState(1);

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    let randomNumber = randomNumberGenerator(1, 7);
    setRoleDice(prev => randomNumber)
  }
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dices/dice_${roleDice}.png`} alt="" />
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

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
  }
`;
