import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Indian Matrimony</h3>
          <p>
            Indian Matrimony, India's premier and most trusted matrimony
            service, is recognised for its unwavering commitment to helping
            individuals find their life partners. With a legacy spanning 24
            years, our dedication to facilitating meaningful connections has
            resonated with lakhs of customers across the nation. We have been
            serving a staggering 7.5 million customers every month through our
            matchmaking services.
          </p>
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/story">Success Stories</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            {/* <li>
              <FaHome /> New York, NY 10012, US
            </li> */}
            <li>
              <FaEnvelope /> &nbsp;indianmatrimony@gmail.com
            </li>
            <li>
              <FaPhone /> + 01 234 567 88
            </li>
            <li>
              <FaMapMarkerAlt />
              &nbsp; No:57, 1st Main Road, Gandhi Nagar, Chennai, Tamil Nadu
              600020
            </li>
          </ul>
        </div>
        <div className="footer-follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <Facebook color="#1877f3" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter color="#1da1f2" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram color="#e4405f" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin color="#0077b5" />
            </a>
            <a href="#" aria-label="GitHub">
              <Github color="#333" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Copyright:{" "}
        <a href="http://localhost:3000/">Indian Matrimony.com</a>
      </div>
    </footer>
  );
};

export default Footer;
