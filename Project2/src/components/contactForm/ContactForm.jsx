import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const [name, setName] = useState("akash");
  const [email, setEmail] = useState("akash@gmail.com");
  const [text, setText] = useState("hello akash");

  const onSubmit = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={styles.topButton}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage style={{ fontSize: "24px" }} />}
          />
          <Button
            text="VIA CALL"
            icon={<FaPhoneAlt style={{ fontSize: "24px" }} />}
          />
        </div>

        <Button
          isOutline={true}
          text="VIA Email"
          icon={<HiMail style={{ fontSize: "24px" }} />}
        />

        <form action="post" onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            {/* <textarea name="text"></textarea> */}
            <textarea type="text" rows="8" />
          </div>

          <div className={styles.submit_btn}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <p className="result">{name + " " + email + " " + text}</p>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/Service.svg" alt="service" />
      </div>
    </section>
  );
};

export default ContactForm;
