import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .content {
    h1 {
      font-size: 96.8px;
      white-space: nowrap;
    }
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="00" />
      </div>
      <div className="content">
        <h1>Dice game</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  min-width: 220px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
    cursor: pointer;
  }
`;
