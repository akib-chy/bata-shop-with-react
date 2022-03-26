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

  const randomItem = () => {
    const random = addCart[Math.floor(Math.random() * addCart.length)];
    console.log(random);
  };

  const ClearCart = () => {
    document.getElementById("carts-info").textContent = "";
    // addCart.length = 0;
  };
  console.log(addCart);
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
      <div>
        <div className="carts-container">
          <div className="sticky-items">
            <h2 className="cart-title">Selected Items</h2>
            <div id="carts-info">
              {addCart.map((product) => (
                <Cart product={product} key={product.id}></Cart>
              ))}
            </div>
            <div className="cart-btn-container">
              <button onClick={randomItem} className="cart-btn">
                Random selected
              </button>
              <button onClick={ClearCart} className="cart-btn">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
