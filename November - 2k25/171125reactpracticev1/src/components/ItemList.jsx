import React from 'react'
import ItemDisplay from './ItemDisplay'
import './item.css';

const ItemList = ({item}) => {
  return (
    <div className='item-list'>
        {
            item.map((item)=>(
                <ItemDisplay key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default ItemList