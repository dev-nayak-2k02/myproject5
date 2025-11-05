export default function Student(props){
    let[name, gender] = [props.name, props.gender]
    // let name = 'Devu granadi';
    // let gender = 'male';
    return(
        <>
            <h1>Name: {props.name}</h1>
            <h1>Gender: {props.gender}</h1>
        </>
    )
}