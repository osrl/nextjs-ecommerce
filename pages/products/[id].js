import React from "react";
import Image from "next/image";
import styles from "./product.module.scss";
import Link from "next/link";

const ProductDetail = ({ product }) => {
  console.log(product);
  return (
    <div className={styles["product"]}>
      <div className={styles["container"]}>
        <div className={styles["product-item"]}>
          <div className={styles["product-item-detail"]}>
            <Image src={product.image} alt="About" width={350} height={250} />
            <div className={styles["product-item-detail-text"]}>
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
              <p>{product.description}</p>
              <button>Add to Cart</button>
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
