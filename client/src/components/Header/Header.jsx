import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__heading">CoffeeBesties</h2>
      <ul className="header__nav">
        <li className="header__nav-item">
          <NavLink to="/" className="header__nav-link">
            HOME
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/coffee-shops" className="header__nav-link">
            Coffee shops
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/about-us" className="header__nav-link">
            ABOUT
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
