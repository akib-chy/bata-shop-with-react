import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <a className="logo" href="/logo">
        Bata Shop
      </a>
      <div className="nav-item">
        <a href="/home">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
