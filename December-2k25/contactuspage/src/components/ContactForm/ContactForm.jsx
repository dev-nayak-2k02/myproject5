import React from "react";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { useState } from "react";
const ContactForm = () => {
    let[name,setName] = useState('')
    let[email,setEmail] = useState('')
    let[text,setText] = useState('')
    let handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e)
    }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA MESSAGE" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea rows='12' name="text"/>
          </div>
        </form>
        <div style={{
            display: 'flex',
            justifyContent: 'end'
        }}>
            <Button text='submit' />
        </div>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
