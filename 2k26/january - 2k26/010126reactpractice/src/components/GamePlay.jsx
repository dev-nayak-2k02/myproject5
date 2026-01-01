import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
const GamePlay = () => {
  const [rollDice, setRollDice] = useState(1);
  const [numberSelector, setNumberSelector] = useState();
  const [score, setScore] = useState(0)
  const [error, setError] = useState('')

  const generteRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRoll = () => {
    if(!numberSelector){
      setError('select a number first')
      return
    }

    let random = generteRandomNumber(1, 7);

    if(random == numberSelector) {
      setScore(prev => prev + random)
    } else {
      setScore(prev => prev - 2)
    }

    setRollDice((prev) => random);
    setNumberSelector(undefined)
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          numberSelector={numberSelector}
          setNumberSelector={setNumberSelector}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice rollDice={rollDice} diceRoll={diceRoll} />
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
