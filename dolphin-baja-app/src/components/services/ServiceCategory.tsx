import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imageDict, serviceAssets, generateGallery, ServiceItem, ModalData, TabKey } from './servicesData';
import { useLanguage } from '../../context/LanguageContext';

interface ServiceCategoryProps {
    tabKey: TabKey;
    sectionTitle: string;
    servicesList: ServiceItem[];
    setModalData: (data: ModalData) => void;
    setCurrentImageIdx: (idx: number) => void;
    scrollToSection: (id: string) => void;
}

export default function ServiceCategory({ tabKey, sectionTitle, servicesList, setModalData, setCurrentImageIdx, scrollToSection }: ServiceCategoryProps) {
    const { lang } = useLanguage();

    return (
        <section id={tabKey} className="pt-8 md:pt-16 scroll-mt-24">
            <div className="text-center md:text-left mb-8 md:mb-10 border-b border-slate-200 dark:border-white/10 pb-4 md:pb-6">

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8">
                    <h2 className="font-title text-4xl md:text-5xl lg:text-6xl text-navy dark:text-white leading-none">{sectionTitle}</h2>

                    {/* 👇 NUEVO BANNER DE REFRESH (A un lado del título) */}
                    {tabKey === 'fundives' && (
                        <button
                            onClick={() => scrollToSection('refresh-program')}
                            className="inline-flex items-center justify-center md:justify-start gap-3 px-5 py-3 md:px-6 md:py-3.5 rounded-2xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 text-yellow-800 dark:text-yellow-400 text-xs md:text-sm font-body font-bold text-left transition-all hover:bg-yellow-100 dark:hover:bg-yellow-900/40 hover:-translate-y-1 shadow-sm md:max-w-md group cursor-pointer"
                        >
                            <div className="w-8 h-8 rounded-full bg-yellow-200 dark:bg-yellow-800/50 flex items-center justify-center shrink-0">
                                <i className="ri-alarm-warning-fill text-lg"></i>
                            </div>
                            <span className="leading-snug pr-2">
                                {lang === 'es'
                                    ? "Si no has buceado en más de 1 año, por tu seguridad te recomendamos un Refresh. Ver detalles aquí."
                                    : "If you haven't dived in over a year, for your safety we recommend a Refresh. See details here."}
                            </span>
                        </button>
                    )}
                </div>

            </div>

            <div className="flex flex-col gap-8 md:gap-10">
                {servicesList.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    const itemImage = imageDict[item.imgKey] || serviceAssets.heroBg;

                    // 👇 Asignación de IDs para hacer el Scroll automático
                    let articleId = undefined;
                    if (tabKey === 'cursos' && item.title.includes('Open Water Diver')) articleId = 'open-water-diver';
                    else if (tabKey === 'fundives' && (item.title.includes('Night Dive'))) articleId = 'night-dive';
                    else if (tabKey === 'fundives' && (item.title.includes('Refresh'))) articleId = 'refresh-program';

                    let galleryType: 'dive' | 'snorkel' | 'course' = 'dive';
                    if (tabKey === 'cursos') galleryType = 'course';
                    if (tabKey === 'snorkel') galleryType = 'snorkel';

                    return (
                        <motion.article
                            key={idx} id={articleId} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
                            className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl bg-white dark:bg-white/5 dark:border-white/10 transition-all hover:border-cyan-400/50 hover:shadow-2xl scroll-mt-28`}
                        >
                            <div className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-auto relative overflow-hidden shrink-0">
                                {item.reel && item.reel.length > 1 ? (
                                    <ServicePushReel images={item.reel} title={item.title} />
                                ) : (
                                    <img src={itemImage} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 filter contrast-[1.15] saturate-[1.10]" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent dark:from-dark/60 pointer-events-none" />

                                <div className="absolute top-5 right-5 backdrop-blur-xl bg-white/90 dark:bg-dark/80 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 shadow-lg flex items-center gap-2">
                                    <i className="ri-time-line text-lg"></i> {item.duration}
                                </div>

                                {item.title.includes('Open Water Diver') && (
                                    <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 bg-white/90 dark:bg-white/10 backdrop-blur-xl p-3 md:p-4 rounded-[1.2rem] shadow-xl border border-white/50 dark:border-white/20 z-20 flex items-center justify-center animate-bounce-slow">
                                        <img
                                            src="/assets/contentD/img/PADI.png"
                                            alt="PADI Logo"
                                            className="h-10 md:h-12 w-auto object-contain filter drop-shadow-md"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                                <h3 className="font-title text-3xl md:text-4xl lg:text-5xl mb-4 text-navy dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-300 leading-tight">
                                    {item.title}
                                </h3>

                                <div className="whitespace-pre-line text-base md:text-lg font-body font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-4">
                                    {item.desc}
                                </div>

                                <div className="mb-8 hidden sm:block">
                                    <p className="text-xs md:text-sm font-bold tracking-widest text-slate-400 mb-3 uppercase">
                                        {lang === 'es' ? 'Incluye' : 'Includes'}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(item.includes || []).map((inc, i) => (
                                            <span key={i} className="text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 dark:bg-white/5 dark:text-slate-200 dark:border-white/10 shadow-sm">
                                                <i className="ri-check-line text-cyan-500 mr-1"></i> {inc}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => {
                                            setModalData({
                                                title: item.title, desc: item.desc, duration: item.duration, includes: item.includes,
                                                images: item.reel && item.reel.length > 0 ? item.reel : generateGallery(itemImage, galleryType),
                                                extraContent: item.extraContent, hideBookNow: item.hideBookNow
                                            });
                                            setCurrentImageIdx(0);
                                        }}
                                        className="w-full py-4 rounded-xl font-title text-sm md:text-base tracking-widest uppercase transition-all active:scale-95 shadow-md bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:text-navy dark:hover:bg-cyan-400"
                                    >
                                        {lang === 'es' ? 'Ver Detalles y Reservar' : 'See Details & Book'}
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}

// Sub-componente interno para los reels
function ServicePushReel({ images, title }: { images: string[], title: string }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5500);
        return () => clearInterval(timer);
    }, [images.length]);

    const isVideo = (src: string) => src.endsWith('.webm') || src.endsWith('.mp4') || src.endsWith('.ogg');

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
            <AnimatePresence initial={false} mode="popLayout">
                <motion.div key={index} initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ x: { type: "tween", ease: "easeInOut", duration: 1.2 } }} className="absolute inset-0 w-full h-full">
                    {isVideo(images[index]) ? (
                        <video src={images[index]} autoPlay muted loop playsInline className="w-full h-full object-cover filter contrast-[1.15] saturate-[1.10]" />
                    ) : (
                        <img src={images[index]} alt={`${title} reel`} className="w-full h-full object-cover filter contrast-[1.15] saturate-[1.10]" />
                    )}
                </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {images.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-[1000ms] ${i === index ? 'w-6 bg-cyan-400 shadow-md' : 'w-2 bg-white/40'}`} />
                ))}
            </div>
        </div>
    );
}