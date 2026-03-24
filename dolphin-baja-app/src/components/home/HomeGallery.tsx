import { motion } from 'framer-motion';

// Importamos el contexto de idioma
import { useLanguage } from '../../context/LanguageContext';

// --- IMÁGENES ---
import img1 from '/assets/nosotros/coral.webp';
import img2 from '/assets/images/colash2.webp';
import img3 from '/assets/images/colash3.webp';
import img4 from '/assets/images/colash4.webp';
import img5 from '/assets/images/colash5.webp';
import img6 from '/assets/images/colash6.webp';
import img7 from '/assets/images/colash7.webp';
import img8 from '/assets/images/colash8.webp';
import img9 from '/assets/contentD/img/reel1.webp';
import img10 from '/assets/nosotros/team.webp';
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

    const row1 = [
        { id: 1, src: img1, title: content.images[0] || "Explorando profundidades" },
        { id: 2, src: img2, title: content.images[1] || "Aventuras únicas" },
        { id: 3, src: imgAlebrijes, title: content.images[10] || "Alebrijes del Mar" },
        { id: 4, src: img4, title: content.images[3] || "Momentos de paz" },
        { id: 5, src: img5, title: content.images[4] || "Nuestro Staff" },
        { id: 6, src: imgCaballitos, title: content.images[11] || "Caballitos de Mar" },
        { id: 7, src: img7, title: content.images[6] || "Experiencias PADI" },
        { id: 8, src: imgHomecar, title: content.images[13] || "Detalles Únicos" },
        { id: 9, src: img9, title: content.images[8] || "Equipamiento" },
        { id: 10, src: imgFocahome, title: content.images[12] || "Nuestros Amigos" },
    ];

    const row2 = [
        { id: 11, src: img3, title: content.images[2] || "Vida marina" },
        { id: 12, src: imgHomef, title: content.images[14] || "Biodiversidad" },
        { id: 13, src: img6, title: content.images[5] || "El Mar de Cortés" },
        { id: 14, src: imgMarprofundo, title: content.images[16] || "Mar Profundo" },
        { id: 15, src: img8, title: content.images[7] || "Aguas cristalinas" },
        { id: 16, src: imgPzcolor, title: content.images[17] || "Colores Vivos" },
        { id: 17, src: img10, title: content.images[9] || "Únete hoy" },
        { id: 18, src: imgHomein, title: content.images[15] || "Inmersión Total" },
        { id: 19, src: imgPzcolor2, title: content.images[18] || "Arrecifes" },
        { id: 20, src: imgVdmar, title: content.images[19] || "Vida Marina" },
        { id: 21, src: imgVol, title: content.images[20] || "Aventuras" },
    ];

    const instaBtnClass = `
      inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 rounded-xl font-title text-[11px] md:text-xs tracking-widest uppercase transition-all duration-300 group shadow-xl hover:-translate-y-1 active:translate-y-0
      bg-cyan-600 text-white border border-cyan-600 
      hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-cyan-500/30
      dark:bg-cyan-500 dark:border-cyan-500 dark:text-navy 
      dark:hover:bg-cyan-400 dark:hover:border-cyan-400 dark:shadow-none
    `;

    const cardClass = `
      relative w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] lg:w-[450px] lg:h-[300px] 
      rounded-[2rem] overflow-hidden shrink-0 group cursor-pointer 
      border border-slate-200 dark:border-white/10 shadow-lg bg-slate-900
    `;

    const TrackBlock = ({ items }: { items: typeof row1 }) => (
        <div className="flex shrink-0 gap-4 md:gap-6 pr-4 md:pr-6">
            {items.map((item, idx) => (
                <div key={idx} className={cardClass}>
                    <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        // 👇 APLICADO FILTRO DE CONTRASTE Y SATURACIÓN
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 filter contrast-[1.20] saturate-[1.15]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                        <p className="text-white font-title text-xl md:text-2xl drop-shadow-md leading-tight">
                            {item.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="relative z-10 w-full py-10 md:py-16 overflow-hidden transition-colors duration-500 bg-slate-50 dark:bg-dark">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[60%] w-[80%] rounded-full blur-[120px] pointer-events-none transition-colors duration-500 bg-cyan-400/10 dark:bg-cyan-500/10" />

            <div className="max-w-[1600px] mx-auto relative z-20">

                <div className="text-center mb-16 md:mb-24 px-6 relative">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm
                        text-cyan-700 bg-white border-slate-200
                        dark:text-cyan-400 dark:bg-white/5 dark:border-white/10"
                    >
                        <i className="ri-image-circle-line text-sm"></i> {content.tag}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="font-title text-4xl sm:text-5xl lg:text-6xl drop-shadow-sm leading-tight transition-colors duration-500 text-navy dark:text-white"
                    >
                        {content.title}
                    </motion.h2>
                </div>

                {/* FILA 1 - IZQUIERDA A DERECHA (Sin bordes blancos) */}
                <div className="relative flex overflow-hidden w-full mb-4 md:mb-6">
                    <motion.div
                        className="flex shrink-0"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 80, repeat: Infinity }}
                        style={{ width: "max-content", willChange: "transform" }}
                    >
                        <TrackBlock items={row1} />
                        <TrackBlock items={row1} />
                    </motion.div>
                </div>

                {/* FILA 2 - DERECHA A IZQUIERDA (Sin bordes blancos) */}
                <div className="relative flex overflow-hidden w-full">
                    <motion.div
                        className="flex shrink-0"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 95, repeat: Infinity }}
                        style={{ width: "max-content", willChange: "transform" }}
                    >
                        <TrackBlock items={row2} />
                        <TrackBlock items={row2} />
                    </motion.div>
                </div>

                <div className="mt-16 md:mt-24 text-center px-6">
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        href="https://www.instagram.com/dolphindivebajaloreto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={instaBtnClass}
                    >
                        <i className="ri-instagram-line text-lg group-hover:scale-110 transition-transform"></i>
                        {content.btnInsta}
                        <i className="ri-arrow-right-up-line group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                    </motion.a>
                </div>

            </div>
        </section>
    );
}