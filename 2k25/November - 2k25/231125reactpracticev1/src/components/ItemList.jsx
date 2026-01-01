import React from 'react'
import ItemDisplay from './ItemDisplay'

const ItemList = ({item}) => {
  return (
    <div>
        {
            item.map((item)=>(
                <ItemDisplay key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default ItemList