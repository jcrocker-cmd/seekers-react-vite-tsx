import logo from "../../images/logo.png";
import { Fragment, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../../assets/css/footer.css";
import Copyright from "./Copyright";
import Newsletter from "./Newsletter";
import { FaFacebook } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import Section from "../common/Section";

function Footer() {
  useEffect(() => {
    ScrollReveal().reveal(".footer-logo", {
      delay: 400,
      duration: 2000,
      distance: "50px",
      origin: "top",
    });
  }, []);
  return (
    <Fragment>
      <Newsletter />
      <Section className="footer-wrapper bg-secondary py-0 w-full pt-60 px-3">
        <div className="footer mx-auto max-w-screen-lg flex flex-col text-center text-white font-mont py-10">
          {/* Logo and Title Section */}
          <div className="footer-logo flex flex-col items-center py-6 mb-10">
            <img src={logo} alt="logo" className="w-20 mb-4" />
            <h3 className="text-lg font-bold">Seekers Baptist Church Inc.</h3>
            <p className="text-sm">Baptist Conference of the Philippines</p>
          </div>

          {/* Address and Contact Info Section */}
          <div className="footer-info flex flex-row justify-between text-left items-center gap-10 text-base max-sm:flex-col max-sm:text-center">
            <address className="not-italic">
              Purok 1, Barangay Salvador
              <br />
              Sierra Bullones, Bohol
              <br />
              Central Visayas, Philippines, 6320
            </address>
            <div className="footer-contact">
              <p>Mobile: +63 968 362 7219</p>
              <p>Tel: 032 345 8783</p>
              <p>
                Email:{" "}
                <a href="mailto:hrcebu@cody.inc" className="text-blue-400">
                  hrcebu@cody.inc
                </a>
              </p>
            </div>
          </div>

          {/* Links and Social Icons Section */}
          <div className="footer-links flex flex-col sm:flex-row justify-between items-center pt-10">
            <div className="links flex flex-wrap gap-4 text-base tex">
              <a href="#">Services</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="social-icons flex items-center gap-6 pt-6 md:pt-0">
              <a href="#" className="text-2xl">
                <SiGooglemaps />
              </a>
              <a href="#" className="text-2xl">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Copyright Component */}
      <Copyright />
    </Fragment>
  );
}

export default Footer;
