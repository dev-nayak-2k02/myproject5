import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
const GamePlay = () => {
  const [rollDice, setRollDice] = useState(1);
  const [numberSelector, setNumberSelector] = useState();

  const generteRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRoll = () => {
    let random = generteRandomNumber(1, 7);
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
