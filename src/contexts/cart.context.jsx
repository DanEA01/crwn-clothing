import { createContext, useState } from "react";

const cartSchema = {
  cartDropdown: false,
  cartItems: [],
  cartItemsTotal: 0,
  cartTotal: 0,
};

export const CartContext = createContext({
  cart: cartSchema,
  setCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartSchema);
  const value = { cart, setCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
