import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const content = t.aboutPage.gallery;

  return (
    <section id="galeria" className="relative pt-20 pb-0 scroll-mt-20 z-10">

      {/* =========================================
          1. SECCIÓN CRESSI POINT (Liquid Glass Apple)
      ========================================= */}
      <div className="px-6 md:px-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // 👇 bg-white/5 para absorber la luz del fondo azul marino, sombra más sutil
          className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-[0_15px_40px_rgba(0,0,0,0.3)] group"
        >
          {/* Imágenes Tienda */}
          <div className="w-full md:w-1/2 grid grid-cols-2 p-4 md:p-6 gap-3 md:gap-4 bg-white/5">
            {['tienda4.webp', 'tienda2.webp', 'tienda3.webp', 'tienda1.webp'].map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] bg-cover bg-center border border-white/10 shadow-md transition-transform duration-500 hover:scale-[1.03]"
                style={{ backgroundImage: `url("/assets/nosotros/${img}")`, willChange: "transform" }}
              />
            ))}
          </div>

          {/* Texto de la Tienda */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Brillo sutil de fondo (Luminoso) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[80px] -z-10 pointer-events-none transition-opacity duration-500 group-hover:bg-cyan-400/20" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 font-body drop-shadow-md">
              {content.cressi.tag}
            </span>
            <h2 className="font-title text-3xl md:text-5xl text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] leading-tight">
              {content.cressi.title}
            </h2>
            <p className="font-body text-base md:text-lg text-slate-200 mb-8 leading-relaxed">
              {content.cressi.desc}
            </p>
            <a
              href="https://wa.me/526131182311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-cyan-400 font-bold hover:text-cyan-300 transition-colors font-title tracking-widest uppercase text-sm group/btn"
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
          <h2 className="font-title text-3xl md:text-5xl text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            {content.collage.title}
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
        </motion.div>

        {/* Grid Asimétrico (Masonry Style CSS) */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-3 md:gap-4">

          {/* FOTO 1: Grande */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-[1.5rem] md:col-span-2 md:row-span-2 border border-white/10"
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash1.webp" alt="Dolphin Dive 1" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform" />
            {/* 👇 Degradado suave en lugar de bg-dark/80 masivo */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* FOTO 2: Apaisada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group overflow-hidden rounded-[1.5rem] md:col-span-2 md:row-span-1 border border-white/10 hidden md:block"
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash2.webp" alt="Dolphin Dive 2" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* FOTO 3: Normal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-[1.5rem] border border-white/10"
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash3.webp" alt="Dolphin Dive 3" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform" />
            {/* 👇 Fuera mix-blend-overlay. Tinte cyan ligero en hover */}
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* FOTO 4: Normal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group overflow-hidden rounded-[1.5rem] border border-white/10"
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash4.webp" alt="Dolphin Dive 4" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform" />
            {/* 👇 Tinte yellow ligero en hover */}
            <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* FOTO 5: Vertical */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group overflow-hidden rounded-[1.5rem] md:row-span-2 border border-white/10 hidden md:block"
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash5.webp" alt="Dolphin Dive 5" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* FOTO 6: Normal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative group overflow-hidden rounded-[1.5rem] border border-white/10"
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash6.webp" alt="Dolphin Dive 6" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform" />
          </motion.div>

          {/* FOTO 7: Apaisada inferior (Instagram) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative group overflow-hidden rounded-[1.5rem] md:col-span-2 md:row-span-1 border border-white/10 cursor-pointer"
            style={{ willChange: "transform" }}
            onClick={() => window.open('https://www.instagram.com/dolphindivebajaloreto', '_blank')}
          >
            <img src="/assets/images/colash7.webp" alt="Dolphin Dive 7" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform" />
            {/* 👇 Overlay Instagram más limpio y cristalino */}
            <div className="absolute inset-0 bg-navy/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <i className="ri-instagram-line text-5xl text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)] scale-50 group-hover:scale-100 transition-transform duration-500"></i>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}