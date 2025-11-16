import React from "react";

const TodoItem = ({ item, todos, setTodos }) => {
    function handleDelete(item){
        setTodos(todos.filter(todo => todo != item))
    }
  return (
    <div>
      <h1>
        {item}
        <span>
          <button onClick={()=>handleDelete(item)}>X</button>
        </span>
      </h1>
    </div>
  );
};

export default TodoItem;
