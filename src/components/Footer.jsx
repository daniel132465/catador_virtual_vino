import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-10 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <img
                            src="https://res.cloudinary.com/dpfcnt5vf/image/upload/v1764204765/logo_de_novator_dfie1d.png"
                            alt="Novator Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <span className="text-vino-gold font-serif text-xl font-bold tracking-wider">
                            NOVATOR AI
                        </span>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Novator AI. Todos los derechos reservados.
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-gray-400 hover:text-vino-gold transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-vino-gold transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-vino-gold transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
