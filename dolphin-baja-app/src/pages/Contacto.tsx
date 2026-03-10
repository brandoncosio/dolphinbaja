import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SplashScreen from '../components/SplashScreen';
import contactBg from '/assets/images/slide2.webp';
import VisitorGuide from '../components/VisitorGuide';

import { useLanguage } from '../context/LanguageContext';

export default function Contacto() {
    const [isLoading, setIsLoading] = useState(true);
    const { t, lang } = useLanguage();

    const [openFaq, setOpenFaq] = useState<number | null>(0);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem('hasLoadedContact');
        if (hasLoaded) {
            setIsLoading(false);
        } else {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('hasLoadedContact', 'true');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -150;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (window.location.hash && !isLoading) {
            const hash = window.location.hash.substring(1);
            setTimeout(() => {
                scrollToSection(hash);
            }, 300);
        } else if (!isLoading) {
            window.scrollTo(0, 0);
        }
    }, [isLoading]);

    const whatsappMessage = "Hola Dolphin Dive Baja, me gustaría recibir información para reservar una experiencia.";
    const whatsappLink = `https://wa.me/526131182311?text=${encodeURIComponent(whatsappMessage)}`;

    // ========================================================================
    // 🎨 ESTILOS PREMIUM
    // ========================================================================
    const pageContainerClass = `
        relative min-h-screen pb-20 selection:bg-cyan-400 selection:text-dark overflow-hidden transition-colors duration-500
        bg-slate-50 text-slate-600
        dark:bg-dark dark:text-white
    `;

    // Tarjeta Principal (WhatsApp)
    const whatsAppCardClass = `
        md:col-span-2 lg:col-span-1 border p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-center items-center text-center relative overflow-hidden group transition-all duration-500 shadow-2xl hover:-translate-y-2
        bg-white/90 backdrop-blur-2xl border-green-200 hover:shadow-green-300/40 hover:border-green-400
        dark:bg-white/5 dark:border-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:hover:border-green-500/50
    `;

    // Tarjetas Secundarias (Email / Mapa)
    const secondaryCardClass = `
        border p-8 md:p-10 rounded-[2rem] flex flex-col items-start transition-all duration-500 group shadow-lg hover:-translate-y-2 hover:shadow-2xl
        bg-white/90 backdrop-blur-xl border-slate-200 hover:border-cyan-400
        dark:bg-white/5 dark:border-white/10 dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] dark:hover:border-cyan-400/50
    `;

    const iconBoxClass = `
        w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-500 shadow-sm
        bg-slate-50 border-slate-200 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:shadow-md group-hover:border-cyan-600
        dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 dark:group-hover:bg-cyan-500 dark:group-hover:text-navy dark:group-hover:border-cyan-400
    `;

    return (
        <div key={lang}>
            <Helmet>
                <title>
                    {lang === 'es'
                        ? 'Contacto y Ubicación | Dolphin Dive Baja Loreto'
                        : 'Contact & Location | Dolphin Dive Baja Loreto'}
                </title>
                <meta name="description" content={t.contact.hero.text} />
            </Helmet>

            <AnimatePresence>
                {isLoading && <SplashScreen key="splash" />}
            </AnimatePresence>

            <main className={pageContainerClass}>

                {/* Luces de Fondo (Global) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-500 opacity-40 dark:opacity-60">
                    <div className="absolute top-[10%] left-[-10%] w-[60%] h-[50%] rounded-full blur-[150px] transition-colors duration-500 bg-cyan-400/20 dark:bg-cyan-500/10" />
                    <div className="absolute top-[40%] right-[-10%] w-[50%] h-[60%] rounded-full blur-[150px] transition-colors duration-500 bg-blue-400/20 dark:bg-ocean/10" />
                </div>

                {/* =========================================
                    🚀 HERO DE CONTACTO
                ========================================= */}
                <section className="relative w-full min-h-[100dvh] md:min-h-[85vh] lg:min-h-[800px] flex flex-col items-center justify-center overflow-hidden pt-56 lg:pt-64 pb-56 lg:pb-64">
                    <div className="absolute inset-0 z-0">
                        <motion.img
                            initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 15, ease: "linear" }}
                            src={contactBg}
                            alt="Contacto Dolphin Dive"
                            fetchPriority="high"
                            decoding="async"
                            className="w-full h-full object-cover object-[center_30%] md:object-center"
                        />
                        <div className="absolute inset-0 bg-navy/50 dark:bg-black/60 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent dark:from-dark dark:via-dark/80 dark:to-transparent transition-colors duration-500" />
                    </div>

                    {/* Contenedor del Texto */}
                    <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto pointer-events-none">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-64 w-[90%] md:w-[600px] rounded-full blur-[100px] pointer-events-none transition-colors duration-500 bg-cyan-500/20 dark:bg-cyan-500/10" />

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <span className="inline-block font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 px-5 py-2 md:px-6 md:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-500 shadow-lg pointer-events-auto bg-white/90 border-white/60 text-cyan-700 dark:bg-black/60 dark:border-white/10 dark:text-cyan-400">
                                {t.contact.hero.subtitle}
                            </span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] leading-tight text-white">
                            {t.contact.hero.titleStart} <br className="hidden md:block" />
                            <span className="text-yellow-400 drop-shadow-md">{t.contact.hero.titleHighlight}</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                            className="font-body text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] text-slate-100">
                            {t.contact.hero.text}
                        </motion.p>
                    </div>
                </section>

                {/* =========================================
                    GRID DE CONTACTO (Tarjetas Puente)
                ========================================= */}
                <section className="px-6 md:px-12 max-w-7xl mx-auto -mt-32 md:-mt-48 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                        {/* Tarjeta 1: WhatsApp (Destacada) */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className={`${whatsAppCardClass} lg:col-span-1 md:col-span-2`}
                        >
                            {/* Efecto de luz verde de fondo */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-8 shadow-xl animate-pulse bg-gradient-to-br from-green-400 to-green-600 dark:shadow-green-500/20">
                                <i className="ri-whatsapp-line text-4xl md:text-5xl text-white"></i>
                            </div>
                            <h3 className="relative z-10 font-title text-3xl md:text-4xl mb-4 text-navy dark:text-white leading-tight">
                                {t.contact.cards.whatsapp.title}
                            </h3>
                            <p className="relative z-10 font-body text-sm md:text-base mb-10 leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                                {t.contact.cards.whatsapp.text}
                            </p>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                                className="relative z-10 w-full px-8 py-4 font-title text-xs md:text-sm tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95 bg-green-500 hover:bg-green-400 text-white dark:bg-green-600 dark:hover:bg-green-500">
                                <i className="ri-chat-1-line text-xl"></i> {t.contact.cards.whatsapp.btn}
                            </a>
                        </motion.div>

                        {/* Tarjeta 2: Email */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className={secondaryCardClass}
                        >
                            <div className={`${iconBoxClass} text-yellow-600 border-yellow-200 group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-navy dark:text-yellow-400 dark:border-white/20`}>
                                <i className="ri-mail-send-fill text-2xl"></i>
                            </div>
                            <h3 className="font-title text-2xl md:text-3xl mb-3 text-navy dark:text-white">{t.contact.cards.email.title}</h3>
                            <p className="font-body text-sm font-medium mb-8 flex-grow leading-relaxed text-slate-600 dark:text-slate-300">
                                {t.contact.cards.email.text}
                            </p>
                            <a href="mailto:ventas@dolphindivebaja.com" className="inline-flex w-full items-center justify-center gap-2 py-4 rounded-xl font-title text-[11px] md:text-xs tracking-widest uppercase transition-all border border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-cyan-600 hover:border-cyan-300 dark:border-white/20 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-400 dark:hover:border-cyan-500/50 active:scale-95">
                                {t.contact.cards.email.link} <i className="ri-arrow-right-line text-base"></i>
                            </a>
                        </motion.div>

                        {/* Tarjeta 3: Ubicación */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                            className={secondaryCardClass}
                        >
                            <div className={iconBoxClass}>
                                <i className="ri-map-pin-2-fill text-2xl"></i>
                            </div>
                            <h3 className="font-title text-2xl md:text-3xl mb-3 text-navy dark:text-white">{t.contact.cards.visit.title}</h3>
                            <p className="font-body text-sm font-medium mb-8 flex-grow leading-relaxed text-slate-600 dark:text-slate-300">
                                {t.contact.cards.visit.text}
                            </p>
                            <button onClick={() => scrollToSection('ubicacion')} className="inline-flex w-full items-center justify-center gap-2 py-4 rounded-xl font-title text-[11px] md:text-xs tracking-widest uppercase transition-all border border-cyan-300 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-400 dark:border-cyan-500/30 dark:text-cyan-400 dark:hover:bg-cyan-500/10 active:scale-95">
                                {t.contact.cards.visit.link} <i className="ri-map-2-line text-base"></i>
                            </button>
                        </motion.div>

                    </div>
                </section>

                {/* =========================================
                    MAPA INTERACTIVO (Inmersivo y Curvo)
                ========================================= */}
                <section id="ubicacion" className="py-24 px-5 md:px-12 max-w-7xl mx-auto scroll-mt-20 relative z-10">
                    <div className="text-center md:text-left mb-10 md:mb-12 border-b border-slate-200 dark:border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="font-title text-4xl md:text-5xl text-navy dark:text-white drop-shadow-sm">{t.contact.map.title}</h2>
                            <p className="font-body font-bold tracking-widest uppercase text-xs md:text-sm mt-3 text-cyan-600 dark:text-cyan-400">{t.contact.map.text}</p>
                        </div>
                    </div>

                    <div className="w-full h-[450px] md:h-[600px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border relative group transition-all duration-500 bg-white border-slate-200 shadow-2xl dark:bg-white/5 dark:border-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

                        {/* Capa de protección para que el mapa no deslumbre al cargar */}
                        <div className="absolute inset-0 pointer-events-none transition-colors duration-700 z-10 bg-transparent dark:bg-cyan-900/10 dark:mix-blend-overlay dark:group-hover:bg-transparent" />

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.0461877665766!2d-111.34327712437648!3d26.014529077189196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b031d2b775dc29%3A0xc6c429ff100d8697!2sDolphin%20Dive%20Baja!5e0!3m2!1ses-419!2smx!4v1709240837580!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación Dolphin Dive Baja"
                            className="w-full h-full transition-all duration-[1.5s] grayscale-0 invert-0 contrast-100 dark:grayscale-[80%] dark:invert-[90%] dark:hue-rotate-180deg dark:contrast-[85%] dark:group-hover:grayscale-[20%] dark:group-hover:invert-0 dark:group-hover:filter-none"
                        ></iframe>

                        {/* Tarjeta Flotante Minimalista sobre el Mapa */}
                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 p-6 md:p-8 rounded-3xl shadow-2xl max-w-[280px] z-20 backdrop-blur-2xl border bg-white/95 border-slate-200 dark:bg-dark/90 dark:border-white/20 hidden md:block">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center shrink-0 text-cyan-600 dark:text-cyan-400 shadow-sm">
                                    <i className="ri-anchor-fill text-xl"></i>
                                </div>
                                <p className="font-bold font-title text-xl text-navy dark:text-white leading-tight">Dolphin Dive <br />Baja</p>
                            </div>
                            <p className="text-sm font-body font-medium mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
                                Calle Madero y Benito Juárez, Centro, 23880 Loreto, B.C.S.
                            </p>
                        </div>
                    </div>
                </section>

                <VisitorGuide />

                {/* =========================================
                    FAQ (Acordeón Ultra Limpio)
                ========================================= */}
                <section id="faq" className="py-24 px-6 md:px-12 scroll-mt-20 relative z-10 border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-transparent">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-5 py-2 rounded-full border text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-4 bg-white border-slate-200 text-cyan-600 dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 shadow-sm">
                                {t.contact.faq.subtitle}
                            </span>
                            <h2 className="font-title text-4xl md:text-5xl text-navy dark:text-white">{t.contact.faq.title}</h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            {t.contact.faq.list.map((faq, idx) => {
                                const isOpen = openFaq === idx;

                                return (
                                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                        className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm
                                        ${isOpen
                                                ? 'bg-white shadow-lg border-cyan-400 dark:bg-white/10 dark:border-cyan-500'
                                                : 'bg-white/70 border-slate-200 hover:border-cyan-300 dark:bg-white/5 dark:border-white/10 hover:dark:border-white/30'}`}
                                    >
                                        <button
                                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                                            className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left cursor-pointer outline-none"
                                        >
                                            <h4 className={`font-title text-lg md:text-xl transition-colors pr-4 ${isOpen ? 'text-cyan-700 dark:text-cyan-400' : 'text-navy dark:text-white'}`}>
                                                {faq.q}
                                            </h4>

                                            {/* Icono animado (+ a -) */}
                                            <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-cyan-500 text-white rotate-180' : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'}`}>
                                                <i className={`text-xl transition-transform ${isOpen ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                                                    className="px-6 md:px-8 pb-6 md:pb-8"
                                                >
                                                    <div className="h-[1px] w-full bg-slate-100 dark:bg-white/10 mb-6"></div>
                                                    <p className="font-body text-sm md:text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                                        {faq.a}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-16 pt-10 text-center border-t border-slate-200 dark:border-white/10">
                            <p className="font-body text-sm font-medium mb-6 text-slate-500 dark:text-slate-400">{t.contact.faq.more}</p>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-navy font-title text-sm tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-md bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-400 dark:text-dark dark:hover:bg-yellow-300"
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