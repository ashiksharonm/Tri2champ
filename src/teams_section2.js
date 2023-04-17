import React from "react";
import swim_2 from "./swim_2.png";
import "./teams_section2.css";

function teams_section2() {
  return (
    <div
      className="bg-zinc-250 border-2 border-zinc-800"
      style={{ height: "500px" }}
    >
      <div className="para">
        <div className="text1">
          <p>
          Swimming in Triathlons are tougher since it involves managing half hours to
          1 hours in the sea. There are no lanes or markers unlike indoor swimming so
          the participant has to frequently indulge in ‘sighting’, raise the head to check if
          they are in the correct route. Triathlon involves taking up swimming, cycling
          and running back-to-back and swimming drains your energy before taking up
          the other tasks. I resorted to Youtube videos to learn the tips and tricks in the
          trade. It take me 6 - 8 months to train proper swimming. As i was training for
          triathlon, I decided to undertake a Duathlon first. Now I training under with
          mr. Manivannan from Anna swimming pool ,marina for improve my speed for
          triathlon.
          </p>
        </div>
        <div
          className="cycle"
          style={{ display: "flex", flexDirection:'row' , justifyContent: "flex-start", paddingRight: '10%' }}
        >
          <img
            src={swim_2}
            style={{ height: "15em", width: "175em"}}
          />
        </div>
      </div>
    </div>
  );
}

export default teams_section2;
