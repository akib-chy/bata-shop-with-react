import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ product }) => {
  const { name, img, price } = product;
  return (
    <div className="product-container">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
      </div>
    </div>
  );
};

export default SingleProduct;
