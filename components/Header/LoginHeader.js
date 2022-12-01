import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import Notiflix from "notiflix";
import { useUser } from "@auth0/nextjs-auth0";

const LoginHeader = () => {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    Notiflix.Loading.standard();
    Notiflix.Loading.remove();
  }, [user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div className={styles["login-signup"]}>
      <span>{user.nickname}</span>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  ) : (
    <div className={styles["login-signup"]}>
      <a href="/api/auth/login">Login</a>
    </div>
  );
};

export default LoginHeader;
