import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurSpecilization = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let element = ref.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.from(element, {
        scrollTrigger: {
          trigger: element,
          scroller: ".div1",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    });
  });
  return (
    <>
      <div className="div1"></div>
      <div className="div2" ref={ref}>
        <div className="square" data-scroll></div>
      </div>
    </>
  );
};

export default OurSpecilization;
