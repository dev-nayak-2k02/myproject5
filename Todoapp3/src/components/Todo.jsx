import { useState } from "react";

import React from 'react'
import Form from "./Form";

const Todo = () => {
  const[todos,setTodos] = useState([]);
  return (
    <div>
        <Form todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Todo