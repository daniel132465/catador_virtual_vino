import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, BrainCircuit } from 'lucide-react';

const AboutUs = () => {
    const team = [
        { name: 'Investigador 1', role: 'Data Scientist', icon: <Database className="w-6 h-6" /> },
        { name: 'Investigador 2', role: 'Full Stack Dev', icon: <Code className="w-6 h-6" /> },
        { name: 'Investigador 3', role: 'ML Engineer', icon: <BrainCircuit className="w-6 h-6" /> },
        { name: 'Investigador 4', role: 'UX/UI Designer', icon: <User className="w-6 h-6" /> },
    ];

    return (
        <section id="nosotros" className="py-20 bg-gradient-to-b from-black to-[#1a0505] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Misión del Proyecto */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-vino-gold mb-8">
                        Innovación en Enología
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        Nuestro proyecto busca eliminar la subjetividad en la cata de vinos mediante algoritmos de
                        <span className="text-vino-red font-semibold"> Machine Learning</span> y análisis de datos físico-químicos.
                        Fusionamos la tradición vinícola con la tecnología de vanguardia para democratizar el acceso a la calidad premium,
                        ofreciendo herramientas precisas tanto para expertos como para entusiastas.
                    </p>
                </motion.div>

                {/* El Equipo */}
                <div className="max-w-6xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-serif text-white mb-10 text-center md:text-left border-l-4 border-vino-gold pl-4"
                    >
                        Grupo de Investigación Novator
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300 group"
                            >
                                <div className="w-20 h-20 rounded-full border-2 border-vino-gold flex items-center justify-center mb-4 bg-vino-dark group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-vino-gold">
                                        {member.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                                <p className="text-vino-gold/80 text-sm font-medium uppercase tracking-wider">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
