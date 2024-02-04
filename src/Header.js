import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.png" alt="MINISO Logo" className="logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/brand">Brand</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/campaign">Special Campaign</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/franchise">Franchise</a>
          </li>
          <li>
            <a href="/investors">Investors</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="searchwrap">
        <button type="button" className="search-button">
          <img src="/images/garysearch.png" alt="Search" />
        </button>
      </div>
    </header>
  );
};

export default Header;
