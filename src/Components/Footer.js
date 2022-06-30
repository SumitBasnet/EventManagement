import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-section about">
            <a className="logo"> Creative Mind Media </a>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              esse, quibusdam consequatur quos, fugit repellendus adipisci
              cupiditate blanditiis inventore, ut minus est itaque amet commodi
              molestias distinctio quaerat delectus illum.
            </p>
            <div className="contact">
              <span>
                <FontAwesomeIcon icon={faPhone} className="fas fa-phone" />
                &nbsp; 123-456-789
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fas fa-envelope"
                />
                &nbsp; creativemind8082@gmail.com
              </span>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="fab fa-facebook"
                />
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
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="privacy.html">About Us </a>
              </li>
              <li>
                <a href="terms.html">Our Services</a>
              </li>
              <li>
                <a href="aboutus.html">Our Teams </a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>Contact us</h2>
            <form action="Index.html" method="post" autoComplete="off">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-input contact-input"
                  placeholder="Your email here..."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  name="message"
                  id="message"
                  className="text-input contact-input"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-send">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="fab fa-paper-plane"
                />
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; All rights are reserved | Designed By Creative Mind.
        </div>
      </footer>
    </>
  );
};

export default Footer;
