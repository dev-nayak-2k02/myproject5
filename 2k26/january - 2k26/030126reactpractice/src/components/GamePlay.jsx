import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
const GamePlay = () => {
  const [rollDice, setRollDice] = useState(1);
  const [numberSelect, setNumberSelect] = useState();
  const [score, setScore] = useState(0)
  
  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleDice = ()=>{
    let random = randomNumberGenerator(1, 7)
    setRollDice(prev => random)
  }
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score}/>
        <NumberSelector numberSelect={numberSelect} setNumberSelect={setNumberSelect}/>
      </div>
      <RollDice rollDice={rollDice} handleDice={handleDice}/>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
  }
`
