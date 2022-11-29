// import { User } from "@auth0/auth0-react";
import React from "react";
import styles from "./Header.module.scss";

const LoginHeader = () => {
  // console.log(user);

  return (
    <div className={styles["login-signup"]}>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};

export default LoginHeader;
