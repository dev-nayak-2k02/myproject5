import React from "react";
import styled from "styled-components";
const StartGame = ({ isToggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="/00\" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button onClick={isToggle}>click me</Button>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3px;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 10px 18px;
  width: 220px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.4s background ease;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    border: 1px solid black;
    transition: 0.3s background ease;
  }
`;
