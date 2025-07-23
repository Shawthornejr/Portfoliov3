// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section style={styles.container}>
      <img src="/profile.jpg" alt="Profile" style={styles.image} />
      <h1 style={styles.name}>Samuel R. Hawthorne</h1>
      <h2 style={styles.title}>Front-End Developer</h2>
      <p style={styles.bio}>
        I’m a passionate self-taught web developer who enjoys building fast, modern UIs. I specialize in React and have built tools like a calorie tracker and a job tracker to solve real-world problems.
      </p>
    </section>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '4rem 1rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  image: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  },
  title: {
    fontSize: '1.25rem',
    color: '#666',
    margin: '0.5rem 0',
  },
  bio: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#333',
  },
};
