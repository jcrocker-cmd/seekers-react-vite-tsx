import "../../assets/css/navbar.css";
import logo from "../../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
            <div className="navbar-logo-txt">
              <span>Seekers Baptist Church Inc.</span>
              <span>Baptist Conference of the Philippines</span>
            </div>
          </div>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li>
            <Link to="/ministries">MINISTRIES</Link>
          </li>
          <li>
            <a href="#services">GALLERY</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
