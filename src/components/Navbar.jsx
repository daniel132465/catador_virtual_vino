import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onOpenCatador }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <img
                        src="https://res.cloudinary.com/dpfcnt5vf/image/upload/v1764204765/logo_de_novator_dfie1d.png"
                        alt="Novator Logo"
                        className="h-12 w-12 object-contain"
                    />
                    <span className="text-vino-gold font-serif text-2xl font-bold tracking-wider">
                        NOVATOR AI
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 text-vino-light font-medium">
                        <li className="hover:text-vino-gold transition-colors duration-300 cursor-pointer">
                            <a href="#home">Inicio</a>
                        </li>
                        <li className="hover:text-vino-gold transition-colors duration-300 cursor-pointer">
                            <a
                                href="#catador"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onOpenCatador();
                                }}
                            >
                                Catador Virtual
                            </a>
                        </li>
                        <li className="hover:text-vino-gold transition-colors duration-300 cursor-pointer">
                            <a href="#nosotros">Sobre Nosotros</a>
                        </li>
                    </ul>
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
                        href="#home"
                        className="text-vino-light hover:text-vino-gold text-lg font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Inicio
                    </a>
                    <a
                        href="#catador"
                        className="text-vino-light hover:text-vino-gold text-lg font-medium transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            onOpenCatador();
                        }}
                    >
                        Catador Virtual
                    </a>
                    <a
                        href="#nosotros"
                        className="text-vino-light hover:text-vino-gold text-lg font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Sobre Nosotros
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
