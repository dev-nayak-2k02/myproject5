import React from "react";
import styled from "styled-components";
const TotalScore = ({ score }) => {
  return (
    <StoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </StoreContainer>
  );
};

export default TotalScore;

const StoreContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
