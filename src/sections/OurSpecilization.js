import React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  return (
    <div className="specializationUs">
      <div className="specializationContainer">
        <div className="specialization-inner">
          <div className="specialization-content">
            <div className="specialization-content-inner">
              <h1>
                <div className="specialization-content-line">
                  <div className="specialization-content-line-innner">
                    Our Specialized
                  </div>
                </div>
                <div className="specialization-content-line">
                  <div className="specialization-content-line-innner">
                    {" "}
                    Services{" "}
                  </div>
                </div>
              </h1>
              <p>
                Creative Mind Int. is the perfect choice when having to provide
                a solution to all your event planning/coordinating requirements.
                We provide services to clients with a customized event planning
                and coordination service tailored and suited to every need.
              </p>
              <p>
                We understand that no two clients are the same and have created
                an intimate boutique consultative environment, so as to approach
                and develop new ideas and designs best suited to who and what
                you stand for.
              </p>
              <div className="btn-more">
                <button className="explore-more">
                  Explore
                  <div className="arrow-right">
                    <img src="/assets/images/arrow.svg" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="specialization-images">
            <div className="specialization-images-inner">
              <div className="specialization-image img1">
                <img src="/assets/images/Dummy-Aboutus.jpg" alt="" />
              </div>
              <div className="specialization-image img2">
                <img src="/assets/images/Dummy-Aboutus2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
