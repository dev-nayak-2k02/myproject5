import React from 'react'
import styled from 'styled-components'
const NumberSelector = () => {
  return (
    <div>
        <Box>1</Box>
    </div>
  )
}

export default NumberSelector

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    font-weight: 700;
    display: grid;
    place-items: center;
`