import React from 'react'
import ExampleDisplay from './ExampleDisplay'
const ExampleList = ({fn}) => {
  return (
    <div>
        {fn.map((item)=>(
            <ExampleDisplay key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default ExampleList