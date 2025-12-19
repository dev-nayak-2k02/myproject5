import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = () => {
  let arrNumber = [1, 2, 3, 4, 5, 6];
  let [selectedNumber, setSelectedNumber] = useState();
  return (
    <div>
      {arrNumber.map((item, index) => (
        <Box
          isSelected={item == selectedNumber}
          onClick={() => setSelectedNumber(item)}
          key={index}
        >
          {item}
        </Box>
      ))}
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(value) => value.isSelected ? 'black' : 'white'};
  color: ${(value) => value.isSelected ? 'white' : 'black'};
`;
