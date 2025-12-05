// src/components/ParticlesBG.jsx
import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBG = () => {
  const init = useCallback(async (engine) => {
    console.log("Particles engine initializing...", engine);
    // load slim (or use loadFull from @tsparticles/engine)
    await loadSlim(engine);
    console.log("Particles engine loaded");
  }, []);

  const loaded = useCallback(async (container) => {
    console.log("Particles container loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      loaded={loaded}
      className="absolute inset-0 -z-20 pointer-events-none"
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 1, max: 4 } },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, resize: true },
          modes: { grab: { distance: 140, links: { opacity: 0.8 } } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBG;
