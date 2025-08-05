import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import ParticlesBackground from './ParticlesBackground';

function Hero() {
  return (
    <div className="hero-section">
      <ParticlesBackground />
      <h1 className="hero-name">
        Samuel <span className="hero-accent">Hawthorne</span>
      </h1>

      <h2 className="hero-title">
        <Typewriter
          words={['Web Developer', 'Frontend Engineer', 'React Enthusiast']}
          loop={0} // infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      <p className="hero-bio">
        I build modern, responsive websites with React. Passionate about clean UI and smooth UX.
      </p>

      <a href="#contact" className="hero-button">Let's Work Together</a>
    </div>
  );
}

export default Hero;
