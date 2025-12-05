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
          <Button text="VIA TEXT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL CHAT" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA CALL CHAT"
          icon={<MdCall fontSize="24px" />}
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

          <div style={{
            display: 'flex',
            justifyContent: 'end'
          }}>
            <Button text="submit" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
