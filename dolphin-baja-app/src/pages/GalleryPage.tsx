import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SplashScreen from '../components/SplashScreen';
import { useLanguage } from '../context/LanguageContext';

// ========================================================================
// 🗄️ BASE DE DATOS DE MEDIA
// ========================================================================
const mediaData = [
    { id: 1, type: 'photo', category: 'marine', src: '/assets/images/caballitos de mar.webp', title: 'Caballito de Mar', span: 'col-span-1 row-span-2' },
    { id: 2, type: 'video', category: 'marine', src: '/assets/images/focahome.webp', videoUrl: '/assets/contentD/video/GX010057.webm', title: 'Encuentro con Lobos Marinos', span: 'col-span-2 row-span-2' },
    { id: 3, type: 'photo', category: 'marine', src: '/assets/images/alebrije.webp', title: 'Nudibranquio Alebrije', span: 'col-span-1 row-span-1' },
    { id: 4, type: 'video', category: 'marine', src: '/assets/images/slide2.webp', videoUrl: '/assets/contentD/video/GX010803.webm', title: 'Hábitat Submarino', span: 'col-span-2 row-span-1' },
    { id: 5, type: 'video', category: 'marine', src: '/assets/images/slide3.webp', videoUrl: '/assets/contentD/video/tijeritass.webm', title: 'Tijeritas en el Arrecife', span: 'col-span-2 row-span-1' },
    { id: 6, type: 'video', category: 'marine', src: '/assets/images/colash4.webp', videoUrl: '/assets/contentD/video/IMG_4615.webm', title: 'Mar de Cortés', span: 'col-span-1 row-span-1' },
    { id: 7, type: 'photo', category: 'action', src: '/assets/images/slide1.webp', title: 'Aventura Submarina', span: 'col-span-2 row-span-2' },
    { id: 8, type: 'video', category: 'action', src: '/assets/images/tours.webp', videoUrl: '/assets/contentD/video/jacks-toro.webm', title: 'Tornado de Jacks', span: 'col-span-2 row-span-1' },
    { id: 10, type: 'photo', category: 'action', src: '/assets/contentD/img/DSC06299.webp', title: 'Ascenso en el Azul', span: 'col-span-1 row-span-1' },
    { id: 12, type: 'photo', category: 'action', src: '/assets/images/colash1.webp', title: 'Buceo en Loreto', span: 'col-span-1 row-span-1' },
    { id: 13, type: 'photo', category: 'action', src: '/assets/contentD/img/DSC06335.webp', title: 'Explorando Arrecifes', span: 'col-span-1 row-span-1' },
    { id: 14, type: 'photo', category: 'action', src: '/assets/contentD/img/DSC06361.webp', title: 'Ruta Subacuática', span: 'col-span-1 row-span-1' },
    { id: 15, type: 'photo', category: 'action', src: '/assets/contentD/img/DSC06342.webp', title: 'Buzo en Acción', span: 'col-span-1 row-span-1' },
    { id: 16, type: 'photo', category: 'team', src: '/assets/images/staff.webp', title: 'Nuestro Staff Dolphin', span: 'col-span-2 row-span-1' },
    { id: 17, type: 'photo', category: 'team', src: '/assets/contentD/img/DSC05885.webp', title: 'Verificación de Tanques', span: 'col-span-1 row-span-1' },
    { id: 18, type: 'photo', category: 'team', src: '/assets/contentD/img/DSC06264.webp', title: 'Listos para Saltar', span: 'col-span-1 row-span-1' },
    { id: 20, type: 'photo', category: 'team', src: '/assets/contentD/img/DSC06276.webp', title: 'Nuestra Embarcación', span: 'col-span-1 row-span-1' },
    { id: 21, type: 'photo', category: 'team', src: '/assets/images/buceo.webp', title: 'Nuestros Guías', span: 'col-span-1 row-span-1' },
    { id: 22, type: 'photo', category: 'team', src: '/assets/contentD/img/DSC06320.webp', title: 'Asistencia en el Agua', span: 'col-span-1 row-span-2' },
    { id: 23, type: 'photo', category: 'team', src: '/assets/contentD/img/DSC06303.webp', title: 'Preparando Equipos', span: 'col-span-1 row-span-1' }
];

const categories = ['all', 'marine', 'action', 'team', 'video'];

