import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WineForm from './components/WineForm';

import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WelcomeModal from './components/WelcomeModal';

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-vino-dark text-vino-light relative">
      <CustomCursor />
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.03] bg-grain mix-blend-overlay"></div>
      <Navbar />
      <Hero onOpenModal={() => setIsWelcomeModalOpen(true)} />
      <WineForm />
      <AboutUs />
      <Footer />
      <WelcomeModal isOpen={isWelcomeModalOpen} onClose={() => setIsWelcomeModalOpen(false)} />
    </div>
  );
}

export default App;
