import React, { useState, useEffect } from "react";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://products-api-tkw6.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar cartItems={cartItems} setCartItems={setCartItems} />
      </div>

      <ProductList
        products={products}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default App;
