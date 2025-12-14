import React, { useState } from 'react'
import './App.css'
const App = () => {
  let [message, setMessage] = useState([]);
  function handleSubmit(e) {
      e.preventDefault();
      let toname = e.target.toname.value;
      console.log(toname);
  }
  return (
    <div className='App'>
      <h1>Todo-List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type='submit' name='toname'>save</button>
      </form>
    </div>
  )
}

export default App