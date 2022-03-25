import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ addCart, product }) => {
  const { name, img, price, brande, star } = product;

  return (
    <div className="product-container">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <h5 className="product-name">{name}</h5>
      <div className="product-info">
        <p className="product-price">Price: ${price}</p>
        <p>Brand: {brande}</p>
        <p>Star: {star}</p>
      </div>
      <button onClick={() => addCart(product)} className="cart-btn">
        Add To Cart <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default SingleProduct;
