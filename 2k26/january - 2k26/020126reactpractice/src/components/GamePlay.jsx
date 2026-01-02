import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [numberSelect, setNumberSelect] = useState();
  const [rollDice, setRollDice] = useState(1);
  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const handleDiceRoll = () => {
    let random = randomNumberGenerator(1, 7);
    setRollDice((prev) => random);
  };
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice />
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
