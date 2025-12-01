import { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from "../assets/logo.png";

const TemplateLoading = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: 5,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        resize: true,
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={options}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-32 object-contain animate-pulse"
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default TemplateLoading;
