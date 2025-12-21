import React, { useState } from 'react'
import StartGame from './StartGame'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
const GamePlay = () => {
    
  return (
    <div>
        <TotalScore />
        <NumberSelector />
    </div>
  )
}

export default GamePlay