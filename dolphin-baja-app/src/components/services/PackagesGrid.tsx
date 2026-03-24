import { motion } from 'framer-motion';
import { serviceAssets, generateGallery, ModalData } from './servicesData';
import { useLanguage } from '../../context/LanguageContext';

interface PackagesGridProps {
    paquetesData: any;
    setModalData: (data: ModalData) => void;
    setCurrentImageIdx: (idx: number) => void;
    scrollToSection: (id: string) => void;
}

export default function PackagesGrid({ paquetesData, setModalData, setCurrentImageIdx, scrollToSection }: PackagesGridProps) {
    const { lang } = useLanguage();

    return (
        <section id="paquetes" className="mb-8 md:mb-16 scroll-mt-28">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="font-title text-3xl md:text-5xl text-navy dark:text-white drop-shadow-sm mb-4">{paquetesData.title}</h2>
                <p className="font-body font-bold tracking-widest uppercase text-xs md:text-sm text-cyan-600 dark:text-cyan-400">{paquetesData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {paquetesData.items.map((pkg: any, idx: number) => {
                    let badgeClass = "text-blue-600 border-blue-400 bg-blue-50 dark:bg-blue-400/10 dark:text-blue-400";
                    if (pkg.color === 'yellow') badgeClass = "text-yellow-600 border-yellow-400 bg-yellow-50 dark:bg-yellow-400/10 dark:text-yellow-400";
                    if (pkg.color === 'cyan') badgeClass = "text-cyan-700 border-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 dark:text-cyan-400";

                    return (
                        <motion.article key={pkg.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group flex flex-col relative rounded-[2rem] p-8 md:p-10 overflow-hidden border transition-all duration-500 shadow-xl bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 hover:border-cyan-400/50"
                        >
                            <div className="mb-8">
                                <span className={`inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg border mb-5 ${badgeClass}`}>{pkg.target}</span>
                                <h3 className="font-title text-3xl md:text-4xl text-navy dark:text-white leading-tight">"{pkg.name}"</h3>
                            </div>
                            <ul className="flex-grow space-y-4 mb-10">
                                {pkg.features.map((feat: string, fIdx: number) => (
                                    <li key={fIdx} className="flex items-start gap-3 font-body text-sm lg:text-base font-medium text-slate-600 dark:text-slate-300">
                                        <i className={`ri-checkbox-circle-fill mt-0.5 text-lg ${pkg.color === 'yellow' ? 'text-yellow-500' : 'text-cyan-500'}`}></i>
                                        <span className="leading-snug">
                                            {feat}
                                            {pkg.id === 'beyond-surface' && (feat.includes('Ejercicios') || feat.includes('exercises')) && (
                                                <button onClick={() => scrollToSection('open-water-diver')} className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[9px] font-bold uppercase tracking-tighter hover:bg-cyan-200 transition-colors pointer-events-auto">
                                                    Ver Curso <i className="ri-arrow-right-up-line"></i>
                                                </button>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto flex flex-col gap-3">
                                <div className="flex items-center justify-center gap-2 mb-2 font-body text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-black/20 py-2.5 rounded-xl border border-slate-100 dark:border-white/5">
                                    <i className="ri-group-fill"></i> {pkg.note}
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => {
                                            let footer = null;
                                            if (pkg.id === 'deep-blue' || pkg.id === 'blue-escape') {
                                                footer = (
                                                    <p className="mt-4 font-body text-[11px] italic text-slate-500 border-t border-slate-200 dark:border-white/10 pt-4 leading-relaxed">
                                                        {lang === 'es' ? 'NOTA: No incluye equipo de renta, ni propinas para el staff.' : 'NOTE: Rental gear and staff gratuities are not included.'}
                                                    </p>
                                                );
                                            }
                                            setModalData({
                                                title: pkg.name, desc: pkg.desc, duration: pkg.duration, includes: pkg.features,
                                                images: generateGallery(serviceAssets.heroBg, 'package'), footerContent: footer
                                            });
                                            setCurrentImageIdx(0);
                                        }}
                                        className="w-full py-3.5 rounded-xl font-title text-[10px] md:text-xs tracking-widest uppercase transition-all active:scale-95 border border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-white/20 dark:text-slate-300 dark:hover:bg-white/10">
                                        {lang === 'es' ? 'Detalles' : 'Details'}
                                    </button>
                                    <a href={`mailto:ventas@dolphindivebaja.com?subject=Reserva Paquete: ${pkg.name}`} rel="noopener noreferrer"
                                        className="w-full py-3.5 rounded-xl font-title text-[10px] md:text-xs tracking-widest uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 border shadow-md bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-navy dark:border-cyan-500">
                                        {lang === 'es' ? 'Reservar' : 'Book'} <i className="ri-mail-line text-base"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}