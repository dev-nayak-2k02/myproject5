import React, { useState } from "react";
import "./App.css";
const App = () => {
  let [todo, setTodo] = useState([]);
  let list = todo.map((value, index) => {
    return <TodoItemList key={index} value={value} />;
  });
  let handleSubmit = (e) => {
    e.preventDefault();
    let toname = e.target.toname.value;
    if (!todo.includes(toname)) {
      let finalDoList = [...todo, toname];
      setTodo(finalDoList);
    } else {
      alert("same thing cant be added twice.....");
    }
  };
  return (
    <div className="App">
      <h1>Todo-list</h1>
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

function TodoItemList({ value }) {
  return (
    <li>
      {value} <span>&times;</span>
    </li>
  );
}
