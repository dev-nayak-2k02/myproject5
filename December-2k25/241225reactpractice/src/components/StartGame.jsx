import React from "react";
import styled from "styled-components";
const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button>click me</Button>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  width: 220px;
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  border: 1px solid transparent;
  transition: 0.4s background ease;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.3s background ease;
  }
`;
