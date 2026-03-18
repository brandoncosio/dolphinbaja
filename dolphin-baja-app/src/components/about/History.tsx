import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function History() {
  const { t } = useLanguage();
  const content = t.aboutPage.history;

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS
  // ========================================================================

  const headingClass = `
    font-title text-3xl md:text-5xl lg:text-6xl transition-colors duration-500
    text-navy drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]
    dark:text-white dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]
  `;

  const titleGlowClass = `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-48 h-48 rounded-full pointer-events-none transition-colors duration-500
    bg-cyan-100/50 blur-[60px]
    dark:bg-ocean/20 dark:blur-[80px]
  `;

  const connectorLineClass = `
    hidden md:block absolute left-[88px] lg:left-[108px] top-0 bottom-0 w-[2px] -z-10 transition-colors duration-500
    bg-gradient-to-b from-transparent via-slate-200 to-transparent
    dark:from-transparent dark:via-cyan-400/30 dark:to-transparent
  `;

  const eventCardClass = `
    group relative p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-500 flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-center overflow-hidden
    /* LIGHT MODE */
    bg-white border-slate-200 shadow-xl shadow-slate-200/50 hover:border-cyan-400/40 hover:-translate-y-1
    /* DARK MODE (Matte Glass) */
    dark:bg-white/5 dark:backdrop-blur-2xl dark:border-white/10 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:-translate-y-1
  `;

  const yearClass = `
    font-title text-5xl md:text-6xl transition-transform duration-500 group-hover:scale-105
    text-yellow-500 drop-shadow-sm
    dark:text-yellow-400 dark:drop-shadow-[0_2px_15px_rgba(250,204,21,0.25)]
  `;

  const eventTitleClass = `
    font-title text-2xl md:text-3xl mb-4 transition-colors duration-300 drop-shadow-sm leading-tight
    text-navy group-hover:text-cyan-600
    dark:text-white dark:group-hover:text-cyan-300
  `;

  const eventDescClass = `
    font-body font-medium leading-relaxed text-sm md:text-base drop-shadow-sm transition-colors
    text-slate-600
    dark:text-slate-100
  `;

  const imageContainerClass = `
    w-full md:w-56 lg:w-64 aspect-video md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shrink-0 border transition-colors duration-500 relative z-10
    /* LIGHT */
    border-slate-200 shadow-md group-hover:shadow-lg
    /* DARK */
    dark:border-white/20 dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[0_15px_30px_rgba(102,216,227,0.15)] dark:group-hover:border-cyan-400/40
  `;

  return (
    <section id="historia" className="relative pb-24 md:pb-32 px-6 md:px-20 scroll-mt-24 z-10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 relative"
        >
          <div className={titleGlowClass} />
          <h2 className={headingClass}>
            {content.title}
          </h2>
        </motion.div>

        <div className="space-y-8 md:space-y-12 relative">
          <div className={connectorLineClass} />

          {content.events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className={eventCardClass}
              style={{ willChange: "transform" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none 
                bg-transparent dark:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] dark:from-cyan-400/10 dark:via-transparent dark:to-transparent"
              />

              <div className="flex flex-col items-center md:items-start min-w-[120px] lg:min-w-[150px] relative z-10 shrink-0">
                <span className={yearClass}>
                  {event.year}
                </span>
                <div className="h-1.5 w-12 rounded-full mt-4 group-hover:w-24 transition-all duration-500 shadow-sm
                  bg-cyan-500 shadow-cyan-200
                  dark:bg-cyan-400 dark:shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
              </div>

              <div className="flex-1 text-center md:text-left relative z-10">
                <h3 className={eventTitleClass}>
                  {event.title}
                </h3>
                <p className={eventDescClass}>
                  {event.desc}
                </p>
              </div>

              <div className={imageContainerClass}>
                <img
                  src={event.img}
                  alt={event.title}
                  loading="lazy"
                  decoding="async"
                  // 👇 AJUSTES REALIZADOS: Eliminado grayscale y opacity-90. Agregado contraste y saturación.
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[1.5s] ease-out will-change-transform filter contrast-[1.20] saturate-[1.15]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}