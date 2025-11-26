import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-vino-gold font-serif text-2xl font-bold tracking-wider cursor-pointer">
                    NOVATOR AI
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 text-vino-light font-medium">
                        <li className="hover:text-vino-gold transition-colors duration-300 cursor-pointer">
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li className="hover:text-vino-gold transition-colors duration-300 cursor-pointer">
                            <a href="#catador">Catador</a>
                        </li>
                        <li className="hover:text-vino-gold transition-colors duration-300 cursor-pointer">
                            <a href="#nosotros">Nosotros</a>
                        </li>
                    </ul>

                    <button className="border border-vino-gold text-vino-gold px-6 py-2 rounded-full hover:bg-vino-gold hover:text-vino-dark transition-all duration-300 font-medium tracking-wide">
                        Acceder
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-vino-gold focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10 flex flex-col items-center py-6 space-y-6 animate-fade-in">
                    <a
                        href="#inicio"
                        className="text-vino-light hover:text-vino-gold text-lg font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Inicio
                    </a>
                    <a
                        href="#catador"
                        className="text-vino-light hover:text-vino-gold text-lg font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Catador
                    </a>
                    <a
                        href="#nosotros"
                        className="text-vino-light hover:text-vino-gold text-lg font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Nosotros
                    </a>
                    <button className="border border-vino-gold text-vino-gold px-8 py-2 rounded-full hover:bg-vino-gold hover:text-vino-dark transition-all duration-300 font-medium">
                        Acceder
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
