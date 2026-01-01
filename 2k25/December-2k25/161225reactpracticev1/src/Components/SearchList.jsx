import React from 'react'
import SearchListDisplay from './SearchListDisplay'

const SearchList = ({ items }) => {
  return (
    <div>
        {
            items.map((item) => (
                <SearchListDisplay key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default SearchList