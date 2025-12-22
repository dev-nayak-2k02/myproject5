import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
const GamePlay = () => {
  return (
    <MainContainer>
        <TotalScore/>
        <NumberSelector/>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
    
`