import React, { useState } from 'react'
import Search from './Components/Search'
import SearchList from './Components/SearchList'
const App = () => {
  const[items, setItems] = useState([])
  return (
    <div>
      <Search setItems={setItems}/>
      <SearchList items={items}/>
    </div>
  )
}

export default App