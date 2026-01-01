export default function Child({ onSendData }) {
    function childFunction(){
        onSendData('message from child')
    }
  return(
    <>
        <h3>Child Component</h3>
        <button onClick={childFunction}>send Data to Parent</button>
    </>
  )
}
