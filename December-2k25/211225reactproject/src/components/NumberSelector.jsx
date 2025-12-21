import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = () => {
  let arrNumber = [1, 2, 3, 4, 5, 6];
  const [query, setQuery] = useState();
  return (
    <div>
      {arrNumber.map((value, index) => (
        <Box
          isSelected={value == query}
          key={index}
          onClick={() => {
            setQuery(value);
          }}
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
  font-weight: 700;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.isSelected ? 'black' : 'white'};
  color: ${(props) => !props.isSelected ? 'black' : 'white'};
`;
