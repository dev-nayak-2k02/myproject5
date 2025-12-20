import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = () => {
  let [item, setItem] = useState();
  let arrNumber = [1, 2, 3, 4, 5, 6];
  console.log(item);
  return (
    <div>
      {arrNumber.map((value, index) => (
        <Box
          isSelected={value == item}
          key={index}
          onClick={() => setItem(value)}
        >
          {value}
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
  font-weight: 700;
  background-color: ${(value) => value.isSelected ? 'black' : 'white'};
  color: ${(value) => !value.isSelected ? 'black' : 'white'};
`;
