export default function ItemDisplay({res}){
    return(
        <>
            <div>
                <h1>{res.id}</h1>
                <img src={res.image} alt={res.image} />
                <p>{res.description}</p>
            </div>
        </>
    )
}