// import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header__nav">
      <div className="header__logo">
        <h4>Sushiman</h4>
        <div className="header__logo-overlay"></div>
      </div>
      <ul className="header__menu">
        <Link to="/menu">
          <li>Menu</li>
        </Link>
        <Link to="/food">
          <li>Food</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/about-us">
          <li>About Us</li>
        </Link>
        <li>
          <img src="./src/assets/sushi_assets/assets/search.svg" alt="search" />
        </li>
      </ul>

      <ul className="header__menu-mobile">
        <li>
          <img src="./src/assets/sushi_assets/assets/menu.svg" alt="menu" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
