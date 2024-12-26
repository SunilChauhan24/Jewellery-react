import React from "react";
import "./Footer.css"; 
import "@fortawesome/fontawesome-free/css/all.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="about">
          <h3>ABOUT US</h3>
          <p>
            Silversea is a one-stop solution for all your dainty silver
            jewellery needs. Our mission is to provide trendy and everyday wear
            minimal silver jewellery from all over the globe to our customers at
            pocket-friendly prices. For her carefully curates its designs from
            all over the world to give its customers a feeling of newness. The
            brand was established in 2017 and is carving its path to success
            since then.
          </p>
        </div>

        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="/contact">Contact us</a>
            </li>
            <li>
              <a href="/shipping">Shipping & Delivery</a>
            </li>
            <li>
              <a href="/return">Return Policy</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="collections">
          <h3>COLLECTIONS</h3>
          <ul>
            <li>
              <a href="/collections/all">All</a>
            </li>
            <li>
              <a href="/collections/rings">Rings</a>
            </li>
            <li>
              <a href="/collections/chains">Chains</a>
            </li>
            <li>
              <a href="/collections/bracelets">Bracelets</a>
            </li>
            <li>
              <a href="/collections/necklaces">Necklaces</a>
            </li>
            <li>
              <a href="/collections/earrings">Earrings</a>
            </li>
          </ul>
        </div>

        <div className="newsletter">
          <h3>NEWSLETTER</h3>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="email-input"
            />
            <button type="submit" className="subscribe-button">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>Copyright © 2024 Silversea</p>
      </div>
    </footer>
  );
};

export default Footer;
