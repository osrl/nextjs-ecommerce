import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import styles from "./product.module.scss";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles["product"]}>
      <div className={styles["container"]}>
        <div className={styles["product-item"]}>
          <div className={styles["product-item-detail"]}>
            <Image
              src={product.image}
              alt="About"
              width={350}
              height={200}
              priority
            />
            <div className={styles["product-item-detail-text"]}>
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
              <p>{product.description}</p>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <span>
          <Link href="/products">Back to products page</Link>
        </span>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const req = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const product = await req.json();

  return {
    props: {
      product,
    },
  };
}
export default ProductDetail;
