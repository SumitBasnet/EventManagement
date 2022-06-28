import { TimelineLite, Power3 } from "gsap/gsap-core";
import React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const AboutUs = () => {
  let images = useRef(null);

  useEffect(() => {
    //VARS IMAGES
    const img1 = images.firstElementChild;
    const img2 = images.lastElementChild;

    let t1 = new TimelineLite();

    t1.to(img1, {
      x: 1280,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".img1",
        start: "top center",
      },
    });
  });
  return (
    <div className="aboutUs">
      <div className="aboutContainer">
        <div className="about-inner">
          <div className="about-content">
            <div className="about-content-inner">
              <h1>
                <div className="about-content-line">
                  <div className="about-content-line-innner">About </div>
                </div>
                <div className="about-content-line">
                  <div className="about-content-line-innner"> Us </div>
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
          <div className="about-images">
            <div className="about-images-inner" ref={(el) => (images = el)}>
              <div className="about-image img1">
                <img src="/assets/images/Dummy-Aboutus.jpg" alt="" />
              </div>
              <div className="about-image img2">
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
