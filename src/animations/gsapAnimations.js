import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const pinElement = (el, extra = 1000) => {
  if (!el) return;

  ScrollTrigger.create({
    trigger: el,
    start: "top top",
    end: `+=${extra}`,
    pin: true,
    scrub: 1,
    pinSpacing: false,
  });
};
