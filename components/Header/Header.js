import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["login-signup"]}>LOGİN SIGNUP</div>
        <nav className={styles.container}>
          <ul className={styles["header-list"]}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <input type="text" />
        </nav>
      </header>
    </>
  );
};

export default Header;
