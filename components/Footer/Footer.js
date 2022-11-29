import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles["footer-input"]}>
            <h2>E-Commercion</h2>
          </div>
          <div className={styles["footer-categories"]}>
            <h4>Categories</h4>
            <span>Laptops & Computers</span>
            <span>Cameras & Photography</span>
            <span>Smart Phones & Tablets</span>
            <span>Video Games & Consoles</span>
            <span>Waterproof Headphones</span>
          </div>
          <div className={styles["footer-pages"]}>
            <h4>Pages</h4>
            <span>Home</span>
            <span>Products</span>
            <span>About Us</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
