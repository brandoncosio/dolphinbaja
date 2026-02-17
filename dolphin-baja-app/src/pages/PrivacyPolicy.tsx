import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
    const { t, lang } = useLanguage();
    const content = t.privacyPage;

    // Estado para mostrar confirmación visual al borrar cookies
    const [cookieMsg, setCookieMsg] = useState(false);

    const handleDeleteCookies = () => {
        // Borramos el registro del LocalStorage
        localStorage.removeItem('dolphin_cookie_consent');

        // Mostramos el mensaje de éxito por 3 segundos
        setCookieMsg(true);
        setTimeout(() => {
            setCookieMsg(false);
            // Recargamos la página suavemente para que el banner vuelva a aparecer
            window.location.reload();
        }, 2000);
    };

    return (
        // 👇 Añadido bg-dark para homologar el fondo oceánico
        <section className="relative w-full pt-32 pb-24 px-6 md:px-12 overflow-hidden min-h-screen bg-dark selection:bg-cyan-400 selection:text-dark">

            {/* =========================================
                LUCES DE PROFUNDIDAD (Aguas Someras)
            ========================================= */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" style={{ willChange: 'transform' }}>
                <div className="absolute top-[5%] -left-[10%] w-[60%] h-[50%] bg-cyan-400/15 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] -right-[10%] w-[50%] h-[60%] bg-ocean/20 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">

                {/* =========================================
                    ENCABEZADO
                ========================================= */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 drop-shadow-md">
                        {content.tag}
                    </span>
                    <h1 className="font-title text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                        {content.title}
                    </h1>
                    <p className="text-slate-200 font-body font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                        {content.introShort}
                    </p>
                </motion.div>

                {/* =========================================
                    RESUMEN RÁPIDO (Bento Glass Premium)
                ========================================= */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:border-cyan-400/30 transition-colors duration-500 group"
                    style={{ willChange: 'transform' }}
                >
                    {/* Brillo interno */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[3rem]" />

                    <h3 className="text-xl md:text-2xl font-title text-yellow-400 mb-6 flex items-center gap-3 drop-shadow-md relative z-10">
                        <i className="ri-shield-check-fill text-3xl"></i>
                        {content.summary.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                        {content.summary.list.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-200 font-body font-medium">
                                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                                <span className="text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* =========================================
                    CONTENIDO LEGAL (Con Lógica de Cookies)
                ========================================= */}
                <div className="space-y-16">
                    {content.sections.map((section, idx) => {
                        // Detectamos automáticamente si esta sección habla de Cookies (español o inglés)
                        const isCookieSection = section.title.toLowerCase().includes('cookie');

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h2 className="font-title text-2xl md:text-3xl text-white mb-6 flex items-center gap-4">
                                    {section.title}
                                    <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
                                </h2>

                                <div className="text-slate-300 leading-relaxed space-y-5 text-left text-base font-body font-medium">
                                    {section.content.split('\n').map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>

                                {/* 👇 PANEL DINÁMICO DE GESTIÓN DE COOKIES */}
                                {isCookieSection && (
                                    <div className="mt-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-dark/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner relative">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 shrink-0">
                                                <i className="ri-delete-bin-6-line text-xl"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-title text-white text-lg mb-1">
                                                    {lang === 'es' ? 'Gestionar Consentimiento' : 'Manage Consent'}
                                                </h4>
                                                <p className="text-sm text-slate-400 font-body">
                                                    {lang === 'es'
                                                        ? 'Puedes eliminar tu registro de cookies en este navegador. El banner te volverá a preguntar en tu próxima visita.'
                                                        : 'You can delete your cookie record on this browser. The banner will ask you again on your next visit.'}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative shrink-0 w-full md:w-auto">
                                            <button
                                                onClick={handleDeleteCookies}
                                                className="w-full md:w-auto px-6 py-3 bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white border border-red-500/30 hover:border-red-500 rounded-xl font-title text-xs tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-md flex items-center justify-center gap-2 group"
                                            >
                                                <i className="ri-eraser-line text-lg group-hover:animate-pulse"></i>
                                                {lang === 'es' ? 'Borrar Cookies' : 'Clear Cookies'}
                                            </button>

                                            {/* Mensaje de confirmación flotante */}
                                            {cookieMsg && (
                                                <motion.span
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-bold font-body tracking-wider text-green-400 bg-green-400/10 px-4 py-2 rounded-lg border border-green-400/30 whitespace-nowrap shadow-lg backdrop-blur-md"
                                                >
                                                    <i className="ri-check-line mr-1"></i>
                                                    {lang === 'es' ? '¡Cookies eliminadas!' : 'Cookies cleared!'}
                                                </motion.span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* =========================================
                    CIERRE
                ========================================= */}
                <div className="mt-24 pt-10 border-t border-white/10 text-center text-slate-400 text-sm font-body">
                    <p>{content.footer}</p>
                </div>

            </div>
        </section>
    );
}