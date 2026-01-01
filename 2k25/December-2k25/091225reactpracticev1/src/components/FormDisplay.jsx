import React from "react";

const FormDisplay = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo != item));
  }
  return (
    <div>
      <h1>
        {item}
        <span>
          <button
            onClick={() => {
              handleDelete(item);
            }}
          >
            x
          </button>
        </span>
      </h1>
    </div>
  );
};

export default FormDisplay;
