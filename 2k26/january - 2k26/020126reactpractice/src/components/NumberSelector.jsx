import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({ numberSelect, setNumberSelect, error, setError }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const errorHandler = (value) => {
    setNumberSelect(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
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
      <div className="right">
        <p>Select Number</p>
      </div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .error {
    color: red;
    font-size: 16px;

    span {
      color: white;
    }
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .flex {
    display: flex;
    gap: 24px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isValue ? "black" : "white")};
  color: ${(props) => (!props.isValue ? "black" : "white")};
`;
