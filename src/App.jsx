import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
