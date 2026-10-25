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

function AdminTeam() {
  useEffect(() => {
    if(localStorage.getItem("authUID")!=="6BMmVtW9yhSU4T3CHbkRo9thNv43"&&localStorage.getItem("authUID")!=="8kSMYknJfcZm4NKkBEp0pr0YM9M2"&&localStorage.getItem("authUID")!=="Bq1ZwulC7XM57m5iQVZS78J9lOK2"&&localStorage.getItem("authUID")!==""&&localStorage.getItem("authUID")!=="")
    {
      window.location.replace("/App");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Team</title>
        <link rel="icon" type="image/png" href="logo.png" />
      </Helmet>
      <div>
        <Navbar/>
        <div style={{ fontSize: "120%" }}>
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

export default AdminTeam;
