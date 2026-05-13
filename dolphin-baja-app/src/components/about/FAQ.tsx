import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext'; // Ajusta esta ruta si es necesario
import { sileo } from 'sileo';

export default function FAQ() {
    const { t, lang } = useLanguage();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    // ========================================================================
    // 🌍 LÓGICA DE CONTACTO INTELIGENTE (WhatsApp)
    // ========================================================================
    const defaultMessage = lang === 'es'
        ? 'Hola Equipo Dolphin, tengo algunas dudas y me gustaría recibir más información por favor.'
        : 'Hello Dolphin Team, I have some questions and would like to get more information please.';

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

    return (
        <section id="faq" className="whitespace-pre-line py-16 md:py-24 px-6 md:px-12 scroll-mt-20 relative z-10 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-dark transition-colors duration-500">
            <div className="max-w-4xl mx-auto">

                {/* Encabezado del FAQ */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full border text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-4 bg-white border-slate-200 text-cyan-600 dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 shadow-sm"
                    >
                        {t.contact.faq.subtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="font-title text-4xl md:text-5xl text-navy dark:text-white"
                    >
                        {t.contact.faq.title}
                    </motion.h2>
                </div>

                {/* Lista de Preguntas */}
                <div className="flex flex-col gap-4">
                    {t.contact.faq.list.map((faq: any, idx: number) => {
                        const isOpen = openFaq === idx;
                        return (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm
                                ${isOpen ? 'bg-white shadow-lg border-cyan-400 dark:bg-white/10 dark:border-cyan-500' : 'bg-white/70 border-slate-200 hover:border-cyan-300 dark:bg-white/5 dark:border-white/10 hover:dark:border-white/30'}`}
                            >
                                {/* Pregunta (Botón) */}
                                <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left cursor-pointer outline-none">
                                    <h4 className={`font-title text-lg md:text-xl transition-colors pr-4 ${isOpen ? 'text-cyan-700 dark:text-cyan-400' : 'text-navy dark:text-white'}`}>
                                        {faq.q}
                                    </h4>
                                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-cyan-500 text-white rotate-180' : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'}`}>
                                        <i className={`text-xl transition-transform ${isOpen ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
                                    </div>
                                </button>

                                {/* Respuesta (Animada) */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-6 md:px-8 pb-6 md:pb-8">
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

                {/* Footer del FAQ (Contacto Rápido) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="mt-16 pt-10 text-center border-t border-slate-200 dark:border-white/10"
                >
                    <p className="font-body text-sm font-medium mb-6 text-slate-500 dark:text-slate-400">{t.contact.faq.more}</p>

                    <button onClick={handleWhatsApp} className="inline-flex items-center gap-3 text-navy font-title text-sm tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-md bg-yellow-400 hover:bg-yellow-300 dark:bg-yellow-400 dark:text-dark dark:hover:bg-yellow-300">
                        {t.contact.faq.link} <i className="ri-whatsapp-line text-2xl"></i>
                    </button>
                </motion.div>

            </div>
        </section>
    );
}