import React from "react";

const AboutUs = () => {
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
                a solution to all your event planning / coordinating
                requirements. We provide services to clients with a customized
                event planning and coordination service tailored and suited to
                every need.
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
            <div className="about-images-inner">
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
