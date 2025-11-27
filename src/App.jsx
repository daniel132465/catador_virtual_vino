import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WineForm from './components/WineForm';

import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-vino-dark text-vino-light relative">
      <CustomCursor />
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.03] bg-grain mix-blend-overlay"></div>
      <Navbar />
      <Hero />
      <WineForm />
    </div>
  );
}

export default App;
