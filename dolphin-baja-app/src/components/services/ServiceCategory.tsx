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
            <div className="text-center md:text-left mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
                <h2 className="font-title text-4xl md:text-5xl text-navy dark:text-white">{sectionTitle}</h2>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
                {servicesList.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    const itemImage = imageDict[item.imgKey] || serviceAssets.heroBg;

                    let articleId = undefined;
                    if (tabKey === 'cursos' && item.title === 'Open Water Diver') articleId = 'open-water-diver';
                    else if (tabKey === 'fundives' && (item.title === 'Night Dive' || item.title === 'Night Dive (Buceo Nocturno)')) articleId = 'night-dive';

                    let galleryType: 'dive' | 'snorkel' | 'course' = 'dive';
                    if (tabKey === 'cursos') galleryType = 'course';
                    if (tabKey === 'snorkel') galleryType = 'snorkel';

                    return (
                        <motion.article
                            key={idx} id={articleId} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
                            className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl bg-white dark:bg-white/5 dark:border-white/10 transition-all hover:border-cyan-400/50 hover:shadow-2xl`}
                        >
                            <div className="w-full lg:w-5/12 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden shrink-0">
                                {item.reel && item.reel.length > 1 ? (
                                    <ServicePushReel images={item.reel} title={item.title} />
                                ) : (
                                    <img src={itemImage} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 filter contrast-[1.15] saturate-[1.10]" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent dark:from-dark/60 pointer-events-none" />
                                <div className="absolute top-5 right-5 backdrop-blur-xl bg-white/90 dark:bg-dark/80 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 shadow-lg flex items-center gap-2">
                                    <i className="ri-time-line text-base"></i> {item.duration}
                                </div>
                            </div>

                            <div className="w-full lg:w-7/12 p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center">
                                <h3 className="font-title text-3xl md:text-4xl mb-4 text-navy dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-300 leading-tight">
                                    {item.title}
                                </h3>

                                <div className="whitespace-pre-line text-sm md:text-base font-body font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-8 line-clamp-3 md:line-clamp-4">
                                    {item.desc}
                                </div>

                                <div className="mb-10 hidden sm:block">
                                    <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-slate-400 mb-4">{lang === 'es' ? 'INCLUYE' : 'INCLUDES'}</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {(item.includes || []).map((inc, i) => (
                                            <span key={i} className="text-[11px] md:text-xs px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 dark:bg-white/5 dark:text-slate-200 dark:border-white/10 shadow-sm">
                                                <i className="ri-check-line text-cyan-500 mr-1"></i> {inc}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => {
                                            setModalData({
                                                title: item.title, desc: item.desc, duration: item.duration, includes: item.includes,
                                                images: item.reel && item.reel.length > 0 ? item.reel : generateGallery(itemImage, galleryType),
                                                extraContent: item.extraContent
                                            });
                                            setCurrentImageIdx(0);
                                        }}
                                        className="w-full py-4 rounded-xl font-title text-xs md:text-sm tracking-widest uppercase transition-all active:scale-95 border border-slate-300 text-slate-600 hover:bg-slate-50 dark:border-white/20 dark:text-slate-300 dark:hover:bg-white/10">
                                        {lang === 'es' ? 'Ver Detalles' : 'See Details'}
                                    </button>
                                    <a href={`mailto:ventas@dolphindivebaja.com?subject=Información sobre: ${item.title}`} rel="noopener noreferrer"
                                        className="w-full py-4 rounded-xl font-title text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-95 border shadow-md bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-navy dark:border-cyan-500">
                                        {lang === 'es' ? 'Reservar' : 'Book Now'} <i className="ri-mail-line text-lg md:text-xl"></i>
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
                    <div key={i} className={`h-1 rounded-full transition-all duration-[1000ms] ${i === index ? 'w-5 bg-cyan-400 shadow-md' : 'w-1.5 bg-white/30'}`} />
                ))}
            </div>
        </div>
    );
}