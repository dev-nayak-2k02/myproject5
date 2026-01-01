import React from 'react'
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className={styles.image}>
            <img src="/images/logo.png" alt="no-photo-here-if-not-displayed" />
        </div>

        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation