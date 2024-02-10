"use client"

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useTheme } from "next-themes";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  // Ensure the theme value changes trigger a re-render
  const key = useMemo(() => theme, [theme]);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, [key]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: theme === "dark" ? "#000" : "#0B6623"
        },
        opacity: 0.4,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        color: {
          value: theme === "light" ? "#ff2321" : "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 130,
          enable: true,
          opacity: 0.5,
          width: 3,
        },
        move: {
          // direction: ,
          enable: true,
          outModes: {
            // default: OutMode.out,
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            particles: {
              number: {
                value: 50,
              },
            },
          },
        },
        {
          breakpoint: 425,
          options: {
            particles: {
              number: {
                value: 30,
              },
            },
          },
        },
      ],
    }),
    [theme]
  );

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  )
};
