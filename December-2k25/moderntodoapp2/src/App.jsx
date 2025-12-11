import React, { useState } from "react";
import "./App.css";
const App = () => {
  let [todo, setTodo] = useState([]);
  let list = todo.map((value, index) => {
    return (
      <TodoItemList
        key={index}
        value={value}
        indexNumber={index}
        todo={todo}
        setTodo={setTodo}
      />
    );
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

function TodoItemList({ value, indexNumber, todo, setTodo }) {
  let[status,setStatus] = useState(false)
  let handleDelete = () =>{
    let finalData = todo.filter((v,i)=>i!=indexNumber)
    setTodo(finalData);
  }
  let handleListOverLine = () =>{
    setStatus(!status);
  }
  return (
    <li className={(status) ? 'completion' : ''} onClick={handleListOverLine}>
      {indexNumber+1} {value} <span onClick={handleDelete}>&times;</span>
    </li>
  );
}
