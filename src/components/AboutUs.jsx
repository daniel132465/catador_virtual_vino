import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, BrainCircuit } from 'lucide-react';

const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Daniel Catari',
            role: 'Estudiante de Ingeniería de Sistemas',
            institution: 'Escuela Militar de Ingeniería (EMI)',
            image: 'https://res.cloudinary.com/dpfcnt5vf/image/upload/v1764217407/daniel_wbbfk5.jpg'
        },
        {
            name: 'Ariel Fabricio Tarqui',
            role: 'Estudiante de Ingeniería de Sistemas',
            institution: 'Escuela Militar de Ingeniería (EMI)',
            image: 'https://res.cloudinary.com/dpfcnt5vf/image/upload/v1764217408/Ariel_edcakv.jpg'
        },
        {
            name: 'Guillermo Fabio Rodriguez',
            role: 'Estudiante de Ingeniería de Sistemas',
            institution: 'Escuela Militar de Ingeniería (EMI)',
            image: 'https://res.cloudinary.com/dpfcnt5vf/image/upload/v1764217408/Guillermo_vhypgz.jpg'
        },
        {
            name: 'Daner Guido Jimenez',
            role: 'Estudiante de Ingeniería de Sistemas',
            institution: 'Escuela Militar de Ingeniería (EMI)',
            image: 'https://res.cloudinary.com/dpfcnt5vf/image/upload/v1764217407/Jimenez_fjm72e.jpg'
        }
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
                <div className="max-w-7xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-serif text-white mb-12 text-center md:text-left border-l-4 border-vino-gold pl-4"
                    >
                        Grupo de Investigación Novator
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300 group"
                            >
                                <div className="w-40 h-40 rounded-full border-2 border-vino-gold overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-vino-gold/20">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                                <p className="text-gray-300 text-sm font-medium">{member.role}</p>
                                <p className="text-gray-500 text-xs mt-1">{member.institution}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
