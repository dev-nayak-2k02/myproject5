export default function ItemDisplay({item}){
    return(
        <>
            <div>
                <h1>{item.id}</h1>
                <img src={item.image} alt={item.image} />
                <p>{item.description}</p>
            </div>
        </>
    )
}