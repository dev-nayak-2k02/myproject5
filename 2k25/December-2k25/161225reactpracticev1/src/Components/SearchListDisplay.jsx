import React, { useState } from 'react'
const SearchListDisplay = ({item}) => {
    let [desc, setDesc] = useState('')
    function handleClick () {
        setDesc(item.description)
    }
  return (
    <div>
        <h1>{item.id}</h1>
        <img src={item.image} alt={item.image} />
        <p>{item.title}</p>
        <button onClick={handleClick}>click to see description</button><br />
        {desc}
    </div>
  )
}

export default SearchListDisplay