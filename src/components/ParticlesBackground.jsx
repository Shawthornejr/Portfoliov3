import React from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Only loads slim engine, no checkVersion needed
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: 'transparent',
          },
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#00ffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: { min: 1, max: 5 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'out',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;
