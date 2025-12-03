import React from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav className={`${styles.nav_} container`}>
        <div className={`${styles.image}`}>
            <img src="https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/Product'>Product</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation