import React from "react";
import FormDisplay from "./FormDisplay";
const FormList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((item) => (
        <FormDisplay key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default FormList;
