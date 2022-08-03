import React from "react";
import GetInTouch from "../sections/GetInTouch.js";
import OurTeam from "../sections/OurTeam.js";
import Footer from "./Footer.js";
import Header from "./Header.js";

const AboutCMM = () => {
  return (
    <>
      <header>
        <div class="headtop">
          <h1>About Us</h1>
          <h3>Reasons for Choosing Us</h3>
          <p className="Slogan">"Think Unlimited, Be Creative"</p>
          <br />
        </div>
      </header>
      <div className="container-ourStory">
        <div className="ourStory">
          <div className="contentourStory">
            <div className="textourStory">
              <h1
                style={{
                  fontSize: "3rem",
                  paddingTop: "1rem",
                  textAlign: "center",
                  fontFamily: "Dancing Script, cursive",
                }}
              >
                Our Story
              </h1>
              <p style={{ width: "90%" }}>
                Creative Mind Media &amp; Event Pvt.Ltd. is a full service
                lifestyle based professional event planning company that
                specializes in corporate events and dinner galas, fundraisers,
                awards, grand openings, conferences and private events. We
                understand that no two clients are the same and have created an
                intimate boutique consultative environment, so as to approach
                and develop new ideas and designs best suited to who and what
                you stand for. Our commitment is to see each event through from
                start to finish while keeping the goals, vision, budget and
                client’ s needs in mind at all times. We are committed to
                following through on every details so you don ’t have to. From a
                1000 person dinner gala to a small intimate private party or
                meeting Creative Mind Media &amp; Event Pvt. Ltd. has
                experienced it all.
              </p>
            </div>
            <img src="/assets/images/story.png" alt="ourStory" />
          </div>
        </div>
      </div>
      <div className="datasboxes">
        <div className="boxesnum">
          <div className="boxdata box1">
            <h1>7 </h1>
            <p>Years of services</p>
          </div>
          <div className="boxdata box2">
            <h1>1700+</h1>
            <p>Happy Customers</p>
          </div>
          <div className="boxdata box3">
            <h1>31</h1>
            <p>Events conducted</p>
          </div>
          <div className="boxdata box4">
            <h1>11</h1>
            <p>Employee</p>
          </div>
        </div>
      </div>
      <h1 className="about-company"> " Think Unlimited, Be Creative "</h1>
      <div className="container1">
        <div className="ourStory">
          <div className="contentourStory About-CMM">
            <div className="textourStory">
              <h1 style={{ fontSize: "2.3rem" }}>
                We hold the experience on :
              </h1>
              <p>
                <ul>
                  <li>Event management design &amp; marketing</li>
                  <li>Onsite management &amp; post event</li>
                  <li>Corporate events &amp; meeting planning.</li>
                  <li>Conferences.</li>
                  <li>Broadcast.</li>
                  <li>video and TV advertising.</li>
                  <li>Destination meeting.</li>
                  <li>Fund raisers &amp; formal dinner galas.</li>
                  <li>Award functions and Cultural events.</li>
                  <li>Media &amp; PR events.</li>
                  <li>Private events &amp; celebrations</li>
                </ul>
              </p>
            </div>
            <img src="/assets/images/trophy.png" alt="ourStory" />
          </div>
        </div>
        <div className="ourStory commitment-story">
          <div className="contentourStory commitment-content">
            <div className="textourStory ">
              <h1 style={{ fontSize: "2.3rem" }}>Our Commitment</h1>
              <p>
                Creative Mind Media & Event Pvt.Ltd. is a full service lifestyle
                based professional event planning company that specializes in
                corporate events and dinner galas, fundraisers, awards, grand
                openings, conferences and private events. We understand that no
                two clients are the same and have created an intimate boutique
                consultative environment, so as to approach and develop new
                ideas and designs best suited to who and what you stand for. Our
                commitment is to see each event through from start to finish
                while keeping the goals, vision, budget and client’ s needs in
                mind at all times. We are committed to following through on
                every details so you don ’t have to. From a 1000 person dinner
                gala to a small intimate private party or meeting Creative Mind
                Media & Event Pvt. Ltd. has experienced it all.
              </p>
            </div>
            <img
              src="/assets/images/commit.png"
              alt="ourStory"
              className="commitment-image"
            />
          </div>
        </div>
      </div>
      <OurTeam />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default AboutCMM;
