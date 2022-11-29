import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./products.module.scss";

const products = ({ products }) => {
  const [allProducts, setAllProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.category.includes(selectedCategory);
  });

  return (
    <>
      <div className={styles["products"]}>
        <div className={styles["container"]}>
          <div className={styles["products-header"]}>
            <h3>Products List</h3>
            <select onChange={handleSearchChange}>
              <option className="option" value="men's clothing">
                Men Clothing
              </option>
              <option className="option" value="women's clothing">
                Women Clothing
              </option>
              <option className="option" value="jewelery">
                Jewelery
              </option>
              <option className="option" value="electronics">
                Electronics
              </option>
            </select>
          </div>
          <div className={styles["products-cards"]}>
            {filteredProducts.map((filteredProduct, index) => (
              <div key={index} className={styles["products-card"]}>
                <div className={styles["products-card-left"]}>
                  <Image
                    src={filteredProduct.image}
                    alt="About"
                    width={250}
                    height={250}
                  />
                </div>
                <div className={styles["products-card-right"]}>
                  <h4>{filteredProduct.title}</h4>
                  <h4>{filteredProduct.category}</h4>
                  <span>Price: {filteredProduct.price}</span>
                  <p>{filteredProduct.description}</p>
                  <div className={styles["products-svg"]}>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.24658 4.18519C2.24658 4.01128 2.31567 3.8445 2.43863 3.72153C2.5616 3.59856 2.72838 3.52948 2.90229 3.52948H3.39013C4.2207 3.52948 4.71903 4.08814 5.00317 4.60746C5.19289 4.95367 5.33015 5.35497 5.43769 5.71867C5.46677 5.71637 5.49594 5.7152 5.52511 5.71517H16.4518C17.1775 5.71517 17.702 6.40934 17.5027 7.10789L15.9045 12.7111C15.7612 13.2137 15.4581 13.6559 15.041 13.9708C14.6239 14.2857 14.1155 14.4561 13.5929 14.4562H8.39274C7.86598 14.4562 7.3538 14.2832 6.93491 13.9638C6.51602 13.6445 6.21361 13.1964 6.07416 12.6884L5.40971 10.2649L4.30812 6.55098L4.30725 6.54398C4.17086 6.04827 4.04322 5.58403 3.85263 5.23781C3.6699 4.90122 3.52302 4.84089 3.39101 4.84089H2.90229C2.72838 4.84089 2.5616 4.77181 2.43863 4.64884C2.31567 4.52587 2.24658 4.35909 2.24658 4.18519ZM6.68178 9.94666L7.33836 12.3413C7.4695 12.8152 7.90052 13.1448 8.39274 13.1448H13.5929C13.8305 13.1448 14.0616 13.0674 14.2512 12.9243C14.4408 12.7812 14.5786 12.5802 14.6438 12.3518L16.1624 7.02658H5.818L6.66954 9.90032L6.68178 9.94666Z"
                        fill="#535399"
                      />
                      <path
                        d="M9.67777 17.0808C9.67777 17.5445 9.49354 17.9893 9.16563 18.3172C8.83771 18.6451 8.39296 18.8293 7.92922 18.8293C7.46547 18.8293 7.02072 18.6451 6.6928 18.3172C6.36489 17.9893 6.18066 17.5445 6.18066 17.0808C6.18066 16.617 6.36489 16.1723 6.6928 15.8444C7.02072 15.5164 7.46547 15.3322 7.92922 15.3322C8.39296 15.3322 8.83771 15.5164 9.16563 15.8444C9.49354 16.1723 9.67777 16.617 9.67777 17.0808ZM8.36635 17.0808C8.36635 16.9648 8.3203 16.8536 8.23832 16.7717C8.15634 16.6897 8.04515 16.6436 7.92922 16.6436C7.81328 16.6436 7.70209 16.6897 7.62011 16.7717C7.53813 16.8536 7.49208 16.9648 7.49208 17.0808C7.49208 17.1967 7.53813 17.3079 7.62011 17.3899C7.70209 17.4718 7.81328 17.5179 7.92922 17.5179C8.04515 17.5179 8.15634 17.4718 8.23832 17.3899C8.3203 17.3079 8.36635 17.1967 8.36635 17.0808Z"
                        fill="#535399"
                      />
                      <path
                        d="M15.7974 17.0808C15.7974 17.5445 15.6132 17.9893 15.2853 18.3172C14.9573 18.6451 14.5126 18.8293 14.0488 18.8293C13.5851 18.8293 13.1403 18.6451 12.8124 18.3172C12.4845 17.9893 12.3003 17.5445 12.3003 17.0808C12.3003 16.617 12.4845 16.1723 12.8124 15.8444C13.1403 15.5164 13.5851 15.3322 14.0488 15.3322C14.5126 15.3322 14.9573 15.5164 15.2853 15.8444C15.6132 16.1723 15.7974 16.617 15.7974 17.0808ZM14.486 17.0808C14.486 16.9648 14.4399 16.8536 14.3579 16.7717C14.276 16.6897 14.1648 16.6436 14.0488 16.6436C13.9329 16.6436 13.8217 16.6897 13.7397 16.7717C13.6578 16.8536 13.6117 16.9648 13.6117 17.0808C13.6117 17.1967 13.6578 17.3079 13.7397 17.3899C13.8217 17.4718 13.9329 17.5179 14.0488 17.5179C14.1648 17.5179 14.276 17.4718 14.3579 17.3899C14.4399 17.3079 14.486 17.1967 14.486 17.0808Z"
                        fill="#535399"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();

  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}

export default products;
