import { useState } from "react";
import Form from "./Form";

function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Todo;
