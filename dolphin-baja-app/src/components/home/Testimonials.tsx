import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const content = t.testimonials;

  // ========================================================================
  // 🎭 VARIANTES PARA EL HEADER
  // ========================================================================
  const headerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS
  // ========================================================================
  const glassCardClass = `
    relative flex flex-col justify-between w-[300px] sm:w-[380px] lg:w-[450px] h-[280px] sm:h-[300px] p-6 sm:p-8 
    rounded-[2rem] border transition-all duration-500 shadow-lg shrink-0 group
    bg-white border-slate-200 hover:border-cyan-400 hover:shadow-cyan-100/50
    dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] dark:hover:border-cyan-500/50 dark:hover:bg-white/10
  `;

  // Duplicamos el array de testimonios para que el efecto "marquee" infinito no se corte bruscamente
  const infiniteTestimonials = [...content.list, ...content.list];

  return (
    <section className="relative py-10 md:py-16 overflow-hidden z-10 w-full bg-slate-50 dark:bg-dark transition-colors duration-500">

      {/* Luz ambiental sutil de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-64 w-[80%] rounded-full blur-[100px] pointer-events-none transition-colors duration-500 bg-cyan-400/5 dark:bg-cyan-500/5" />

      {/* =========================================
          HEADER (Centrado)
          ========================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center flex flex-col items-center"
        >
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 border shadow-sm text-cyan-700 bg-white border-slate-200 dark:text-cyan-400 dark:bg-white/5 dark:border-white/10">
            <i className="ri-chat-quote-fill text-sm"></i> {content.tag}
          </motion.span>

          <motion.h2 variants={itemVariants} className="font-title text-4xl sm:text-5xl md:text-6xl text-navy dark:text-white drop-shadow-sm leading-tight mb-6 max-w-3xl">
            {content.title}
          </motion.h2>

          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8"></motion.div>

          <motion.p variants={itemVariants} className="max-w-2xl font-body text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {content.desc}
          </motion.p>
        </motion.div>
      </div>

      {/* =========================================
          MARQUESINA INFINITA DE TARJETAS
          ========================================= */}
      <div className="relative flex overflow-hidden w-full group/marquee">
        {/* Gradientes Laterales para ocultar bordes */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-slate-50 to-transparent dark:from-dark pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-slate-50 to-transparent dark:from-dark pointer-events-none"></div>

        <motion.div
          className="flex shrink-0 gap-6 md:gap-8 px-3"
          animate={{ x: ["0%", "-50%"] }} // Desplazamiento hacia la izquierda
          transition={{ ease: "linear", duration: 50, repeat: Infinity }} // 50 segundos para que se pueda leer tranquilo
          style={{ width: "max-content", willChange: "transform" }}
        >
          {infiniteTestimonials.map((testimonial: any, idx: number) => (
            <div key={idx} className={glassCardClass}>

              {/* Comillas gigantes de fondo */}
              <i className="ri-double-quotes-r absolute top-4 right-6 text-7xl md:text-8xl text-slate-100 dark:text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-500 origin-top-right"></i>

              {/* Estrellas y Plataforma */}
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 md:text-lg drop-shadow-sm"></i>
                  ))}
                </div>
                {/* Logo genérico o de TripAdvisor (decorativo) */}
                <div className="w-8 h-8 rounded-full bg-green-50 border border-green-200 dark:bg-white/10 dark:border-white/20 flex items-center justify-center text-green-600 dark:text-white">
                  <i className="ri-compass-discover-line"></i>
                </div>
              </div>

              {/* Texto del Testimonio (Restringido a 4-5 líneas) */}
              <p className="font-body text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed relative z-10 italic mb-6 line-clamp-4 md:line-clamp-5">
                "{testimonial.text}"
              </p>

              {/* Info del Cliente */}
              <div className="mt-auto flex items-center gap-4 relative z-10 pt-4 border-t border-slate-100 dark:border-white/10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-title text-lg md:text-xl border border-cyan-200 dark:border-cyan-400/20 shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-title text-navy dark:text-white text-base md:text-lg leading-none mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <span className="font-body text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    {testimonial.date || "Verified Diver"}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}