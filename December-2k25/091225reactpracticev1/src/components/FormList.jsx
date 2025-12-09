import React from "react";
import FormDisplay from "./FormDisplay";
const FormList = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => (
        <FormDisplay key={item} item={item} />
      ))}
    </div>
  );
};

export default FormList;
