import React from "react";
import { useContext } from "react";

import "./shop.styles.scss";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map(({ id, name, imageUrl, price }) => {
        return (
          <ProductCard id={id} name={name} imageUrl={imageUrl} price={price} />
        );
      })}
    </div>
  );
};

export default Shop;
