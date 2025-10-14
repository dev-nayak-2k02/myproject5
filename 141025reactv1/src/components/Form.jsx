import { useState } from "react";

export default function Form({ todo, setTodo }) {
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todos}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
