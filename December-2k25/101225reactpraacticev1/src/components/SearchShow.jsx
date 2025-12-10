import React from 'react'
const SearchShow = ({items}) => {
  return (
    <div>
        <h1>{items.id}</h1>
        <img src={items.image} alt={items.image} />
        <p>{items.description}</p>
    </div>
  )
}

export default SearchShow