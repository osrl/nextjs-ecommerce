import React from "react";

const products = ({ products }) => {
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <h2>{product.title}</h2>
      ))}
    </>
  );
};

export async function getServerSideProps(context) {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();

  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}

export default products;
