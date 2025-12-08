import React, { useState } from 'react'
import Example from './components/Example'
import ExampleList from './components/ExampleList'
const App = () => {
  const[fn, setFn] = useState([])
  return (
    <>
      <Example setFn={setFn}/>
      <ExampleList fn = {fn}/>
    </>
  )
}

export default App