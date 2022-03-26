import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Shop.css";

const Shop = () => {
  // ADD PRODUCT STATE
  const [products, setProducts] = useState([]);
  // ADD CART PRODUCT STATE
  const [addCart, setAddCart] = useState([]);
  // ADD RANDOM SHOW ITEM STATE
  const [random, setRandom] = useState([]);
  // JSON FECTH DATA LODADED
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // HANDLE ADD TO CART FUNCTION ADDED
  const handleAddToCart = (props) => {
    const newCart = [...addCart, props];
    setAddCart(newCart);
  };
  // GENARET RENDOM PPRODUCT SHOW FUNCTIOIN
  const randomItem = () => {
    const random = addCart[Math.floor(Math.random() * addCart.length)];
    setRandom(random);
  };
  // CLEAR ALL DATA FUNCTION ADDED
  const handleClearCart = () => setAddCart([]) || setRandom([]);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product, idx) => (
          <SingleProduct
            addCart={handleAddToCart}
            product={product}
            key={idx}
          ></SingleProduct>
        ))}
      </div>
      <div>
        <div className="carts-container">
          <div className="sticky-items">
            <h2 className="cart-title">Selected Items</h2>
            {addCart.map((product, idx) => (
              <Cart product={product} key={idx}></Cart>
            ))}
            {random === undefined ? (
              []
            ) : (
              <div className="random-container">
                <h3 className="random-item-title">Use Defult Random Item</h3>
                <div className="random-item-info">
                  <img id="hideImg" src={random?.img} alt="" />
                  <p>{random?.name}</p>
                </div>
              </div>
            )}
            <div className="cart-btn-container">
              <button onClick={randomItem} className="cart-btn random-btn">
                Choose One For Me
              </button>
              <button onClick={handleClearCart} className="cart-btn clear-btn">
                Choose Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
