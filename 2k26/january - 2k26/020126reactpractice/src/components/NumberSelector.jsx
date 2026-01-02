import React from 'react'
import styled from 'styled-components'
const NumberSelector = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
  return (
    <div>
        {
            arrNumber.map((value, index)=> (
                <Box key={index}>{value}</Box>
            ))
        }
    </div>
  )
}

export default NumberSelector

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;

`