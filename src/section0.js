import React from "react";
import cycling from "./cycling.jpg";
import "./sec0.css";

function Section0() {
  return (
    <div className="bg-zinc-200" style={{ }} id="sec0">
      <div className="para">
        <div className="cycle col-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <img src={cycling} className="img-fluid object-fit-cover" />
        </div>
        <div className="text col-8 col-md-8 col-xl-8 col-xxl-8 col-lg-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste
            numquam iure mollitia expedita modi error voluptatum veniam,
            dignissimos ab, pariatur perferendis deserunt odio magni ratione.
            Quaerat libero unde voluptas asperiores fuga vero. Ipsam consectetur
            sunt commodi deserunt, voluptatem sit aliquam corrupti tenetur,
            nesciunt necessitatibus dicta consequuntur consequatur ex tempora
            praesentium
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section0;

