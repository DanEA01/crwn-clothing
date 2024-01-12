import React, { useContext } from "react";
import "./shop-icon.styles.scss";
import ShopIconSVG from "../../assets/shopping-bag.svg?react";

import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const ShopIcon = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    setCart({ ...cart, ["cartDropdown"]: !cart.cartDropdown });
  };

  return (
    <div className="shop-icon-container" onClick={handleClick}>
      <ShopIconSVG />
      <span className="shop-icon-item-count">{cart.cartItemsTotal}</span>
    </div>
  );
};

export default ShopIcon;
