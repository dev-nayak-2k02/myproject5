import React, { useState } from "react";
import styled from "styled-components";
const RollDice = () => {
  const [rollDice, setRollDice] = useState(1);
  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const handleDiceRoll = () => {
    let random = randomNumberGenerator(1, 7);
    setRollDice((prev) => random);
  };
  return (
    <DiceContainer>
      <div className="dice" onClick={handleDiceRoll}>
        <img src={`/images/dices/dice_${rollDice}.png`} alt="00-000-000000" />
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
  cursor: pointer;

  p {
    font-size: 18px;
    font-weight: 500;
  }
`;
