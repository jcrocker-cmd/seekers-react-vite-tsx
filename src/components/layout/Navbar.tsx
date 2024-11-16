import "../../assets/css/navbar.css";
import logo from "../../images/logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar-wrapper ${isSticky ? "sticky" : ""}`}>
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
          <li
            className={`dropdown relative ${
              location.pathname === "/about-us" ? "active" : ""
            }`}
          >
            <Link to="/about-us">
              <span className="dropdown-toggle">
                ABOUT US
                <span className="arrow">
                  <MdKeyboardArrowDown />
                </span>
              </span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/mission">Principles</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </li>
          <li className={location.pathname === "/ministries" ? "active" : ""}>
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
