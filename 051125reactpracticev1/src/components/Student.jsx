export default function Student(props){
    console.log(props)
    console.log(typeof(props));
    
    let name = 'Devu granadi';
    let gender = 'male';
    return(
        <>
            <h1>Name: {name}</h1>
            <h1>Gender: {gender}</h1>
        </>
    )
}