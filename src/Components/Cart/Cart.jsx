import React from "react";
import "./Cart.css";

const Cart = ({ product }) => {
  const { img, name } = product;

  const clearItemCart = () => {
    document.getElementById("cart-container").textContent = "";
  };
  return (
    <div id="cart-container">
      <div className="cart-container">
        <img src={img} alt="" />
        <p>{name}</p>
        <button onClick={clearItemCart}>delete</button>
      </div>
    </div>
  );
};

export default Cart;
