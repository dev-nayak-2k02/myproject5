import React from 'react'
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <div>
        <nav className={`${styles.navigation} container`}>
            <div className={styles.image}>
                <img src="/images/logo.png" alt="_pictures_are_subjected_to_market_risk_" />
            </div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Product</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation