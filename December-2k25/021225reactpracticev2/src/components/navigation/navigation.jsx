import React from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav className={`${styles.nav_} container`}>
        <div className={`${styles.image}`}>
            <img src="/images/logo.png" alt="" />
        </div>
        <ul>
            <li><Link className={`${styles.linkStyle}`} to='/'>Home</Link></li>
            <li><Link className={`${styles.linkStyle}`} to='/Contact'>Contact</Link></li>
            <li><Link className={`${styles.linkStyle}`} to='/Product'>Product</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation