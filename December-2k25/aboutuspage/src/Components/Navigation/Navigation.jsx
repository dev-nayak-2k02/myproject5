import React from 'react'
import styles from './Navigation.module.css'
import Button from '../Button/Button'
const Navigation = () => {
  return (
    <nav className={`${styles.navigation}`}>
        <div className={styles.left_navigation}>
            <img src="/images/vite.svg" alt="_no_photo_" />
            <ul>
                <li>Accueil</li>
                <li>Agenda</li>
                <li>Activities</li>
                <li>Speakers</li>
                <li>Partenaires</li>
                <li>Actualites</li>
            </ul>
        </div>

        <div className={styles.right_navigation}>
            <Button text = 'INSCRIPTION'/>
        </div>

    </nav>
  )
}

export default Navigation