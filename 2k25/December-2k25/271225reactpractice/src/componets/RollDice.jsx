import React, { useState } from "react";
import styled from "styled-components";
const RollDice = ({ diceNumber, rollDice }) => {
  
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dices/dice_${diceNumber}.png`} alt="" />
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
  padding-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
  }
`;
