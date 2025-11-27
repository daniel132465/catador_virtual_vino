import React from 'react';
import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden">
            {/* Video de Fondo Optimizado */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://res.cloudinary.com/dpfcnt5vf/video/upload/q_auto,f_auto/v1764192762/vecteezy_red-wine-bottle-and-clear-glass-with-red-wine-put-on-a-wine_7069707_ommt7s.mov"
                poster="https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Capa de Contraste (Overlay) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

            {/* Contenido Central */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-serif text-white mb-6"
                >
                    La Ciencia del Buen Vino
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-200 mb-10 font-light"
                >
                    Tu Sommelier Virtual potenciado por Inteligencia Artificial
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-vino-red text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-red-900 transition-colors duration-300 border border-white/10 backdrop-blur-sm"
                >
                    Analizar mi Vino
                </motion.button>
            </div>

            {/* Indicador de Scroll */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/80"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronsDown size={40} />
            </motion.div>
        </div>
    );
};

export default Hero;
