import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";
import Notiflix from "notiflix";
import styles from "./shoppingcart.module.scss";

const Shoppingcart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  useEffect(() => {
    Notiflix.Loading.standard();
    Notiflix.Loading.remove();
  }, [cart]);

  return (
    <div className={styles["shoppingCart"]}>
      <div className={styles["container"]}>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) : (
          <>
            <div className={styles["shoppingCart-products"]}>
              <ul>
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li>
              </ul>

              {cart.map((item, index) => (
                <div key={index} className={styles["product-item-detail"]}>
                  <div className={styles["product-item"]}>
                    <div className={styles["product-item-image"]}>
                      <Image
                        src={item.image}
                        width={70}
                        height={70}
                        alt="Shopping cart item"
                      />
                    </div>
                    <div className={styles["product-item-description"]}>
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                  <div className={styles["product-item-description-texts"]}>
                    <span>{item.price}</span>
                    <div
                      className={
                        styles["product-item-description-texts-buttons"]
                      }
                    >
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                      <button onClick={() => dispatch(removeFromCart(item.id))}>
                        x
                      </button>
                    </div>
                    <span>
                      {item.quantity} : {item.quantity * item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles["shoppingCart-total"]}>
              <div className={styles["shoppingCart-total-box"]}>
                <div>
                  <h4>Totals:</h4>
                  <span>$ {getTotalPrice()}</span>
                </div>
                <button>Proceed To Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shoppingcart;
