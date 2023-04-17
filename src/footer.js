import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import logo from "./logo1.png";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="footer-container bg-gradient-to-b from-indigo-950 to-zinc-950 border-2  border-indigo-300">
        <div className="footer-left col-3 col-sm-3 col-md-3 col-lg-3">
          <a href="#nav1" onClick={scrollToTop}>
          <img src={logo} alt="Logo" className="footer-logo" />
          </a>
        </div>
        <div  className=" col-5 col-sm-5 col-md-5 col-lg-5">
          <p className="copy1 ">
            Tri2Champ - Swim . Cycle . Run . Faster
          </p>
          <p className="copy">&copy; 2023 Tri2Champ. All Rights Reserved.</p>
        </div>
        <div className="footer-right text-center col-4 col-sm-4 col-md-4 col-lg-4">
          <div className="footer-icons">
            <a href="#" className="social-icons">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-icons">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-icons">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="footer-links">
            <a href="#" className="hover:text-orange-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-500">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
