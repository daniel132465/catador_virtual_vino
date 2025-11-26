import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-vino-dark text-vino-light">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
