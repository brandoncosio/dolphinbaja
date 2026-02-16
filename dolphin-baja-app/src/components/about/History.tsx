import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function History() {
  const { t } = useLanguage();
  const content = t.aboutPage.history;

  return (
    // Quitamos el bg-slate-900 porque el fondo global ahora es del main (Nosotros.tsx)
    <section id="historia" className="relative pb-24 px-6 md:px-20 scroll-mt-24 z-10">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-title text-3xl md:text-5xl text-white drop-shadow-md">
            {content.title}
          </h2>
        </motion.div>

        {/* Línea de Tiempo */}
        <div className="space-y-8 md:space-y-12 relative">

          {/* Línea vertical decorativa detrás (solo visible en desktop) */}
          <div className="hidden md:block absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 -z-10" />

          {content.events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group bg-dark/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-cyan-400/40 transition-all duration-500 flex flex-col md:flex-row gap-6 md:gap-10 items-center shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(102,216,227,0.15)] relative overflow-hidden"
            >
              {/* Brillo interno al hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Columna Fecha */}
              <div className="flex flex-col items-center md:items-start min-w-[120px] relative z-10">
                <span className="font-title text-4xl md:text-5xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.2)] group-hover:scale-105 transition-transform duration-500">
                  {event.year}
                </span>
                <div className="h-1 w-12 bg-cyan-400 rounded-full mt-3 group-hover:w-20 transition-all duration-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              </div>

              {/* Columna Texto */}
              <div className="flex-1 text-center md:text-left relative z-10">
                <h3 className="font-title text-2xl md:text-3xl text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="font-body text-slate-300 leading-relaxed text-sm md:text-base">
                  {event.desc}
                </p>
              </div>

              {/* Columna Imagen */}
              <div className="w-full md:w-56 h-40 md:h-36 rounded-2xl overflow-hidden shrink-0 border border-white/5 group-hover:border-cyan-400/30 transition-colors duration-500 relative z-10">
                <img
                  src={event.img}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1s] ease-out"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}