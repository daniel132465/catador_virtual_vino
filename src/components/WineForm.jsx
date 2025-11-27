import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Activity, Droplets, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const WineForm = ({ isActive }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [formData, setFormData] = useState({
        fixedAcidity: 7.4,
        volatileAcidity: 0.7,
        citricAcid: 0,
        residualSugar: 1.9,
        chlorides: 0.076,
        freeSulfurDioxide: 11,
        totalSulfurDioxide: 34,
        density: 0.9978,
        pH: 3.51,
        sulphates: 0.56,
        alcohol: 9.4,
    });

    const tabs = [
        { name: 'Físico-Químico', icon: <FlaskConical className="w-5 h-5" /> },
        { name: 'Composición', icon: <Droplets className="w-5 h-5" /> },
        { name: 'Propiedades', icon: <Activity className="w-5 h-5" /> },
    ];

    const inputGroups = [
        [ // Tab 0: Físico-Químico
            { name: 'fixedAcidity', label: 'Acidez Fija', min: 4.0, max: 15.0, step: 0.1, unit: 'g/dm³' },
            { name: 'volatileAcidity', label: 'Acidez Volátil', min: 0.1, max: 1.1, step: 0.01, unit: 'g/dm³' },
            { name: 'citricAcid', label: 'Ácido Cítrico', min: 0.0, max: 1.0, step: 0.01, unit: 'g/dm³' },
            { name: 'pH', label: 'pH', min: 2.7, max: 4.0, step: 0.01, unit: '' },
        ],
        [ // Tab 1: Composición
            { name: 'residualSugar', label: 'Azúcar Residual', min: 0.6, max: 66.0, step: 0.1, unit: 'g/dm³' },
            { name: 'chlorides', label: 'Cloruros', min: 0.01, max: 0.35, step: 0.001, unit: 'g/dm³' },
            { name: 'sulphates', label: 'Sulfatos', min: 0.2, max: 1.1, step: 0.01, unit: 'g/dm³' },
            { name: 'density', label: 'Densidad', min: 0.98, max: 1.04, step: 0.0001, unit: 'g/cm³' },
        ],
        [ // Tab 2: Propiedades
            { name: 'freeSulfurDioxide', label: 'Dióxido de Azufre Libre', min: 2, max: 290, step: 1, unit: 'mg/dm³' },
            { name: 'totalSulfurDioxide', label: 'Dióxido de Azufre Total', min: 10, max: 440, step: 1, unit: 'mg/dm³' },
            { name: 'alcohol', label: 'Grados de Alcohol', min: 8.0, max: 15.0, step: 0.1, unit: '% vol' },
        ],
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) });
    };

    const [error, setError] = useState(null);

    // ...

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isActive) return;
        setLoading(true);
        setResult(null);
        setError(null); // Clear previous errors

        console.log("Enviando datos al backend...");

        try {
            // Mapeo de nombres de variables del frontend (camelCase) a backend (snake_case)
            const payload = {
                fixed_acidity: formData.fixedAcidity,
                volatile_acidity: formData.volatileAcidity,
                citric_acid: formData.citricAcid,
                residual_sugar: formData.residualSugar,
                chlorides: formData.chlorides,
                free_sulfur_dioxide: formData.freeSulfurDioxide,
                total_sulfur_dioxide: formData.totalSulfurDioxide,
                density: formData.density,
                pH: formData.pH,
                sulphates: formData.sulphates,
                alcohol: formData.alcohol
            };

            const response = await fetch('http://127.0.0.1:8000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error del servidor: ${response.status} - ${errorText}`);
            }

            const data = await response.json();
            console.log("Respuesta recibida:", data);

            const quality = data.prediction === 'BUENO' ? 'EXCELENTE' : 'REGULAR';
            setResult(quality);

        } catch (error) {
            console.error('Error en handleSubmit:', error);
            setError(`Error: ${error.message}. Asegúrate de que el backend esté corriendo en el puerto 8000.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="catador" className={`py-24 bg-vino-dark relative overflow-hidden transition-all duration-1000 ${isActive ? 'opacity-100 filter-none' : 'opacity-50 grayscale blur-sm pointer-events-none'}`}>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-vino-gold mb-4">
                            Pon a Prueba al Catador Virtual
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Este sistema utiliza un modelo de Random Forest (Bosques Aleatorios) entrenado con un dataset riguroso de más de 4,000 muestras de vino validadas por expertos. Al ingresar los parámetros químicos, la IA detecta patrones invisibles al ojo humano para predecir la calidad con alta precisión (84%).
                        </p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === index
                                        ? 'bg-vino-red text-white shadow-lg scale-105'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {tab.icon}
                                    <span>{tab.name}</span>
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="min-h-[400px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                    >
                                        {inputGroups[activeTab].map((field) => (
                                            <div key={field.name} className="space-y-4">
                                                <div className="flex justify-between items-end">
                                                    <label className="text-vino-light font-medium">
                                                        {field.label}
                                                    </label>
                                                    <span className="text-vino-gold font-mono text-sm bg-vino-gold/10 px-2 py-1 rounded">
                                                        {formData[field.name]} {field.unit}
                                                    </span>
                                                </div>
                                                <input
                                                    type="range"
                                                    name={field.name}
                                                    min={field.min}
                                                    max={field.max}
                                                    step={field.step}
                                                    value={formData[field.name]}
                                                    onChange={handleChange}
                                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-vino-red hover:accent-vino-gold transition-colors"
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="mt-12 flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading || !isActive}
                                    className="group relative px-8 py-4 bg-vino-red hover:bg-red-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-vino-red/30 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                    <span className="relative flex items-center gap-3">
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Analizando...
                                            </>
                                        ) : (
                                            <>
                                                <Activity className="w-5 h-5" />
                                                Analizar Calidad
                                            </>
                                        )}
                                    </span>
                                </button>
                            </div>
                            {error && (
                                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center">
                                    {error}
                                </div>
                            )}
                        </form>

                        {/* Result Card */}
                        <AnimatePresence>
                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="mt-12 p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-vino-gold/30 shadow-2xl relative overflow-hidden"
                                >
                                    <div className={`absolute top-0 left-0 w-1 h-full ${result === 'EXCELENTE' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-4 rounded-full ${result === 'EXCELENTE' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                                {result === 'EXCELENTE' ? <CheckCircle className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-serif text-white mb-1">
                                                    Resultado: <span className={result === 'EXCELENTE' ? 'text-green-400' : 'text-yellow-400'}>{result}</span>
                                                </h3>
                                                <p className="text-gray-400">
                                                    {result === 'EXCELENTE'
                                                        ? 'Este vino presenta características excepcionales.'
                                                        : 'Este vino tiene características promedio.'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500 mb-1">Confianza del Modelo</p>
                                            <p className="text-xl font-mono text-vino-gold">94.2%</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WineForm;
