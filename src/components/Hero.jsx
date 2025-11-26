import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video de Fondo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://videos.pexels.com/video-files/8556302/8556302-uhd_2560_1440_25fps.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

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
        </div>
    );
};

export default Hero;
