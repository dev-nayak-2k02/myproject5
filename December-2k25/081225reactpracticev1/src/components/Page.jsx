import React from 'react'
import { Link } from 'react-router-dom'
const Page = () => {
  return (
    <div>
        <Link to='/Counter'>Counter</Link><br />
        <Link to='/CounterValue'>CounterValue</Link>
    </div>
  )
}

export default Page