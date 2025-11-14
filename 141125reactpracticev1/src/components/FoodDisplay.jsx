export default function FoodDisplay({item}){
    return(
        <div>
            <h1>{item.id}</h1>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.image} />
            <p>{item.description}</p>
        </div>
    )
}