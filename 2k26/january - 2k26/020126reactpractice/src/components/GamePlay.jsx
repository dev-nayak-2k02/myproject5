import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [numberSelect, setNumberSelect] = useState();
  const [rollDice, setRollDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('')

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const handleDiceRoll = () => {
    if(!numberSelect) {
        setError('select a number first')
        return
    }

    let random = randomNumberGenerator(1, 7);

    if(random == numberSelect) {
        setScore(prev => prev + random)
    } else {
        setScore(prev => prev * 0)
    }

    setRollDice((prev) => random);

    setNumberSelect(undefined)
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          numberSelect={numberSelect}
          setNumberSelect={setNumberSelect}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice rollDice={rollDice} handleDiceRoll={handleDiceRoll} />
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
`;
