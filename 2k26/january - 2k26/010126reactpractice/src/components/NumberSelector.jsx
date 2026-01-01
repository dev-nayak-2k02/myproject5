import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [numberSelector, setNumberSelector] = useState();
  const setColor = (value) => {
    setNumberSelector((prev) => value);
  };
  return (
    <div>
      {arrNumber.map((value, index) => (
        <Box
          isValue={value == numberSelector}
          onClick={() => setColor(value)}
          key={index}
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
  background-color: ${(props) => (props.isValue? 'black' : 'white')};
  color: ${(props) => (!props.isValue? 'black' : 'white')};
`;
