import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const particleCount = 250;
  const [init, setInit] = useState(false);
  const darkMode = props.isDarkMode;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: false,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 100,
            duration: 15,
          },
        },
      },
      particles: {
        color: {
          value: darkMode ? "#181a1b" : "#FFFFFF",
        },
        links: {
          color: darkMode ? "#FFFFFF" : "#181a1b",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: particleCount,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [darkMode]
  );

  return (
    <Particles
      id={props.id}
      init={particlesLoaded}
      options={options}
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticlesComponent;
