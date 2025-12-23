import React, { useState } from "react";
import styled from "styled-components";
const RollDice = ({ rollDice, roleDice }) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dices/dice_${roleDice}.png`} alt="-00-00-" />
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

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
  }
`;
