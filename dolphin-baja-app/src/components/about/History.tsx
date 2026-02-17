import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function History() {
  const { t } = useLanguage();
  const content = t.aboutPage.history;

  return (
    <section id="historia" className="relative pb-24 md:pb-32 px-6 md:px-20 scroll-mt-24 z-10">
      <div className="max-w-5xl mx-auto">

        {/* =========================================
            TÍTULO DE LA LÍNEA DE TIEMPO
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 relative"
        >
          {/* Brillo sutil oceánico detrás del título */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-48 h-48 bg-ocean/20 blur-[80px] rounded-full pointer-events-none" />

          <h2 className="font-title text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {content.title}
          </h2>
        </motion.div>

        {/* =========================================
            LÍNEA DE TIEMPO (Tarjetas Apple Glass)
        ========================================= */}
        <div className="space-y-8 md:space-y-12 relative">

          {/* Línea vertical decorativa conectora (solo visible en desktop) 
              Ajustamos la opacidad del cyan para que brille como un hilo de neón */}
          <div className="hidden md:block absolute left-[88px] lg:left-[108px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 -z-10" />

          {content.events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              // Elevación magnética en hover (-translate-y-1) y aumento de sombra
              className="group bg-white/5 backdrop-blur-2xl p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 hover:border-cyan-400/40 transition-all duration-500 flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-center shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(102,216,227,0.2)] hover:-translate-y-1 relative overflow-hidden"
              style={{ willChange: "transform" }}
            >
              {/* Brillo interno al hover (Radial en lugar de linear para más realismo) */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Columna Fecha */}
              <div className="flex flex-col items-center md:items-start min-w-[120px] lg:min-w-[150px] relative z-10 shrink-0">
                <span className="font-title text-5xl md:text-6xl text-yellow-400 drop-shadow-[0_2px_15px_rgba(250,204,21,0.25)] group-hover:scale-105 transition-transform duration-500">
                  {event.year}
                </span>
                <div className="h-1.5 w-12 bg-cyan-400 rounded-full mt-4 group-hover:w-24 transition-all duration-500 shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
              </div>

              {/* Columna Texto */}
              <div className="flex-1 text-center md:text-left relative z-10">
                <h3 className="font-title text-2xl md:text-3xl text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-sm leading-tight">
                  {event.title}
                </h3>
                <p className="font-body text-slate-100 font-medium leading-relaxed text-sm md:text-base drop-shadow-sm">
                  {event.desc}
                </p>
              </div>

              {/* Columna Imagen */}
              <div className="w-full md:w-56 lg:w-64 aspect-video md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shrink-0 border border-white/20 group-hover:border-cyan-400/40 transition-colors duration-500 relative z-10 shadow-[0_10px_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_15px_30px_rgba(102,216,227,0.15)]">
                <img
                  src={event.img}
                  alt={event.title}
                  loading="lazy"
                  decoding="async"
                  // Suavizamos el grayscale y mejoramos la escala al hacer hover
                  className="w-full h-full object-cover grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out will-change-transform"
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}