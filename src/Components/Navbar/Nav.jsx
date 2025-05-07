import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">Indian Matrimony</div>
        <ul className="nav-links">
         
          <li><Link to="/" className="links">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <Link to="/register"><button className="btn outline">Register</button></Link>
        <Link to="/login"><button className="btn">Login</button></Link>
      </div>
    </nav>
  );
};

export default Nav;
