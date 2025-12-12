import React, { useState } from "react";
import "./App.css";
const App = () => {
  let [todo, setTodo] = useState([]);
  let list = todo.map((value, index) => {
    return (
      <TodoItemList key={index} value={value} indexNumber={index} todo={todo} setTodo={setTodo} />
    );
  });
  function handleSubmit(e) {
    e.preventDefault();
    let toname = e.target.toname.value;
    if (!todo.includes(toname)) {
      let finalDoList = [...todo, toname];
      setTodo(finalDoList);
    } else {
      alert(`well well it's already there...${todo}`);
    }
  }
  return (
    <div className="App">
      <h1>TODO-LIST</h1>
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

function TodoItemList({ value, indexNumber, todo, setTodo }) {
  let handleDelete = ()=>{
    let finalList = todo.filter((v,i)=>i != indexNumber)
    setTodo(finalList)
  }
  return (
    <li>
      {indexNumber+1} {value} <span onClick={handleDelete}>&times;</span>
    </li>
  );
}
