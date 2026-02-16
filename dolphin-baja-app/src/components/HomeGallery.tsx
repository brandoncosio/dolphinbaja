import React from 'react';
import { motion } from 'framer-motion';

// 👇 1. Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

// Imágenes para la galería
import img1 from '/assets/images/colash1.webp';
import img2 from '/assets/images/colash2.webp';
import img3 from '/assets/images/colash3.webp';
import img4 from '/assets/images/colash4.webp';
import img5 from '/assets/images/colash5.webp';
import img6 from '/assets/images/colash6.webp';
import img7 from '/assets/images/colash7.webp';
import img8 from '/assets/images/colash8.webp';

export default function HomeGallery() {
    // 👇 2. Extraemos las traducciones de la galería
    const { t } = useLanguage();
    const content = t.home.gallery;

    // 👇 3. Combinamos las imágenes con los títulos traducidos
    const galleryItems = [
        { id: 1, src: img1, title: content.images[0], size: "md:col-span-2 md:row-span-2" }, // Grande cuadrada
        { id: 2, src: img2, title: content.images[1], size: "md:col-span-1 md:row-span-1" },
        { id: 3, src: img3, title: content.images[2], size: "md:col-span-1 md:row-span-2" }, // Alta vertical
        { id: 4, src: img4, title: content.images[3], size: "md:col-span-1 md:row-span-1" },
        { id: 5, src: img5, title: content.images[4], size: "md:col-span-2 md:row-span-1" }, // Ancha horizontal
        { id: 6, src: img6, title: content.images[5], size: "md:col-span-1 md:row-span-1" },
        { id: 7, src: img7, title: content.images[6], size: "md:col-span-1 md:row-span-1" },
        { id: 8, src: img8, title: content.images[7], size: "md:col-span-1 md:row-span-1" },
    ];

    return (
        // Fondo transparente (relative z-10) para ver las luces oceánicas
        <section className="relative z-10 w-full py-16 md:py-24 px-6 md:px-12">

            <div className="max-w-[1400px] mx-auto relative z-20">

                {/* =========================================
            ENCABEZADO
        ========================================= */}
                <div className="text-center mb-12 md:mb-16 relative">
                    {/* Reflejo sutil detrás del título */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-32 w-48 rounded-full bg-cyan-400/10 blur-[80px] pointer-events-none" />

                    {/* 👇 Textos Traducidos */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 drop-shadow-md"
                    >
                        {content.tag}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="font-title text-3xl md:text-5xl text-white drop-shadow-lg leading-tight"
                    >
                        {content.title}
                    </motion.h2>
                </div>

                {/* =========================================
            GRID MOSAICO (Bento Grid)
        ========================================= */}
                <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-3 md:gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] bg-dark/20 ${item.size}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                        >
                            {/* Imagen con zoom muy fluido */}
                            <img
                                src={item.src}
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out md:group-hover:scale-110" // Hover solo en desktop
                            />

                            {/* Overlay Hover (Cristal Esmerilado / Liquid Glass) - Siempre visible en móvil, hover en PC */}
                            <div className="absolute inset-0 bg-dark/40 md:bg-dark/40 backdrop-blur-[2px] md:backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-2">

                                {/* Marco interno sutil que aparece en hover (Solo PC) */}
                                <div className="hidden md:block absolute inset-4 border border-white/20 rounded-2xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 pointer-events-none"></div>

                                {/* Título de la imagen */}
                                <p className="text-white font-title text-sm sm:text-lg md:text-xl text-center transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg leading-tight">
                                    {item.title}
                                </p>
                            </div>

                            {/* Borde sutil constante estilo cristal */}
                            <div className="absolute inset-0 border border-white/10 rounded-2xl md:rounded-3xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* =========================================
            BOTÓN INSTAGRAM (Liquid Glass)
        ========================================= */}
                <div className="mt-12 md:mt-16 text-center">
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        href="https://www.instagram.com/dolphindivebajaloreto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-title text-xs md:text-sm tracking-wide hover:bg-cyan-400/20 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(102,216,227,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 group w-full sm:w-auto"
                    >
                        <i className="ri-instagram-line text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
                        {content.btnInsta}
                        <i className="ri-arrow-right-up-line md:group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-transform"></i>
                    </motion.a>
                </div>

            </div>
        </section>
    );
}