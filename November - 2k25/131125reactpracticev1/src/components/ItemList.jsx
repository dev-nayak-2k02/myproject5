import './Item.css'
import ItemDisplay from "./ItemDisplay";
export default function ItemList({item}){
    return(
        <div className='item-list'>
            {
                item.map((item)=>(
                    <ItemDisplay key={item.id} item={item}/>
                ))
            }
        </div>
    )
}