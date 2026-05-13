import { motion, AnimatePresence } from 'framer-motion';
import { ModalData } from './servicesData';
import { useLanguage } from '../../context/LanguageContext';
import { sileo } from 'sileo';

interface ServiceModalProps {
    modalData: ModalData;
    setModalData: (data: ModalData | null) => void;
    currentImageIdx: number;
    setCurrentImageIdx: (value: React.SetStateAction<number>) => void;
    scrollToSection: (id: string) => void;
}

export default function ServiceModal({ modalData, setModalData, currentImageIdx, setCurrentImageIdx, scrollToSection }: ServiceModalProps) {
    const { lang } = useLanguage();

    // ========================================================================
    // 🌍 MENSAJES DINÁMICOS PARA WHATSAPP Y EMAIL
    // ========================================================================
    const emailSubject = lang === 'es'
        ? `Reserva: ${modalData.title}`
        : `Booking: ${modalData.title}`;

    const waMessage = lang === 'es'
        ? `Hola, me interesa reservar la actividad: ${modalData.title}`
        : `Hello, I'm interested in booking the activity: ${modalData.title}`;

    // 👇 SMART EMAIL BUTTON PARA EL MODAL
    const handleSmartEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        const email = 'ventas@dolphindivebaja.com';

        navigator.clipboard.writeText(email).catch(() => { });

        sileo.success({
            title: lang === 'es' ? '¡Correo copiado al portapapeles!' : 'Email copied to clipboard!',
            description: lang === 'es' ? 'Abriendo tu app de correo...' : 'Opening your mail app...',
        });

        setTimeout(() => {
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(waMessage)}`;
        }, 800);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-navy/90 dark:bg-black/90 backdrop-blur-md"
                onClick={() => setModalData(null)}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl bg-white dark:bg-dark rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10 border border-slate-200 dark:border-white/10"
            >
                <button
                    onClick={() => setModalData(null)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-colors z-50 border border-white/20 shadow-lg"
                >
                    <i className="ri-close-line text-2xl"></i>
                </button>

                <div className="w-full md:w-1/2 h-[35vh] md:h-auto relative bg-slate-900 group">
                    <AnimatePresence mode="wait">
                        {(modalData.images[currentImageIdx].endsWith('.webm') || modalData.images[currentImageIdx].endsWith('.mp4')) ? (
                            <motion.video
                                key={currentImageIdx}
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                src={modalData.images[currentImageIdx]}
                                autoPlay muted loop playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        ) : (
                            <motion.img
                                key={currentImageIdx}
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                src={modalData.images[currentImageIdx]}
                                alt={modalData.title}
                                className="absolute inset-0 w-full h-full object-cover filter contrast-[1.15] saturate-[1.10]"
                            />
                        )}
                    </AnimatePresence>

                    {modalData.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <button onClick={(e) => { e.stopPropagation(); setCurrentImageIdx((prev) => (prev === 0 ? modalData.images.length - 1 : prev - 1)); }} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center pointer-events-auto border border-white/20 hover:bg-cyan-500 shadow-lg transition-transform hover:scale-110"><i className="ri-arrow-left-s-line text-xl"></i></button>
                            <button onClick={(e) => { e.stopPropagation(); setCurrentImageIdx((prev) => (prev === modalData.images.length - 1 ? 0 : prev + 1)); }} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center pointer-events-auto border border-white/20 hover:bg-cyan-500 shadow-lg transition-transform hover:scale-110"><i className="ri-arrow-right-s-line text-xl"></i></button>
                        </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col overflow-y-auto bg-slate-50 dark:bg-dark no-scrollbar h-[55vh] md:h-auto relative">
                    <div className="mb-8">
                        {modalData.duration && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-widest bg-cyan-100 text-cyan-700 border border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400 dark:border-cyan-400/20 mb-4 shadow-sm">
                                <i className="ri-time-line"></i> {modalData.duration}
                            </span>
                        )}
                        <h2 className="font-title text-4xl md:text-5xl text-navy dark:text-white leading-tight mb-5">{modalData.title}</h2>

                        <div className="font-body text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed whitespace-pre-line">
                            {modalData.desc}
                        </div>

                        {modalData.extraContent && (
                            <div className="mt-6">{modalData.extraContent}</div>
                        )}
                    </div>

                    <div className="mb-10">
                        {modalData.includes && modalData.includes.length > 0 && (
                            <>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-white/10 pb-3 mb-5">
                                    {lang === 'es' ? 'LO QUE DEBES SABER' : 'WHAT YOU NEED TO KNOW'}
                                </h4>
                                <ul className="space-y-4">
                                    {modalData.includes.map((inc, i) => {
                                        const isExcluded = inc.includes('🐙');
                                        const displayText = inc.replace('🐙', '').trim();

                                        return (
                                            <li key={i} className="flex items-start gap-3 font-body text-base md:text-lg font-medium text-slate-700 dark:text-slate-200">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isExcluded ? 'bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50' : 'bg-cyan-100 dark:bg-cyan-900/50'}`}>
                                                    {isExcluded ? (
                                                        <span className="text-[11px] leading-none">🐙</span>
                                                    ) : (
                                                        <i className="ri-check-line text-cyan-600 dark:text-cyan-400 text-sm"></i>
                                                    )}
                                                </div>
                                                <span className="leading-snug">
                                                    {displayText}
                                                    {(displayText.includes('Ejercicios') || displayText.includes('exercises')) && modalData.title.includes('Surface') && (
                                                        <button
                                                            onClick={() => {
                                                                setModalData(null);
                                                                setTimeout(() => scrollToSection('open-water-diver'), 350);
                                                            }}
                                                            className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[10px] font-bold uppercase tracking-tighter hover:bg-cyan-200 transition-colors pointer-events-auto"
                                                        >
                                                            {lang === 'es' ? 'Ver Curso' : 'See Course'} <i className="ri-arrow-right-up-line"></i>
                                                        </button>
                                                    )}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </>
                        )}

                        {modalData.footerContent && (
                            <div className="mt-4">{modalData.footerContent}</div>
                        )}
                    </div>

                    {!modalData.hideBookNow && (
                        <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4 border-t border-slate-200 dark:border-white/10">
                            {/* 👇 BOTÓN INTELIGENTE DE CORREO REEMPLAZADO */}
                            <button
                                onClick={handleSmartEmail}
                                className="w-full sm:w-1/2 py-4 rounded-xl font-title text-sm md:text-base tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg bg-cyan-600 text-white hover:bg-cyan-500 hover:shadow-cyan-500/25"
                            >
                                Email <i className="ri-mail-send-line text-xl"></i>
                            </button>
                            <a
                                href={`https://wa.me/526131182311?text=${encodeURIComponent(waMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-1/2 py-4 rounded-xl font-title text-sm md:text-base tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg bg-green-500 text-white hover:bg-green-400 hover:shadow-green-500/25"
                            >
                                WhatsApp <i className="ri-whatsapp-line text-xl"></i>
                            </a>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}