import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="book-logo">
        <Link to="/">
          <h2>FuRatiOn StOrE</h2>
        </Link>
      </div>
      <div className="book-home">
        <Link to="/">
          <h2>Home</h2>
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
