import { motion } from 'framer-motion';
import { serviceAssets } from './servicesData';

export default function PartnersBanner() {
    return (
        <section className="relative z-20 max-w-6xl mx-auto px-5 md:px-12 pt-8 md:pt-12 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                className="rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10"
            >
                <div className="text-center lg:text-left shrink-0">
                    <p className="font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-2">
                        Official Partners son:
                    </p>
                    <h3 className="font-title text-2xl md:text-3xl text-navy dark:text-white leading-tight">
                        Whales of<br className="hidden lg:block" /> Loreto
                    </h3>
                </div>

                <div className="hidden lg:block w-[1px] h-20 bg-slate-200 dark:bg-white/10 shrink-0"></div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-12 w-full lg:w-auto">
                    <div className="flex items-center justify-center h-16 sm:h-20 w-48 sm:w-56">
                        <img src={serviceAssets.padiLogo} alt="PADI 5 Star Dive Center" className="max-h-full max-w-full object-contain drop-shadow-sm hover:scale-105 transition-transform" />
                    </div>
                    <div className="hidden sm:block w-[1px] h-12 bg-slate-200 dark:bg-white/10 shrink-0"></div>
                    <div className="sm:hidden w-32 h-[1px] bg-slate-200 dark:bg-white/10 shrink-0"></div>
                    <div className="flex items-center justify-center h-16 sm:h-20 w-48 sm:w-56">
                        <img src={serviceAssets.cressiLogo} alt="Cressi Dive Center" className="max-h-full max-w-full object-contain drop-shadow-sm hover:scale-105 transition-transform" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}