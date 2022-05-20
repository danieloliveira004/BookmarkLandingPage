import React from "react";
import './style.css';

const Header = () => (
  <header>
    <div className="container">
      <div className="navbar">
        <a href="#">
          <img src='assets/logo-bookmark.svg' />
        </a>
        <nav className="navbar-nav">
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#" className="btn btn-red">Login</a></li>
          </ul>
        </nav>
        <div id="burguer">
          <img src="assets/icon-hamburger.svg" />
        </div>
      </div>
      </div>
  </header>
);

export default Header;
