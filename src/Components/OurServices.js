import React from "react";
import Footer from "./Footer";

const servicesImages = [
  {
    img: "Broadcast, video and TV advertising",
    title: "Broadcast, video and TV advertising",
  },
  {
    img: "Conferences",
    title: "Conferences",
  },
  {
    img: "Corporate events & meeting planning",
    title: "Corporate events & meeting planning",
  },
  {
    img: "Cultural events",
    title: "Cultural events",
  },
  {
    img: "Destination meeting",
    title: "Destination meeting",
  },
  {
    img: "formal dinner galas",
    title: "formal dinner galas",
  },
  {
    img: "Fund Raiser",
    title: "Fund Raiser",
  },
  {
    img: "prEvent",
    title: "Media & PR events.",
  },
  {
    img: "Private events & celebrations",
    title: "Private events & celebrations",
  },
];

const OurServices = () => {
  return (
    <>
      <div className="ourServicesBG">
        <div class="headtop">
          <h1>Our Services</h1>
          <h3>Reasons for Choosing Us</h3>
          <p className="Slogan">"Think Unlimited, Be Creative"</p>
          <br />
        </div>
      </div>
      <div className="container1">
        <h1
          className="GradientHeading"
          style={{ textAlign: "center", fontSize: "3rem" }}
        >
          Our Services
        </h1>
        <div className="cards-list">
          {servicesImages.map((elm) => {
            return (
              <div className="card 1">
                <div className="card_image">
                  <img src={`/assets/images/ServiceImg/${elm.img}.jpg`} />
                </div>
                <div className="card_title">
                  <h2 style={{ fontFamily: "Dancing Script,cursive" }}>
                    {elm.title}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <h1
          className="GradientHeading"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          Services Includes
        </h1>
        <div className="ourStory">
          <div className="contentourStory About-CMM">
            <div className="textourStory">
              <h1>Pre Event planning</h1>
              <ul>
                <li>Budget Creation & Management</li>
                <li>
                  Detailed Critical path and timelines created specifically for
                  your event.
                </li>
                <li>Branding creation and custom marketing strategy</li>
                <li>Social media planning</li>
                <li>Creation of sponsorship packages specific to your event</li>
                <li>Venue booking and contract negotiation</li>
              </ul>
            </div>
            <img
              src="/assets/images/PreEvent.jpg"
              alt="ourStory"
              style={{ height: "370px" }}
              className="Our-serviceImg"
            />
          </div>
        </div>
        <div className="ourStory commitment-story">
          <div className="contentourStory commitment-content">
            <div className="textourStory ">
              <h1>Event management design & marketing</h1>
              <ul>
                <li>Floor plan layout and décor planning.</li>
                <li>Menu creation specific to your event.</li>
              </ul>
              <p>
                Extensive list of local professionals to help make your event
                extra special: Entertainers, photographers, musicians, graphic
                designers and marketing experts audio visual specialists,
                florists, rental companies & more.
              </p>
            </div>
            <img
              src="/assets/images/marketing.jpg"
              alt="ourStory"
              className="commitment-image"
            />
          </div>
        </div>
        <div className="ourStory">
          <div className="contentourStory About-CMM">
            <div className="textourStory">
              <h1>Onsite management & post event</h1>
              <ul>
                <li>Volunteer management</li>
                <li>Onsite set up on the day of event. </li>
                <li>Detailed timeliness, show flows & scripts </li>
                <li>Stage management. </li>
                <li>Post event summary and follow up </li>
              </ul>
            </div>
            <img
              style={{ height: "450px" }}
              src="/assets/images/Event management design.jpg"
              alt="ourStory"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurServices;
