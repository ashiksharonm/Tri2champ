import React, { useState, useEffect } from "react";
import logo from "../logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { scroller } from "react-scroll";
import UserProfile from "./signform";
import UserTeam from "./Team";
import UserGallery from "./gallery";
import UserEvent from "./event";
import Tilt from "react-parallax-tilt";
import UserPage from "./UserPage";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./nav.css";


const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  const handleProfile = () => {};

  const handleLogout = () => {
    localStorage.removeItem("authUID");
    Cookies.remove("loggedIn");
    window.location.replace("./");
  };

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

  const currentPath = window.location.pathname;
  if (currentPath === "/team") {
    return <UserTeam />;
  } else if (currentPath === "/gallery") {
    return <UserGallery />;
  } else if (currentPath === "/Signin") {
    return <UserProfile />;
  } else if (currentPath === "/event") {
    return <UserEvent />;
  } else {
    return (
      <div style={{}} className="">
        <nav
          className="flex border-b-2 tilt-neon border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900 via-indigo-950 to-zinc-900"
          id="nav1"
        >
          {isMobileView ? null : (
            <a
              href="/UserPage"
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
                <a href="/UserPage" className="hov under size">
                  Home
                </a>
              </li>
              <li className="pr-8 pt-4 pb-4">
                <a href="/UserTeam" className="hov under size">
                  Team
                </a>
              </li>
              <li className="pr-8 pt-4 pb-4">
                <a href="/UserGallery" className="hov under size">
                  Gallery
                </a>
              </li>
              <li className="pr-8 pt-4 pb-4">
                <a href="/UserEvent" className="hov under size">
                  Event
                </a>
              </li>
              <li
                className="pr-2 pt-4 pb-4 rounded relative"
                onMouseLeave={hideDropdown}
              >
                <a
                  href="#"
                  className="hov under size icon-color"
                  onMouseEnter={toggleDropdown}
                >
                  Profile
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="ms-1 icon-color"
                  />
                </a>
                {showDropdown && (
                  <div className="absolute pbar bg-indigo-950 border-2 border-zinc-50 text-white z-10 rounded-lg">
                    <ul className="rounded-lg">
                      <a href="/UserProfile">
                        <button
                          className="w-full profile-button hover:text-zinc-300 hover:rounded-lg hover:border border-b"
                          onMouseEnter={handleProfile}
                        >
                          View Profile
                        </button>
                      </a>
                      <button
                        className="w-full profile-button hover:text-zinc-300 hover:rounded-lg hover:border border-t"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
          {isMobileView ? (
            <div className="flex items-center">
              <a
                href="/UserPage"
                className="flex flex-shrink-0 mr-5 flex-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
              >
                <Tilt>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-14 flex flex-start "
                    style={{ minWidth: "15vh" }}
                  />
                </Tilt>
              </a>
              <button
                className="hamburger-icon text-end float-end"
                onClick={toggleMobileMenu}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          ) : null}
        </nav>
        {isMobileView && showMobileMenu && (
          <div className="mobile-menu">
            <ul>
              <li>
                <a href="/UserPage" className="hov under size">
                  Home
                </a>
              </li>
              <li>
                <a href="/UserTeam" className="hov under size">
                  Team
                </a>
              </li>
              <li>
                <a href="/UserGallery" className="hov under size">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/UserEvent" className="hov under size">
                  Event
                </a>
              </li>
              <li>
                <a href="/UserProfile" className="hov under size">
                  Profile
                </a>
              </li>
              <li>
                <button
                  className="w-full rounded-pill profile-button bg-gradient-to-r from-zinc-900 via-indigo-800 to-zinc-900 tiltneon hover:text-zinc-300 hover:rounded-lg hover:border"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
};

export default Navbar;