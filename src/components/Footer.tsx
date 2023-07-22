import facebook from "../assets/sushi_assets/assets/facebook.svg";
import instagram from "../assets/sushi_assets/assets/instagram.svg";
import twitter from "../assets/sushi_assets/assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer flex-between">
      <h3 className="footer__logo">
        <span>Sushi</span>man
      </h3>
      <ul className="footer__nav">
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
      </ul>

      <ul className="footer__social">
        <li className="flex-center">
          <img src={facebook} alt="facebook" />
        </li>
        <li className="flex-center">
          <img src={instagram} alt="instagram" />
        </li>
        <li className="flex-center">
          <img src={twitter} alt="twitter" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
