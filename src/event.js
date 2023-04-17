import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import swim from "./swimming.jpg";
import run from "./running.jpg";
import swim2 from "./swim2.jpg";
import cycling2 from "./cycling2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./event.css";

import "swiper/css/bundle";
import "swiper/css/autoplay";

function Event() {
  return (
    <>
    <p id="event"></p>
    <div style={{ minHeight: "100vh" }} className="border border-2 border-zinc-900" >
      <Swiper
        className="swipe"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: "30%", height: "80vh" }}
      >
        <SwiperSlide>
          <img src={swim} className="" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={run} className="" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swim2} className="" alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cycling2} className="" alt="Image 4" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
    </>
  );
}

export default Event;
