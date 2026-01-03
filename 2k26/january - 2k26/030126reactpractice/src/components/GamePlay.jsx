import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice/>
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
