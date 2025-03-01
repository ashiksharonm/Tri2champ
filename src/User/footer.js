import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as Mail } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import logo from "../logo1.png";
import pdf from "../pdf.pdf";
import pdf1 from "../pdf1.pdf";
import { Helmet } from "react-helmet";

function Footer() {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 820);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (isMobileView) {
    return (
      <div className=" tiltneon col-12 col-sm-12 footer-mobile">
        <div className=" bg-gradient-to-b from-teal-900 to-zinc-950 border-t-2 bottom-0  border-indigo-300">
          <a href="#nav1" onClick={scrollToTop}>
            <img
              src={logo}
              alt="Logo"
              className="lg:h-auto h-23  w-50 mx-auto d-block pt-3"
            />
          </a>
          <div className=" col-11 col-sm-11">
            <p className="copy1 lg:text-xl text-sm text-zinc-50 pt-4 pb-3">
              Tri2champ is a triathlon training academy that specializes in
              coaching and mentoring elite triathletes who aspire to compete at
              the highest level. Whether you are aiming for the Olympics, the
              Ironman World Championship, or any other major event, we have the
              expertise and experience to help you achieve your dreams.
            </p>
            <div className="mx-auto d-block col-12 col-sm-12 pt-2 pb-2 text-end">
              <a
                href="https://www.facebook.com/groups/545209797657546/?ref=share&paipv=0&eav=AfZZNXp5BRnZR42ez3jNFf0dbbDlFC63ktr8TgXCeNmR6cDO16oSVEhP6aI8xnfrPaI&_rdr"
                className="social-icon-link text-zinc-50  pr-5 hover:text-orange-500"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/tri_2_champ/"
                className="social-icon-link text-zinc-50 pr-5 hover:text-orange-500"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=9677179907&text&type=phone_number&app_absent=0"
                className="social-icon-link icon-color text-zinc-50 pr-5 hover:text-orange-500"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="mailto:team.tri2champ@gmail.com"
                className="social-icon-link icon-color text-zinc-50 pr-5 hover:text-orange-500"
                target="_blank"
              >
                <FontAwesomeIcon icon={Mail} />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=13.0167188,80.1756658"
                className="social-icon-link icon-color  hover:text-orange-500"
                target="_blank"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </a>
            </div>

            <div className="footer-links lg:text-xl text-sm col-12 col-sm-11 pt-4 text-end">
              <a href={pdf1} className="hover:text-orange-500 pb-2" target="_blank">
                Cancellation and Refund Policy
              </a>
              <a href={pdf} className="hover:text-orange-500 pb-2" target="_blank">
                Terms and Privacy Policy
              </a>
              <a href="tel:9677179907" className="hover:text-orange-500 pb-2" target="_blank">
                Call Us
              </a>
            </div>

            <p className="text-zinc-50 lg:text-xl text-sm mx-auto d-block text-center pl-6 pt-4 pb-5">
              &copy; 2023 Tri2Champ. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Tri2champ</title>
        <link rel="icon" type="image/png" href="logo.png" />
      </Helmet>
      <div className="footer-wrapper">
        <div className="footer-container bg-gradient-to-b from-teal-900 to-zinc-950 border-t-2 bottom-0  border-indigo-300">
          <div className="footer-left col-2 col-sm-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <a href="#nav1" onClick={scrollToTop}>
              <img src={logo} alt="Logo" className="w-60" />
            </a>
          </div>
          <div className=" col-7 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p
              className="copy2 "
              style={{ fontSize: "0.6rem", paddingBottom: "" }}
            ></p>
            <p className="copy1 " style={{ textAlign: "justify" }}>
              Tri2champ is a triathlon training academy that specializes in
              coaching and mentoring elite triathletes who aspire to compete at
              the highest level. Whether you are aiming for the Olympics, the
              Ironman World Championship, or any other major event, we have the
              expertise and experience to help you achieve your dreams.
            </p>
            <p className="mx-auto d-block qq pt-4 pb-4 justify-end">
              &copy; 2023 Tri2Champ. All Rights Reserved.
            </p>
          </div>
          <div className="footer-right text-end   col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="footer-icons pb-5">
              <a
                href="https://www.facebook.com/groups/545209797657546/?ref=share&paipv=0&eav=AfZZNXp5BRnZR42ez3jNFf0dbbDlFC63ktr8TgXCeNmR6cDO16oSVEhP6aI8xnfrPaI&_rdr"
                className="social-icons sicons "
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="https://www.instagram.com/tri_2_champ/"
                className="social-icons sicons"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=9677179907&text&type=phone_number&app_absent=0"
                className="social-icons sicons"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="mailto:team.tri2champ@gmail.com"
                className="social-icons "
                target="_blank"
              >
                <FontAwesomeIcon icon={Mail} />
              </a>
              <br />
            </div>
            <a href="tel:9677179907">
              <p className="text-end pb-2 hover:underline hover:text-orange-500">
                +91 9677179907
              </p>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=13.0167188,80.1756658"
              className="hover:underline hover:text-orange-500"
              target="_blank"
            >
              <p className="pb-4">
                No. 2/19, P.P.Kovil street, Mettu Colony, Manapakkam, Chennai -
                600125
              </p>
            </a>
            <div className="footer-links ">
              <a
                href={pdf1}
                className="hover:text-orange-500 hover:underline pb-2"
                target="_blank"
              >
                Cancellation and Refund Policy
              </a>
              <a
                href={pdf}
                className="hover:text-orange-500 hover:underline pb-2"
                target="_blank"
              >
                Terms and Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
