import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";

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

    // ========================================================================
    // 🎨 ESTILOS SEPARADOS (Clean & Matte Fix)
    // ========================================================================

    // 1. Tarjeta Principal
    const cardClass = `
    backdrop-blur-2xl border p-5 md:p-6 rounded-2xl transition-colors duration-500
    /* LIGHT MODE: Blanco sólido, flotante con sombra gris suave */
    bg-white border-slate-200 shadow-2xl shadow-slate-300/50
    /* DARK MODE: Navy profundo, Mate (Sombra negra suave, sin colores extraños) */
    dark:bg-navy/90 dark:border-white/10 dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
  `;

    // 2. Icono de Cookie
    const iconContainerClass = `
    mt-1 p-2 rounded-full shrink-0 border transition-colors
    /* LIGHT */
    bg-yellow-50 border-yellow-100
    /* DARK */
    dark:bg-white/5 dark:border-white/10
  `;

    // 3. Textos
    const titleClass = `
    font-title text-sm md:text-base mb-1 transition-colors
    text-navy dark:text-white
  `;

    const textClass = `
    text-xs md:text-sm font-body leading-relaxed transition-colors
    text-slate-600 dark:text-slate-300
  `;

    const linkClass = `
    font-medium transition-colors whitespace-nowrap underline underline-offset-2 ml-1
    text-cyan-600 hover:text-cyan-500
    dark:text-cyan-400 dark:hover:text-cyan-300
  `;

    // 4. Botones
    const declineBtnClass = `
    px-4 py-2 rounded-lg text-xs font-bold transition-all font-body tracking-wide border border-transparent
    text-slate-500 hover:bg-slate-100 hover:text-slate-700
    dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10
  `;

    // 👇 CORRECCIÓN: Botón "Aceptar" en Dark Mode ahora es plano (shadow-none)
    const acceptBtnClass = `
    px-6 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all font-title shadow-md hover:-translate-y-0.5
    /* LIGHT: Cyan vibrante con sombra de color */
    bg-cyan-500 text-white hover:bg-cyan-600 hover:shadow-cyan-200/50
    /* DARK: Cyan sólido mate, SIN SOMBRA NEÓN */
    dark:bg-cyan-400 dark:text-dark dark:hover:bg-cyan-300 dark:shadow-none
  `;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    // Posicionamiento flotante
                    className="fixed bottom-4 left-4 right-4 md:left-6 md:bottom-6 md:right-auto md:max-w-sm z-[100]"
                    style={{ willChange: "transform, opacity" }}
                >
                    {/* Tarjeta */}
                    <div className={cardClass}>

                        <div className="flex items-start gap-4 mb-4">
                            {/* Icono */}
                            <div className={iconContainerClass}>
                                <i className="ri-cookie-2-line text-lg text-yellow-500 dark:text-yellow-400"></i>
                            </div>

                            {/* Contenido */}
                            <div>
                                <h4 className={titleClass}>{content.title}</h4>
                                <p className={textClass}>
                                    {content.text}
                                    <Link to="/privacidad" className={linkClass}>
                                        {content.link}
                                    </Link>
                                </p>
                            </div>
                        </div>

                        {/* Acciones */}
                        <div className="flex gap-3 justify-end mt-2">
                            <button onClick={handleDecline} className={declineBtnClass}>
                                {content.decline}
                            </button>
                            <button onClick={handleAccept} className={acceptBtnClass}>
                                {content.accept}
                            </button>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}