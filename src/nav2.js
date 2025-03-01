import React, { useState,useEffect } from "react";
import logo from "./logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { scroller } from "react-scroll";
import Tilt from "react-parallax-tilt";
import "./nav.css";

const NavbarM = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const hideMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 767);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{}} className="w-full tilt-neon">
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
      >
        
        {isMobileView ? null : (
            <a
              href="/"
              className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
            >
              <Tilt>
                <img
                  src={logo}
                  alt="Logo"
                  className="logo-image mx-auto b-block"
                  style={{}}
                />
              </Tilt>
            </a>
          )}
        <div className="flex-grow">
          <ul className="flex justify-end">
          <li className="pr-8 pl-3 pt-4 pb-4">
              <a
                href="/"
                className="hov under size"
              >
                Home
              </a>
            </li>
            <li className="pr-8  pt-4 pb-4">
              <a
                href="/HomeEvent"
                className="hov under size"
              >
                Events
              </a>
            </li>
            
            <li className="pr-8 pt-4 pb-4">
              <a
                href="#form"
                className="hov under size"
                onClick={() => scrollTo("form")}
              >
                Contact
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="/Login"
                className="hov under size"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
        {isMobileView ? (
            <div className="flex items-center">
              <a
              href="/"
              className="flex  flex-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
            >
              <Tilt>
                <img
                  src={logo}
                  alt="Logo"
                  className="h-14 flex-start  "
                  style={{minWidth:'15vh'}}
                />
              </Tilt>
            </a> 
              <button className="hamburger-icon text-end float-end" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          ) : null}
      </nav>
        {isMobileView && showMobileMenu && (
          <div className="mobile-menu">
            <ul>
            <li className="">
              <a href="/" className="hov under size">
                Home
              </a>
            </li>
            <li className="">
              <a href="/HomeEvent" className="hov under size">
                Events
              </a>
            </li>
            <li className="">
              <a
                href="#form"
                className="hov under size"
                onClick={() => scrollTo("form")}
              >
                Contact
              </a>
            </li>
            <li className="">
              <a href="/Login" className="hov under size">
                Login
              </a>
            </li>
            </ul>
          </div>
        )}
      </div>
  );
};

export default NavbarM;