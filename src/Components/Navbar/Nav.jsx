import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">Indian Matrimony</div>
        <ul className="nav-links">
         
          <a><Link to="/" className="links">Home</Link></a>
          <a><Link to="/about">About Us</Link></a>
          <a><Link to="/contact">Contact Us</Link></a>
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