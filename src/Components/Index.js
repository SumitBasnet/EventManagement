import React from "react";
import AboutCreative from "../sections/AboutCreative";
import Banner from "../sections/Banner";
import AboutUs from "../sections/AboutUs";
import OurSpecilization from "../sections/OurSpecilization";
import Testomonials from "../sections/Testomonials";
import IntroOverlayAnimation from "./IntroOverlayAnimation";
import IndexGalleries from "../sections/IndexGalleries";

const Index = () => {
  return (
    <>
      <IntroOverlayAnimation />
      <div className="overlayPage">
        <div className="vid">
          <video
            src="/assets/eventvid.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
          <AboutCreative />
        </div>
      </div>
      <Banner />
      <AboutUs />
      <OurSpecilization />
      <Testomonials />
      <IndexGalleries />
    </>
  );
};

export default Index;
