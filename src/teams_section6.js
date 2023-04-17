import React from "react";
import run2 from "./run2.png";
import "./teams_section2.css";

function teams_section6() {
  return (
    <div
      className="bg-zinc-250 border-2 border-zinc-800"
      style={{ height: "700px" }}
    >
      <div className="para">
        <div className="text1">
          <p>
            Then i took up the 100 Days of
            Running challenge. It involves
            participating at least one run each
            day covering a minimum of 2km
            every day, for 100 days. There is no
            upper limit. I thought I would run
            5 to 10 km every day. He started it
            on April 29, 2017 and successfully
            finished it on August 6.
            It was hard with summer at its peak
            and i didn’t have any professional
            training in running. Initial days
            were cruel, but I refused to give up,
            who had planned to end his challenge
            with a 42 km Full Marathon
            on the 100th day!
            “I took one day at a time,”. Each
            run was a different training. Some
            days it was for then 10 km. There
            was Crazy Run with participants
            aged 6-70 running Friends And
            it all summed up with the 42km
            Full marathon, where i ran with
            self-support hydration, running in
            an average speed of 6km/hr.
            I completed the feat in 5hour 47
            minutes. In 100 days, I covered
            over 600 km!
            I started participating in more
            Marathons with the support of my
            Friends. I participated in the Bangalore
            SPBM-Shriram Properties
            Bengaluru Marathon 2017, where
            i achieved my first personal best of
            5Hr15Mins, and later the Chennai
            Self Support Run. Most of my
            personal best are in my self training.
            For running now I under training
            with Mr rajasekar coach for
            improve my speed for triathlon.
          </p>
        </div>
        <div
          className="cycle"
          style={{ display: "flex", flexDirection:'row' , justifyContent: "flex-start", paddingRight: '10%' }}
        >
          <img
            src={run2}
            style={{ height: "25em", width: "175em"}}
          />
        </div>
      </div>
    </div>
  );
}

export default teams_section6;
