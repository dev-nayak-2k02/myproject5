import React from "react";

const TodoItem = ({ item }) => {
    function handleDelete(){
        console.log('button clicked');
    }
  return (
    <div>
      <h1>
        {item}
        <span>
          <button onClick={()=>handleDelete()}>X</button>
        </span>
      </h1>
    </div>
  );
};

export default TodoItem;
