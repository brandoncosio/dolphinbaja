import { motion } from 'framer-motion';
import { serviceAssets } from './servicesData';
import logo from '/assets/images/logodolphin.webp';
import { useLanguage } from '../../context/LanguageContext';

interface ServicesHeroProps {
    heroData?: any; // Lo dejamos opcional para que no marque error en Servicios.tsx
    categoriesList: any[];
    scrollToSection: (id: string) => void;
}

export default function ServicesHero({ categoriesList, scrollToSection }: ServicesHeroProps) {
    const { lang } = useLanguage();

    // ========================================================================
    // 📚 TEXTOS LOCALES (Control total directo en el componente)
    // ========================================================================
    const pageData = {
        es: {
            tag: "Catálogo de Servicios",
            title: "Sumérgete en el",
            highlight: "Acuario del Mundo",
            withText: "con",
            desc: "Explora el Parque Nacional Bahía de Loreto.\nComo el único Centro de Buceo exclusivo PADI 5 Estrellas y Cressi Dive Center en la región, tu seguridad y disfrute son nuestra máxima prioridad."
        },
        en: {
            tag: "Services Catalog",
            title: "Dive into the",
            highlight: "Aquarium of the World",
            withText: "with",
            desc: "Explore the Loreto Bay National Park.\nAs the only exclusive PADI 5-Star Dive Center & Cressi Dive Center in the region, your safety and enjoyment are our top priorities."
        }
    };

    const content = pageData[lang === 'en' ? 'en' : 'es'];

    return (
        <section className="relative w-full min-h-[100dvh] md:min-h-[85vh] overflow-hidden flex flex-col justify-center items-center pt-36 pb-20 md:pt-40 md:pb-24">

            <div className="absolute inset-0 z-0">
                <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 15, ease: "linear" }} className="w-full h-full" style={{ willChange: "transform" }}>
                    <img src={serviceAssets.heroBg} alt="Fondo Servicios" fetchPriority="high" loading="eager" decoding="async" className="w-full h-full object-cover object-[center_30%] md:object-center filter contrast-[1.15] saturate-[1.10]" />
                </motion.div>
                <div className="absolute inset-0 transition-colors duration-500 bg-navy/50 dark:bg-black/60" />
                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t transition-colors duration-500 z-10 from-slate-50 via-slate-50/50 to-transparent dark:from-dark dark:via-dark/80 dark:to-transparent" />
            </div>

            <div className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center justify-center mt-4">

                {/* Resplandor de fondo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-80 w-[90%] md:w-[700px] rounded-full blur-[100px] pointer-events-none transition-colors duration-500 bg-cyan-500/30 dark:bg-cyan-500/20" />

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
                    <span className="inline-block font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 px-4 py-1.5 md:px-6 md:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-500 shadow-lg pointer-events-auto bg-white/90 border-white/60 text-cyan-700 dark:bg-black/60 dark:border-white/10 dark:text-cyan-400">
                        {content.tag}
                    </span>
                </motion.div>

                {/* TÍTULO LIMPIO CON EL "WITH" SEPARADO */}
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }} className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight pointer-events-auto transition-colors text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                    {content.title} <br className="hidden md:block" />
                    <span className="text-yellow-400 drop-shadow-md">{content.highlight}</span>
                    <span
                        className="block text-2xl md:text-3xl mt-2 md:mt-4 text-slate-200 font-medium tracking-widest lowercase"
                        style={{ fontVariant: "small-caps" }}
                    >
                        {content.withText}
                    </span>
                </motion.h1>

                {/* LOGO DENTRO DE CÁPSULA DE CRISTAL PARA QUE DESTAQUE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center mb-8 md:mb-10 pointer-events-auto"
                >
                    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md px-8 py-4 md:px-12 md:py-5 rounded-[2rem] border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                        <img
                            src={logo}
                            alt="Dolphin Dive Baja"
                            className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_4px_15px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
                        />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} className="whitespace-pre-line font-body text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed pointer-events-auto transition-colors text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {content.desc}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4 pointer-events-auto">
                    {categoriesList.map((cat) => (
                        <button key={cat.id} onClick={() => scrollToSection(cat.id)} className="flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 rounded-xl font-title text-[11px] md:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border bg-white/90 text-navy border-white/50 hover:bg-cyan-50 hover:text-cyan-700 dark:bg-black/40 dark:text-slate-200 dark:border-white/20 dark:hover:text-cyan-400 dark:backdrop-blur-md">
                            <i className={`${cat.icon} text-base md:text-lg`}></i> {cat.label}
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}