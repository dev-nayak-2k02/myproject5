import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = () => {
  let arrNumber = [1, 2, 3, 4, 5, 6];
  let [selectedNumber, setSelectedNumber] = useState();
  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((value, index) => (
          <Box
            isValue={value == selectedNumber}
            key={index}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  border: 1px solid black;
  font-weight: 700;
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isValue ? "black" : "white")};
  color: ${(props) => (!props.isValue ? "black" : "white")};
  cursor: pointer;
`;
