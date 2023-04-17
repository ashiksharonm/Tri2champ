import React from "react";
import cycle1 from "./cycle1.png";
import "./teams_section1.css";

function teams_section3() {
  return (
    <div className="bg-zinc-200" style={{ }} id="teams_sec1">
      <div className="para">
        <div className="cycle col-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <img src={cycle1} className="img-fluid object-fit-cover" />
        </div>
        <div className="text col-8 col-md-8 col-xl-8 col-xxl-8 col-lg-8">
          <h1>CYCLING</h1><br/>
          <p>
          That’s when things started changing. I slowly leaned towards fitness. I began to jog, run and then took up cycling. He would undertake solo rides of 10-20km initially.
My brother Saravanan is a body-builder and through him he was acquainted to SudhakarGanesh, a runner who went on to become Nishanth’s guide. Mr. Ganesh, an experienced triathlete, introduced Nishanth to the Chennai-based WCCG (We Are Chennai Cycling Group).
“I joined the group on January 16, 2015 and on the third day was my first event, a 50km ride in the Chennai Bypass with experience riders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default teams_section3;

