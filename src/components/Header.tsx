// import React from "react";

const Header = () => {
  return (
    <nav className="header__nav">
      <div className="header__logo">
        <h4>Sushiman</h4>
        <div className="header__logo-overlay"></div>
      </div>
      <ul className="header__menu">
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#food">Food</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
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
