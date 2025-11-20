export default function FoodItem({item}){
    return(
        <>
            <h1>{item.id}</h1>
            <img src={item.image} alt={item.image} />
            <p>{item.title}</p>
        </>
    )
}