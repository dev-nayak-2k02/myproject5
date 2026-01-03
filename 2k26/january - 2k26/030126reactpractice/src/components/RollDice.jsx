import React, { useState } from "react";
import styled from "styled-components";
const RollDice = () => {

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

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 18px;
    font-weight: 500;
  }
`;
