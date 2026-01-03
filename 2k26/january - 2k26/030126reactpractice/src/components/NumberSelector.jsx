import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({ numberSelect, setNumberSelect, error, setError }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const errorHandler = (value) => {
    setNumberSelect(value);
    setError("");
  };
  return (
    <NumberSelectContainer>
      <p className="error">
        <span>''</span>
        {error}
      </p>
      <div className="flex">
        {arrNumber.map((value, index) => (
          <Box
            isValue={value == numberSelect}
            onClick={() => errorHandler(value)}
            key={index}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectContainer>
  );
};

export default NumberSelector;

const NumberSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;

  .error {
    color: red;
    font-size: 13px;

    span {
      color: white;
    }
  }

  p {
    font-size: 18px;
    font-weight: 600;
  }

  .flex {
    display: flex;
    gap: 24px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  font-weight: 700;
  border: 1px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isValue ? "black" : "white")};
  color: ${(props) => (!props.isValue ? "black" : "white")};
`;
