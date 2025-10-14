import { useState } from "react";
import Form from "./Form";
export default function Todo() {
  const [todo, setTodo] = useState("");
  return (
    <>
      <Form todo={todo} setTodo={setTodo} />
    </>
  );
}
