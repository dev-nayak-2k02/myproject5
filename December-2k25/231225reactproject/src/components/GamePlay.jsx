import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  let [roleDice, setRoleDice] = useState(1);
  let [score, setScore] = useState(0);
  let [error, setError] = useState();

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    let random = randomNumberGenerator(1, 7);
    if (!selectedNumber) {
      setError("No number is being selected");
      return;
    }

    setRoleDice((prev) => random);

    if (selectedNumber == random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice roleDice={roleDice} rollDice={rollDice} />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
  }
`;
