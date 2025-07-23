import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Samuel Hawthorne</h1>
      <ul style={styles.links}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#121212',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontSize: '1.2rem',
    color: '#eaeaea',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#cccccc',
    textDecoration: 'none',
  }
};
