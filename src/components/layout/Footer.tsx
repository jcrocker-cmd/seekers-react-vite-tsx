import logo from "../../images/logo.png";
import { Fragment, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../../assets/css/footer.css";
import Copyright from "./Copyright";
import Newsletter from "./Newsletter";

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
      <div className="footer-wrapper bg-secondary py-0 w-full pt-60">
        <div className="footer mx-auto mx-o max-w-custom flex justify-center text-center flex-col py-10 px-10">
          <div className="footer-section navbar-logo footer-logo flex flex-col py-10">
            <img src={logo} alt="logo" />
            <div className="navbar-logo-txt text-white">
              <span>Seekers Baptist Church Inc.</span>
              <span>Baptist Conference of the Philippines</span>
            </div>
          </div>

          <hr className="mb-10 bg-[#ccc] w-[50%] flex justify-center mx-auto" />

          <div className="footer-section text-white w-[100%] flex flex-row flex-wrap justify-center">
            <div className="footer-col w-[20%] text-center flex flex-col gap-4 justify-center max-md:w-[50%] max-sm:text-xs">
              <h3>Quick Links</h3>
              <ul className="flex flex-col gap-4">
                <li>Home</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Product</li>
                <li>Brand</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-col w-[20%] text-center flex flex-col gap-4 max-md:w-[50%] max-sm:text-xs">
              <h3>Quick Links</h3>
              <ul className="flex flex-col gap-4">
                <li>Home</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Product</li>
                <li>Brand</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright></Copyright>
    </Fragment>
  );
}

export default Footer;
