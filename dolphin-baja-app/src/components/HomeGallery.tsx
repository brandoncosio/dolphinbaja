import React from 'react';
import { motion } from 'framer-motion';

// Imágenes para la galería (usamos las del collage que ya tienes)
// Asegúrate de tener estas imágenes en tu carpeta public/assets/imagenes/
import img1 from '/assets/images/colash1.webp';
import img2 from '/assets/images/colash2.webp';
import img3 from '/assets/images/colash3.webp';
import img4 from '/assets/images/colash4.webp';
import img5 from '/assets/images/colash5.webp';
import img6 from '/assets/images/colash6.webp';
import img7 from '/assets/images/colash7.webp';
import img8 from '/assets/images/colash8.webp';

const galleryItems = [
    { id: 1, src: img1, title: "Arrecifes de Coral", size: "md:col-span-2 md:row-span-2" }, // Grande cuadrada
    { id: 2, src: img2, title: "Vida Nocturna", size: "md:col-span-1 md:row-span-1" },
    { id: 3, src: img3, title: "Lobos Marinos", size: "md:col-span-1 md:row-span-2" }, // Alta vertical
    { id: 4, src: img4, title: "Aguas Cristalinas", size: "md:col-span-1 md:row-span-1" },
    { id: 5, src: img5, title: "Cardúmenes", size: "md:col-span-2 md:row-span-1" }, // Ancha horizontal
    { id: 6, src: img6, title: "Exploración", size: "md:col-span-1 md:row-span-1" },
    { id: 7, src: img7, title: "Tortugas Marinas", size: "md:col-span-1 md:row-span-1" },
    { id: 8, src: img8, title: "Atardeceres Mágicos", size: "md:col-span-1 md:row-span-1" },
];

export default function HomeGallery() {
    return (
        <section className="bg-slate-900 py-24 px-6 md:px-12 relative overflow-hidden">

            {/* Decoración de fondo */}
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent pointer-events-none z-10" />

            <div className="max-w-[1400px] mx-auto relative z-20">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4"
                    >
                        Galería
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-title text-3xl md:text-5xl text-white"
                    >
                        Instantes Inolvidables
                    </motion.h2>
                </div>

                {/* Grid Mosaico (Bento Grid) */}
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`relative group rounded-3xl overflow-hidden cursor-pointer ${item.size}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            {/* Imagen */}
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Hover */}
                            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <p className="text-white font-title text-lg md:text-xl text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </p>
                            </div>

                            {/* Borde sutil */}
                            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Botón Ver Más */}
                <div className="mt-12 text-center">
                    <a
                        href="https://www.instagram.com/dolphindivebajaloreto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white font-title hover:bg-yellow-400 hover:text-slate-900 hover:border-yellow-400 transition-all duration-300 group"
                    >
                        <i className="ri-instagram-line text-xl"></i>
                        Ver más en Instagram
                        <i className="ri-arrow-right-up-line group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>

            </div>
        </section>
    );
}