import React, { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;
      scroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector(element).style.transform
          ? "transform"
          : "fixed",
      });
    }
    return () => {
      ScrollTrigger.addEventListener("refresh", () => scroll?.update);
      ScrollTrigger.refresh();
    };
  }, []);
  return <></>;
};

export default ScrollTriggerProxy;