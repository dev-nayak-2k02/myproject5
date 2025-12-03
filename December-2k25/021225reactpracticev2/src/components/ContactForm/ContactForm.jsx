import React from "react";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import styles from "./ContactForm.module.css";
import Buttons from "../Buttons/Buttons";
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Buttons text="VIA EMAIL CHAT" icon={<MdCall fontSize="24px" />} />
        </div>
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
