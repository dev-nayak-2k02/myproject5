import React, { useState } from 'react'
import Child from './Child';

const App = () => {
  let[message, setMessage] = useState('')
  const handleDataFromChild = (childData) => {
    setMessage(childData);
  }
  return (
    <div>
      <h1>Parent Component :</h1>
      <p>Message from child: {message}</p>
      <Child onSendData={handleDataFromChild}/>
    </div>
  )
}

export default App