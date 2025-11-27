import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ShieldCheck, Activity, Check } from 'lucide-react';

const WelcomeModal = ({ isOpen, onClose }) => {
    const handleAccept = () => {
        onClose();
        const element = document.getElementById('catador');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-vino-dark border border-vino-gold/30 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-vino-red to-black p-6 border-b border-white/10">
                            <h3 className="text-2xl font-serif text-white text-center">
                                Antes de comenzar...
                            </h3>
                        </div>

                        {/* Body */}
                        <div className="p-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-vino-gold/10 rounded-lg text-vino-gold mt-1">
                                    <Info className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Instrucciones</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Ingresa los 11 parámetros físico-químicos de tu vino en el formulario para realizar el análisis.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-vino-gold/10 rounded-lg text-vino-gold mt-1">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Precisión</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Este modelo de IA tiene una precisión estimada del 84%. Los resultados son referenciales y no sustituyen una cata profesional.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-vino-gold/10 rounded-lg text-vino-gold mt-1">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Privacidad</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Tus datos se procesan localmente en tu navegador. No guardamos información de tus vinos ni datos personales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-black/20 border-t border-white/5 flex justify-center">
                            <button
                                onClick={handleAccept}
                                className="flex items-center gap-2 bg-vino-gold text-vino-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-vino-gold/20"
                            >
                                <Check className="w-5 h-5" />
                                Entendido, ir al Catador
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeModal;
