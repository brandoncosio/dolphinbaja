import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const content = t.testimonials;

  // Estilo de tarjeta de cristal
  const glassCardClass = `
    p-8 rounded-[2rem] border transition-all duration-500 shadow-lg relative overflow-hidden group flex flex-col h-full
    bg-white/80 border-slate-200 hover:border-cyan-400/40 hover:-translate-y-2
    dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none dark:hover:border-white/20
  `;

  return (
    <section className="relative py-24 px-6 md:px-20 z-10 max-w-7xl mx-auto overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-600 dark:text-cyan-400 mb-4 block font-body drop-shadow-md"
        >
          {content.tag}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-title text-3xl md:text-5xl text-navy dark:text-white drop-shadow-sm leading-tight mb-6"
        >
          {content.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto font-body text-slate-600 dark:text-slate-300 leading-relaxed font-medium"
        >
          {content.desc}
        </motion.p>
      </div>

      {/* GRID DE TESTIMONIOS (Lee dinámicamente content.list) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 items-stretch">
        {content.list.map((testimonial: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 3) * 0.15, duration: 0.5 }}
            className={glassCardClass}
          >
            {/* Comillas decorativas de fondo */}
            <i className="ri-double-quotes-l absolute -top-4 -right-4 text-8xl text-cyan-500/10 dark:text-cyan-400/5 group-hover:scale-110 transition-transform duration-500"></i>

            {/* Estrellas (5 estrellas fijas) */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
              ))}
            </div>

            {/* Texto del Testimonio */}
            <p className="font-body text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed flex-grow relative z-10 italic mb-8">
              "{testimonial.text}"
            </p>

            {/* Info del Cliente */}
            <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-slate-100 dark:border-white/10 pt-4">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-title text-xl border border-cyan-200 dark:border-cyan-400/20 shrink-0">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-title text-navy dark:text-white text-lg leading-none mb-1">{testimonial.name}</h4>
                <span className="font-body text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                  {testimonial.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}