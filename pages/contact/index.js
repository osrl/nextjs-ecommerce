import React from "react";
import Image from "next/image";
import styles from "./contact.module.scss";

const contact = () => {
  return (
    <div className={styles["contact"]}>
      <div className={styles["container"]}>
        <div className={styles["contact-left"]}>
          <h3>Get In Touch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
          <div className={styles["contact-form"]}>
            <div className={styles["contact-form-inputs"]}>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your E-mail" />
            </div>

            <input type="text" placeholder="Subject" />
            <textarea placeholder="Type your message" />
            <button>Send Mail</button>
          </div>
        </div>
        <div className={styles["contact-right"]}>
          <Image src="/images/contact.png" width={450} height={400} />
        </div>
      </div>
    </div>
  );
};

export default contact;
