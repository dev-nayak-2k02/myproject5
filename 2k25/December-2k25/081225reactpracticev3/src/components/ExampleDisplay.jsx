import React from 'react'

const ExampleDisplay = ({item}) => {
  return (
    <div>
        <h1>{item.id}</h1>
        <img src={item.image} alt={item.image} />
        <p>{item.title}</p>
    </div>
  )
}

export default ExampleDisplay