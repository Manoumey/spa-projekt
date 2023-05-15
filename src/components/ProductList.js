import React from "react";
import Product from "./Product";

function ProductList({ products, cartItems, setCartItems }) {
  return (
    <div className="product-list">
      <h1>Our menu</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

export default ProductList;
