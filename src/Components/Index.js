import React from "react";
import AboutCreative from "../sections/AboutCreative";
import Banner from "../sections/Banner";
import AboutUs from "../sections/AboutUs";
import OurSpecilization from "../sections/OurSpecilization";
import Testomonials from "../sections/Testomonials";
import IntroOverlayAnimation from "./IntroOverlayAnimation";
import IndexGalleries from "../sections/IndexGalleries";
import Footer from "./Footer";
import { useEffect } from "react";
import Community from "../sections/Community";
const Index = () => {
  return (
    <>
      {/* <div className="overlayPage"> */}

      <div className="vid">
        <video
          src="/assets/eventvid.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>

        {/* </div> */}
        <Banner />
      </div>
      <AboutCreative />

      <AboutUs />
      <OurSpecilization />
      <Testomonials />
      <IndexGalleries />
      <h1
        className="CommunityHeading"
        style={{
          textAlign: "center",
          padding: "90px 0px 80px 0px ",
          fontSize: "3rem",
        }}
      >
        Community Involvement
      </h1>
      <Community />
      <Footer />
    </>
  );
};

export default Index;
