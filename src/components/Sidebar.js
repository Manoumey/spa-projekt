import React from "react";
import CartItem from "./CartItem";

function Sidebar({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.prix * curr.quantity,
    0
  );

  return (
    <div className="sidebar">
      <h2>Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <li>your cart is empty.</li>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))
        )}
      </ul>
      <h3>Total : {totalPrice}€</h3>
    </div>
  );
}

export default Sidebar;
