import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SplashScreen from '../components/SplashScreen';
import { useLanguage } from '../context/LanguageContext';

// ========================================================================
// 🗄️ BASE DE DATOS DE MEDIA
// ========================================================================
const mediaData = [
    // ------------------------------------------------------------------------
    // 🐠 VIDA MARINA (marine)
    // ------------------------------------------------------------------------
    {
        id: 1, type: 'photo', category: 'marine',
        src: '/assets/images/caballitos de mar.webp',
        title: 'Caballito de Mar', span: 'col-span-1 row-span-2'
    },
    {
        id: 2, type: 'video', category: 'marine',
        src: '/assets/images/focahome.webp', videoUrl: '/assets/contentD/video/GX010057.webm',
        title: 'Encuentro con Lobos Marinos', span: 'col-span-2 row-span-2'
    },
    {
        id: 3, type: 'photo', category: 'marine',
        src: '/assets/images/alebrije.webp',
        title: 'Nudibranquio Alebrije', span: 'col-span-1 row-span-1'
    },
    {
        id: 4, type: 'video', category: 'marine',
        src: '/assets/images/slide2.webp', videoUrl: '/assets/contentD/video/GX010803.webm',
        title: 'Hábitat Submarino', span: 'col-span-2 row-span-1'
    },
    {
        id: 5, type: 'video', category: 'marine',
        src: '/assets/images/slide3.webp', videoUrl: '/assets/contentD/video/tijeritass.webm',
        title: 'Tijeritas en el Arrecife', span: 'col-span-2 row-span-1'
    },
    {
        id: 6, type: 'video', category: 'marine',
        src: '/assets/images/colash4.webp', videoUrl: '/assets/contentD/video/IMG_4615.webm',
        title: 'Mar de Cortés', span: 'col-span-1 row-span-1'
    },

    // ------------------------------------------------------------------------
    // 🤿 BUCEO (action)
    // ------------------------------------------------------------------------
    {
        id: 7, type: 'photo', category: 'action',
        src: '/assets/images/slide1.webp',
        title: 'Aventura Submarina', span: 'col-span-2 row-span-2'
    },
    {
        id: 8, type: 'video', category: 'action',
        src: '/assets/images/tours.webp', videoUrl: '/assets/contentD/video/jacks-toro.webm',
        title: 'Tornado de Jacks', span: 'col-span-2 row-span-1'
    },
    {
        id: 10, type: 'photo', category: 'action',
        src: '/assets/contentD/img/DSC06299.webp',
        title: 'Ascenso en el Azul', span: 'col-span-1 row-span-1'
    },
    {
        id: 12, type: 'photo', category: 'action',
        src: '/assets/images/colash1.webp',
        title: 'Buceo en Loreto', span: 'col-span-1 row-span-1'
    },
    {
        id: 13, type: 'photo', category: 'action',
        src: '/assets/contentD/img/DSC06335.webp',
        title: 'Explorando Arrecifes', span: 'col-span-1 row-span-1'
    },
    {
        id: 14, type: 'photo', category: 'action',
        src: '/assets/contentD/img/DSC06361.webp',
        title: 'Ruta Subacuática', span: 'col-span-1 row-span-1'
    },
    {
        id: 15, type: 'photo', category: 'action',
        src: '/assets/contentD/img/DSC06342.webp',
        title: 'Buzo en Acción', span: 'col-span-1 row-span-1'
    },

    // ------------------------------------------------------------------------
    // 🧑‍🤝‍🧑 NUESTRO EQUIPO (team)
    // ------------------------------------------------------------------------
    {
        id: 16, type: 'photo', category: 'team',
        src: '/assets/images/staff.webp',
        title: 'Nuestro Staff Dolphin', span: 'col-span-2 row-span-1'
    },
    {
        id: 17, type: 'photo', category: 'team',
        src: '/assets/contentD/img/DSC05885.webp',
        title: 'Verificación de Tanques', span: 'col-span-1 row-span-1'
    },
    {
        id: 18, type: 'photo', category: 'team',
        src: '/assets/contentD/img/DSC06264.webp',
        title: 'Listos para Saltar', span: 'col-span-1 row-span-1'
    },
    {
        id: 20, type: 'photo', category: 'team',
        src: '/assets/contentD/img/DSC06276.webp',
        title: 'Nuestra Embarcación', span: 'col-span-1 row-span-1'
    },
    {
        id: 21, type: 'photo', category: 'team',
        src: '/assets/images/buceo.webp',
        title: 'Nuestros Guías', span: 'col-span-1 row-span-1'
    },
    {
        id: 22, type: 'photo', category: 'team',
        src: '/assets/contentD/img/DSC06320.webp',
        title: 'Asistencia en el Agua', span: 'col-span-1 row-span-2'
    },
    {
        id: 23, type: 'photo', category: 'team',
        src: '/assets/contentD/img/DSC06303.webp',
        title: 'Preparando Equipos', span: 'col-span-1 row-span-1'
    }
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
            noMore: "Has visto toda la galería"
        },
        en: {
            tag: "Our Visual Collection",
            titleStart: "Explore the",
            titleHighlight: "Ocean",
            desc: "Dive into our gallery and discover why the Sea of Cortez is known as the Aquarium of the World. Meet our sites, marine life, and the team that will guide you.",
            filters: { all: "All", marine: "Marine Life", action: "Diving", team: "Team", video: "Videos" },
            loadMore: "Load more adventures",
            noMore: "You've seen the whole gallery"
        }
    };

    const currentLang = (lang === 'en' || lang === 'es') ? lang : 'es';
    const pageTexts = texts[currentLang];

    // Carga inicial
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

    // Elementos actualmente visibles en pantalla
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

    // Soporte para Flechas del Teclado
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
    // 👇 pt-56 lg:pt-64 para despegar completamente el contenido de la Navbar Gigante
    const pageContainerClass = `
        relative min-h-screen pt-56 lg:pt-64 pb-24 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500
        bg-slate-50 text-slate-600
        dark:bg-dark dark:text-slate-200
    `;

    const getFilterBtnClass = (cat: string) => `
        px-6 py-2.5 md:py-3 rounded-full font-title text-[11px] md:text-xs tracking-widest uppercase transition-all duration-300 shadow-sm border backdrop-blur-md
        ${filter === cat
            ? 'bg-cyan-600 text-white border-cyan-600 shadow-md dark:bg-cyan-500 dark:text-navy dark:border-cyan-500'
            : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-white hover:text-cyan-600 hover:shadow-md dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-400'}
    `;

    const gridContainerClass = `
        grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[280px] gap-4 md:gap-5 lg:gap-6 grid-flow-dense mt-10
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

                {/* Luces de Fondo */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[80%] md:w-[60%] h-[40%] bg-cyan-400/20 dark:bg-cyan-500/10 blur-[130px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* ========================================================================
                        HERO HEADER DE GALERÍA
                        ======================================================================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 md:px-6 md:py-2.5 rounded-full border text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] drop-shadow-sm mb-6
                            bg-white/80 border-slate-200 text-cyan-600 dark:bg-white/5 dark:border-white/10 dark:text-cyan-400">
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

                    {/* ========================================================================
                        FILTROS
                        ======================================================================== */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-16">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => { setFilter(cat); setVisibleItems(12); }} className={getFilterBtnClass(cat)}>
                                {pageTexts.filters[cat as keyof typeof pageTexts.filters]}
                            </button>
                        ))}
                    </div>

                    {/* ========================================================================
                        GRID DE IMÁGENES / VIDEOS
                        ======================================================================== */}
                    <motion.div layout className={gridContainerClass}>
                        <AnimatePresence>
                            {currentGallery.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={`${gridItemClass} ${item.span}`}
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    {/* Muestra video vivo (muted) o imagen */}
                                    {item.type === 'video' ? (
                                        <video
                                            src={item.videoUrl}
                                            poster={item.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110 will-change-transform"
                                        />
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110 will-change-transform"
                                        />
                                    )}

                                    {/* Capa Oscura (Aparece en hover) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-dark/90 dark:via-dark/40" />

                                    {/* Icono de Play o Zoom */}
                                    <div className="absolute top-5 right-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 shadow-lg">
                                        <i className={item.type === 'video' ? 'ri-play-fill text-xl md:text-2xl ml-1' : 'ri-fullscreen-line text-lg md:text-xl'}></i>
                                    </div>

                                    {/* Textos Info (Abajo) */}
                                    <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <span className="inline-block px-3 py-1 bg-cyan-500 text-white rounded-md text-[9px] font-bold uppercase tracking-widest mb-2 shadow-sm">
                                            {pageTexts.filters[item.category as keyof typeof pageTexts.filters]}
                                        </span>
                                        <h3 className="font-title text-white text-xl md:text-2xl drop-shadow-md leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Botón Cargar Más */}
                    {visibleCount < filteredMedia.length && (
                        <div className="mt-20 text-center">
                            <button
                                onClick={() => setVisibleItems(prev => prev + 8)}
                                className="px-8 py-3.5 rounded-xl border border-slate-300 font-title text-xs md:text-sm tracking-widest uppercase transition-all shadow-sm hover:shadow-md active:scale-95 bg-white text-slate-600 hover:text-cyan-600 hover:border-cyan-300 dark:bg-white/5 dark:border-white/20 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
                            >
                                {pageTexts.loadMore} <i className="ri-loader-3-line inline-block animate-spin-slow text-lg ml-2 align-middle"></i>
                            </button>
                        </div>
                    )}

                    {/* Mensaje Final */}
                    {visibleCount >= filteredMedia.length && filteredMedia.length > 0 && (
                        <p className="mt-20 text-center font-body font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500 text-xs md:text-sm">
                            <i className="ri-check-all-line mr-2 text-cyan-500"></i> {pageTexts.noMore}
                        </p>
                    )}

                </div>
            </main>

            {/* ========================================================================
                🎬 LIGHTBOX / CARRUSEL MEJORADO (Pantalla Completa)
                ======================================================================== */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 md:p-10"
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Fondo de Cristal Muy Oscuro */}
                        <div className="absolute inset-0 bg-navy/95 dark:bg-black/95 backdrop-blur-xl" />

                        {/* Botón Cerrar Global */}
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                            className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-navy transition-all z-50 shadow-xl"
                        >
                            <i className="ri-close-line text-2xl"></i>
                        </button>

                        {/* Controles Laterales (Anterior / Siguiente) */}
                        <button onClick={handlePrev} className="hidden sm:flex absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 text-white items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all z-50 backdrop-blur-md shadow-lg">
                            <i className="ri-arrow-left-s-line text-3xl"></i>
                        </button>

                        <button onClick={handleNext} className="hidden sm:flex absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 text-white items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all z-50 backdrop-blur-md shadow-lg">
                            <i className="ri-arrow-right-s-line text-3xl"></i>
                        </button>

                        {/* Contenedor del Media Central */}
                        <motion.div
                            key={currentGallery[selectedIndex].id}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl max-h-[85vh] sm:max-h-[90vh] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-black/50 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex items-center justify-center"
                        >
                            {/* Botones Móviles superpuestos en la foto */}
                            <div className="absolute inset-0 flex items-center justify-between px-2 sm:hidden z-20 pointer-events-none">
                                <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center pointer-events-auto backdrop-blur-md"><i className="ri-arrow-left-s-line text-2xl"></i></button>
                                <button onClick={handleNext} className="w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center pointer-events-auto backdrop-blur-md"><i className="ri-arrow-right-s-line text-2xl"></i></button>
                            </div>

                            {/* El Media */}
                            {currentGallery[selectedIndex].type === 'video' ? (
                                currentGallery[selectedIndex].videoUrl?.endsWith('.webm') || currentGallery[selectedIndex].videoUrl?.endsWith('.mp4') ? (
                                    <video src={currentGallery[selectedIndex].videoUrl} controls autoPlay className="w-full h-full max-h-[85vh] sm:max-h-[90vh] object-contain" />
                                ) : (
                                    <iframe src={currentGallery[selectedIndex].videoUrl} title={currentGallery[selectedIndex].title} className="w-full h-full aspect-video border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                )
                            ) : (
                                <img src={currentGallery[selectedIndex].src} alt={currentGallery[selectedIndex].title} className="w-full h-full max-h-[85vh] sm:max-h-[90vh] object-contain" />
                            )}

                            {/* Titular Flotante en el Lightbox */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white pointer-events-none text-center">
                                <h3 className="font-title text-xl md:text-3xl tracking-wide drop-shadow-lg">{currentGallery[selectedIndex].title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}