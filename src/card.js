import React from "react";
import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "./bgpic.png";

const Card = () => {
  return (
    <>
      <div style={{ height: "110vh" }} className="bg-zinc-400">
        <div
          className="row rounded-lg"
          style={{ paddingTop: "5%", paddingBottom: "0%" }}
        >
          <div
            className="col-sm-3 mb-3 mb-sm-0 col-md-3 col-lg-3 "
            style={{ marginLeft: "38%" }}
          >
            <div
              className="card  border-2 border-zinc-950 hovv bg-gradient-to-b from-zinc-400 via-zinc-700 to-zinc-700"
              style={{ height: "101%" }}
            >
             
              <img
                src={pic}
                style={{ objectFit: "cover" }}
                className="card-img-top border border-zinc-950"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Swimming</b>
                </h5>
                <p className="card-text">
                  AQUA Festival will bring together swimming, everyone is
                  invited to join in fun swimming races, Team TRI2CHAMP,
                  Welcoming Everyone we cordially invite you to our very biggest
                  swimming event. AQUAFEST - SWIMATHON & AQUATHLON Chennai race
                  venue allows us to deliver a first-class event experience to
                  wrap up the 2023 season. 
                </p>
                <a
                  href="https://www.townscript.com/e/Aquafest-140333"
                  className="btn btn-primary bg-gradient-to-b from-emerald-600 to-indigo-900 hover:from:emerald-400 hover:to-indigo-700"
                  style={{ marginTop: "7%" }}
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
