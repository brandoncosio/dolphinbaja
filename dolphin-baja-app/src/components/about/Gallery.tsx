import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const content = t.aboutPage.gallery;

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Clean Code & Gallery Styling)
  // ========================================================================

  // 1. Tarjeta Tienda Cressi (Contenedor Principal)
  const shopCardClass = `
    max-w-7xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden border flex flex-col md:flex-row shadow-2xl group transition-all duration-500
    /* LIGHT MODE */
    bg-white border-slate-200 shadow-slate-200/50
    /* DARK MODE (Matte Glass) */
    dark:bg-white/5 dark:backdrop-blur-2xl dark:border-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)]
  `;

  // 2. Contenedor de Fotos de la Tienda (Grid Izquierdo)
  const shopImagesContainerClass = `
    w-full md:w-1/2 grid grid-cols-2 grid-rows-2 p-4 md:p-6 gap-3 md:gap-4 border-b md:border-b-0 md:border-r transition-colors duration-500
    /* LIGHT */
    bg-slate-50 border-slate-100
    /* DARK */
    dark:bg-white/5 dark:border-white/10
  `;

  // 3. Textos Tienda
  const shopTagClass = `
    text-xs font-bold uppercase tracking-[0.4em] mb-4 font-body drop-shadow-md transition-colors
    text-yellow-600 dark:text-yellow-400
  `;

  const shopTitleClass = `
    font-title text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight transition-colors duration-500
    text-navy drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]
    dark:text-white dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]
  `;

  const shopDescClass = `
    font-body text-base md:text-lg font-medium mb-8 leading-relaxed drop-shadow-sm transition-colors
    text-slate-600 dark:text-slate-100
  `;

  // 4. Botón Tienda (CTA)
  const shopBtnClass = `
    inline-flex items-center gap-3 font-bold transition-colors font-title tracking-widest uppercase text-sm group/btn self-start
    text-cyan-600 hover:text-cyan-500
    dark:text-cyan-400 dark:hover:text-cyan-300
  `;

  const shopBtnIconClass = `
    flex h-12 w-12 items-center justify-center rounded-full border transition-colors
    /* LIGHT */
    border-cyan-200 bg-cyan-50 group-hover/btn:bg-cyan-500 group-hover/btn:text-white
    /* DARK */
    dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:group-hover/btn:bg-cyan-400 dark:group-hover/btn:text-dark dark:group-hover/btn:shadow-[0_0_20px_rgba(102,216,227,0.5)]
  `;

  // 5. Título Collage
  const collageTitleClass = `
    font-title text-3xl md:text-5xl transition-colors duration-500
    text-navy drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]
    dark:text-white dark:drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]
  `;

  // 6. Elementos del Collage (Bordes y Sombras)
  // Nota: Aplicamos bordes claros en Light Mode y oscuros sutiles en Dark Mode
  const galleryItemBorderClass = `
    relative group overflow-hidden border transition-all duration-500 shadow-lg
    /* LIGHT */
    border-slate-200 shadow-slate-200/50 hover:shadow-slate-300
    /* DARK */
    dark:border-white/10 dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
  `;

  return (
    // Aumentamos el padding bottom para alejarlo del Footer
    <section id="galeria" className="relative pt-20 pb-32 md:pb-48 scroll-mt-20 z-10">

      {/* =========================================
          1. SECCIÓN CRESSI POINT
      ========================================= */}
      <div className="px-6 md:px-20 mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={shopCardClass}
          style={{ willChange: 'transform' }}
        >
          {/* Grid de Fotos Tienda */}
          <div className={shopImagesContainerClass}>
            {['tienda4.webp', 'tienda2.webp', 'tienda3.webp', 'tienda1.webp'].map((img, idx) => (
              <div
                key={idx}
                className="relative w-full h-full min-h-[140px] md:min-h-[180px] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-sm group/tienda"
                style={{ willChange: "transform" }}
              >
                <img
                  src={`/assets/nosotros/${img}`}
                  alt={`Tienda Cressi ${idx + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover/tienda:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Texto de la Tienda */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Luz de fondo sutil en el texto (Solo Dark) */}
            <div className="absolute top-0 right-0 w-[150%] h-[150%] pointer-events-none transition-opacity duration-500 group-hover:opacity-80 -z-10
              bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent opacity-50
              dark:from-cyan-400/20 dark:via-transparent dark:to-transparent dark:opacity-100"
            />

            <span className={shopTagClass}>
              {content.cressi.tag}
            </span>
            <h2 className={shopTitleClass}>
              {content.cressi.title}
            </h2>
            <p className={shopDescClass}>
              {content.cressi.desc}
            </p>
            <a
              href="https://wa.me/526131182311"
              target="_blank"
              rel="noopener noreferrer"
              className={shopBtnClass}
            >
              {content.cressi.cta}
              <span className={shopBtnIconClass}>
                <i className="ri-arrow-right-line text-xl transition-transform group-hover/btn:translate-x-1"></i>
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          2. COLLAGE FINAL
      ========================================= */}
      <div className="w-full relative px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={collageTitleClass}>
            {content.collage.title}
          </h2>
          <div className="h-1 w-20 mx-auto mt-6 rounded-full shadow-sm
            bg-cyan-500 shadow-cyan-200
            dark:bg-cyan-400 dark:shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
        </motion.div>

        {/* GRID ASIMÉTRICO */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-3 md:gap-4">

          {/* FOTO 1: Grande (2x2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-2 row-span-2`}
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash1.webp" alt="Exploración" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* FOTO 2: Apaisada (2x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-2 row-span-1`}
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash2.webp" alt="Vida Marina" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 will-change-transform" />
          </motion.div>

          {/* FOTO 3: Normal (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-1 row-span-1`}
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash3.webp" alt="Detalle" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 will-change-transform" />
          </motion.div>

          {/* FOTO 4: Normal (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-1 row-span-1`}
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash4.webp" alt="Buceo" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 will-change-transform" />
          </motion.div>

          {/* FOTO 5: Normal (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-1 row-span-1`}
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash5.webp" alt="Descenso" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 will-change-transform" />
          </motion.div>

          {/* FOTO 6: Normal (1x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-1 row-span-1`}
            style={{ willChange: "transform" }}
          >
            <img src="/assets/images/colash6.webp" alt="Cardumen" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 will-change-transform" />
          </motion.div>

          {/* FOTO 7: Apaisada Instagram (2x1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-2 row-span-1 cursor-pointer`}
            style={{ willChange: "transform" }}
            onClick={() => window.open('https://www.instagram.com/dolphindivebajaloreto', '_blank')}
          >
            <img src="/assets/images/colash7.webp" alt="Síguenos" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 will-change-transform" />
            <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <i className="ri-instagram-line text-6xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] scale-50 group-hover:scale-100 transition-transform duration-500"></i>
            </div>
          </motion.div>

          {/* FOTO 8: Equipo (Grande 2x2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-2 row-span-2`}
            style={{ willChange: "transform" }}
          >
            <img src="/assets/nosotros/equipo.webp" alt="Equipo Dolphin" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* FOTOS PEQUEÑAS FINALES (1x1) */}
          {[
            { img: 'nati.webp', delay: 0.2 },
            { img: 'natmar.webp', delay: 0.3 },
            { img: 'homecol.webp', delay: 0.4 },
            { img: 'caracol.webp', delay: 0.5 },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-1 row-span-1`}
              style={{ willChange: "transform" }}
            >
              <img src={`/assets/nosotros/${item.img}`} alt="Momento Dolphin" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 will-change-transform" />
            </motion.div>
          ))}

          {/* FOTO EXTRA (Equipof) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className={`${galleryItemBorderClass} rounded-[1.5rem] md:rounded-[2rem] col-span-2 md:col-span-4 row-span-1 min-h-[200px] sm:min-h-[250px] md:min-h-[350px]`}
            style={{ willChange: "transform" }}
          >
            <img src="/assets/nosotros/equipof.webp" alt="Familia" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[3s] ease-out group-hover:scale-105 will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}