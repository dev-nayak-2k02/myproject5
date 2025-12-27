import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
const GamePlay = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [boxSelector, setBoxSelector] = useState();
  const [score, setScore] = useState(0)

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    let randomumber = randomNumberGenerator(1, 7);
    setDiceNumber((prev) => randomumber);
    if(randomumber == boxSelector){
      setScore(prev => prev + randomumber)
    } else {
      setScore(prev => prev - 2)
    }
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} setScore={setScore}/>
        <NumberSelector
          boxSelector={boxSelector}
          setBoxSelector={setBoxSelector}
        />
      </div>
      <RollDice diceNumber={diceNumber} rollDice={rollDice} />
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
