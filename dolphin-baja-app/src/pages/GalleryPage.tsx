import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SplashScreen from '../components/SplashScreen';
import { useLanguage } from '../context/LanguageContext';

// ========================================================================
// 🗄️ BASE DE DATOS DE MEDIA (Grid Matemáticamente Perfecto)
// ========================================================================
const mediaData = [
    // --- BLOQUE 1 (Impacto Principal) ---
    // Total de celdas en ancho: 4 (2+1+1)
    {
        id: 1, type: 'video', category: 'action',
        src: '/assets/images/slide1.webp', // Portada
        videoUrl: '/assets/contentD/video/jacks-toro.webm',
        title: 'Tornado de Jacks', span: 'col-span-2 row-span-2'
    },
    {
        id: 2, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC05890.webp',
        title: 'Arrecife de Coral', span: 'col-span-1 row-span-2'
    },
    {
        id: 3, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC05885.webp',
        title: 'Descenso Azul', span: 'col-span-1 row-span-1'
    },
    {
        id: 4, type: 'photo', category: 'marine',
        src: '/assets/images/caballitos de mar.webp',
        title: 'Caballito de Mar', span: 'col-span-1 row-span-1'
    },

    // --- BLOQUE 2 (Panorámica y Staff) ---
    {
        id: 5, type: 'photo', category: 'team',
        src: '/assets/images/staff.webp',
        title: 'Nuestro Staff', span: 'col-span-2 row-span-1'
    },
    {
        id: 6, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC06264.webp',
        title: 'Tortuga Marina', span: 'col-span-1 row-span-1'
    },
    {
        id: 7, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC06280.webp',
        title: 'Pez Globo', span: 'col-span-1 row-span-1'
    },

    // --- BLOQUE 3 (Video Gigante y Detalles) ---
    {
        id: 8, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC06296.webp',
        title: 'Fondo Marino', span: 'col-span-1 row-span-1'
    },
    {
        id: 9, type: 'photo', category: 'action',
        src: '/assets/contentD/img/DSC06276.webp',
        title: 'Exploración', span: 'col-span-1 row-span-1'
    },
    {
        id: 10, type: 'video', category: 'marine',
        src: '/assets/images/focahome.webp', // Portada
        videoUrl: '/assets/contentD/video/GX010057.webm',
        title: 'Juego con Lobos', span: 'col-span-2 row-span-2'
    },
    {
        id: 11, type: 'photo', category: 'team',
        src: '/assets/contentD/img/DSC06303.webp',
        title: 'Preparación', span: 'col-span-1 row-span-1'
    },
    {
        id: 12, type: 'photo', category: 'marine',
        src: '/assets/images/alebrije.webp',
        title: 'Nudibranquio', span: 'col-span-1 row-span-1'
    },

    // --- BLOQUE 4 (Interacción y Macro) ---
    {
        id: 13, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC06320.webp',
        title: 'Coral Negro', span: 'col-span-1 row-span-2'
    },
    {
        id: 14, type: 'video', category: 'action',
        src: '/assets/images/tours.webp', // Portada
        videoUrl: '/assets/contentD/video/GX010803.webm',
        title: 'Buceo en Corrientes', span: 'col-span-2 row-span-1'
    },
    {
        id: 15, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC06330.webp',
        title: 'Cardumen', span: 'col-span-1 row-span-2'
    },
    {
        id: 16, type: 'photo', category: 'action',
        src: '/assets/contentD/img/DSC06342.webp',
        title: 'Inmersión', span: 'col-span-2 row-span-1'
    },

    // --- BLOQUE 5 (Cierre Visual) ---
    {
        id: 17, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC06335.webp',
        title: 'Bancos de Peces', span: 'col-span-1 row-span-1'
    },
    {
        id: 18, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC05892.webp',
        title: 'Estrella de Mar', span: 'col-span-1 row-span-1'
    },
    {
        id: 19, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC06354.webp',
        title: 'Fauna Escondida', span: 'col-span-1 row-span-1'
    },
    {
        id: 20, type: 'photo', category: 'marine',
        src: '/assets/contentD/img/DSC06361.webp',
        title: 'Texturas', span: 'col-span-1 row-span-1'
    },
    {
        id: 21, type: 'video', category: 'action',
        src: '/assets/images/isla.webp', // Portada
        videoUrl: '/assets/contentD/video/tijeritass.webm',
        title: 'Tijeritas', span: 'col-span-2 row-span-1'
    },
    {
        id: 22, type: 'photo', category: 'team',
        src: '/assets/nosotros/equipo.webp',
        title: 'Equipo Dolphin', span: 'col-span-2 row-span-1'
    }
];

const categories = ['all', 'marine', 'action', 'team', 'video'];

