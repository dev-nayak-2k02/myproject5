import React, { useState } from 'react'
import Search from './components/Search'
import SearchList from './components/SearchList'
const App = () => {
  const[items, setItems] = useState([])
  return (
    <div>
      <SearchList items={items}/>
      <Search setItems={setItems}/>
    </div>
  )
}

export default App