import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HomePage = () => {
  return (
    <div>
      <section className="bg-pink-200 text-center text-2xl h-screen">1</section>
      <section className="bg-pink-300 text-center text-2xl h-screen">2</section>
      <section className="bg-pink-300 text-center text-2xl h-screen">3</section>
      <section className="bg-pink-400 text-center text-2xl h-screen">4</section>
      <section className="bg-pink-500 text-center text-2xl h-screen">5</section>
      <section className="bg-pink-600 text-center text-2xl h-screen">5</section>
      <section className="bg-pink-700 text-center text-2xl h-screen">6</section>
      <section className="bg-pink-800 text-center text-2xl h-screen">7</section>
    </div>
  );
};

export default HomePage;
