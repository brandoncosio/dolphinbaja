import { motion } from 'framer-motion';
import { serviceAssets, generateGallery, ModalData } from './servicesData';
import { useLanguage } from '../../context/LanguageContext';

interface PackagesGridProps {
    paquetesData?: any; // Se mantiene por compatibilidad, pero usaremos los datos locales
    setModalData: (data: ModalData) => void;
    setCurrentImageIdx: (idx: number) => void;
    scrollToSection: (id: string) => void;
}

export default function PackagesGrid({ setModalData, setCurrentImageIdx, scrollToSection }: PackagesGridProps) {
    const { lang } = useLanguage();

    // ========================================================================
    // 📚 DATOS LOCALES (Control total y traducciones perfectas)
    // ========================================================================
    const pageData = {
        es: {
            title: "Paquetes de Buceo",
            subtitle: "Experiencias All-Inclusive",
            generalIncludes: "Incluimos tarifas del parque marino, lunch, fruta y agua todos los días.",
            btnDetails: "Detalles",
            btnBook: "Reservar",
            noteText: "NOTA: No incluye equipo de renta, ni propinas para el staff.",
            items: [
                {
                    id: 'deep-blue', name: "Baja Ocean", target: "Para buzos certificados", duration: "5 Días", color: "cyan",
                    desc: "Disfruta 5 días espectaculares de buceo en el parque nacional bahía de loreto, explorando sitios increíbles llenos de vida y belleza natural. Te alojarás en uno de los mejores hoteles de loreto, donde te sentirás perfectamente bien atendido. Los desayunos están incluidos.\n\nRequisitos: 12-70+ años, certificado de buceo.",
                    features: ["Solo buzos certificados", "5 días buceando (10 tanques)", "6 noches de hotel con desayuno incluído", "Transfer: aeropuerto - hotel - aeropuerto", "Vigencia: Julio a Octubre"],
                    note: "Mínimo 2 buzos"
                },
                {
                    id: 'blue-escape', name: "Blue Escape", target: "Para buzos certificados", duration: "3 Días", color: "ocean",
                    desc: "La escapada perfecta de fin de semana. Tres días intensos de inmersiones en las majestuosas aguas de Loreto, combinados con una estancia cómoda y relajante.\n\nRequisitos: 12-70+ años, certificado de buceo.",
                    features: ["3 días buceando (6 tanques)", "4 noches de hotel con desayuno incluído", "Transfer: aeropuerto - hotel - aeropuerto", "Válido de Julio a Octubre"],
                    note: "Mínimo 2 buzos"
                },
                {
                    id: 'beyond-surface', name: "Beyond the Surface", target: "Obtén tu PADI Open Water", duration: "6 Días", color: "yellow",
                    desc: "Conviértete en un buzo certificado con este paquete integral. Incluye toda tu teoría, inmersiones de práctica y certificación oficial PADI.\n\nRequisitos: 12-70+ años, saber nadar, buena salud.",
                    features: [
                        "Repaso de teoría (eLearning completado)",
                        "Sesión en aguas confinadas",
                        "Ejercicios en Aguas Abiertas 1, 2, 3 y 4",
                        "+2 días extra de buceo (4 tanques)",
                        "Computadora de buceo Cressi",
                        "Total de 6 días"
                    ],
                    note: "Mínimo 2 buzos"
                }
            ]
        },
        en: {
            title: "Dive Packages",
            subtitle: "All-Inclusive Experiences",
            generalIncludes: "We include marine park fees, lunch, fruit & water every day.",
            btnDetails: "Details",
            btnBook: "Book",
            noteText: "NOTE: Rental gear and staff gratuities are not included.",
            items: [
                {
                    id: 'deep-blue', name: "Baja Ocean", target: "For certified divers", duration: "5 Days", color: "cyan",
                    desc: "Enjoy 5 spectacular days of diving in the Loreto Bay National Park, exploring breathtaking sites teeming with life and natural beauty. You will stay at one of Loreto's premier hotels, where you will receive exceptional service. Breakfast is included.\n\nRequirements: 12-70+ years old, dive certificate.",
                    features: ["Certified divers only", "5 days of diving (10 tanks)", "6 hotel nights with breakfast included", "Transfer: Airport - Hotel - Airport", "Valid: July to October"],
                    note: "Minimum 2 divers"
                },
                {
                    id: 'blue-escape', name: "Blue Escape", target: "For certified divers", duration: "3 Days", color: "ocean",
                    desc: "The perfect weekend getaway. Three intense days of diving in the majestic waters of Loreto, combined with a comfortable and relaxing stay.\n\nRequirements: 12-70+ years old, dive certificate.",
                    features: ["3 days diving (6 tanks)", "4 nights hotel with breakfast included", "Transfer: Airport - Hotel - Airport", "Valid: July - October"],
                    note: "Minimum 2 divers"
                },
                {
                    id: 'beyond-surface', name: "Beyond the Surface", target: "Get your PADI Open Water", duration: "6 Days", color: "yellow",
                    desc: "Become a certified diver with this comprehensive package. Includes all your theory, practice dives, and official PADI certification.\n\nRequirements: 12-70+ years old, good health, know how to swim.",
                    features: [
                        "Theory review (Have done the eLearning)",
                        "Confined Waters",
                        "Open Waters exercises 1, 2, 3 & 4",
                        "+2 extra days diving (4 tanks)",
                        "Cressi Dive Computer",
                        "Total Days 6"
                    ],
                    note: "Minimum 2 divers"
                }
            ]
        }
    };

    const content = pageData[lang === 'en' ? 'en' : 'es'];

    return (
        <section id="paquetes" className="mb-8 md:mb-16 scroll-mt-28">
            {/* ENCABEZADO */}
            <div className="text-center mb-6 md:mb-8">
                <h2 className="font-title text-3xl md:text-5xl text-navy dark:text-white drop-shadow-sm mb-4">{content.title}</h2>
                <p className="font-body font-bold tracking-widest uppercase text-xs md:text-sm text-cyan-600 dark:text-cyan-400">{content.subtitle}</p>
            </div>

            {/* 👇 BANNER DE INCLUSIONES GLOBALES (Añadido aquí) */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto mb-10 p-4 md:p-5 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-100 dark:border-cyan-800 flex items-center justify-center gap-3 text-center shadow-sm"
            >
                <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center shrink-0">
                    <i className="ri-check-double-line text-cyan-600 dark:text-cyan-400 text-lg"></i>
                </div>
                <p className="font-body text-sm md:text-base font-medium text-slate-700 dark:text-slate-300">
                    {content.generalIncludes}
                </p>
            </motion.div>

            {/* GRID DE PAQUETES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {content.items.map((pkg: any, idx: number) => {
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
                                                    {lang === 'es' ? 'Ver Curso' : 'See Course'} <i className="ri-arrow-right-up-line"></i>
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
                                                        {content.noteText}
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
                                        {content.btnDetails}
                                    </button>
                                    <a href={`mailto:ventas@dolphindivebaja.com?subject=Reserva Paquete: ${pkg.name}`} rel="noopener noreferrer"
                                        className="w-full py-3.5 rounded-xl font-title text-[10px] md:text-xs tracking-widest uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 border shadow-md bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-navy dark:border-cyan-500">
                                        {content.btnBook} <i className="ri-mail-line text-base"></i>
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