import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componentes
import SplashScreen from '../components/SplashScreen';

// Imagen de fondo (Asegúrate de tenerla, si no, usa una del slider)
import contactBg from '/assets/images/slide2.webp'; // O la que se llame 'contacto.jpg'

export default function Contacto() {
    const [isLoading, setIsLoading] = useState(true);

    // Splash Screen Logic
    useEffect(() => {
        const hasLoaded = sessionStorage.getItem('hasLoadedContact');
        if (hasLoaded) {
            setIsLoading(false);
        } else {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('hasLoadedContact', 'true');
            }, 1500); // Un poco más rápido que el home
            return () => clearTimeout(timer);
        }
    }, []);

    // Scroll al cargar si hay hash (#ubicacion, #faq)
    useEffect(() => {
        if (window.location.hash) {
            const elem = document.getElementById(window.location.hash.substring(1));
            if (elem) {
                setTimeout(() => {
                    elem.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [isLoading]);

    // Mensaje de WhatsApp Predefinido
    const whatsappMessage = "Hola Dolphin Dive Baja, me gustaría recibir información para reservar una experiencia.";
    const whatsappLink = `https://wa.me/526131182311?text=${encodeURIComponent(whatsappMessage)}`;

    const faqs = [
        { q: "¿Necesito certificación para bucear?", a: "Para los Fun Dives sí requerimos certificación. Si nunca has buceado, pregunta por nuestro programa 'Discover Scuba' o Bautizo." },
        { q: "¿Incluyen equipo de renta?", a: "En los cursos y tours de snorkel sí. En los Fun Dives para certificados, el equipo tiene un costo adicional o puedes traer el tuyo." },
        { q: "¿Cuál es la política de cancelación?", a: "Requerimos 24 horas de anticipación para cambios o cancelaciones sin cargo. Grupos grandes pueden requerir 48 horas." },
        { q: "¿Aceptan tarjetas de crédito?", a: "Sí, aceptamos Visa, Mastercard y efectivo (Pesos/Dólares). Los pagos con tarjeta pueden tener una pequeña comisión bancaria." },
    ];

    return (
        <>
            <AnimatePresence>
                {isLoading && <SplashScreen key="splash" />}
            </AnimatePresence>

            <main className="bg-slate-900 min-h-screen text-white pb-20">

                {/* 1. HERO DE CONTACTO */}
                <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                    {/* Fondo con Parallax suave */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={contactBg}
                            alt="Contacto Dolphin Dive"
                            className="w-full h-full object-cover object-center opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900" />
                    </div>

                    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-body text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4"
                        >
                            Estamos para ayudarte
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-title text-4xl md:text-6xl text-white mb-6"
                        >
                            Hablemos de tu próxima <span className="text-yellow-400">Aventura</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="font-body text-slate-300 text-lg max-w-2xl mx-auto"
                        >
                            Sin formularios largos. Atención directa y personalizada para planear tu inmersión perfecta en Loreto.
                        </motion.p>
                    </div>
                </section>

                {/* 2. GRID DE CONTACTO (WhatsApp Star) */}
                <section className="px-6 md:px-20 -mt-20 relative z-20">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Tarjeta: Ubicación */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center hover:border-cyan-400/30 transition-colors group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-cyan-400 text-cyan-400 group-hover:text-slate-900 transition-colors">
                                <i className="ri-map-pin-2-fill text-3xl"></i>
                            </div>
                            <h3 className="font-title text-xl text-white mb-2">Visítanos</h3>
                            <p className="font-body text-slate-400 text-sm mb-6 flex-grow">
                                Calle Madero & Benito Juárez.<br />
                                Centro de Loreto, a una cuadra del malecón.
                            </p>
                            <a href="#ubicacion" className="text-cyan-400 font-bold text-sm hover:underline">
                                Ver en mapa
                            </a>
                        </motion.div>

                        {/* Tarjeta: WhatsApp (DESTACADA) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-400/50 p-8 rounded-3xl flex flex-col items-center text-center shadow-[0_0_50px_rgba(34,211,238,0.15)] transform md:-translate-y-4"
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-lg animate-pulse">
                                <i className="ri-whatsapp-line text-4xl text-white"></i>
                            </div>
                            <h3 className="font-title text-2xl text-white mb-2">Chat Directo</h3>
                            <p className="font-body text-slate-300 text-sm mb-8">
                                La forma más rápida de reservar. Te contestamos al momento (8am - 8pm).
                            </p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-green-500 hover:bg-green-400 text-white font-title rounded-xl transition-all shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-2"
                            >
                                <i className="ri-chat-1-line"></i> Enviar Mensaje
                            </a>
                        </motion.div>

                        {/* Tarjeta: Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-800/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center hover:border-yellow-400/30 transition-colors group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-700/50 flex items-center justify-center mb-6 group-hover:bg-yellow-400 text-yellow-400 group-hover:text-slate-900 transition-colors">
                                <i className="ri-mail-send-fill text-3xl"></i>
                            </div>
                            <h3 className="font-title text-xl text-white mb-2">Escríbenos</h3>
                            <p className="font-body text-slate-400 text-sm mb-6 flex-grow">
                                ¿Prefieres correo?<br />
                                Para cotizaciones grupales o dudas detalladas.
                            </p>
                            <a href="mailto:ventas@dolphindivebaja.com" className="text-yellow-400 font-bold text-sm hover:underline">
                                ventas@dolphindivebaja.com
                            </a>
                        </motion.div>

                    </div>
                </section>

                {/* 3. MAPA (Con ID para el navbar) */}
                <section id="ubicacion" className="py-24 px-6 md:px-20 scroll-mt-24">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-title text-3xl text-white">Punto de Encuentro</h2>
                            <p className="text-slate-400 font-body mt-2">Nuestra base de operaciones en el corazón de Loreto</p>
                        </div>

                        <div className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-800 relative group">
                            {/* Iframe de Google Maps */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.696660144983!2d-111.34568868498844!3d26.00898898352513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b5e6727787c9f3%3A0x6e93136272553755!2sDolphin%20Dive%20Baja!5e0!3m2!1ses-419!2smx!4v1675800000000!5m2!1ses-419!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) contrast(85%)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Dolphin Dive Baja"
                                className="group-hover:grayscale-0 group-hover:invert-0 group-hover:filter-none transition-all duration-700"
                            ></iframe>

                            {/* Tooltip flotante */}
                            <div className="absolute bottom-6 left-6 bg-white text-navy px-6 py-4 rounded-xl shadow-xl max-w-xs hidden md:block">
                                <p className="font-bold font-title">Dolphin Dive Baja</p>
                                <p className="text-xs font-body text-slate-600 mt-1">Benito Juárez, Centro, 23880 Loreto, B.C.S.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. PREGUNTAS FRECUENTES (FAQ) - Con ID */}
                <section id="faq" className="py-12 px-6 md:px-20 bg-slate-800/50 scroll-mt-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Resolver Dudas</span>
                            <h2 className="font-title text-3xl md:text-4xl text-white mt-2">Preguntas Frecuentes</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {faqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-slate-900 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors"
                                >
                                    <h4 className="font-title text-lg text-yellow-400 mb-3 flex items-start gap-2">
                                        <i className="ri-question-line mt-1 opacity-50"></i>
                                        {faq.q}
                                    </h4>
                                    <p className="font-body text-slate-400 text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-slate-400 font-body mb-4">¿Tienes otra pregunta?</p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors"
                            >
                                Pregúntanos por WhatsApp <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}