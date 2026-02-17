import { motion } from 'framer-motion';

// Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

// --- IMÁGENES ORIGINALES ---
import img1 from '/assets/nosotros/coral.webp';
import img2 from '/assets/images/colash2.webp';
import img3 from '/assets/images/colash3.webp';
import img4 from '/assets/images/colash4.webp';
import img5 from '/assets/images/colash5.webp';
import img6 from '/assets/images/colash6.webp';
import img7 from '/assets/images/colash7.webp';
import img8 from '/assets/images/colash8.webp';
// Imágenes de nosotros
import img9 from '/assets/nosotros/tienda1.webp';
import img10 from '/assets/nosotros/team.webp';

// --- NUEVAS IMÁGENES (Rutas de texto) ---
const imgAlebrijes = "/assets/images/alebrije.webp";
const imgCaballitos = "/assets/images/caballitos de mar.webp";
const imgFocahome = "/assets/images/focahome.webp";
const imgHomecar = "/assets/images/homecar.webp";
const imgHomef = "/assets/images/homef.webp";
const imgHomein = "/assets/images/homein.webp";
const imgMarprofundo = "/assets/images/marprofundo.webp";
const imgPzcolor = "/assets/images/pzcolor.webp";
const imgPzcolor2 = "/assets/images/pzcolor2.webp";
const imgVdmar = "/assets/images/vdmar.webp";
const imgVol = "/assets/images/vol.webp";

export default function HomeGallery() {
    const { t } = useLanguage();
    const content = t.home.gallery;

    // Ampliamos el mosaico mezclando las nuevas imágenes
    const galleryItems = [
        // --- TUS 10 IMÁGENES ORIGINALES (INTACTAS) ---
        { id: 1, src: img1, title: content.images[0] || "Explorando profundidades", size: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" },
        { id: 2, src: img2, title: content.images[1] || "Aventuras únicas", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 3, src: img3, title: content.images[2] || "Vida marina", size: "col-span-1 row-span-2 md:col-span-1 md:row-span-2" },
        { id: 4, src: img4, title: content.images[3] || "Momentos de paz", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 5, src: img5, title: content.images[4] || "Nuestro Staff", size: "col-span-2 row-span-1 md:col-span-2 md:row-span-1" },
        { id: 6, src: img6, title: content.images[5] || "El Mar de Cortés", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 7, src: img7, title: content.images[6] || "Experiencias PADI", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 8, src: img8, title: content.images[7] || "Aguas cristalinas", size: "col-span-2 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 9, src: img9, title: content.images[8] || "Equipamiento", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 10, src: img10, title: content.images[9] || "Únete hoy", size: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },

        // --- NUEVAS IMÁGENES AGREGADAS (Ahora conectadas a translations.js) ---
        { id: 11, src: imgAlebrijes, title: content.images[10] || "Alebrijes del Mar", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 12, src: imgCaballitos, title: content.images[11] || "Caballitos de Mar", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        // Destacada grande (2x2)
        { id: 13, src: imgFocahome, title: content.images[12] || "Nuestros Amigos", size: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" }, 
        { id: 14, src: imgHomecar, title: content.images[13] || "Detalles Únicos", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 15, src: imgHomef, title: content.images[14] || "Biodiversidad", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 16, src: imgHomein, title: content.images[15] || "Inmersión Total", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 17, src: imgMarprofundo, title: content.images[16] || "Mar Profundo", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        // Panorámica (2x1)
        { id: 18, src: imgPzcolor, title: content.images[17] || "Colores Vivos", size: "col-span-2 row-span-1 md:col-span-2 md:row-span-1" }, 
        { id: 19, src: imgPzcolor2, title: content.images[18] || "Arrecifes", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 20, src: imgVdmar, title: content.images[19] || "Vida Marina", size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
        { id: 21, src: imgVol, title: content.images[20] || "Aventuras", size: "col-span-2 row-span-1 md:col-span-2 md:row-span-1" },
    ];

    return (
        <section className="relative z-10 w-full py-16 md:py-24 px-4 md:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-20">

                {/* =========================================
                    ENCABEZADO LUMINOSO
                ========================================= */}
                <div className="text-center mb-12 md:mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-48 w-64 md:w-96 rounded-full bg-cyan-400/20 blur-[80px] pointer-events-none" />

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
                        className="font-title text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] leading-tight"
                    >
                        {content.title}
                    </motion.h2>
                </div>

                {/* =========================================
                    GRID MOSAICO (Apple-Style Glass)
                ========================================= */}
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[200px] gap-2 md:gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`relative group rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-cyan-400/40 hover:shadow-[0_15px_40px_rgba(102,216,227,0.2)] transition-all duration-500 ${item.size}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 4) * 0.05, ease: "easeOut" }}
                            style={{ willChange: "transform" }}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="absolute inset-0 flex items-end md:items-center justify-center p-4 pb-6 md:p-2 z-10 pointer-events-none">
                                <p className="text-white font-title text-sm sm:text-base md:text-xl text-center md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:opacity-0 md:group-hover:opacity-100 leading-tight">
                                    {item.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* =========================================
                    BOTÓN INSTAGRAM (Liquid Glass Apple)
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
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-title text-sm tracking-widest uppercase hover:bg-cyan-400/20 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(102,216,227,0.2)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group shadow-[0_10px_20px_rgba(0,0,0,0.2)] w-full sm:w-auto"
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