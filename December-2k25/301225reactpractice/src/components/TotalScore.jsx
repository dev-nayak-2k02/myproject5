import React from 'react'
import styled from 'styled-components'
const TotalScore = () => {
  return (
    <ScoreContainer>
        <h1>0</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
    background-color: red;
    max-width: 200px;
    display: flex;
    flex-direction: column;
`