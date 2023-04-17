import React from "react";
import logo from "./logo1.png";
import { scroller } from "react-scroll";

function Navbar() {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <nav
      className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
      id="nav1"
    >
      <a
        href="App.js"
        className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
      >
        <img
          src={logo}
          alt="Logo"
          className="logo-image"
          style={{ height: "10vh", width: "25vh" }}
        />
      </a>
      <div className="flex-grow ">
        <ul className="flex justify-end mr-3">
          <li className="size pr-7 pt-3">
            <a
              href="#reg"
              className="hov under"
              onClick={() => scrollTo("reg")}
            >
              Events
            </a>
          </li>
          <li className="size pr-7 pt-3">
            <a href="/team" className="hov under">
              Team
            </a>
          </li>

          <li className="size pr-7 pt-3">
            <a
              href="#"
              className="hov under"
              onClick={() => scrollTo("event")}
            >
              Gallery
            </a>
          </li>
          <li className="size pr-7 pt-3">
            <a
              href="#form"
              className="hov under"
              onClick={() => scrollTo("form")}
            >
              Contact
            </a>
          </li>
          <li className="size pr-3 pt-3">
            <a
              href="#form"
              className="hov under"
              onClick={() => scrollTo("form")}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
