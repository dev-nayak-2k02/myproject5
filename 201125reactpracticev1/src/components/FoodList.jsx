export default function FoodList({foodItem}){
    
    return(
        <>
            {
                foodItem.map((item)=>(
                    <FoodItem key={item.id} item={item}/>
                ))
            }
        </>
    )
}