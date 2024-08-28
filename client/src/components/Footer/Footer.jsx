import { Link } from "react-router-dom";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__left">
        <ul className="footer__nav">
          <li className="footer__link">
            <Link to="/">Home</Link>
          </li>
          <li className="footer__link">
            <Link to="/coffee-shops">Coffee Shops</Link>
          </li>
          <li className="footer__link">
            <Link to="/about-us">About</Link>
          </li>
        </ul>
      </section>

      <section className="footer__right">
        <h2 className="footer__heading">CoffeeBesties</h2>
        <p className="footer__text">Stay connected through our socials!</p>
        <div className="footer__socials">
          <CiInstagram size={40} />
          <CiLinkedin size={40} />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
