import { motion } from 'framer-motion';

// Importamos el contexto de idioma
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
    const { t } = useLanguage();
    const content = t.home.gallery;

    const galleryItems = [
        // En móvil (grid-cols-2): Mantenemos proporciones asimétricas pero ajustadas a 2 columnas
        { id: 1, src: img1, title: content.images[0], size: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" },
        { id: 2, src: img2, title: content.images[1], size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 3, src: img3, title: content.images[2], size: "col-span-1 row-span-2 md:col-span-1 md:row-span-2" },
        { id: 4, src: img4, title: content.images[3], size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 5, src: img5, title: content.images[4], size: "col-span-2 row-span-1 md:col-span-2 md:row-span-1" },
        { id: 6, src: img6, title: content.images[5], size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 7, src: img7, title: content.images[6], size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 8, src: img8, title: content.images[7], size: "col-span-2 row-span-1 md:col-span-1 md:row-span-1" }, // La última se hace ancha en móvil
    ];

    return (
        <section className="relative z-10 w-full py-16 md:py-24 px-4 md:px-12 overflow-hidden">

            <div className="max-w-[1400px] mx-auto relative z-20">

                {/* =========================================
                    ENCABEZADO
                ========================================= */}
                <div className="text-center mb-12 md:mb-16 relative">
                    {/* Reflejo sutil detrás del título (Sin mix-blend) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-48 w-64 rounded-full bg-cyan-400/10 blur-[80px] pointer-events-none" />

                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 drop-shadow-md"
                    >
                        {content.tag}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="font-title text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg leading-tight"
                    >
                        {content.title}
                    </motion.h2>
                </div>

                {/* =========================================
                    GRID MOSAICO (Bento Grid Seguro para iOS)
                ========================================= */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[200px] gap-2 md:gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`relative group rounded-2xl md:rounded-3xl overflow-hidden bg-dark/20 border border-white/10 ${item.size}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                            style={{ willChange: "transform" }} // 👈 Obliga al uso de GPU en iOS
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                // Eliminamos MD:group-hover y lo dejamos en todo tamaño, pero sin blur para no causar lag
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform"
                            />

                            {/* Overlay Oscuro Inteligente (Visible en móvil, dinámico en PC) */}
                            {/* En móvil, un gradiente constante abajo. En PC, cubre todo al hacer hover. */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent md:bg-dark/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="absolute inset-0 flex items-end md:items-center justify-center p-4 pb-6 md:p-2 z-10 pointer-events-none">
                                {/* Título de la imagen */}
                                {/* En móvil siempre visible abajo. En PC aparece en el centro al hacer hover. */}
                                <p className="text-white font-title text-sm sm:text-base md:text-xl text-center md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:opacity-0 md:group-hover:opacity-100 leading-tight">
                                    {item.title}
                                </p>
                            </div>
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
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-title text-sm tracking-widest uppercase hover:bg-cyan-400/20 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(102,216,227,0.2)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group shadow-lg w-full sm:w-auto"
                    >
                        <i className="ri-instagram-line text-xl group-hover:scale-110 transition-transform"></i>
                        {content.btnInsta}
                        <i className="ri-arrow-right-up-line group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                    </motion.a>
                </div>

            </div>
        </section>
    );
}