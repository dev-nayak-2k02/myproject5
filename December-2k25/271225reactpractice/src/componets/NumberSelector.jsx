import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = () => {
  let arrNumber = [1, 2, 3, 4, 5, 6];
  const[boxSelector, setBoxSelector] = useState()
  return (
    <div>
      {
        arrNumber.map((value, index) =>(
          <Box>{value}</Box>
        ))
      }
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