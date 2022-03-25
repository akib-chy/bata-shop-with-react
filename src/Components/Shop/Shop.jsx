import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id}></SingleProduct>
        ))}
      </div>
      <div className="cart-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          laborum ad quae quod temporibus veritatis qui asperiores, error quos
          doloribus enim laudantium velit provident autem consequatur? Minus
          nisi voluptates mollitia accusantium modi nam fugiat repudiandae
          consectetur natus! Eligendi sapiente delectus quos laboriosam
          doloremque! Aspernatur veniam accusamus dolor cupiditate ducimus
          magnam!
        </p>
      </div>
    </div>
  );
};

export default Shop;
