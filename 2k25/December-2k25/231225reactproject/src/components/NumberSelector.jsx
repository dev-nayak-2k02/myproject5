import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  let arrNumber = [1, 2, 3, 4, 5, 6];

  function errorHandler(value){
    setSelectedNumber(value)
    setError('');
  }

  return (
    <NumberSelectorContainer>
        <p className="error"><span>''</span>{error}</p>
      <div className="flex">
        {arrNumber.map((value, index) => (
          <Box
            isValue={value == selectedNumber}
            onClick={() => errorHandler(value)}
            key={index}
          >
            {value}
          </Box>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
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
        font-weight: 500;

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
  height: 72px;
  width: 72px;
  border: 1px solid black;
  font-weight: 700;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isValue ? "black" : "white")};
  color: ${(props) => (!props.isValue ? "black" : "white")};

  &:hover {
    cursor: pointer;
  }
`;
