import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 SwipersCarousel"
      >
        <SwiperSlide className="SwiperSlider">
          <img src="/assets/images/Community/aatmoutsarga.jpg" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlider">
          <img src="/assets/images/Community/JCI.png" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlider">
          <img src="/assets/images/Community/Kiwanis.jpg" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlider">
          <img src="/assets/images/Community/lionsclub.png" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlider">
          <img src="/assets/images/Community/NRS.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
