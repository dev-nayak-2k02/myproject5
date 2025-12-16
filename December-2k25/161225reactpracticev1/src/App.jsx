import React, { useState } from 'react'
import Search from './Components/Search'
const App = () => {
  const[items, setItems] = useState([])
  return (
    <div>
      <Search setItems={setItems}/>
    </div>
  )
}

export default App