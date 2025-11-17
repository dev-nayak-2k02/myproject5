import React from 'react';
import './item.css';
const ItemDisplay = ({item}) => {
  return (
    <div className='card'>
        <h1>{item.id}</h1>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.image} />
        <p>{item.description}</p>
    </div>
  )
}

export default ItemDisplay