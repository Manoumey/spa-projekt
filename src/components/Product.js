import React from "react";

function Product({ product, cartItems, setCartItems, isDisabled }) {
  const addToCart = () => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      if (existingCartItem.quantity < existingCartItem.inventory) {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex((item) => item.id === product.id);
        newCartItems[index].quantity += 1;
        setCartItems(newCartItems);
      }
    } else {
      const newItem = {
        id: product.id,
        nom: product.nom,
        prix: product.prix,
        inventory: product.inventory,
        url: product.url,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <div className="product">
      <div className="product-image-container">
        <img src={product.url} alt={product.nom} className="product-image" />
      </div>
      <div className="product-details">
        <p className="product-name">{product.nom}</p>
        <p className="product-price">{product.prix} €</p>
        <button
          className="product-add-btn"
          onClick={addToCart}
          disabled={isDisabled}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Product;
