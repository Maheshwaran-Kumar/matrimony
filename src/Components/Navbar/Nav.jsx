import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          Indian Matrimony
        </Link>
        <ul className="nav-links">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
      </div>
      <div className="nav-right">
        <Link to="/register">
          <button className="btn outline">Register</button>
        </Link>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
