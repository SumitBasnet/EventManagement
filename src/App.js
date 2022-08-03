import React, { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Components/Index";
import AboutCMM from "./Components/AboutCMM";
import OurServices from "./Components/OurServices";
import Header from "./Components/Header";
import ScrollToTop from "./sections/ScrollToTop";
import OurTeam from "./sections/OurTeam";
const App = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    const tl = gsap.timeline();
    tl.from("h2 .line  ", 1.8, {
      x: 1800,
      ease: "power4.out",
      delay: 0.5,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to(".intro-overlay", 0, { css: { display: "none" } })
      .from(".case-img img", 1.6, {
        scale: 1.4,
        ease: "expo-inOut",
        delay: -1.5,
        stagger: {
          amount: 0.4,
        },
      });
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route index element={<Index />}></Route>
          <Route path="/aboutus" element={<AboutCMM />}></Route>
          <Route path="/ourservices" element={<OurServices />}></Route>
          <Route path="/teams" element={<OurTeam />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
