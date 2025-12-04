import gsap from "gsap";

/**
 * Fade in between page transitions
 * @param {HTMLElement} el - Element to animate
 * @param {number} duration - Duration of the animation
 */
export const pageFadeIn = (el, duration = 0.8) => {
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration, ease: "power2.out" });
};

/**
 * Fade out between page transitions
 * @param {HTMLElement} el - Element to animate
 * @param {Function} onComplete - Callback function to execute after animation completes
 */
export const pageFadeOut = (el, onComplete) => {
  gsap.to(el, {
    opacity: 0,
    duration: 0.6,
    ease: "power2.in",
    onComplete,
  });
};

/**
 * Zoom in animation
 * @param {HTMLElement} el - Element to animate
 */
export const zoomIn = (el) => {
  gsap.from(el, {
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    ease: "power3.out",
  });
};

/**
 * Curtain reveal animation
 * @param {HTMLElement} el - Element to animate
 */
export const curtainReveal = (el) => {
  const tl = gsap.timeline();

  tl.set(el, { xPercent: -100 })
    .to(el, {
      xPercent: 0,
      duration: 0.8,
      ease: "power4.out",
    })
    .to(el, {
      xPercent: 100,
      duration: 0.8,
      ease: "power4.in",
    });

  return tl;
};
