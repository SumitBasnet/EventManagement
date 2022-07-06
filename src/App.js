import React, { useEffect } from "react";
import Header from "./Components/Header";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import gsap from "gsap";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Components/Index";

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
  const containerRef = useRef(null);
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          {/* ...your app */}
          <Header />
          <Index />
          <Footer />
          {/* <AboutCMM /> */}
          {/* <OurServices /> */}
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default App;
