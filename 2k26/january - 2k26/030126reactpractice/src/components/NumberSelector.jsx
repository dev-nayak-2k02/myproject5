import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [numberSelect, setNumberSelect] = useState();
  return (
    <div>
      {arrNumber.map((value, index) => (
        <Box
          isValue={value == numberSelect}
          onClick={() => setNumberSelect(value)}
          key={index}
        >
          {value}
        </Box>
      ))}
      <p>Select Number</p>
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
  width: 72px;
  height: 72px;
  font-weight: 700;
  border: 1px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: ${(props)=> (props.isValue ? 'black' : 'white')};
  color: ${(props)=> (!props.isValue ? 'black' : 'white')};
`;
