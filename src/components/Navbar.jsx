import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="book-logo">
        <Link to="/">
          <h1>FuRatiOn StOrE</h1>
        </Link>
      </div>
      <div className="book-cart">
        <Link to="/cart">
          <h2>Cart</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
