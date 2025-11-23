import React from 'react'

const ItemDisplay = ({item}) => {
  return (
    <div>
        <h2>{item.id}</h2>
        <img src={item.image} alt={item.image} />
        <p>{item.description}</p>
    </div>
  )
}

export default ItemDisplay