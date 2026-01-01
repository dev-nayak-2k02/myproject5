import React from "react";
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.image}>
        <img src="/images/logo.png" alt="nothing_showing_here" />
      </div>

      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Product</li>
      </ul>
    </nav>
  );
};

export default Navigation;
