import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // 👇 Importación vital para SEO
import SplashScreen from '../components/SplashScreen';
import contactBg from '/assets/images/slide2.webp';

import { useLanguage } from '../context/LanguageContext';

export default function Contacto() {
    const [isLoading, setIsLoading] = useState(true);
    const { t, lang } = useLanguage();

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem('hasLoadedContact');
        if (hasLoaded) {
            setIsLoading(false);
        } else {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('hasLoadedContact', 'true');
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

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

    const whatsappMessage = "Hola Dolphin Dive Baja, me gustaría recibir información para reservar una experiencia.";
    const whatsappLink = `https://wa.me/526131182311?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div key={lang}>
            {/* =========================================
                METADATOS DINÁMICOS (SEO & Redes Sociales)
            ========================================= */}
            <Helmet>
                <title>
                    {lang === 'es'
                        ? 'Contacto y Ubicación | Dolphin Dive Baja Loreto'
                        : 'Contact & Location | Dolphin Dive Baja Loreto'}
                </title>
                <meta
                    name="description"
                    content={lang === 'es'
                        ? 'Reserva tu inmersión hoy. Contáctanos por WhatsApp, correo o visítanos en nuestro Centro de Buceo en el corazón de Loreto, Baja California Sur.'
                        : 'Book your dive today. Contact us via WhatsApp, email, or visit our Dive Center in the heart of Loreto, Baja California Sur.'}
                />
                <meta property="og:title" content="Contacto - Dolphin Dive Baja" />
                <meta property="og:description" content={t.contact.hero.text} />
                {/* Usamos el fondo del Hero como imagen de preview al compartir */}
                <meta property="og:image" content={contactBg} />
            </Helmet>

            <AnimatePresence>
                {isLoading && <SplashScreen key="splash" />}
            </AnimatePresence>

            <main className="relative bg-dark min-h-screen text-white pb-20 selection:bg-cyan-400 selection:text-dark overflow-hidden">

                {/* =========================================
                    LUCES DE PROFUNDIDAD (Aguas Someras)
                ========================================= */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" style={{ willChange: 'transform' }}>
                    <div className="absolute top-[10%] left-[-10%] w-[60%] h-[50%] bg-cyan-400/20 blur-[150px] rounded-full" />
                    <div className="absolute top-[40%] right-[-10%] w-[50%] h-[60%] bg-ocean/25 blur-[150px] rounded-full" />
                </div>

                {/* =========================================
                    HERO DE CONTACTO (Foto Limpia)
                ========================================= */}
                <section className="relative min-h-[600px] md:min-h-[650px] flex items-center justify-center overflow-hidden pt-24">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={contactBg}
                            alt="Contacto Dolphin Dive"
                            fetchPriority="high" // 👈 Optimización LCP
                            decoding="async"
                            className="w-full h-full object-cover object-center transition-transform duration-[5s] ease-out hover:scale-105"
                            style={{ willChange: 'transform' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/10" />
                    </div>

                    <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto pb-32 md:pb-40 pointer-events-none">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 drop-shadow-md"
                        >
                            {t.contact.hero.subtitle}
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] leading-tight"
                        >
                            {t.contact.hero.titleStart} <br className="hidden md:block" />
                            <span className="text-yellow-400">{t.contact.hero.titleHighlight}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="font-body text-slate-100 text-base md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-sm px-4 font-medium"
                        >
                            {t.contact.hero.text}
                        </motion.p>
                    </div>
                </section>

                {/* =========================================
                    GRID DE CONTACTO (Bento Grid Apple Glass)
                ========================================= */}
                <section className="px-6 md:px-20 -mt-24 md:-mt-32 relative z-20">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                        {/* Tarjeta 1: WhatsApp (Gigante) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-2 lg:col-span-1 bg-white/5 backdrop-blur-2xl border border-green-400/30 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-center items-center text-center shadow-[0_20px_50px_rgba(34,197,94,0.15)] relative overflow-hidden group"
                            style={{ willChange: 'transform' }}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-8 shadow-[0_10px_25px_rgba(34,197,94,0.4)] animate-bounce-slow">
                                <i className="ri-whatsapp-line text-5xl text-white"></i>
                            </div>
                            <h3 className="relative z-10 font-title text-3xl md:text-4xl text-white mb-4 drop-shadow-md leading-tight">{t.contact.cards.whatsapp.title}</h3>
                            <p className="relative z-10 font-body text-slate-200 text-base md:text-lg mb-10 leading-relaxed max-w-sm">
                                {t.contact.cards.whatsapp.text}
                            </p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 w-full md:w-auto px-10 py-4 md:py-5 bg-green-500 hover:bg-green-400 text-white font-title text-sm md:text-base tracking-widest uppercase rounded-2xl transition-all shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-95"
                            >
                                <i className="ri-chat-1-line text-xl"></i> {t.contact.cards.whatsapp.btn}
                            </a>
                        </motion.div>

                        {/* Columna Derecha: Tarjetas Secundarias */}
                        <div className="md:col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">

                            {/* Tarjeta: Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex flex-col items-start hover:border-yellow-400/40 hover:bg-white/10 transition-all duration-300 group shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-yellow-400 text-yellow-400 group-hover:text-dark transition-colors duration-300">
                                    <i className="ri-mail-send-fill text-2xl"></i>
                                </div>
                                <h3 className="font-title text-xl md:text-2xl text-white mb-2">{t.contact.cards.email.title}</h3>
                                <p className="font-body text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                                    {t.contact.cards.email.text}
                                </p>
                                <a href="mailto:ventas@dolphindivebaja.com" className="inline-flex items-center gap-2 text-yellow-400 font-title text-sm tracking-widest uppercase hover:text-yellow-300 transition-colors">
                                    {t.contact.cards.email.link} <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                                </a>
                            </motion.div>

                            {/* Tarjeta: Ubicación */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex flex-col items-start hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 group shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-cyan-400 text-cyan-400 group-hover:text-dark transition-colors duration-300">
                                    <i className="ri-map-pin-2-fill text-2xl"></i>
                                </div>
                                <h3 className="font-title text-xl md:text-2xl text-white mb-2">{t.contact.cards.visit.title}</h3>
                                <p className="font-body text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                                    {t.contact.cards.visit.text}
                                </p>
                                <a href="#ubicacion" className="inline-flex items-center gap-2 text-cyan-400 font-title text-sm tracking-widest uppercase hover:text-cyan-300 transition-colors">
                                    {t.contact.cards.visit.link} <i className="ri-arrow-down-line group-hover:translate-y-1 transition-transform"></i>
                                </a>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* =========================================
                    MAPA INTERACTIVO (Glassmorphism Completo)
                ========================================= */}
                <section id="ubicacion" className="py-24 px-6 md:px-20 scroll-mt-24 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-title text-3xl md:text-5xl text-white drop-shadow-md">{t.contact.map.title}</h2>
                            <p className="text-cyan-400 font-body mt-3 font-bold tracking-wider uppercase text-sm">{t.contact.map.text}</p>
                        </div>

                        {/* Contenedor estilo cristal */}
                        <div className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-white/5 relative group">
                            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.0461877665766!2d-111.34327712437648!3d26.014529077189196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b031d2b775dc29%3A0xc6c429ff100d8697!2sDolphin%20Dive%20Baja!5e0!3m2!1ses-419!2smx!4v1709240837580!5m2!1ses-419!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(80%) invert(90%) hue-rotate(180deg) contrast(85%)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Dolphin Dive Baja"
                                className="group-hover:grayscale-[20%] group-hover:invert-0 group-hover:filter-none transition-all duration-[1.5s]"
                            ></iframe>

                            {/* Info Flotante (Glass Premium) */}
                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-dark/80 backdrop-blur-xl border border-white/20 text-white p-6 rounded-3xl shadow-2xl max-w-[280px] hidden md:block z-20">
                                <div className="flex items-center gap-3 mb-2">
                                    <i className="ri-anchor-fill text-yellow-400 text-xl"></i>
                                    <p className="font-bold font-title text-yellow-400 text-lg">Dolphin Dive Baja</p>
                                </div>
                                <p className="text-sm font-body text-slate-200 mt-2 leading-relaxed">
                                    Calle Madero y Benito Juárez, Centro, 23880 Loreto, B.C.S.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================
                    FAQ (Glassmorphism Integrado)
                ========================================= */}
                <section id="faq" className="py-20 px-6 md:px-20 scroll-mt-24 relative z-10 border-t border-white/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-cyan-400 font-bold text-xs md:text-sm uppercase tracking-[0.3em] drop-shadow-md">{t.contact.faq.subtitle}</span>
                            <h2 className="font-title text-3xl md:text-5xl text-white mt-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">{t.contact.faq.title}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {t.contact.faq.list.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2rem] hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                                    style={{ willChange: 'transform' }}
                                >
                                    <h4 className="font-title text-lg md:text-xl text-yellow-400 mb-4 flex items-start gap-3 leading-snug">
                                        <i className="ri-questionnaire-line mt-1 text-cyan-400 opacity-80 text-2xl"></i>
                                        {faq.q}
                                    </h4>
                                    <p className="font-body text-slate-200 text-sm md:text-base leading-relaxed pl-9">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <p className="text-slate-200 font-body font-medium mb-6">{t.contact.faq.more}</p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-dark font-title text-sm tracking-widest uppercase bg-cyan-400 px-8 py-4 rounded-xl font-bold hover:bg-cyan-300 transition-all duration-300 shadow-[0_10px_25px_rgba(102,216,227,0.3)] hover:shadow-[0_15px_35px_rgba(102,216,227,0.5)] hover:-translate-y-1 active:scale-95"
                            >
                                {t.contact.faq.link} <i className="ri-whatsapp-line text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}