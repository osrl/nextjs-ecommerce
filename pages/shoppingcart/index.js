import React from "react";
import Image from "next/image";
import styles from "./shoppingcart.module.scss";

const shoppingcart = () => {
  return (
    <div className={styles["shoppingCart"]}>
      <div className={styles["container"]}>
        <div className={styles["shoppingCart-products"]}>
          <ul>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>
        </div>

        <div className={styles["shoppingCart-total"]}>asdasd</div>
      </div>
    </div>
  );
};

export default shoppingcart;
