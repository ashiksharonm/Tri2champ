import React from "react";
import logo from "./logo1.png";
import Teams_section1 from "./teams_section1";
import Teams_section2 from "./teams_section2";
import Teams_section3 from "./teams_section3";
import Teams_section4 from "./teams_section4";
import Teams_section5 from "./teams_section5";
import Teams_section6 from "./teams_section6";
import Footer from "./footer";
import { scroller } from "react-scroll";

function Team() {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
    <nav
    className="flex border-b-2 border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900 via-indigo-950 to-zinc-900"
    id="navbar-nav"
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
  
    <button
      className="navbar-toggler ml-auto mt-3"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => document.querySelector('.navbar-collapse').classList.toggle('show')}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#reg" onClick={() => scrollTo("reg")}>Events</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/team">Team</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={() => scrollTo("event")}>Gallery</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={() => scrollTo("form")}>Contact</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={() => scrollTo("form")}>Login</a>
    </li>
  </ul>
</div>

  </nav>

      <Teams_section1 />
      <Teams_section2 />
      <Teams_section3 />
      <Teams_section4 />
      <Teams_section5 />
      <Teams_section6 />
      <Footer />
    </div>
  );
}

export default Team;
