import React, { useState } from 'react'
import FormList from './FormList'
import Form from './Form'
const Todo = () => {
    const[todos, setTodos] = useState([])
  return (
    <div>
        <Form todos={todos} setTodos={setTodos}/>
        <FormList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Todo