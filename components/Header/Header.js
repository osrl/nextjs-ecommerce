import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
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
          </ul>
          <input type="text"></input>
        </nav>
      </header>
    </>
  );
};

export default Header;
