import React from "react";
import cycle2 from "./cycle2.png";
import "./teams_section2.css";

function teams_section4() {
  return (
    <div
      className="bg-zinc-250 border-2 border-zinc-700"
      style={{ height: "550px" }}
    >
      <div className="para">
        <div className="text1">
          <p><br/>
          On 15 July at Outer Ring Road in Chennai. My friend, Mr.MadhanKumar, gave his Road Bike used for racing purpose. “I was shocked to see those professional racer speeding above 45 km/hr. But my first race was not bad either. I did my best in 25kms-36km/hr finishing in 53minutes,”. The event made me realize the challenges in racing and he was ready to take it on. I participated in various ITTs before turning his eyes to endurance cycling.
          <br/>Individual Time Trial(ITT) Racer
          <br/>o WCCG ECR – January 2016
          <br/>o Decathlon ORR – 15 th July 2017
          <br/>o WCCG Mayajal – 27 th January 2018
          <br/>o TCC Off Road ECR – 4 th February 2018 - 2nd Place in Elite Men
          <br/>o TCC ORR – 13 th May 2018
          <br/>o TCC ECR – 29 th July 2018
          <br/>o WCCG ECR - January 2019
          <br/>o WCCG Coast Rush - January 2020<br/>
          Personal Best for 25km TT - 46 Minutes 23 Secs
          Personal Best for 40Km TT - 1 Hour 4 minutes</p>
        </div>
        <div
          className="cycle"
          style={{ display: "flex", flexDirection:'row' , justifyContent: "flex-start", paddingRight: '10%' }}
        >
          <img
            src={cycle2}
            style={{ height: "15em", width: "175em"}}
          />
        </div>
      </div>
    </div>
  );
}

export default teams_section4;
