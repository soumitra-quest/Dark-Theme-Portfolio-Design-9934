import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;