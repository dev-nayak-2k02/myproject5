import React from 'react'
import { Link } from 'react-router-dom'
const Page = () => {
  return (
    <div>
        <Link to='/Counter'>Counter</Link>
        <Link to='/CounterValue'>CounterValue</Link>
    </div>
  )
}

export default Page