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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">

          {/* Columna Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 drop-shadow-md">
              {content.since}
            </span>
            <h2 className="font-title text-3xl md:text-5xl text-white leading-tight drop-shadow-md">
              {content.title}
            </h2>
            <div className="space-y-4 font-body text-slate-200 text-lg md:text-xl leading-relaxed">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            {/* Chips de Valores (Glassmorphism Apple) */}
            <div className="flex flex-wrap gap-3 pt-6">
              {content.values.map((val, idx) => (
                <span
                  key={idx}
                  // 👇 bg-white/10 para dar ese toque de cristal esmerilado Premium
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-cyan-400 text-xs md:text-sm font-bold uppercase tracking-widest shadow-lg"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Columna Stats Grid (Tarjetas Glass Premium) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {content.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                // 👇 bg-white/5 para absorber la luz ambiental oceánica
                className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 text-center hover:border-yellow-400/30 transition-colors shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(250,204,21,0.1)] group"
                style={{ willChange: "transform" }}
              >
                <span className="block font-title text-4xl md:text-5xl text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-md">
                  {stat.num}
                </span>
                <span className="text-xs md:text-sm text-slate-300 font-body font-bold uppercase tracking-widest group-hover:text-slate-100 transition-colors">
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
          className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden min-h-[400px] flex items-center justify-center text-center px-6 py-20 md:py-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
        >
          {/* Fondo Imagen */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-[5s] hover:scale-110"
            style={{ backgroundImage: 'url("/assets/images/colash1.webp")', willChange: 'transform' }}
          />

          {/* 👇 Overlay Luminoso: Solo oscurecemos la viñeta (los bordes) y dejamos el centro despejado */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10 z-10 pointer-events-none" />

          {/* Luces sutiles internas */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-400/20 blur-[80px] z-10 pointer-events-none" />

          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
            <p className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 drop-shadow-md">
              {content.mission.tag}
            </p>

            <h3 className="font-title text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              {content.mission.titleStart} <span className="text-cyan-400">{content.mission.titleHighlight1}</span> <span dangerouslySetInnerHTML={{ __html: content.mission.titleMid }} /> <span className="text-cyan-400">{content.mission.titleHighlight2}</span>{content.mission.titleEnd}
            </h3>

            <p
              className="font-body text-lg md:text-2xl text-slate-100 italic mb-12 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium"
              dangerouslySetInnerHTML={{ __html: content.mission.quote }}
            />

            <a
              href="mailto:ventas@dolphindivebaja.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-title text-sm tracking-widest uppercase hover:bg-cyan-400 hover:text-dark hover:border-cyan-400 hover:-translate-y-1 active:scale-95 transition-all duration-300 group shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            >
              <i className="ri-mail-send-line text-xl group-hover:scale-110 transition-transform"></i>
              {content.mission.btn}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}