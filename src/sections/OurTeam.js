import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const teamsData = [
  {
    name: "CEO",
    position: "CEO",
    img: "",
  },
  {
    name: "Manager",
    position: "manager",
    img: "",
  },
  {
    name: "Manager",
    position: "manager",
    img: "",
  },
  {
    name: "Staff",
    position: "Staff",
    img: "",
  },
  {
    name: "Staff",
    position: "Staff",
    img: "",
  },
  {
    name: "Staff",
    position: "Staff",
    img: "",
  },
];

const OurTeam = () => {
  return (
    <>
      <div className="team-heading">
        <h1 style={{ fontFamily: "Dancing Script, cursive" }}> Our Team </h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {teamsData.map((currElm, indx) => (
          <SwiperSlide className="team-slider">
            <img src="/assets/images/pramit.jpg" alt="" />
            <h2>{currElm.name}</h2>
            <p>{currElm.position}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OurTeam;
