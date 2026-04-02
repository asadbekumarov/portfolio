import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "../context/ThemeContext";

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const isDark = theme === 'dark';

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: isDark ? "#030712" : "#F8FAFC",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: isDark ? "#ffffff" : "#0284C7" },
          links: {
            color: isDark ? "#ffffff" : "#0284C7",
            distance: 150,
            enable: true,
            opacity: isDark ? 0.3 : 0.2,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 60 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
