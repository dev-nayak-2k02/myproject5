import FoodDisplay from "./FoodDisplay";

export default function FoodList({item}){
    return(
        <>
            {
                item.map((item)=>(
                    <FoodDisplay key={item.id} item={item}/>
                ))
            }
        </>
    )
}