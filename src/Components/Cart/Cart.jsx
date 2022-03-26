import React from "react";
import "./Cart.css";

const Cart = ({ product }) => {
  const { img, name } = product;

  const clearItemCart = () => {
    document.getElementById("cart-container").textContent = "";
  };
  return (
    <div>
      <div id="cart-container">
        <div className="cart-container">
          <img src={img} alt="" />
          <p>{name}</p>
          <div className="del-btn" onClick={clearItemCart}>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
