import React from "react";
import "./product-card.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ id, name, imageUrl, price }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleProductADD = () => {
    const cartItem = {
      id: id,
      name: name,
      imageUrl: imageUrl,
      price: price,
      quantity: 1,
    };

    setCart((prevState) => ({
      ...prevState,
      ["cartItems"]: [...prevState.cartItems, cartItem],
      ["cartItemsTotal"]: prevState.cartItemsTotal + 1,
    }));
    console.log(cart);
  };

  return (
    <div key={id} className="product-container">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <button onClick={handleProductADD}>ADD TO CART</button>
      </div>
      <div className="product-data">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
