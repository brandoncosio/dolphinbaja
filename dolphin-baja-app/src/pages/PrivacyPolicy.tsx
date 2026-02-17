import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
    const { t } = useLanguage();
    const content = t.privacyPage;

    return (
        <section className="relative w-full py-24 px-6 md:px-12 overflow-hidden min-h-screen">
            
            {/* FONDO DECORATIVO (Estilo Dolphin Baja) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">

                {/* ENCABEZADO */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 block mb-4">
                        {content.tag}
                    </span>
                    <h1 className="font-title text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md mb-6">
                        {content.title}
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        {content.introShort}
                    </p>
                </motion.div>

                {/* RESUMEN RÁPIDO (Caja destacada estilo 'Glass') */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                >
                    <h3 className="text-xl font-title text-yellow-400 mb-6 flex items-center gap-2">
                        <i className="ri-shield-check-line text-2xl"></i>
                        {content.summary.title}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {content.summary.list.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-200">
                                <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400 shrink-0"></span>
                                <span className="text-sm md:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* CONTENIDO LEGAL COMPLETO */}
                <div className="space-y-12">
                    {content.sections.map((section, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <h2 className="font-title text-2xl md:text-3xl text-white mb-4 flex items-center gap-3">
                                {section.title}
                                <div className="h-[1px] flex-grow bg-white/10"></div>
                            </h2>
                            <div className="text-slate-300 leading-relaxed space-y-4 text-justify md:text-left text-sm md:text-base font-light">
                                {/* Renderizamos el texto. Si tiene saltos de línea, los respetamos */}
                                {section.content.split('\n').map((paragraph, pIdx) => (
                                    <p key={pIdx}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CIERRE */}
                <div className="mt-20 pt-10 border-t border-white/10 text-center text-slate-500 text-sm">
                    <p>{content.footer}</p>
                </div>

            </div>
        </section>
    );
}