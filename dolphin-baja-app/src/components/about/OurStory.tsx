import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function OurStory() {
  const { t } = useLanguage();
  const content = t.aboutPage.story;

  return (
    <section className="relative py-24 px-6 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">

        {/* =========================================
            PARTE 1: HISTORIA Y STATS
        ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">

          {/* Columna Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 drop-shadow-md">
              {content.since}
            </span>
            <h2 className="font-title text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              {content.title}
            </h2>
            <div className="space-y-5 font-body text-slate-100 font-medium text-base md:text-lg leading-relaxed drop-shadow-sm">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            {/* Chips de Valores (Glassmorphism Apple Avanzado) */}
            <div className="flex flex-wrap gap-3 pt-4">
              {content.values.map((val, idx) => (
                <span
                  key={idx}
                  // Aumentamos el blur y afinamos bordes
                  className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Columna Stats Grid (Tarjetas Glass Premium) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {content.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                // bg-white/5 para absorber la luz ambiental oceánica
                className="bg-white/5 backdrop-blur-2xl p-8 lg:p-10 rounded-[2rem] border border-white/10 text-center hover:border-yellow-400/40 hover:-translate-y-1 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(250,204,21,0.15)] group"
                style={{ willChange: "transform" }}
              >
                <span className="block font-title text-4xl md:text-5xl lg:text-6xl text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  {stat.num}
                </span>
                <span className="text-xs md:text-sm text-slate-300 font-body font-bold uppercase tracking-[0.2em] group-hover:text-slate-100 transition-colors">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            PARTE 2: MISIÓN BANNER (Ocean Depth Luminoso)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          // Ajustado a rounded-[3rem] para un look iOS más suave
          className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden min-h-[400px] lg:min-h-[500px] flex items-center justify-center text-center px-6 py-20 md:py-24 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 group"
          style={{ willChange: 'transform' }}
        >
          {/* Fondo Imagen (Efecto Ken Burns muy suave al hacer hover) */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10s] ease-out group-hover:scale-110"
            style={{ backgroundImage: 'url("/assets/images/colash1.webp")', willChange: 'transform' }}
          />

          {/* Overlay Luminoso: Mantenemos el azul marino profundo en bordes para anclar el texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10 z-10 pointer-events-none transition-opacity duration-[3s]" />

          {/* Luz sutil interna */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-400/20 blur-[100px] z-10 pointer-events-none" />

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
              className="inline-flex items-center gap-3 px-10 py-4 lg:py-5 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-white font-title text-sm tracking-widest uppercase hover:bg-cyan-400 hover:text-dark hover:border-cyan-400 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(102,216,227,0.4)]"
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