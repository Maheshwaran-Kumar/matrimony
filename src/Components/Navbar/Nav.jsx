import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="logo">
          Indian Matrimony
        </NavLink>
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "links active-link" : "links"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "links active-link" : "links"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "links active-link" : "links"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "links active-link" : "links"
            }
          >
            Wish List
          </NavLink>
        </div>
      </div>
      <div className="nav-right">
        <NavLink to="/register">
          <button className="btn outline">Register</button>
        </NavLink>
        <NavLink to="/login">
          <button className="btn">Login</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
