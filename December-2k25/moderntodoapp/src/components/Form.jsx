import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";
const Form = () => {
  const [todo, setTodo] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    let data = event.target.toname.value;
    if (!todo.includes(data)) {
      setTodo([...todo, data]);
    } else {
      alert("already exists");
    }
  }

  let list = todo.map((value, index) => {
    return (
      <TodoItems
        key={index}
        value={value}
        indexNumber={index}
        todo={todo}
        setTodo={setTodo}
      />
    );
  });
  return (
    <div className={styles.main}>
      <h1>TodoList App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="toname" />
        <button type="submit">save</button>
      </form>

      <div className={styles.outerDiv}>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default Form;

function TodoItems({ value, indexNumber, todo, setTodo }) {
    let[stats, setStats] = useState(false);
    let deleteRow = ()=>{
        let finalData = todo.filter((v, i)=>i!=indexNumber)
        setTodo(finalData)
    }
    let checkStatus = ()=>{
        setStats(!stats);
    }
  return (
    <li className={(stats)? 'completetodo' : ''} onClick={checkStatus}>
      {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
