export default function Student(){
    let name = 'Devu granadi';
    let gender = 'male';
    let age = 19;
    let isVoting = true;
    let height = 5.9;
    return(
        <>
            <h1>Name: {name}</h1>
            <h1>Gender: {gender}</h1>
            <h1>Age: {age}</h1>
            <h1>Voting age: {isVoting}</h1>
            <h1>height: {height}</h1>
        </>
    )
}