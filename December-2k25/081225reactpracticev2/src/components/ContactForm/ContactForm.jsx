import React from 'react'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import styles from './ContactForm.module.css';
import Button from '../Buttons/Button';
const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text='VIA MAIL CHAT' icon={<MdMessage fontSize='24px'/>}/>
                <Button text='VIA CALL CHAT' icon={<MdCall fontSize='24px'/>}/>
            </div>

            <Button 
                isOutline = {true}
                text='VIA MESSAGE'
                icon={<MdMessage fontSize='24px'/>}
            />
        </div>
        <div className={styles.ContactForm}></div>
    </section>
  )
}

export default ContactForm