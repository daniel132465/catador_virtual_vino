import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X, Activity, Droplets, FlaskConical } from 'lucide-react';

const ResultModal = ({ isOpen, onClose, result, data }) => {
    if (!isOpen) return null;

    const isExcellent = result === 'EXCELENTE';

    const summaryData = [
        {
            title: 'Físico-Químico',
            icon: <FlaskConical className="w-4 h-4 text-vino-gold" />,
            items: [
                { label: 'Acidez Volátil', value: data.volatileAcidity, ref: '0.08 - 1.1', unit: 'g/dm³' },
                { label: 'pH', value: data.pH, ref: '2.7 - 4.0', unit: '' },
            ]
        },
        {
            title: 'Composición',
            icon: <Droplets className="w-4 h-4 text-vino-gold" />,
            items: [
                { label: 'Azúcar', value: data.residualSugar, ref: '0.6 - 66', unit: 'g/dm³' },
                { label: 'Sulfatos', value: data.sulphates, ref: '0.2 - 1.1', unit: 'g/dm³' },
            ]
        },
        {
            title: 'Propiedades',
            icon: <Activity className="w-4 h-4 text-vino-gold" />,
            items: [
                { label: 'Alcohol', value: data.alcohol, ref: '8.0 - 14.2', unit: '% vol' },
                { label: 'Azufre Total', value: data.totalSulfurDioxide, ref: '9 - 440', unit: 'mg/dm³' },
            ]
        }
    ];

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-4xl bg-vino-dark border border-vino-gold/30 rounded-2xl shadow-2xl overflow-hidden"
                >
                    {/* Header Gradient */}
                    <div className={`absolute top-0 left-0 w-full h-2 ${isExcellent ? 'bg-green-500' : 'bg-yellow-500'}`} />

                    <div className="p-8">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Verdict Section */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 mb-4">
                                {isExcellent ? (
                                    <CheckCircle className="w-12 h-12 text-green-500" />
                                ) : (
                                    <AlertCircle className="w-12 h-12 text-yellow-500" />
                                )}
                            </div>
                            <h2 className="text-3xl font-serif text-white mb-2">
                                Veredicto: <span className={isExcellent ? 'text-green-400' : 'text-yellow-400'}>{result}</span>
                            </h2>
                            <p className="text-vino-gold font-medium text-lg">
                                Precisión del Modelo: 84.39%
                            </p>
                        </div>

                        {/* Profile Summary Grid */}
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <h3 className="text-white font-serif text-lg mb-6 text-center border-b border-white/10 pb-4">
                                Resumen del Perfil Enológico
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {summaryData.map((group, index) => (
                                    <div key={index} className="space-y-4">
                                        <div className="flex items-center gap-2 text-vino-light mb-2">
                                            {group.icon}
                                            <span className="font-medium">{group.title}</span>
                                        </div>
                                        <div className="space-y-3">
                                            {group.items.map((item, idx) => (
                                                <div key={idx} className="bg-black/20 p-3 rounded-lg">
                                                    <div className="flex justify-between items-baseline mb-1">
                                                        <span className="text-gray-400 text-sm">{item.label}</span>
                                                        <span className="text-white font-mono font-medium">
                                                            {item.value} <span className="text-xs text-gray-500">{item.unit}</span>
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-gray-500 text-right">
                                                        Ref: {item.ref}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer Action */}
                        <div className="mt-8 text-center">
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors font-medium"
                            >
                                Realizar Nuevo Análisis
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ResultModal;