export default function GalleryPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { lang } = useLanguage();

    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleItems] = useState(12);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const texts = {
        es: {
            tag: "Nuestra Colección Visual",
            titleStart: "Explora el",
            titleHighlight: "Océano",
            desc: "Sumérgete en nuestra galería y descubre por qué el Mar de Cortés es conocido como el Acuario del Mundo. Conoce nuestros sitios, vida marina y al equipo que te guiará.",
            filters: { all: "Todos", marine: "Vida Marina", action: "Buceo", team: "Equipo", video: "Videos" },
            loadMore: "Cargar más aventuras",
            noMore: "Has explorado todo el contenido"
        },
        en: {
            tag: "Our Visual Collection",
            titleStart: "Explore the",
            titleHighlight: "Ocean",
            desc: "Dive into our gallery and discover why the Sea of Cortez is known as the Aquarium of the World. Meet our sites, marine life, and the team that will guide you.",
            filters: { all: "All", marine: "Marine Life", action: "Diving", team: "Team", video: "Videos" },
            loadMore: "Load more adventures",
            noMore: "You've explored all the content"
        }
    };

    const currentLang = (lang === 'en' || lang === 'es') ? lang : 'es';
    const pageTexts = texts[currentLang];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    // Bloquear scroll al abrir el Lightbox
    useEffect(() => {
        if (selectedIndex !== null) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedIndex]);

    // Filtrar elementos
    const filteredMedia = mediaData.filter(item => {
        if (filter === 'all') return true;
        if (filter === 'video') return item.type === 'video';
        return item.category === filter;
    });

    const currentGallery = filteredMedia.slice(0, visibleCount);

    // ========================================================================
    // 🎛️ FUNCIONES DE NAVEGACIÓN (Lightbox)
    // ========================================================================
    const handlePrev = useCallback((e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => {
            if (prev === null) return null;
            return prev === 0 ? currentGallery.length - 1 : prev - 1;
        });
    }, [currentGallery.length]);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => {
            if (prev === null) return null;
            return prev === currentGallery.length - 1 ? 0 : prev + 1;
        });
    }, [currentGallery.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, handlePrev, handleNext]);

    // ========================================================================
    // 🎨 ESTILOS PREMIUM
    // ========================================================================
    const pageContainerClass = `
        relative min-h-screen pt-48 lg:pt-56 pb-24 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500
        bg-slate-50 text-slate-600
        dark:bg-dark dark:text-slate-200
    `;

    const gridContainerClass = `
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[220px] md:auto-rows-[280px] gap-3 sm:gap-4 md:gap-5 lg:gap-6 grid-flow-dense mt-10
    `;

    const gridItemClass = `
        relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 cursor-pointer shadow-lg hover:-translate-y-2 hover:shadow-2xl
        bg-white border-slate-200 
        dark:bg-white/5 dark:border-white/10 dark:hover:border-cyan-400/50
    `;

    return (
        <div key={lang}>
            <Helmet>
                <title>{currentLang === 'es' ? 'Galería Multimedia | Dolphin Dive' : 'Media Gallery | Dolphin Dive'}</title>
                <meta name="description" content={pageTexts.desc} />
            </Helmet>

            <AnimatePresence>
                {isLoading && <SplashScreen key="splash" />}
            </AnimatePresence>

            <main className={pageContainerClass}>

                {/* Luces de Fondo Mágicas */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[90%] md:w-[70%] h-[40%] bg-cyan-400/20 dark:bg-cyan-500/10 blur-[130px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* HERO HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="text-center mb-10 md:mb-14 max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-5 py-2 md:px-6 md:py-2.5 rounded-full border text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] drop-shadow-sm mb-6
                            bg-white/80 border-slate-200 text-cyan-600 dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 backdrop-blur-md">
                            {pageTexts.tag}
                        </span>

                        <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-navy dark:text-white drop-shadow-sm leading-tight">
                            {pageTexts.titleStart} <br className="hidden sm:block" />
                            <span className="text-yellow-500 dark:text-yellow-400">{pageTexts.titleHighlight}</span>
                        </h1>

                        <p className="font-body text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-300">
                            {pageTexts.desc}
                        </p>
                    </motion.div>

                    {/* FILTROS */}
                    <div className="flex justify-center mb-10 md:mb-16">
                        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 p-1.5 md:p-2 bg-slate-200/50 dark:bg-white/5 rounded-3xl backdrop-blur-md border border-slate-300/50 dark:border-white/10 shadow-inner max-w-full">
                            {categories.map((cat) => {
                                const isActive = filter === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => { setFilter(cat); setVisibleItems(12); }}
                                        className={`relative px-4 py-2.5 md:px-6 md:py-3 rounded-2xl font-title text-[10px] md:text-xs tracking-widest uppercase transition-colors duration-300 z-10 
                                        ${isActive ? 'text-white dark:text-navy' : 'text-slate-500 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-white'}`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeFilter"
                                                className="absolute inset-0 bg-cyan-600 dark:bg-cyan-400 rounded-2xl shadow-md -z-10"
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            />
                                        )}
                                        <span className="relative z-20">{pageTexts.filters[cat as keyof typeof pageTexts.filters]}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* GRID DE IMÁGENES / VIDEOS */}
                    <motion.div layout className={gridContainerClass}>
                        <AnimatePresence mode="popLayout">
                            {currentGallery.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                                    className={`${gridItemClass} ${item.span}`}
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    {item.type === 'video' ? (
                                        <video
                                            src={item.videoUrl}
                                            poster={item.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            // 👇 FILTRO DE CONTRASTE Y SATURACIÓN APLICADO
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-110 will-change-transform filter contrast-[1.20] saturate-[1.15]"
                                        />
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            loading="lazy"
                                            decoding="async"
                                            // 👇 FILTRO DE CONTRASTE Y SATURACIÓN APLICADO
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-110 will-change-transform filter contrast-[1.20] saturate-[1.15]"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-dark/90 dark:via-dark/30" />

                                    <div className="absolute top-4 right-4 md:top-5 md:right-5 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 shadow-lg">
                                        <i className={item.type === 'video' ? 'ri-play-fill text-lg md:text-2xl ml-0.5' : 'ri-zoom-in-line text-base md:text-xl'}></i>
                                    </div>

                                    <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 right-4 md:right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <span className="inline-block px-2.5 py-1 bg-cyan-500 text-white rounded-md text-[8px] md:text-[9px] font-bold uppercase tracking-widest mb-1.5 shadow-sm">
                                            {pageTexts.filters[item.category as keyof typeof pageTexts.filters]}
                                        </span>
                                        <h3 className="font-title text-white text-lg md:text-2xl drop-shadow-md leading-tight truncate">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* BOTÓN CARGAR MÁS */}
                    {visibleCount < filteredMedia.length && (
                        <div className="mt-16 text-center">
                            <button
                                onClick={() => setVisibleItems(prev => prev + 8)}
                                className="px-8 py-3.5 rounded-xl border border-slate-300 font-title text-xs md:text-sm tracking-widest uppercase transition-all shadow-sm hover:shadow-md active:scale-95 bg-white text-slate-600 hover:text-cyan-600 hover:border-cyan-300 dark:bg-white/5 dark:border-white/20 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
                            >
                                {pageTexts.loadMore} <i className="ri-loader-3-line inline-block animate-spin-slow text-lg ml-2 align-middle"></i>
                            </button>
                        </div>
                    )}

                    {/* MENSAJE FINAL */}
                    {visibleCount >= filteredMedia.length && filteredMedia.length > 0 && (
                        <p className="mt-16 text-center font-body font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500 text-xs md:text-sm">
                            <i className="ri-check-all-line mr-2 text-cyan-500"></i> {pageTexts.noMore}
                        </p>
                    )}

                </div>
            </main>

            {/* ========================================================================
                🎬 LIGHTBOX ULTRA
                ======================================================================== */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-6 md:p-10"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <div className="absolute inset-0 bg-navy/95 dark:bg-black/95 backdrop-blur-xl" />

                        <div className="absolute top-0 left-0 right-0 p-5 md:p-8 flex justify-between items-center z-50 pointer-events-none">
                            <div className="text-white font-title text-sm md:text-base tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-auto shadow-lg">
                                {selectedIndex + 1} / {currentGallery.length}
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-navy transition-all pointer-events-auto shadow-lg"
                            >
                                <i className="ri-close-line text-2xl"></i>
                            </button>
                        </div>

                        <button onClick={handlePrev} className="hidden sm:flex absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 text-white items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all z-50 backdrop-blur-md shadow-lg">
                            <i className="ri-arrow-left-s-line text-3xl"></i>
                        </button>
                        <button onClick={handleNext} className="hidden sm:flex absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 text-white items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all z-50 backdrop-blur-md shadow-lg">
                            <i className="ri-arrow-right-s-line text-3xl"></i>
                        </button>

                        <motion.div
                            key={currentGallery[selectedIndex].id}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.4}
                            onDragEnd={(_, info) => {
                                if (info.offset.x > 60) handlePrev();
                                if (info.offset.x < -60) handleNext();
                            }}
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: -50 }}
                            transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl h-[80vh] sm:h-auto sm:max-h-[85vh] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-black border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center touch-pan-y"
                        >
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white/70 text-[10px] font-bold uppercase tracking-widest z-20 sm:hidden flex items-center gap-2 pointer-events-none">
                                <i className="ri-arrow-left-line"></i> Deslizar <i className="ri-arrow-right-line"></i>
                            </div>

                            {currentGallery[selectedIndex].type === 'video' ? (
                                currentGallery[selectedIndex].videoUrl?.endsWith('.webm') || currentGallery[selectedIndex].videoUrl?.endsWith('.mp4') ? (
                                    <video 
                                        src={currentGallery[selectedIndex].videoUrl} 
                                        controls 
                                        autoPlay 
                                        // 👇 FILTRO DE CONTRASTE Y SATURACIÓN APLICADO EN LIGHTBOX
                                        className="w-full h-full max-h-[85vh] sm:max-h-[90vh] object-contain filter contrast-[1.20] saturate-[1.15]" 
                                    />
                                ) : (
                                    <iframe src={currentGallery[selectedIndex].videoUrl} title={currentGallery[selectedIndex].title} className="w-full h-full aspect-video border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                )
                            ) : (
                                <img 
                                    src={currentGallery[selectedIndex].src} 
                                    alt={currentGallery[selectedIndex].title} 
                                    // 👇 FILTRO DE CONTRASTE Y SATURACIÓN APLICADO EN LIGHTBOX
                                    className="w-full h-full object-contain filter contrast-[1.20] saturate-[1.15]" 
                                />
                            )}

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white pointer-events-none text-center">
                                <h3 className="font-title text-xl md:text-3xl tracking-wide drop-shadow-xl">{currentGallery[selectedIndex].title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}