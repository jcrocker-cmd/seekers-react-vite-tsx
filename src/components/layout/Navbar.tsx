import "../../assets/css/navbar.css";
import logo from "../../images/logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarDropDown from "../common/NavbarDropDown";
import Section from "../common/Section";
import NavbarMobile from "../common/NavbarMobile";
import { aboutUsItems, servicesItems } from "../data/navbarDropdownData";

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
    <Section className={`navbar-wrapper ${isSticky ? "sticky" : ""}`}>
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
          <NavbarDropDown
            title="About Us"
            dropitems={aboutUsItems}
            activePath="/about-us"
          />

          <NavbarDropDown
            title="Services"
            dropitems={servicesItems}
            activePath="/services"
          />

          <li className={location.pathname === "/ministries" ? "active" : ""}>
            <Link to="/ministries">MINISTRIES</Link>
          </li>
          <li>
            <a href="#services">GALLERY</a>
          </li>
          <li className={location.pathname === "/contact-us" ? "active" : ""}>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
        </ul>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Fullscreen mobile menu */}
        {isOpen && <NavbarMobile toggleMenu={toggleMenu} />}
      </nav>
    </Section>
  );
}

export default Navbar;
