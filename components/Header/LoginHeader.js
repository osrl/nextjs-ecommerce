// import { User } from "@auth0/auth0-react";
import React from "react";
import styles from "./Header.module.scss";
import { useUser } from "@auth0/nextjs-auth0";

const LoginHeader = () => {
  // console.log(user);
  const { user, error, isLoading } = useUser();
  console.log(user);

  return user ? (
    <div className={styles["login-signup"]}>
      <span>{user.nickname}</span>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  ) : (
    <div className={styles["login-signup"]}>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};

export default LoginHeader;
