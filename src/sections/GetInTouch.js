import React from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GetInTouch = () => {
  return (
    <>
      <div className="container1">
        <h1
          className="GradientHeading"
          style={{
            fontSize: "3rem",
            textAlign: "center",
            paddingTop: "40px",
            fontFamily: "Dancing Script, cursive",
          }}
        >
          Get in touch
        </h1>
        <div className="getinTouchDetails">
          <div className="email">
            <FontAwesomeIcon icon={faEnvelope} className="fontsAboutUs" />
            <h2>Email</h2>
            <p> creativemind8082@gmail.com </p>
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="fontsAboutUs" />
            <h2>Location</h2>
            <p> Baneshwor - 10, Kathmandu </p>
          </div>
          <div className="PhoneNumber">
            <FontAwesomeIcon icon={faPhone} className="fontsAboutUs" />
            <h2>Phone</h2>
            <p> +977 9851080013 </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
