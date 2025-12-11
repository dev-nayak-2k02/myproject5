import React, { useState } from "react";
import "./App.css";
const App = () => {
  let [todo, setTodo] = useState([]);
  let handleSubmit = (e)=>{
    e.preventDefault();
    let toname = e.target.toname.value;
    if(!todo.includes(toname)){
      let finalDoList = [...todo,toname];
      setTodo(finalDoList);
    } else {
      alert('same thing cant be added twice.....');
    }
  }
  return (
    <div className="App">
      <h1>Todo-list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="toname"/>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
