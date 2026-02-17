import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();
    
    const content = t.cookies || {
        title: "Uso de Cookies",
        text: "Utilizamos cookies para mejorar tu experiencia. Al navegar, aceptas su uso.",
        accept: "Aceptar",
        decline: "Rechazar",
        link: "Leer más"
    };

    useEffect(() => {
        const consent = localStorage.getItem('dolphin_cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('dolphin_cookie_consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('dolphin_cookie_consent', 'false');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    // Animación: Desliza desde abajo hacia arriba (como un panel del sistema)
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    // CAMBIOS: Pegado al fondo (bottom-0), ancho completo (w-full), borde superior sutil
                    className="fixed bottom-0 left-0 w-full z-[100]"
                >
                    <div className="bg-navy/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                        
                        {/* Contenedor interno para alinear el contenido al centro, igual que el Navbar */}
                        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                            
                            {/* TEXTO + ICONO */}
                            <div className="flex items-center gap-4 text-center md:text-left">
                                <div className="hidden md:flex p-2 bg-white/5 rounded-full shrink-0">
                                    <i className="ri-cookie-2-line text-xl text-yellow-400"></i>
                                </div>
                                <p className="text-slate-300 text-xs md:text-sm leading-snug font-body max-w-2xl">
                                    <span className="font-bold text-white block md:inline md:mr-2">{content.title}:</span>
                                    {content.text}{" "}
                                    <Link 
                                        to="/privacidad" 
                                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors whitespace-nowrap"
                                    >
                                        {content.link}
                                    </Link>.
                                </p>
                            </div>

                            {/* BOTONES (Compactos) */}
                            <div className="flex gap-3 shrink-0 w-full md:w-auto justify-center">
                                <button
                                    onClick={handleDecline}
                                    className="px-4 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    {content.decline}
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-6 py-2 rounded-lg bg-cyan-400 text-dark text-xs md:text-sm font-bold tracking-wide hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    {content.accept}
                                </button>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}