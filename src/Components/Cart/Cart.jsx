import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // console.log(props);
  const { img, name } = props.product;

  const clearItemCart = () => {
    document.getElementById("cart-container").textContent = "";
  };
  return (
    <div id="cart-container">
      <div className="cart-container">
        <img src={img} alt="" />
        <p>{name}</p>
        <div className="del-btn" onClick={clearItemCart}>
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
      {/* <h4>{random.name}</h4> */}
    </div>
  );
};

export default Cart;
