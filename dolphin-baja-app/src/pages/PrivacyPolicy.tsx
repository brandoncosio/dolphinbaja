import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
    const { t, lang } = useLanguage();
    const content = t.privacyPage;

    // Estado para mostrar confirmación visual al borrar cookies
    const [cookieMsg, setCookieMsg] = useState(false);

    const handleDeleteCookies = () => {
        localStorage.removeItem('dolphin_cookie_consent');
        setCookieMsg(true);
        setTimeout(() => {
            setCookieMsg(false);
            window.location.reload();
        }, 2000);
    };

    // ========================================================================
    // 🎨 ESTILOS SEPARADOS (Clean Code & Legibility Focus)
    // ========================================================================

    // 1. Contenedor Principal
    const pageContainerClass = `
    relative w-full pt-32 pb-24 px-6 md:px-12 overflow-hidden min-h-screen transition-colors duration-500 selection:bg-cyan-400 selection:text-dark
    bg-slate-50 text-slate-600
    dark:bg-dark dark:text-slate-200
  `;

    // 2. Luces de Fondo (Atmósfera)
    const blobTopClass = `
    absolute top-[5%] -left-[10%] w-[60%] h-[50%] rounded-full blur-[150px] pointer-events-none transition-colors duration-500
    bg-cyan-400/5
    dark:bg-cyan-400/10
  `;

    const blobBottomClass = `
    absolute bottom-[20%] -right-[10%] w-[50%] h-[60%] rounded-full blur-[150px] pointer-events-none transition-colors duration-500
    bg-blue-400/5
    dark:bg-ocean/20
  `;

    // 3. Encabezado
    const tagClass = `
    text-xs md:text-sm font-bold uppercase tracking-[0.4em] block mb-4 drop-shadow-md transition-colors
    text-cyan-600 dark:text-cyan-400
  `;

    const titleClass = `
    font-title text-4xl md:text-5xl lg:text-6xl mb-6 transition-colors duration-500
    text-navy drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]
    dark:text-white dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]
  `;

    const introClass = `
    font-body font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-sm transition-colors
    text-slate-600 dark:text-slate-200
  `;

    // 4. Tarjeta Resumen (Bento Box)
    const summaryCardClass = `
    mb-16 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border backdrop-blur-2xl transition-all duration-500 group relative overflow-hidden
    /* LIGHT */
    bg-white border-slate-200 shadow-xl shadow-slate-200/50
    /* DARK (Matte) */
    dark:bg-white/5 dark:border-white/10 dark:shadow-none dark:hover:border-cyan-400/30
  `;

    // 5. Títulos de Secciones
    const sectionTitleClass = `
    font-title text-2xl md:text-3xl mb-6 flex items-center gap-4 transition-colors
    text-navy dark:text-white
  `;

    const sectionDividerClass = `
    h-px flex-grow transition-colors
    bg-gradient-to-r from-slate-300 to-transparent
    dark:from-white/20 dark:to-transparent
  `;

    // 6. Panel de Gestión de Cookies
    const cookiePanelClass = `
    mt-8 p-6 md:p-8 rounded-2xl md:rounded-3xl border backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner relative transition-colors
    /* LIGHT: Un toque rojo muy suave para indicar zona de "peligro/borrado" */
    bg-red-50/50 border-red-100
    /* DARK */
    dark:bg-dark/60 dark:border-white/10
  `;

    return (
        <section className={pageContainerClass}>

            {/* =========================================
          LUCES DE PROFUNDIDAD
      ========================================= */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" style={{ willChange: 'transform' }}>
                <div className={blobTopClass} />
                <div className={blobBottomClass} />
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
                    <span className={tagClass}>
                        {content.tag}
                    </span>
                    <h1 className={titleClass}>
                        {content.title}
                    </h1>
                    <p className={introClass}>
                        {content.introShort}
                    </p>
                </motion.div>

                {/* =========================================
            RESUMEN RÁPIDO (Bento Box)
        ========================================= */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={summaryCardClass}
                    style={{ willChange: 'transform' }}
                >
                    {/* Brillo interno (Solo Dark) */}
                    <div className="absolute inset-0 pointer-events-none rounded-[3rem] transition-opacity duration-500 opacity-0 group-hover:opacity-100
            bg-transparent dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] dark:from-cyan-400/10 dark:via-transparent dark:to-transparent"
                    />

                    <h3 className="text-xl md:text-2xl font-title mb-6 flex items-center gap-3 drop-shadow-md relative z-10 transition-colors text-yellow-600 dark:text-yellow-400">
                        <i className="ri-shield-check-fill text-3xl"></i>
                        {content.summary.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                        {content.summary.list.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 font-body font-medium text-slate-600 dark:text-slate-200">
                                <span className="mt-2 h-2 w-2 rounded-full shrink-0 shadow-sm bg-cyan-500 dark:bg-cyan-400 shadow-cyan-200 dark:shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                                <span className="text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* =========================================
            CONTENIDO LEGAL
        ========================================= */}
                <div className="space-y-16">
                    {content.sections.map((section, idx) => {
                        const isCookieSection = section.title.toLowerCase().includes('cookie');

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h2 className={sectionTitleClass}>
                                    {section.title}
                                    <div className={sectionDividerClass}></div>
                                </h2>

                                <div className="leading-relaxed space-y-5 text-left text-base font-body font-medium text-slate-600 dark:text-slate-300">
                                    {section.content.split('\n').map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>

                                {/* 👇 PANEL DINÁMICO DE GESTIÓN DE COOKIES */}
                                {isCookieSection && (
                                    <div className={cookiePanelClass}>
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-full shrink-0 border bg-red-50 border-red-100 text-red-500 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400">
                                                <i className="ri-delete-bin-6-line text-xl"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-title text-lg mb-1 text-navy dark:text-white">
                                                    {lang === 'es' ? 'Gestionar Consentimiento' : 'Manage Consent'}
                                                </h4>
                                                <p className="text-sm font-body text-slate-500 dark:text-slate-400">
                                                    {lang === 'es'
                                                        ? 'Puedes eliminar tu registro de cookies en este navegador. El banner te volverá a preguntar en tu próxima visita.'
                                                        : 'You can delete your cookie record on this browser. The banner will ask you again on your next visit.'}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative shrink-0 w-full md:w-auto">
                                            <button
                                                onClick={handleDeleteCookies}
                                                className="w-full md:w-auto px-6 py-3 rounded-xl font-title text-xs tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-md flex items-center justify-center gap-2 group border
                        bg-white border-red-200 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500
                        dark:bg-red-500/20 dark:border-red-500/30 dark:text-red-300 dark:hover:bg-red-500 dark:hover:text-white"
                                            >
                                                <i className="ri-eraser-line text-lg group-hover:animate-pulse"></i>
                                                {lang === 'es' ? 'Borrar Cookies' : 'Clear Cookies'}
                                            </button>

                                            {/* Mensaje de confirmación flotante */}
                                            {cookieMsg && (
                                                <motion.span
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="absolute -top-14 left-1/2 -translate-x-1/2 text-xs font-bold font-body tracking-wider px-4 py-2 rounded-lg border whitespace-nowrap shadow-lg backdrop-blur-md z-20
                          bg-green-50 border-green-200 text-green-600
                          dark:bg-green-400/10 dark:border-green-400/30 dark:text-green-400"
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
                <div className="mt-24 pt-10 border-t text-center text-sm font-body border-slate-200 text-slate-400 dark:border-white/10 dark:text-slate-500">
                    <p>{content.footer}</p>
                </div>

            </div>
        </section>
    );
}