import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div
      className={`cart-dropdown-container ${
        cart.cartDropdown === true ? "show" : "hide"
      }`}
    >
      <div className="cart-dropdown-items">
        {cart.cartItems.map(({ name }) => {
          return <p>{name}</p>;
        })}
      </div>
      <button className="cart-dropdown-button">GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropdown;
