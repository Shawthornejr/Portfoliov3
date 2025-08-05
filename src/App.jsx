import React from 'react';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './global.css';

function App() {
  return (
    <div className="app">
      <Navbar /> 
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
