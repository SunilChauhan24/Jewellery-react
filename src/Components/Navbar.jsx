import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Img/logo-70.png";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" />
        </div>

        {/* Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          {/* Shop by Collections (Dropdown) */}
          <div className="dropdown">
            <a
              href="#collections"
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                setIsCollectionsOpen(!isCollectionsOpen);
              }}
            >
              Shop by Collections
              {/* <IoMdArrowDropdown className="dropdown-icon" /> */}
            </a>
            {isCollectionsOpen && (
              <div className="dropdown-menu">
                <a href="#collection1">Collection 1</a>
                <a href="#collection2">Collection 2</a>
                <a href="#collection3">Collection 3</a>
              </div>
            )}
          </div>

          {/* Shop by Categories (Dropdown) */}
          <div className="dropdown">
            <a
              href="#categories"
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                setIsCategoriesOpen(!isCategoriesOpen);
              }}
            >
              Shop by Categories
              {/* <IoMdArrowDropdown className="dropdown-icon" /> */}
            </a>
            {isCategoriesOpen && (
              <div className="dropdown-menu">
                <a href="#category1">Category 1</a>
                <a href="#category2">Category 2</a>
                <a href="#category3">Category 3</a>
              </div>
            )}
          </div>

          <a href="#bestsellers">Bestsellers</a>
          <a href="#mens-jewelry">Men's Jewelry</a>
          <a href="#store-location">Store Location</a>
        </div>

        {/* Icons */}
        <div className="navbar-icons">
          <FaSearch className="icon" />
          <FaShoppingCart className="icon" />
          <FaUser className="icon" />
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
