import ItemDisplay from "./ItemDisplay";
export default function ItemList({item}){
    return(
        <>
            {
                item.map((res)=>(
                    <ItemDisplay key={res.id} res={res}/>
                ))
            }
        </>
    )
}