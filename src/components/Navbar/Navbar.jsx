import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-component">
      <div className="nav-left">logo</div>
      <div className="nav-right">
        <div className="login">Login</div>
        <div className="cart">Cart</div>
      </div>
    </div>
  );
};

export default Navbar;
