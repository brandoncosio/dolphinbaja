import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { sileo } from 'sileo';
import SplashScreen from '../components/layout/SplashScreen';
import contactBg from '/assets/images/slide2.webp';
import VisitorGuide from '../components/VisitorGuide';

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

    // ========================================================================
    // 🌍 LÓGICA DE CONTACTO INTELIGENTE
    // ========================================================================
    const defaultMessage = lang === 'es'
        ? 'Hola Equipo Dolphin, me gustaría reservar, ¿me dan más información por favor?'
        : 'Hello Dolphin Team, I would like to book, could you give me more information please?';

    const defaultEmailSubject = lang === 'es' ? 'Nueva Reserva desde Web' : 'New Booking from Website';

    const handleWhatsApp = (e: React.MouseEvent) => {
        e.preventDefault();
        sileo.success({
            title: lang === 'es' ? '¡Conectando con el equipo!' : 'Connecting with our team!',
            description: lang === 'es' ? 'Abriendo chat seguro en WhatsApp...' : 'Opening a secure WhatsApp chat...',
        });
        setTimeout(() => {
            window.open(`https://wa.me/526131182311?text=${encodeURIComponent(defaultMessage)}`, '_blank');
        }, 1500);
    };

    const handleSmartEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        const email = 'ventas@dolphindivebaja.com';

        navigator.clipboard.writeText(email).catch(() => { });

        sileo.success({
            title: lang === 'es' ? '¡Correo copiado al portapapeles!' : 'Email copied to clipboard!',
            description: lang === 'es' ? 'Abriendo tu app de correo...' : 'Opening your mail app...',
        });

        setTimeout(() => {
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(defaultEmailSubject)}&body=${encodeURIComponent(defaultMessage)}`;
        }, 800);
    };

    // ========================================================================
    // 🎨 ESTILOS PREMIUM UNIFICADOS PARA LAS 3 TARJETAS
    // ========================================================================
    const pageContainerClass = `
        relative min-h-screen pb-20 selection:bg-cyan-400 selection:text-dark overflow-hidden transition-colors duration-500
        bg-slate-50 text-slate-600
        dark:bg-dark dark:text-white
    `;

    const primaryCardClass = `
        border p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-center items-center text-center relative overflow-hidden group transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl
        bg-white/90 backdrop-blur-2xl border-slate-200
        dark:bg-white/5 dark:border-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
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

                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-500 opacity-40 dark:opacity-60">
                    <div className="absolute top-[10%] left-[-10%] w-[60%] h-[50%] rounded-full blur-[150px] transition-colors duration-500 bg-cyan-400/20 dark:bg-cyan-500/10" />
                    <div className="absolute top-[40%] right-[-10%] w-[50%] h-[60%] rounded-full blur-[150px] transition-colors duration-500 bg-blue-400/20 dark:bg-ocean/10" />
                </div>

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

                    <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-64 w-[90%] md:w-[600px] rounded-full blur-[100px] pointer-events-none transition-colors duration-500 bg-cyan-500/20 dark:bg-cyan-500/10" />

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            {/* Texto "Sin formularios largos" ELIMINADO */}
                            <span className="inline-block font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 px-5 py-2 md:px-6 md:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-500 shadow-lg pointer-events-auto bg-white/90 border-white/60 text-cyan-700 dark:bg-black/60 dark:border-white/10 dark:text-cyan-400">
                                {lang === 'es' ? 'Hablemos de tu próxima aventura' : "Let's talk about your next adventure"}
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

                <section className="px-6 md:px-12 max-w-7xl mx-auto -mt-32 md:-mt-48 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                        {/* =========================================
                            TARJETA 1: WHATSAPP
                            ========================================= */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className={`${primaryCardClass} border-green-200 hover:border-green-400 hover:shadow-green-300/40 dark:hover:border-green-500/50`}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 shadow-xl animate-pulse bg-gradient-to-br from-green-400 to-green-600 dark:shadow-green-500/20">
                                <i className="ri-whatsapp-line text-4xl md:text-5xl text-white"></i>
                            </div>

                            <h3 className="relative z-10 font-title text-3xl md:text-4xl mb-3 text-navy dark:text-white leading-tight">
                                {t.contact.cards.whatsapp.title}
                            </h3>
                            <p className="relative z-10 font-body text-sm md:text-base mb-8 leading-relaxed font-medium text-slate-600 dark:text-slate-300 flex-grow">
                                {t.contact.cards.whatsapp.text}
                            </p>

                            <button onClick={handleWhatsApp} className="relative z-10 w-full px-8 py-4 font-title text-xs md:text-sm tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95 bg-green-500 hover:bg-green-400 text-white dark:bg-green-600 dark:hover:bg-green-500">
                                <i className="ri-chat-1-line text-xl"></i> {t.contact.cards.whatsapp.btn}
                            </button>
                        </motion.div>

                        {/* =========================================
                            TARJETA 2: CORREO (SMART EMAIL)
                            ========================================= */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className={`${primaryCardClass} border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-300/40 dark:hover:border-cyan-500/50`}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 shadow-xl animate-pulse bg-gradient-to-br from-cyan-400 to-cyan-600 dark:shadow-cyan-500/20">
                                <i className="ri-mail-send-fill text-4xl md:text-5xl text-white"></i>
                            </div>

                            <h3 className="relative z-10 font-title text-3xl md:text-4xl mb-3 text-navy dark:text-white leading-tight">
                                {t.contact.cards.email.title}
                            </h3>
                            <p className="relative z-10 font-body text-sm md:text-base mb-8 leading-relaxed font-medium text-slate-600 dark:text-slate-300 flex-grow">
                                {t.contact.cards.email.text}
                            </p>

                            <button onClick={handleSmartEmail} className="relative z-10 w-full px-8 py-4 font-title text-xs md:text-sm tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95 bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-600 dark:hover:bg-cyan-500">
                                <i className="ri-mail-line text-xl"></i> {t.contact.cards.email.link}
                            </button>
                        </motion.div>

                        {/* =========================================
                            TARJETA 3: UBICACIÓN
                            ========================================= */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                            className={`${primaryCardClass} border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-300/40 dark:hover:border-yellow-500/50`}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 shadow-xl animate-pulse bg-gradient-to-br from-yellow-400 to-yellow-600 dark:shadow-yellow-500/20">
                                <i className="ri-map-pin-2-fill text-4xl md:text-5xl text-white"></i>
                            </div>

                            <h3 className="relative z-10 font-title text-3xl md:text-4xl mb-3 text-navy dark:text-white leading-tight">
                                {t.contact.cards.visit.title}
                            </h3>
                            <p className="relative z-10 font-body text-sm md:text-base mb-8 leading-relaxed font-medium text-slate-600 dark:text-slate-300 flex-grow">
                                {t.contact.cards.visit.text}
                            </p>

                            <button onClick={() => scrollToSection('ubicacion')} className="relative z-10 w-full px-8 py-4 font-title text-xs md:text-sm tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95 bg-yellow-500 hover:bg-yellow-400 text-white dark:bg-yellow-600 dark:hover:bg-yellow-500">
                                <i className="ri-map-2-line text-xl"></i> {t.contact.cards.visit.link}
                            </button>
                        </motion.div>
                    </div>
                </section>

                <section id="ubicacion" className="py-12 px-5 md:px-12 max-w-7xl mx-auto scroll-mt-20 relative z-10">
                    <div className="text-center md:text-left mb-10 md:mb-12 border-b border-slate-200 dark:border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="font-title text-4xl md:text-5xl text-navy dark:text-white drop-shadow-sm">{t.contact.map.title}</h2>
                            <p className="font-body font-bold tracking-widest uppercase text-xs md:text-sm mt-3 text-cyan-600 dark:text-cyan-400">{t.contact.map.text}</p>
                        </div>
                    </div>

                    <div className="w-full h-[450px] md:h-[600px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border relative group transition-all duration-500 bg-white border-slate-200 shadow-2xl dark:bg-white/5 dark:border-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.834199920197!2d-111.345014!3d26.0122591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b97541d5f33221%3A0x3d486bfb5b378e58!2sDolphin%20Dive%20Baja!5e0!3m2!1ses-419!2smx!4v1716300000000!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación Dolphin Dive Baja"
                            className="w-full h-full"
                        ></iframe>

                        <a
                            href="https://maps.app.goo.gl/JdgU6qmLmNTvUrZc6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-20 cursor-pointer"
                            aria-label="Ver en Google Maps"
                        ></a>

                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 p-6 md:p-8 rounded-3xl shadow-2xl max-w-[280px] z-30 backdrop-blur-2xl border bg-white/95 border-slate-200 dark:bg-dark/90 dark:border-white/20 hidden md:block pointer-events-none">
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

                {/* 👇 LA SECCIÓN DE PREGUNTAS FRECUENTES HA SIDO ELIMINADA DE AQUÍ 👇 */}

            </main>
        </div>
    );
}