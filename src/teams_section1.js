import React from "react";
import swim1 from "./swim1.png";
import "./teams_section1.css";

function teams_section1() {
  return (
    <div className="bg-zinc-200" style={{ }} id="teams_sec1">
      <div className="para">
        <div className="cycle col-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <img src={swim1} className="img-fluid object-fit-cover" />
        </div>
        <div className="text col-8 col-md-8 col-xl-8 col-xxl-8 col-lg-8">
          
          <h1>SWIMMING</h1><br/>
          <p>
          In the beginning lots of friends
          suggested me to learn swimming and
          participate in triathlon events since i
          is already doing good in running and
          cycling.
          Triathlons are multiple-stage
          competitions involving the c
          ompletion of three continuous and
          sequential endurance disciplines. The
          most popular among them
          involves swimming, cycling, and
          running in immediate succession over
          various distances. The participants
          would pass through two transition
          points to change gears and take up the
          next sport in quick succession.
          I began to learn swimming in 2016 at
          the Velachery aquatic complex in order
          to participate in Triathlons.
          Mr Sundar Master was his trainer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default teams_section1;

