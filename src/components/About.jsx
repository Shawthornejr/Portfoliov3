import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const elements = [imageRef.current, contentRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-container" id="about">
      <div className="about-inner">
        <div ref={imageRef} className="about-image fade-in">
          <img src="/profile.jpg" alt="Your Name" />
          
        </div>
        <div ref={contentRef} className="about-content fade-in">
          <h2 className="about-heading">About Me</h2>
          <p className="about-text">
            I'm a self-taught web developer. I started learning web development in college and it expanded from there.
            I’ve done freelance work in Houston, TX, and worked with WordPress to build websites for small clients.
          </p>
          <p className="about-text">
            I enjoy creating modern, responsive user interfaces and love bringing ideas to life in the browser.
            I’m currently focused on building clean React applications with attention to design and usability.
          </p>

          <div className="education-section">
            <h3>Education</h3>
            <p>
              Associate of Arts in Computer Science and Web Development<br />
              Champlain College, May 2025
            </p>
            <p>
              Coursework included: PHP, SQL, Project Planning, Wireframes, Python, JavaScript, React, CSS, MySQL, Photoshop, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
