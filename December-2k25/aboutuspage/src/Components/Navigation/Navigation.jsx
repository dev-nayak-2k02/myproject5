import React from 'react'
import style from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`${style.navigation}`}>
        <div className={style.left_navigation}>
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

        <div className={style.right_navigation}>
            <button>INSCRIPTION</button>
        </div>

    </nav>
  )
}

export default Navigation