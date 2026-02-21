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

    // ========================================================================
    // 🎨 ESTILOS SEPARADOS (Clean Code & Matte Fixes)
    // ========================================================================

    // 1. Contenedor Principal
    const pageContainerClass = `
    relative min-h-screen pb-20 selection:bg-cyan-400 selection:text-dark overflow-hidden transition-colors duration-500
    bg-slate-50 text-slate-600
    dark:bg-dark dark:text-white
  `;

    // 2. Luces de Fondo (Atmósfera Sutil)
    const atmosphereClass = `
    absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-500
    /* LIGHT */
    opacity-30
    /* DARK (Más tenues para no competir) */
    dark:opacity-40
  `;

    // 3. Tarjeta WhatsApp (Destacada)
    const whatsAppCardClass = `
    md:col-span-2 lg:col-span-1 border p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-center items-center text-center relative overflow-hidden group transition-all duration-500
    
    /* LIGHT MODE: Blanca, borde verde suave, sombra verde difusa */
    bg-white border-green-100 shadow-xl shadow-green-100/50
    
    /* DARK MODE: Matte Glass (Sin neón), borde sutil */
    dark:bg-white/5 dark:backdrop-blur-2xl dark:border-white/10 dark:shadow-none
  `;

    // 4. Tarjetas Secundarias (Email/Ubicación)
    const secondaryCardClass = `
    border p-8 rounded-[2rem] flex flex-col items-start transition-all duration-300 group shadow-lg
    
    /* LIGHT MODE */
    bg-white border-slate-200 shadow-slate-200/50 hover:border-cyan-400 hover:shadow-cyan-100
    
    /* DARK MODE */
    dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none dark:hover:border-white/20
  `;

    // 5. Iconos Secundarios (Círculos)
    const iconBoxClass = `
    w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-colors duration-300
    
    /* LIGHT */
    bg-slate-50 border-slate-200 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600
    
    /* DARK */
    dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 dark:group-hover:bg-cyan-400 dark:group-hover:text-dark
  `;

    // 6. Tarjetas FAQ
    const faqCardClass = `
    border p-6 md:p-8 rounded-[2rem] transition-all duration-300 shadow-md
    
    /* LIGHT */
    bg-white border-slate-200 hover:border-cyan-400 hover:shadow-lg
    
    /* DARK */
    dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none dark:hover:border-white/20
  `;

    // 7. Contenedor Mapa
    const mapContainerClass = `
    w-full h-[400px] md:h-[500px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border relative group transition-all duration-500
    
    /* LIGHT */
    bg-white border-slate-200 shadow-xl shadow-slate-200/50
    
    /* DARK */
    dark:bg-white/5 dark:border-white/10 dark:shadow-none
  `;

    // 👇 8. Etiqueta Hero (Badge Cristal)
    const heroTagClass = `
    inline-block font-body text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 
    px-4 py-1.5 md:px-5 md:py-2 rounded-full backdrop-blur-md border transition-all duration-500 shadow-sm pointer-events-auto
    
    /* LIGHT MODE: Fondo blanco translúcido */
    bg-white/80 border-white/60 text-navy
    
    /* DARK MODE: Fondo oscuro translúcido con texto cyan */
    dark:bg-black/40 dark:border-white/10 dark:text-cyan-400
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
                <meta property="og:title" content="Contacto - Dolphin Dive Baja" />
                <meta property="og:description" content={t.contact.hero.text} />
                <meta property="og:image" content={contactBg} />
            </Helmet>

            <AnimatePresence>
                {isLoading && <SplashScreen key="splash" />}
            </AnimatePresence>

            <main className={pageContainerClass}>

                {/* LUCES DE FONDO (Atmosfera) */}
                <div className={atmosphereClass} style={{ willChange: 'transform' }}>
                    <div className="absolute top-[10%] left-[-10%] w-[60%] h-[50%] rounded-full blur-[150px] transition-colors duration-500
            dark:bg-cyan-500/10 bg-cyan-400/10"
                    />
                    <div className="absolute top-[40%] right-[-10%] w-[50%] h-[60%] rounded-full blur-[150px] transition-colors duration-500
            dark:bg-ocean/10 bg-blue-400/10"
                    />
                </div>

                {/* =========================================
            HERO DE CONTACTO
        ========================================= */}
                <section className="relative min-h-[600px] md:min-h-[650px] flex items-center justify-center overflow-hidden pt-24">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={contactBg}
                            alt="Contacto Dolphin Dive"
                            fetchPriority="high"
                            decoding="async"
                            className="w-full h-full object-cover object-center transition-transform duration-[5s] ease-out hover:scale-105"
                            style={{ willChange: 'transform' }}
                        />
                        {/* Gradiente Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t transition-colors duration-500
              dark:from-dark dark:via-dark/40 dark:to-dark/10
              from-slate-50 via-slate-50/40 to-slate-50/10"
                        />
                    </div>

                    <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto pb-32 md:pb-40 pointer-events-none">

                        {/* 👇 Se aplica la clase de Etiqueta/Píldora */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={heroTagClass}
                        >
                            {t.contact.hero.subtitle}
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-md leading-tight
                text-navy dark:text-white"
                        >
                            {t.contact.hero.titleStart} <br className="hidden md:block" />
                            <span className="text-yellow-500 dark:text-yellow-400">{t.contact.hero.titleHighlight}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="font-body text-base md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-sm px-4 font-medium
                text-slate-700 dark:text-slate-100"
                        >
                            {t.contact.hero.text}
                        </motion.p>
                    </div>
                </section>

                {/* =========================================
            GRID DE CONTACTO
        ========================================= */}
                <section className="px-6 md:px-20 -mt-24 md:-mt-32 relative z-20">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                        {/* Tarjeta 1: WhatsApp (Gigante) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={whatsAppCardClass}
                            style={{ willChange: 'transform' }}
                        >
                            {/* Luz interna (Solo visible en Light o muy sutil en Dark) */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] transition-opacity duration-500
                from-green-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100
                dark:from-green-400/5"
                            />

                            <div className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-lg animate-bounce-slow
                bg-gradient-to-br from-green-400 to-green-600
                dark:shadow-none">
                                <i className="ri-whatsapp-line text-5xl text-white"></i>
                            </div>
                            <h3 className="relative z-10 font-title text-3xl md:text-4xl mb-4 drop-shadow-md leading-tight text-navy dark:text-white">
                                {t.contact.cards.whatsapp.title}
                            </h3>
                            <p className="relative z-10 font-body text-base md:text-lg mb-10 leading-relaxed max-w-sm text-slate-600 dark:text-slate-300">
                                {t.contact.cards.whatsapp.text}
                            </p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 w-full md:w-auto px-10 py-4 md:py-5 font-title text-sm md:text-base tracking-widest uppercase rounded-2xl transition-all flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-95 shadow-md
                bg-green-500 hover:bg-green-400 text-white hover:shadow-green-200/50
                dark:bg-green-600 dark:hover:bg-green-500 dark:shadow-none"
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
                                className={secondaryCardClass}
                            >
                                <div className={`${iconBoxClass} group-hover:bg-yellow-400 group-hover:text-dark group-hover:border-yellow-400 text-yellow-500 border-yellow-200 dark:text-yellow-400 dark:border-white/20`}>
                                    <i className="ri-mail-send-fill text-2xl"></i>
                                </div>
                                <h3 className="font-title text-xl md:text-2xl mb-2 text-navy dark:text-white">{t.contact.cards.email.title}</h3>
                                <p className="font-body text-sm mb-6 flex-grow leading-relaxed text-slate-600 dark:text-slate-300">
                                    {t.contact.cards.email.text}
                                </p>
                                <a href="mailto:ventas@dolphindivebaja.com" className="inline-flex items-center gap-2 font-title text-sm tracking-widest uppercase transition-colors text-yellow-600 hover:text-yellow-500 dark:text-yellow-400 dark:hover:text-yellow-300">
                                    {t.contact.cards.email.link} <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                                </a>
                            </motion.div>

                            {/* Tarjeta: Ubicación */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className={secondaryCardClass}
                            >
                                <div className={iconBoxClass}>
                                    <i className="ri-map-pin-2-fill text-2xl"></i>
                                </div>
                                <h3 className="font-title text-xl md:text-2xl mb-2 text-navy dark:text-white">{t.contact.cards.visit.title}</h3>
                                <p className="font-body text-sm mb-6 flex-grow leading-relaxed text-slate-600 dark:text-slate-300">
                                    {t.contact.cards.visit.text}
                                </p>
                                <a href="#ubicacion" className="inline-flex items-center gap-2 font-title text-sm tracking-widest uppercase transition-colors text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300">
                                    {t.contact.cards.visit.link} <i className="ri-arrow-down-line group-hover:translate-y-1 transition-transform"></i>
                                </a>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* =========================================
            MAPA INTERACTIVO
        ========================================= */}
                <section id="ubicacion" className="py-24 px-6 md:px-20 scroll-mt-24 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-title text-3xl md:text-5xl drop-shadow-md text-navy dark:text-white">{t.contact.map.title}</h2>
                            <p className="font-body mt-3 font-bold tracking-wider uppercase text-sm text-cyan-600 dark:text-cyan-400">{t.contact.map.text}</p>
                        </div>

                        <div className={mapContainerClass}>
                            <div className="absolute inset-0 pointer-events-none transition-colors duration-700 z-10
                bg-transparent
                dark:bg-cyan-900/10 dark:mix-blend-overlay dark:group-hover:bg-transparent"
                            />

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.0461877665766!2d-111.34327712437648!3d26.014529077189196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b031d2b775dc29%3A0xc6c429ff100d8697!2sDolphin%20Dive%20Baja!5e0!3m2!1ses-419!2smx!4v1709240837580!5m2!1ses-419!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Dolphin Dive Baja"
                                className="w-full h-full transition-all duration-[1.5s]
                  grayscale-0 invert-0 contrast-100
                  dark:grayscale-[80%] dark:invert-[90%] dark:hue-rotate-180deg dark:contrast-[85%] dark:group-hover:grayscale-[20%] dark:group-hover:invert-0 dark:group-hover:filter-none"
                            ></iframe>

                            {/* Info Flotante */}
                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 p-6 rounded-3xl shadow-2xl max-w-[280px] hidden md:block z-20 backdrop-blur-xl border
                bg-white/95 border-slate-200
                dark:bg-dark/80 dark:border-white/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <i className="ri-anchor-fill text-xl text-yellow-500 dark:text-yellow-400"></i>
                                    <p className="font-bold font-title text-lg text-navy dark:text-yellow-400">Dolphin Dive Baja</p>
                                </div>
                                <p className="text-sm font-body mt-2 leading-relaxed text-slate-600 dark:text-slate-200">
                                    Calle Madero y Benito Juárez, Centro, 23880 Loreto, B.C.S.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <VisitorGuide />
                {/* =========================================
            FAQ
        ========================================= */}
                <section id="faq" className="py-20 px-6 md:px-20 scroll-mt-24 relative z-10 border-t border-slate-200 dark:border-white/10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="font-bold text-xs md:text-sm uppercase tracking-[0.3em] drop-shadow-md text-cyan-600 dark:text-cyan-400">{t.contact.faq.subtitle}</span>
                            <h2 className="font-title text-3xl md:text-5xl mt-4 drop-shadow-sm text-navy dark:text-white">{t.contact.faq.title}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {t.contact.faq.list.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className={faqCardClass}
                                    style={{ willChange: 'transform' }}
                                >
                                    <h4 className="font-title text-lg md:text-xl mb-4 flex items-start gap-3 leading-snug
                    text-navy
                    dark:text-yellow-400">
                                        <i className="ri-questionnaire-line mt-1 opacity-80 text-2xl text-cyan-600 dark:text-cyan-400"></i>
                                        {faq.q}
                                    </h4>
                                    <p className="font-body text-sm md:text-base leading-relaxed pl-9
                    text-slate-600
                    dark:text-slate-200">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <p className="font-body font-medium mb-6 text-slate-600 dark:text-slate-200">{t.contact.faq.more}</p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-white font-title text-sm tracking-widest uppercase px-8 py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 shadow-md
                bg-cyan-600 hover:bg-cyan-500 hover:shadow-cyan-200/50
                dark:bg-cyan-500 dark:text-dark dark:hover:bg-cyan-400 dark:shadow-none"
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