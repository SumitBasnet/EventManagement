import React, { useEffect, useRef, useState } from "react";
import { TweenLite, Power3 } from "gsap";

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
  let imageList = useRef(null);
  let testomonialList = useRef(null);
  const imgwidth = 340;

  const [testoState, setTestoState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  });

  useEffect(() => {
    TweenLite.to(testomonialList.children[0], 0, {
      opacity: 1,
    });
  });
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imgwidth * multiplied,
      ease: Power3.easeOut,
    });
  };
  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imgwidth * multiplied,
      ease: Power3.easeOut,
    });
  };
  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };
  const fadeOut = (index, duration) => {
    TweenLite.to(testomonialList.children[index], duration, {
      opacity: 0,
    });
  };
  const fadeIn = (index, duration) => {
    TweenLite.to(testomonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setTestoState({ isActive1: false, isActive2: true });
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setTestoState({ isActive2: false, isActive3: true });
      slideRight(0, 1);
      slideLeft(2, 1, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      fadeOut(1, 1);
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setTestoState({ isActive3: false, isActive4: true });
    } else if (imageList.children[3].classList.contains("active")) {
      setTestoState({ isActive1: true, isActive4: false });
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setTestoState({ isActive1: false, isActive4: true });
      slideLeft(3, 0, 4);
      slideLeft(3, 1, 3);
      scale(3, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      fadeOut(0, 1);
      fadeIn(3, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setTestoState({ isActive2: false, isActive1: true });
    } else if (imageList.children[2].classList.contains("active")) {
      setTestoState({ isActive3: false, isActive2: true });
    } else if (imageList.children[3].classList.contains("active")) {
      setTestoState({ isActive3: true, isActive4: false });
    }
  };

  return (
    <>
      <div className="testomonial-section">
        <div className="testomonial-container">
          <div onClick={prevSlide} className="arrows left">
            <span>
              <img src="/assets/images/leftarrow.svg" alt="left arrow" />
            </span>
          </div>

          <div className="inner">
            <div className="t-image">
              <ul ref={(el) => (imageList = el)}>
                <li className={testoState.isActive1 ? "active" : ""}>
                  <img
                    src={TestomonialsData[0].image}
                    alt={TestomonialsData[0].name}
                  />
                </li>
                <li className={testoState.isActive2 ? "active" : ""}>
                  <img
                    src={TestomonialsData[1].image}
                    alt={TestomonialsData[1].name}
                  />
                </li>
                <li className={testoState.isActive3 ? "active" : ""}>
                  <img
                    src={TestomonialsData[2].image}
                    alt={TestomonialsData[2].name}
                  />
                </li>
                <li className={testoState.isActive4 ? "active" : ""}>
                  <img
                    src={TestomonialsData[3].image}
                    alt={TestomonialsData[3].name}
                  />
                </li>
              </ul>
            </div>
            <div className="t-content">
              <ul ref={(el) => (testomonialList = el)}>
                <li className={testoState.isActive1 ? "active" : ""}>
                  <div className="testmonialContent-inner">
                    <p className="quote"> {TestomonialsData[0].quote} </p>
                    <h3 className="name">{TestomonialsData[0].name}</h3>
                    <h4 className="title">{TestomonialsData[0].title}</h4>
                  </div>
                </li>
                <li className={testoState.isActive2 ? "active" : ""}>
                  <div className="testmonialContent-inner">
                    <p className="quote"> {TestomonialsData[1].quote} </p>
                    <h3 className="name">{TestomonialsData[1].name}</h3>
                    <h4 className="title">{TestomonialsData[1].title}</h4>
                  </div>
                </li>
                <li className={testoState.isActive3 ? "active" : ""}>
                  <div className="testmonialContent-inner">
                    <p className="quote"> {TestomonialsData[2].quote} </p>
                    <h3 className="name">{TestomonialsData[2].name}</h3>
                    <h4 className="title">{TestomonialsData[2].title}</h4>
                  </div>
                </li>
                <li className={testoState.isActive4 ? "active" : ""}>
                  <div className="testmonialContent-inner">
                    <p className="quote"> {TestomonialsData[3].quote} </p>
                    <h3 className="name">{TestomonialsData[3].name}</h3>
                    <h4 className="title">{TestomonialsData[3].title}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div onClick={nextSlide} className="arrows right">
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
