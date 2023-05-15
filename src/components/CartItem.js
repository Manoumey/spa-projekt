import React from "react";

function CartItem({ item, cartItems, setCartItems, isDisabled }) {
  const increaseQuantity = () => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decreaseQuantity = () => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    } else {
      removeItem();
    }
  };

  const removeItem = () => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };

  const totalPrice = item.prix * item.quantity;

  const disableAddButton = item.quantity >= item.inventory;
  const disablePlusButton = item.quantity === item.inventory;

  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img src={item.url} alt={item.nom} className="cart-item-image" />
        <p className="cart-item-price">{item.prix} €</p>
      </div>
      <div className="cart-item-details">
        <p className="cart-item-name">{item.nom}</p>
        <div className="cart-item-quantity">
          <button className="quantity-button minus" onClick={decreaseQuantity}>
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="quant>ity-button plus"
            onClick={increaseQuantity}
            disabled={isDisabled || disableAddButton}
          >
            +
          </button>
        </div>
        <p className="cart-item-total-price">
          Total: {totalPrice.toFixed(2)} €
        </p>
        <button
          className="remove-button"
          onClick={removeItem}
          disabled={isDisabled}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
