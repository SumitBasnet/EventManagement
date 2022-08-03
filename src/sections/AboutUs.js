import React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutContainer">
        <div className="about-inner">
          <div className="about-content">
            <div className="about-content-inner">
              <h1>
                <div className="about-content-line">
                  <div
                    className="about-content-line-innner GradientHeading"
                    style={{
                      textAlign: "center",
                      fontFamily: "Dancing Script,cursive",
                    }}
                  >
                    About Us
                  </div>
                </div>
                <div className="about-content-line"></div>
              </h1>

              <p>
                Creative Mind Media & Event Pvt.Ltd. is the perfect choice when
                having to provide a solution to all your event planning /
                coordinating requirements. We provide services to clients with a
                customized event planning and coordination service tailored and
                suited to every need. At Creative Mind Int., we believe a
                successful event is directly related to the guest experience.
              </p>

              <Link to="/aboutus" style={{ textDecoration: "none" }}>
                <div className="btn-more">
                  <button className="explore-more">
                    Explore
                    <div className="arrow-right">
                      <img src="/assets/images/arrow.svg" alt="" />
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="abt-contentimg">
        <img
          src="/assets/images/homepageP1.jpg"
          alt=""
          style={{ height: "80%", width: "70%" }}
          className="indxabtimg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
