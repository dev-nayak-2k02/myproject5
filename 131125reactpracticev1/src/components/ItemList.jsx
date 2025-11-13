import ItemDisplay from "./ItemDisplay";
export default function ItemList({item}){
    return(
        <>
            {
                item.map((item)=>(
                    <ItemDisplay key={item.id} item={item}/>
                ))
            }
        </>
    )
}