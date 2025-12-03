import React from 'react'
import { MdMessage } from "react-icons/md";
import styles from './ContactForm.module.css'
import Buttons from '../Buttons/Buttons'
const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <Buttons text='VIA SUPPORT CHAT' icon={<MdMessage/>}/>
        </div>
        <div className={styles.contact_image}></div>
    </section>
  )
}

export default ContactForm