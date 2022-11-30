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
          <div className={styles["product-item-detail"]}>
            <div className={styles["product-item"]}>
              <div className={styles["product-item-image"]}>İMAGE</div>
              <div className={styles["product-item-description"]}>
                <h6>Ut diam consequat</h6>
              </div>
            </div>
            <div className={styles["product-item-description-texts"]}>
              <span>$23.00</span>
              <input type="number" id="number" />
              <span>$232.00</span>
            </div>
          </div>
          <div className={styles["product-item-detail"]}>
            <div className={styles["product-item"]}>
              <div className={styles["product-item-image"]}>İMAGE</div>
              <div className={styles["product-item-description"]}>
                <h6>Ut diam consequat</h6>
              </div>
            </div>
            <div className={styles["product-item-description-texts"]}>
              <span>$23.00</span>
              <input type="number" id="number" />
              <span>$232.00</span>
            </div>
          </div>
          <div className={styles["product-item-detail"]}>
            <div className={styles["product-item"]}>
              <div className={styles["product-item-image"]}>İMAGE</div>
              <div className={styles["product-item-description"]}>
                <h6>Ut diam consequat</h6>
              </div>
            </div>
            <div className={styles["product-item-description-texts"]}>
              <span>$23.00</span>
              <input type="number" id="number" />
              <span>$232.00</span>
            </div>
          </div>
        </div>

        <div className={styles["shoppingCart-total"]}>
          <div className={styles["shoppingCart-total-box"]}>
            <div>
              <h4>Totals:</h4>
              <span>£219.00</span>
            </div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shoppingcart;
