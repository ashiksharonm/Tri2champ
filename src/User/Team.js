import React from "react";

import TeamSection1 from "./team_section1";
import TeamsSection2 from "./teams_section2";
import TeamsSection3 from "./teams_section3";
import TeamsSection4 from "./teams_section4";
import TeamsSection5 from "./teams_section5";
import Footer from "./footer";

import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Navbar from "./nav";

function UserTeam() {
  useEffect(() => {
    if(localStorage.getItem("authUID")==="")
    {
      window.location.replace("/App");
    }
  }, []);
 
  return (
    <>
       <Helmet>
          <title>Tri2champ</title>
          <link rel="icon" type="image/png" href="logo.png" />
        </Helmet>
      <div>
        <Navbar/>
        <div style={{ fontSize: "100%", textAlign:'justify' }}>
          <TeamSection1 />
          <TeamsSection2 />
          <TeamsSection3 />
          <TeamsSection4 />
          <TeamsSection5 />
          <Footer />
        </div>
      </div>
    </>
  );
  }

export default UserTeam;
