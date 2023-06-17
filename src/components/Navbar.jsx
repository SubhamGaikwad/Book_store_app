import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>BOOK STORE</div>
      <div>
        <Link to="/cart">
          <h3>Cart</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
