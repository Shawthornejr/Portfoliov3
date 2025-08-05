import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      let current = '';

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h1>Samuel Hawthorne</h1>

      <div
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}
      >
        <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
        <span style={{ opacity: isOpen ? 0 : 1 }}></span>
        <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
      </div>

      <ul className={isOpen ? 'open' : ''}>
        <li><a href="#about" onClick={handleLinkClick} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#projects" onClick={handleLinkClick} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#contact" onClick={handleLinkClick} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
  );
}
