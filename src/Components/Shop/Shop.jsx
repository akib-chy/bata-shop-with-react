import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [addCart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (props) => {
    const newCart = [...addCart, props];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <SingleProduct
            addCart={handleAddToCart}
            product={product}
            key={product.id}
          ></SingleProduct>
        ))}
      </div>
      <div className="cart-container">
        {addCart.map((product) => (
          <Cart product={product} key={product.id}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Shop;
