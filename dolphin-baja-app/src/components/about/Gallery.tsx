import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const content = t.aboutPage.gallery;

  return (
    <section id="galeria" className="relative pt-20 pb-0 scroll-mt-20 z-10">

      {/* =========================================
          1. SECCIÓN CRESSI POINT (Liquid Glass)
      ========================================= */}
      <div className="px-6 md:px-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto bg-dark/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
        >
          {/* Imágenes Tienda */}
          <div className="w-full md:w-1/2 grid grid-cols-2 p-4 md:p-6 gap-3 md:gap-4 bg-white/5">
            {['tienda4.webp', 'tienda2.webp', 'tienda3.webp', 'tienda1.webp'].map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] bg-cover bg-center border border-white/10 shadow-lg transition-transform duration-500 hover:scale-[1.03]"
                style={{ backgroundImage: `url("/assets/nosotros/${img}")` }}
              />
            ))}
          </div>

          {/* Texto de la Tienda */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Brillo sutil de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px] -z-10 pointer-events-none transition-opacity duration-500 group-hover:bg-cyan-400/10" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 font-body drop-shadow-md">
              {content.cressi.tag}
            </span>
            <h2 className="font-title text-3xl md:text-5xl text-white mb-6 drop-shadow-md leading-tight">
              {content.cressi.title}
            </h2>
            <p className="font-body text-base md:text-lg text-slate-300 mb-8 leading-relaxed">
              {content.cressi.desc}
            </p>
            <a
              href="https://wa.me/526131182311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-cyan-400 font-bold hover:text-white transition-colors font-title tracking-widest uppercase text-sm group/btn"
            >
              {content.cressi.cta}
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 transition-colors group-hover/btn:bg-cyan-400 group-hover/btn:text-dark">
                <i className="ri-arrow-right-line text-lg transition-transform group-hover/btn:translate-x-1"></i>
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          2. COLLAGE FINAL (Diseño Asimétrico / Editorial)
      ========================================= */}
      <div className="w-full relative px-4 md:px-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-title text-3xl md:text-5xl text-white drop-shadow-lg">
            {content.collage.title}
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
        </motion.div>

        {/* Grid Asimétrico (Masonry Style CSS)
          En móvil son 2 columnas y alturas estándar. 
          En desktop son 4 columnas con celdas de diferentes tamaños (col-span, row-span).
        */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-3 md:gap-4">

          {/* FOTO 1: Grande (Ocupa 2 columnas y 2 filas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-[1.5rem] md:col-span-2 md:row-span-2 border border-white/10"
          >
            <img src="/assets/images/colash1.webp" alt="Dolphin Dive 1" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* FOTO 2: Apaisada (2 columnas, 1 fila) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group overflow-hidden rounded-[1.5rem] md:col-span-2 md:row-span-1 border border-white/10 hidden md:block"
          >
            <img src="/assets/images/colash2.webp" alt="Dolphin Dive 2" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* FOTO 3: Normal (1 col, 1 fila) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-[1.5rem] border border-white/10"
          >
            <img src="/assets/images/colash3.webp" alt="Dolphin Dive 3" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-cyan-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
          </motion.div>

          {/* FOTO 4: Normal (1 col, 1 fila) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group overflow-hidden rounded-[1.5rem] border border-white/10"
          >
            <img src="/assets/images/colash4.webp" alt="Dolphin Dive 4" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
          </motion.div>

          {/* FOTO 5: Vertical (1 col, 2 filas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group overflow-hidden rounded-[1.5rem] md:row-span-2 border border-white/10 hidden md:block"
          >
            <img src="/assets/images/colash5.webp" alt="Dolphin Dive 5" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* FOTO 6: Normal (1 col, 1 fila) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative group overflow-hidden rounded-[1.5rem] border border-white/10"
          >
            <img src="/assets/images/colash6.webp" alt="Dolphin Dive 6" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </motion.div>

          {/* FOTO 7: Apaisada inferior (2 col, 1 fila) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative group overflow-hidden rounded-[1.5rem] md:col-span-2 md:row-span-1 border border-white/10"
          >
            <img src="/assets/images/colash7.webp" alt="Dolphin Dive 7" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-dark/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <i className="ri-instagram-line text-4xl text-white drop-shadow-md scale-50 group-hover:scale-100 transition-transform duration-500"></i>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}