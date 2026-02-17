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
                    // Animación suave de entrada/salida
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    // CAMBIO: Posicionamiento en la esquina inferior izquierda (flotante)
                    className="fixed bottom-4 left-4 right-4 md:left-6 md:bottom-6 md:right-auto md:max-w-sm z-[100]"
                    style={{ willChange: "transform, opacity" }}
                >
                    {/* Tarjeta Glassmorphism Premium */}
                    <div className="bg-navy/80 backdrop-blur-2xl border border-white/20 p-5 md:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                        <div className="flex items-start gap-4 mb-4">
                            {/* Icono sutil */}
                            <div className="mt-1 p-2 bg-white/5 border border-white/10 rounded-full shrink-0">
                                <i className="ri-cookie-2-line text-lg text-yellow-400"></i>
                            </div>

                            {/* Texto */}
                            <div>
                                <h4 className="font-title text-white text-sm md:text-base mb-1">{content.title}</h4>
                                <p className="text-slate-300 text-xs md:text-sm font-body leading-relaxed">
                                    {content.text}{" "}
                                    <Link
                                        to="/privacidad"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap underline underline-offset-2"
                                    >
                                        {content.link}
                                    </Link>
                                </p>
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="flex gap-3 justify-end mt-2">
                            <button
                                onClick={handleDecline}
                                className="px-4 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all font-body tracking-wide"
                            >
                                {content.decline}
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2 rounded-lg bg-cyan-400 text-dark text-xs font-bold tracking-widest uppercase hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all font-title"
                            >
                                {content.accept}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}