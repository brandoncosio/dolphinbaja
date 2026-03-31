import { motion } from 'framer-motion';
import { serviceAssets } from './servicesData';
import { useLanguage } from '../../context/LanguageContext';

export default function PartnersBanner() {
    const { lang } = useLanguage();

    // ========================================================================
    // 📚 TEXTOS LOCALES 
    // ========================================================================
    const pageData = {
        es: {
            tag: "Respaldados por los mejores",
            title: "Partners Oficiales"
        },
        en: {
            tag: "Backed by the best",
            title: "Official Partners"
        }
    };

    const text = pageData[lang === 'en' ? 'en' : 'es'];

    return (
        <section className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="rounded-[2.5rem] bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
            >
                {/* =========================================
                    TEXTO (Izquierda)
                    ========================================= */}
                <div className="text-center lg:text-left shrink-0">
                    <p className="font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 mb-3">
                        {text.tag}
                    </p>
                    <h3 className="font-title text-3xl md:text-4xl text-navy dark:text-white leading-tight">
                        {text.title}
                    </h3>
                </div>

                {/* Separador Desktop */}
                <div className="hidden lg:block w-[2px] h-24 bg-gradient-to-b from-transparent via-slate-200 dark:via-white/10 to-transparent shrink-0"></div>
                {/* Separador Móvil */}
                <div className="lg:hidden w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent shrink-0"></div>

                {/* =========================================
                    LOGOS (Derecha)
                    ========================================= */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-12 w-full lg:w-auto">

                    {/* 1. Whales of Loreto */}
                    <div className="flex items-center justify-center h-20 sm:h-24 w-40 sm:w-48 group p-2">
                        <img
                            src="/assets/images/WhalesOfLoreto.png"
                            alt="Whales of Loreto"
                            className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 filter dark:brightness-110"
                        />
                    </div>

                    <div className="hidden sm:block w-[1px] h-12 bg-slate-200 dark:bg-white/10 shrink-0"></div>
                    <div className="sm:hidden w-20 h-[1px] bg-slate-200 dark:bg-white/10 shrink-0"></div>

                    {/* 2. PADI */}
                    <div className="flex items-center justify-center h-16 sm:h-20 w-32 sm:w-40 group p-2">
                        <img
                            src={serviceAssets.padiLogo}
                            alt="PADI 5 Star Dive Center"
                            className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 filter dark:brightness-110"
                        />
                    </div>

                    <div className="hidden sm:block w-[1px] h-12 bg-slate-200 dark:bg-white/10 shrink-0"></div>
                    <div className="sm:hidden w-20 h-[1px] bg-slate-200 dark:bg-white/10 shrink-0"></div>

                    {/* 3. Cressi - Ajustado para que no se desborde */}
                    <div className="flex items-center justify-center h-16 sm:h-20 w-32 sm:w-40 group p-2">
                        <img
                            src={serviceAssets.cressiLogo}
                            alt="Cressi Dive Center"
                            className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 filter dark:brightness-110"
                        />
                    </div>

                </div>
            </motion.div>
        </section>
    );
}