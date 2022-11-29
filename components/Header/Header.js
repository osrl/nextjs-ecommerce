import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["login-signup"]}>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
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
        </nav>
      </header>
    </>
  );
};

export default Header;
