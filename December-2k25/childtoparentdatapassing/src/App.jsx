import React, { useState } from 'react'

const App = () => {
  let[message, setMessage] = useState('')
  const handleDataFromChild = (childData) => {
    setMessage(childData);
  }
  return (
    <div>
      <h1>Parent Component :</h1>
      <p>Message from child: {message}</p>
      
    </div>
  )
}

export default App