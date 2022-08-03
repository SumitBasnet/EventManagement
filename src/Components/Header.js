import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";
const Header = () => {
  return (
    <label className="Navbar">
      <input type="checkbox" className="inputNav" />
      <div className="toggle ">
        <div className="circleNav">
          <span className="top_line common"></span>
          <span className="middle_line common"></span>
          <span className="bottom_line common"></span>
        </div>
      </div>
      <div className="logoHeader">
        <img
          src="\assets\images\plainlogo.png"
          alt="crativemindevent"
          style={{ height: "80px", width: "90px" }}
        />
      </div>
      <div className="slide">
        <h1>Menu</h1>
        <ul>
          <li>
            <Link to="/" className="Navlists">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="Navlists">
              About us
            </Link>
          </li>
          <li>
            <Link to="/ourservices" className="Navlists">
              Our Services
            </Link>
          </li>
          <div className="socials">
            <a href="https://www.facebook.com/Cmmpvtltd">
              <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook" />
            </a>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" />
            </a>
            <a href="https://www.youtube.com/">
              <i className="fab fa-youtube"></i>
              <FontAwesomeIcon icon={faYoutube} className="fab fa-youtube" />
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
              <FontAwesomeIcon
                icon={faInstagram}
                className="fab fa-instagram"
              />
            </a>
          </div>
        </ul>
      </div>
    </label>
  );
};

export default Header;
