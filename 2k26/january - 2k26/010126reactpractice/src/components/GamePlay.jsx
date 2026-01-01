import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
const GamePlay = () => {
  const [rollDice, setRollDice] = useState(1);
  const [numberSelector, setNumberSelector] = useState();
  const [score, setScore] = useState(0)

  const generteRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRoll = () => {
    let random = generteRandomNumber(1, 7);
    if(random == numberSelector) {
      setScore(prev => prev + random)
    } else {
      setScore(prev => prev - 2)
    }
    setRollDice((prev) => random);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector
          numberSelector={numberSelector}
          setNumberSelector={setNumberSelector}
        />
      </div>
      <RollDice rollDice={rollDice} diceRoll={diceRoll} />
      <TotalScore score={score} setScore={setScore} />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
  }
`;
