import React from "react";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import styles from "./ContactForm.module.css";
import Button from "../Buttons/Button";
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA MAIL CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL CHAT" icon={<MdCall fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA MESSAGE"
          icon={<MdMessage fontSize="24px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="mail">email</label>
            <input type="email" name="mail" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">message</label>
            <textarea rows="8" name="text" />
          </div>
        </form>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Button text='cancel'/>
            <Button text='submit'/>
        </div>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
