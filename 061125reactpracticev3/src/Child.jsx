export default function Child({onSendData}){
    const sendData = ()=> {
        onSendData('hello from child');
    }
    return(
        <>
            <h3>Child component</h3>
            <button onClick={sendData}>Send Data to parent</button>
        </>
    )
}