import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AboutPage = () => {
  return (
    <div>
      <section className="bg-pink-200 h-screen"></section>
      <section className="bg-pink-300 h-screen"></section>
    </div>
  );
};

export default AboutPage;
