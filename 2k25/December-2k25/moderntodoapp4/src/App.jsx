import React, { use, useState } from "react";
import "./App.css";
const App = () => {
  let [message, setMessage] = useState([]);
  let list = message.map((value, index) => {
    return (
      <ItemTodoList
        key={index}
        value={value}
        indexNumber={index}
        setMessage={setMessage}
        message={message}
      />
    );
  });
  function handleSubmit(e) {
    e.preventDefault();
    let toname = e.target.toname.value;
    if (!message.includes(toname)) {
      let enterData = [...message, toname];
      setMessage(enterData);
    } else {
      alert("this thing is already there....");
    }
  }
  return (
    <div className="App">
      <h1>Todo-List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="toname" />
        <button type="submit">save</button>
      </form>

      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default App;

function ItemTodoList({ value, indexNumber, message, setMessage }) {
  let[overLine, setOverLine] = useState(false)
  function handleDelete(){
    let finalToDoList = message.filter((v,i) => i != indexNumber)
    setMessage(finalToDoList);
  }
  function handleColor(){
    setOverLine(!overLine)
  }
  return (
    <li className={(overLine) ? 'completion' : ''} onClick={handleColor}>
      {value} <span onClick={handleDelete}>&times;</span>
    </li>
  );
}
