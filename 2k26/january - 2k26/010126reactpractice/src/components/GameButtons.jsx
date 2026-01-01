import React, { useState } from 'react'
import styled from 'styled-components'
const GameButtons = () => {
    
  return (
    <ButtonContainer>
        <Button>reset</Button>
    </ButtonContainer>
  )
}

export default GameButtons

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  width: 150px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.4s background ease;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease;
  }
`