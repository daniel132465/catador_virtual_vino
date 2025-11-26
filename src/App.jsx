import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WineForm from './components/WineForm';

function App() {
  return (
    <div className="min-h-screen bg-vino-dark text-vino-light">
      <Navbar />
      <Hero />
      <WineForm />
    </div>
  );
}

export default App;
