import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const TestomonialsData = [
  {
    name: "Sumit Basnet",
    title: "Wedding Event",
    image: "/assets/images/sumit.jpg",
    quote: "The event that they conducted was amazing and had very fun",
  },
  {
    name: "Chewang Raj Lama",
    title: "Music Event",
    image: "/assets/images/chewang.jpg",
    quote: "Music Event conducted by the Creative mind was fun and amazing.",
  },
  {
    name: "Bensis Shreshta",
    title: "Meeting",
    image: "/assets/images/bensis.jpg",
    quote:
      "The meeting that we conducted with the help of creative mind was pretty good, with peace enviroment",
  },
  {
    name: "Pramit Rai",
    title: "Beauty Show",
    image: "/assets/images/pramit.jpg",
    quote:
      "Beauty show conducted with the help of creative mind was success and the decoration and everything there was beautiful",
  },
];

const Testomonials = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        {TestomonialsData.map((currElm, indx) => (
          <SwiperSlide>
            <img src={currElm.image} alt={currElm.name} />
            <h3>{currElm.name}</h3>
            <p>{currElm.quote}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testomonials;
