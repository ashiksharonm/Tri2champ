import React from "react";
import { useEffect } from "react";
import "./UserPage.css";

import Section0 from "./section0";
import Section1 from "./Section1";
import Section2 from "./section2";
import Form from "./form";
import Image from "./image";
import Footer from "./footer";

import Signin from "./signform";
import Team from "./Team";

import Gallery from './gallery';

import Navbar from "./nav";

function UserPage() {
  useEffect(() => {
    if(localStorage.getItem("authUID")==="")
    {
      window.location.replace("/App");
    }
  }, []);

  const currentPath = window.location.pathname;
  if (currentPath === "/team") {
    return <Team/>;
  } else if(currentPath === "/gallery") {
    return <Gallery/>;
  }
    else if(currentPath === "/Signin") {
      return <Signin/>;
  } else{
    return (
    
    <div style={{textAlign:'justify'}}>
      <Navbar/>
      <Section0 />
      <Section1 />
      <Section2 />
      <Image />
      
      <Form />
      
      <Footer />
      
    </div>
  );
  
            }
}
export default UserPage;