export default function GalleryPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { lang } = useLanguage();

    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleItems] = useState(12);
    const [selectedMedia, setSelectedMedia] = useState<any | null>(null);

    // Textos locales (A prueba de fallos)
    const texts = {
        es: {
            title: "Explora el Océano",
            desc: "Sumérgete en nuestra galería y descubre por qué el Mar de Cortés es conocido como el Acuario del Mundo.",
            filters: { all: "Todos", marine: "Vida Marina", action: "Buceo", team: "Equipo", video: "Videos" },
            loadMore: "Cargar más aventuras",
            noMore: "Has visto toda la galería"
        },
        en: {
            title: "Explore the Ocean",
            desc: "Dive into our gallery and discover why the Sea of Cortez is known as the Aquarium of the World.",
            filters: { all: "All", marine: "Marine Life", action: "Diving", team: "Team", video: "Videos" },
            loadMore: "Load more adventures",
            noMore: "You've seen the whole gallery"
        }
    };

    const currentLang = (lang === 'en' || lang === 'es') ? lang : 'es';
    const pageTexts = texts[currentLang];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (selectedMedia) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedMedia]);

    const filteredMedia = mediaData.filter(item => {
        if (filter === 'all') return true;
        if (filter === 'video') return item.type === 'video';
        return item.category === filter;
    });

    const pageContainerClass = `
    relative min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12 xl:px-20 overflow-hidden transition-colors duration-500
    bg-slate-50 text-slate-600
    dark:bg-dark dark:text-slate-200
  `;

    const getFilterBtnClass = (cat: string) => `
    px-5 py-2 rounded-full font-title text-xs md:text-sm tracking-widest uppercase transition-all duration-300 shadow-sm border
    ${filter === cat
            ? 'bg-cyan-500 text-white border-cyan-500 dark:bg-cyan-400 dark:text-dark'
            : 'bg-white border-slate-200 text-slate-500 hover:border-cyan-400 hover:text-cyan-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:border-white/30 dark:hover:text-white'}
  `;

    // AGREGADO: grid-flow-dense para rellenar huecos automáticamente si se filtra
    const gridContainerClass = `
        grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-3 md:gap-4 lg:gap-5 grid-flow-dense
    `;

    const gridItemClass = `
    relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 cursor-pointer shadow-lg hover:-translate-y-1
    bg-white/50 dark:bg-white/5
    border-slate-200 shadow-slate-200/50 hover:shadow-cyan-200/50
    dark:border-white/10 dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] dark:hover:border-cyan-400/40
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

                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[80%] h-[40%] bg-cyan-400/10 dark:bg-cyan-400/5 blur-[120px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <span className="inline-block font-body text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 px-4 py-1.5 rounded-full border bg-white/80 border-white/60 text-cyan-600 dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 shadow-sm">
                            Media
                        </span>
                        <h1 className="font-title text-4xl md:text-5xl lg:text-7xl mb-6 text-navy dark:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            {pageTexts.title}
                        </h1>
                        <p className="font-body text-lg md:text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
                            {pageTexts.desc}
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => { setFilter(cat); setVisibleItems(12); }} className={getFilterBtnClass(cat)}>
                                {pageTexts.filters[cat as keyof typeof pageTexts.filters]}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className={gridContainerClass}>
                        <AnimatePresence>
                            {filteredMedia.slice(0, visibleCount).map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={`${gridItemClass} ${item.span}`}
                                    onClick={() => setSelectedMedia(item)}
                                >
                                    {/* Imagen de Portada (Thumbnail) */}
                                    <img src={item.src} alt={item.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-dark/90 dark:via-dark/30" />

                                    {/* Icono de Play si es video */}
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        <i className={item.type === 'video' ? 'ri-play-fill text-xl ml-0.5' : 'ri-fullscreen-line text-lg'}></i>
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-1 block drop-shadow-md">
                                            {pageTexts.filters[item.category as keyof typeof pageTexts.filters]}
                                        </span>
                                        <h3 className="font-title text-white text-lg md:text-xl drop-shadow-md truncate">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {visibleCount < filteredMedia.length && (
                        <div className="mt-16 text-center">
                            <button
                                onClick={() => setVisibleItems(prev => prev + 8)}
                                className="px-8 py-3 rounded-xl border-2 font-title text-sm tracking-widest uppercase transition-all shadow-md active:scale-95 bg-transparent border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-dark dark:shadow-none"
                            >
                                {pageTexts.loadMore} <i className="ri-loader-3-line inline-block animate-spin-slow ml-2"></i>
                            </button>
                        </div>
                    )}
                    {visibleCount >= filteredMedia.length && filteredMedia.length > 0 && (
                        <p className="mt-16 text-center font-body text-slate-400 dark:text-slate-500 text-sm">
                            {pageTexts.noMore}
                        </p>
                    )}

                </div>
            </main>

            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
                    >
                        <button
                            onClick={() => setSelectedMedia(null)}
                            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:scale-110 transition-all z-50"
                        >
                            <i className="ri-close-line text-2xl"></i>
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl md:rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center"
                        >
                            {/* REPRODUCTOR DE VIDEO NATIVO MEJORADO */}
                            {selectedMedia.type === 'video' ? (
                                selectedMedia.videoUrl.endsWith('.webm') || selectedMedia.videoUrl.endsWith('.mp4') ? (
                                    <video
                                        src={selectedMedia.videoUrl}
                                        controls
                                        autoPlay
                                        className="w-full h-full max-h-[90vh] object-contain"
                                    />
                                ) : (
                                    <iframe
                                        src={selectedMedia.videoUrl}
                                        title={selectedMedia.title}
                                        className="w-full h-full aspect-video border-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                )
                            ) : (
                                <img src={selectedMedia.src} alt={selectedMedia.title} className="w-full h-full max-h-[90vh] object-contain" />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}