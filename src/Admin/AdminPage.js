import React from "react";
import { useEffect } from "react";
import "./AdminPage.css";
import Signin  from "./signform";

import Section0 from "./section0";
import Section1 from "./Section1";
import Section2 from "./section2";
import Form from "./form";
import Image from "./image";
import Footer from "../footer";

import Team from "./Team";

import Gallery from './gallery';

import Navbar from "./nav";

function AdminPage() {
  useEffect(() => {
    if(localStorage.getItem("authUID")!=="6BMmVtW9yhSU4T3CHbkRo9thNv43"&&localStorage.getItem("authUID")!=="8kSMYknJfcZm4NKkBEp0pr0YM9M2"&&localStorage.getItem("authUID")!=="Bq1ZwulC7XM57m5iQVZS78J9lOK2"&&localStorage.getItem("authUID")!==""&&localStorage.getItem("authUID")!=="")
    {
      window.location.replace("/App");
    }
  }, []);

  const currentPath = window.location.pathname;
  if (currentPath === "/team") {
    return <Team/>;
  } else if(currentPath === "/gallery") {
    return <Gallery/>;
  } else if(currentPath === "/signin") {
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
export default AdminPage;

