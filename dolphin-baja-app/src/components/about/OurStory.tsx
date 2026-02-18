import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function OurStory() {
  const { t } = useLanguage();
  const content = t.aboutPage.story;

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Seamless Integration & Matte Fix)
  // ========================================================================

  // 1. Gradiente de Fusión Superior (Recibe el difuminado del Hero)
  const entryGradientClass = `
    absolute top-0 left-0 right-0 h-32 pointer-events-none z-0 transition-colors duration-500
    bg-gradient-to-b from-slate-50 to-transparent
    dark:from-dark dark:to-transparent
  `;

  // 2. Textos Generales
  // 👇 CORRECCIÓN: Se añadió drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] para igualar al Hero
  const headingClass = `
    font-title text-3xl md:text-5xl lg:text-6xl leading-[1.1] transition-colors duration-500
    text-navy drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]
    dark:text-white dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]
  `;

  const paragraphClass = `
    space-y-5 font-body font-medium text-base md:text-lg leading-relaxed drop-shadow-sm transition-colors duration-500
    text-slate-600 dark:text-slate-100
  `;

  const subTitleClass = `
    text-xs md:text-sm font-bold uppercase tracking-[0.3em] drop-shadow-md transition-colors duration-500
    text-cyan-600 dark:text-cyan-400
  `;

  // 3. Tarjetas de Estadísticas (Matte Fix: Sin sombras neón en Dark)
  const statCardClass = `
    backdrop-blur-2xl p-8 lg:p-10 rounded-[2rem] border text-center transition-all duration-500 group hover:-translate-y-1
    /* LIGHT MODE */
    bg-white border-slate-200 shadow-xl shadow-slate-200/50 hover:border-yellow-400/50
    /* DARK MODE (Matte) */
    dark:bg-white/5 dark:border-white/5 dark:shadow-none dark:hover:border-yellow-400/30
  `;

  const statNumClass = `
    block font-title text-4xl md:text-5xl lg:text-6xl mb-3 transition-colors duration-300 drop-shadow-sm
    text-navy group-hover:text-yellow-500
    dark:text-white dark:group-hover:text-yellow-400
  `;

  // 4. Banner de Misión (Fusión con el fondo)
  const missionOverlayClass = `
    absolute inset-0 bg-gradient-to-t z-10 pointer-events-none transition-opacity duration-500
    from-navy/90 via-navy/40 to-navy/10
    dark:from-dark dark:via-dark/80 dark:to-dark/20
  `;

  return (
    <section className="relative py-24 px-6 overflow-hidden z-10">
      {/* Gradiente para conectar con el Hero */}
      <div className={entryGradientClass} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* PARTE 1: HISTORIA Y STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Columna Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <span className={subTitleClass}>{content.since}</span>
            <h2 className={headingClass}>{content.title}</h2>
            <div className={paragraphClass}>
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {content.values.map((val, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 rounded-full border backdrop-blur-xl text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm transition-colors duration-500 bg-white border-slate-200 text-slate-600 dark:bg-white/10 dark:border-white/20 dark:text-white"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Columna Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {content.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={statCardClass}
                style={{ willChange: "transform" }}
              >
                <span className={statNumClass}>{stat.num}</span>
                <span className="text-xs md:text-sm font-body font-bold uppercase tracking-[0.2em] transition-colors text-slate-500 dark:text-slate-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PARTE 2: MISIÓN BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden min-h-[400px] lg:min-h-[500px] flex items-center justify-center text-center px-6 py-20 md:py-24 shadow-2xl border group transition-all duration-500 border-white/20 dark:border-white/10"
          style={{ willChange: 'transform' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10s] ease-out group-hover:scale-110"
            style={{ backgroundImage: 'url("/assets/images/colash1.webp")', willChange: 'transform' }}
          />

          <div className={missionOverlayClass} />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 blur-[100px] z-10 pointer-events-none bg-cyan-400/10 dark:bg-white/5" />

          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
            <p className="text-yellow-400 font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 drop-shadow-md">
              {content.mission.tag}
            </p>

            <h3 className="font-title text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              {content.mission.titleStart} <span className="text-cyan-400">{content.mission.titleHighlight1}</span> <span dangerouslySetInnerHTML={{ __html: content.mission.titleMid }} /> <span className="text-cyan-400">{content.mission.titleHighlight2}</span>{content.mission.titleEnd}
            </h3>

            <p
              className="font-body text-lg md:text-2xl text-slate-100 italic mb-12 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium max-w-3xl"
              dangerouslySetInnerHTML={{ __html: content.mission.quote }}
            />

            <a
              href="mailto:ventas@dolphindivebaja.com"
              className="inline-flex items-center gap-3 px-10 py-4 lg:py-5 rounded-full text-white font-title text-sm tracking-widest uppercase transition-all duration-300 shadow-lg active:scale-95 bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-cyan-400 hover:text-dark hover:border-cyan-400 hover:-translate-y-1"
            >
              <i className="ri-mail-send-line text-xl transition-transform"></i>
              {content.mission.btn}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}