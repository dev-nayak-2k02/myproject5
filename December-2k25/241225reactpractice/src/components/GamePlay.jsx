import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [isColor, setIsColor] = useState();
  const [roleDice, setRoleDice] = useState(1);
  const [score, setScore] = useState(0)

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    let randomNumber = randomNumberGenerator(1, 7);
    setRoleDice((prev) => randomNumber);
    if(randomNumber == isColor) {
      setScore(prev => prev + randomNumber)
    } else {
      setScore(prev => prev - 2)
    }
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} setScore={setScore}/>
        <NumberSelector isColor={isColor} setIsColor={setIsColor} />
      </div>
      <RollDice roleDice={roleDice} rollDice={rollDice} />
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
