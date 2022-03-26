import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [random, setRandom] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (props) => {
    const newCart = [...addCart, props];
    setAddCart(newCart);
  };

  const randomItem = () => {
    const random = addCart[Math.floor(Math.random() * addCart.length)];
    setRandom(random);
  };

  const handleClearCart = () => setAddCart([]) || setRandom([]);
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
            {addCart.map((product) => (
              <Cart product={product} key={product.id}></Cart>
            ))}
            {random === undefined ? (
              []
            ) : (
              <div>
                <h3 className="random-item-title">Use Defult Random Item</h3>
                <div className="random-item-info">
                  <img src={random.img} alt="product-img" />
                  <p>{random.name}</p>
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
