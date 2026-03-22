import { motion } from 'framer-motion';
import { serviceAssets } from './servicesData';

interface ServicesHeroProps {
    heroData: any;
    categoriesList: any[];
    scrollToSection: (id: string) => void;
}

export default function ServicesHero({ heroData, categoriesList, scrollToSection }: ServicesHeroProps) {
    return (
        <section className="relative w-full h-[100dvh] min-h-[650px] md:h-[80vh] md:min-h-[750px] overflow-hidden flex flex-col justify-center items-center pt-40 md:pt-48 pb-32">
            <div className="absolute inset-0 z-0">
                <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 15, ease: "linear" }} className="w-full h-full" style={{ willChange: "transform" }}>
                    <img src={serviceAssets.heroBg} alt="Dolphin Dive Baja" fetchPriority="high" loading="eager" decoding="async" className="w-full h-full object-cover object-[center_30%] md:object-center filter contrast-[1.15] saturate-[1.10]" />
                </motion.div>
                <div className="absolute inset-0 transition-colors duration-500 bg-navy/40 dark:bg-black/60" />
                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t transition-colors duration-500 z-10 from-slate-50 via-slate-50/50 to-transparent dark:from-dark dark:via-dark/80 dark:to-transparent" />
            </div>

            <div className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto pointer-events-none mt-10 md:mt-16">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-64 w-[90%] md:w-[600px] rounded-full blur-[100px] pointer-events-none transition-colors duration-500 bg-cyan-500/20 dark:bg-cyan-500/10" />

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
                    <span className="inline-block font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 px-4 py-1.5 md:px-6 md:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-500 shadow-lg pointer-events-auto bg-white/90 border-white/60 text-cyan-700 dark:bg-black/60 dark:border-white/10 dark:text-cyan-400">
                        {heroData.tag}
                    </span>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }} className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight pointer-events-auto transition-colors text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                    {heroData.title} <br className="hidden md:block" />
                    <span className="text-yellow-400 drop-shadow-md">{heroData.highlight}</span>
                </motion.h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} className="whitespace-pre-line font-body text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed pointer-events-auto transition-colors text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {heroData.desc}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-10 md:mt-14 flex flex-wrap justify-center gap-3 pointer-events-auto">
                    {categoriesList.map((cat) => (
                        <button key={cat.id} onClick={() => scrollToSection(cat.id)} className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-title text-[11px] md:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border bg-white/90 text-navy border-white/50 hover:bg-cyan-50 hover:text-cyan-700 dark:bg-black/40 dark:text-slate-200 dark:border-white/20 dark:hover:text-cyan-400 dark:backdrop-blur-md">
                            <i className={`${cat.icon} text-base md:text-lg`}></i> {cat.label}
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}