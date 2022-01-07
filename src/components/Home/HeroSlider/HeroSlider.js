import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./sorifvai.css";
// eslint-disable-next-line
// import "swiper/css/bundle";

import { Card } from "react-bootstrap";
import slider1 from "./../../../images/1.jpg";
import slider2 from "./../../../images/2.jpg";

// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

const HeroSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={false}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={false}
      autoplay={{ delay: 2500 }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Card>
          <Card.Img style={{ height: "90vh" }} variant="top" src={slider1} />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Card.Img style={{ height: "90vh" }} variant="top" src={slider2} />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Card.Img style={{ height: "90vh" }} variant="top" src={slider1} />
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
