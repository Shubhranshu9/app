import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
