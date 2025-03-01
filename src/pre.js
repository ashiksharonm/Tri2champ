import React from "react";
import "./App.css";
import logo from "./logo1.png";

function Preloader(props) {
  return (
    <>
      <div id={props.load ? "preloader" : "preloader-none"}>
        <img src={logo} alt="Logo"  />
      </div>
    </>
  );
}

export default Preloader;