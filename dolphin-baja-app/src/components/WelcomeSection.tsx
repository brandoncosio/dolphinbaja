import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import img1 from '/assets/images/DolphinDive1.webp';
import img2 from '/assets/images/DolphinDive2.webp';

const slideImages = [img1, img2];

export default function WelcomeSection() {
    const { lang } = useLanguage();

    // Estado para controlar qué imagen se muestra en el carrusel
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // Efecto para cambiar la imagen automáticamente cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIndex((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const content = {
        es: {
            badge: "Bienvenidos a Loreto",
            title: "Dolphin Dive Baja Loreto",
            subtitle: "Bucea en el Mar de Cortés, ¡El Acuario del Mundo!",
            cousteau: "El Mar de Cortés fue nombrado por el famoso Jacques Cousteau como “El acuario del mundo” y su entrada está en Loreto.",
            p1: "Con 206,000 hectáreas de mar, el Parque Nacional Bahía de Loreto ha sido un área protegida por más de 20 años y cuenta con más de 40 sitios de buceo con paisajes impresionantes.",
            highlight: "¡Acompáñanos a explorar el mundo subacuático de Loreto!",
            p2: "Dolphin Dive Baja ha sido miembro del PADI International Resort Association desde 2001. Estamos ubicados estratégicamente a una cuadra del malecón en la calle Juárez, a 5 minutos caminando del puerto, en el centro de Loreto.",
            welcome: "¡Buzos de todas las asociaciones son bienvenidos!",
            warning: "La pesca con arpón no está permitida en nuestro parque marino."
        },
        en: {
            badge: "Welcome to Loreto",
            title: "Dolphin Dive Baja Loreto",
            subtitle: "Dive in the Sea of Cortez, The Aquarium of the World!",
            cousteau: "The Sea of Cortez was named by the famous Jacques Cousteau as 'The aquarium of the world' and its entrance is in Loreto.",
            p1: "With 206,000 hectares of sea, the Loreto Bay National Park has been a protected area for over 20 years and features more than 40 dive sites with stunning landscapes.",
            highlight: "Join us to explore the underwater world of Loreto!",
            p2: "Dolphin Dive Baja has been a member of the PADI International Resort Association since 2001. We are strategically located one block from the malecon on Juarez Street, a 5-minute walk from the port, in downtown Loreto.",
            welcome: "Divers from all associations are welcome!",
            warning: "Spearfishing is not permitted in our marine park."
        }
    };

    const text = content[lang === 'en' ? 'en' : 'es'];

    // Variantes para animación en cascada
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative z-10 w-full py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500 bg-slate-50 dark:bg-dark">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* =========================================
                        COLUMNA IZQUIERDA: IMAGEN EDITORIAL (CARRUSEL)
                        ========================================= */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 relative group"
                    >
                        {/* Marco decorativo trasero */}
                        <div className="absolute -inset-4 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-[2.5rem] lg:rounded-[3.5rem] transform -rotate-3 transition-transform duration-700 group-hover:-rotate-6 z-0"></div>

                        {/* Contenedor de la Imagen con fondo negro para evitar destellos en transición */}
                        <div className="w-full h-[400px] sm:h-[500px] lg:h-[700px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white dark:border-white/10 bg-black">

                            {/* Animación del carrusel */}
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    key={currentImgIndex}
                                    src={slideImages[currentImgIndex]}
                                    alt="Buceo en el Parque Nacional Bahía de Loreto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[7s] group-hover:scale-110"
                                />
                            </AnimatePresence>

                            {/* Gradiente sutil inferior para contraste */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-60 dark:opacity-80 pointer-events-none z-10" />
                        </div>

                        {/* PADI Badge Flotante ACTUALIZADO */}
                        <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white dark:bg-navy p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 z-20 flex flex-col items-center justify-center animate-bounce-slow">
                            <span className="font-title text-3xl text-cyan-600 dark:text-cyan-400 leading-none mb-1">PADI</span>
                            <span className="font-body text-[8px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Resort Member</span>
                            <span className="font-body text-[10px] font-black text-navy dark:text-white mt-1">Since 2001</span>
                        <img src="/assets/contentD/img/PADI.png" alt="PADI Logo" className="h-10 md:h-12 w-auto mb-2 object-contain filter brightness-110 drop-shadow-sm" />
                        </div>
                    </motion.div>

                    {/* =========================================
                        COLUMNA DERECHA: TEXTO
                        ========================================= */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-7 relative z-10 lg:pl-8"
                    >
                        {/* Etiqueta y Título */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 border shadow-sm
                                text-cyan-700 bg-white border-slate-200
                                dark:text-cyan-400 dark:bg-white/5 dark:border-white/10">
                                <i className="ri-anchor-line text-sm"></i> {text.badge}
                            </span>
                            <h2 className="font-title text-4xl sm:text-5xl lg:text-6xl leading-tight text-navy dark:text-white mb-4">
                                {text.title}
                            </h2>
                            <h3 className="font-body text-base md:text-lg font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
                                {text.subtitle}
                            </h3>
                        </motion.div>

                        {/* Línea divisoria elegante */}
                        <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8"></motion.div>

                        {/* Contenido Editorial */}
                        <div className="space-y-6 font-body text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">

                            {/* Cita de Cousteau Destacada */}
                            <motion.blockquote variants={itemVariants} className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm dark:bg-white/5 dark:border-white/10">
                                <i className="ri-double-quotes-l absolute top-4 left-4 text-4xl text-cyan-500/20 dark:text-cyan-400/20"></i>
                                <p className="relative z-10 italic text-slate-700 dark:text-slate-200 pt-2">
                                    "{text.cousteau}"
                                </p>
                            </motion.blockquote>

                            <motion.p variants={itemVariants}>
                                {text.p1}
                            </motion.p>

                            <motion.p variants={itemVariants} className="font-title text-xl lg:text-2xl text-yellow-600 dark:text-yellow-400 py-2">
                                {text.highlight}
                            </motion.p>

                            <motion.p variants={itemVariants}>
                                {text.p2}
                            </motion.p>

                            <motion.p variants={itemVariants} className="inline-flex items-center gap-2 font-bold px-4 py-2 rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800/50">
                                <i className="ri-checkbox-circle-fill text-xl"></i> {text.welcome}
                            </motion.p>
                        </div>

                        {/* Advertencia / Info Importante */}
                        <motion.div variants={itemVariants} className="mt-12 flex items-start gap-4 p-5 rounded-2xl border shadow-sm
                            bg-yellow-50 border-yellow-200 text-yellow-800
                            dark:bg-yellow-400/10 dark:border-yellow-400/30 dark:text-yellow-300">
                            <i className="ri-error-warning-fill text-3xl shrink-0 mt-0.5"></i>
                            <p className="font-body text-xs md:text-sm font-bold uppercase tracking-wider mt-1.5">
                                {text.warning}
                            </p>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}