import React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Link } from "react-router-dom";
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
                  <div
                    className="specialization-content-line-innner GradientHeading"
                    style={{
                      textAlign: "center",
                      fontFamily: "Dancing Script,cursive",
                    }}
                  >
                    Our Specialized Services
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
                <Link to="/ourservices" style={{ textDecoration: "none" }}>
                  <button className="explore-more">
                    Explore
                    <div className="arrow-right">
                      <img src="/assets/images/arrow.svg" alt="" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="specilaizedimgs">
            <img
              src="\assets\images\stage.jpg"
              alt="stage"
              style={{ height: "500px", width: "80%" }}
              className="specimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
