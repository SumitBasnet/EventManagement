import React from "react";

const TestomonialsData = [
  {
    name: "Sumit Basnet",
    title: "Wedding Event",
    image: "/assets/images/sumit.jpg",
    quote: "The event that they conducted was amazing and had very fun",
  },
  {
    name: "Chewang Raj Lama",
    title: "Music Event",
    image: "/assets/images/chewang.jpg",
    quote: "Music Event conducted by the Creative mind was fun and amazing.",
  },
  {
    name: "Bensis Shreshta",
    title: "Meeting",
    image: "/assets/images/bensis.jpg",
    quote:
      "The meeting that we conducted with the help of creative mind was pretty good, with peace enviroment",
  },
  {
    name: "Pramit Rai",
    title: "Beauty Show",
    image: "/assets/images/pramit.jpg",
    quote:
      "Beauty show conducted with the help of creative mind was success and the decoration and everything there was beautiful",
  },
];

const Testomonials = () => {
  return (
    <>
      <div className="testomonial-section">
        <div className="testomonial-container">
          <div className="arrows left">
            <span>
              <img src="/assets/images/leftarrow.svg" alt="left arrow" />
            </span>
          </div>

          <div className="inner">
            <div className="t-image">
              <ul>
                {TestomonialsData.map((currElm, indx) => {
                  return (
                    <li>
                      <img src={currElm.image} alt={currElm.name} key={indx} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="t-content">
              <ul>
                {TestomonialsData.map((currElm, indx) => {
                  return (
                    <li>
                      <div className="testmonialContent-inner" key={indx}>
                        <p className="quote"> {currElm.quote} </p>
                        <h3 className="name">{currElm.name}</h3>
                        <h4 className="title">{currElm.title}</h4>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="arrows right">
            <span>
              <img src="/assets/images/rightarrow.svg" alt="right arrow" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testomonials;
