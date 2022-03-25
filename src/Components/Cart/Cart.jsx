import React from "react";

const Cart = ({ product }) => {
  const { img, name } = product;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Cart;
