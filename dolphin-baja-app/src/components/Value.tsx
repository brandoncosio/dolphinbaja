import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Arreglo de iconos estáticos que se mapearán con las traducciones
const cardIcons = [
  "ri-medal-line",       // PADI 5 Estrellas
  "ri-group-line",       // Grupos Pequeños
  "ri-check-double-line", // Todo Incluido
  "ri-leaf-line"         // Nuestra Misión / Eco-consciente
];

export default function Value() {
  const { t } = useLanguage();
  const content = t.home.valueProps;

  // Partículas bioluminiscentes flotantes (Se calculan una vez por carga)
  const motes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className="relative overflow-hidden bg-dark py-24 z-10">

      {/* =========================================
          EFECTOS DE FONDO (Bioluminiscencia)
      ========================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0C71A5]/15 blur-[120px]"
        />
      </div>

      {/* Partículas brillantes */}
      {motes.map((mote) => (
        <motion.div
          key={mote.id}
          className="absolute rounded-full bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-0"
          style={{
            width: mote.size,
            height: mote.size,
            left: `${mote.left}%`,
            top: `${mote.top}%`,
          }}
          animate={{
            y: ["-15px", "15px", "-15px"],
            x: ["-5px", "5px", "-5px"],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: mote.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: mote.delay,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* =========================================
              LADO IZQUIERDO: IMAGEN
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="relative z-10 aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all border border-white/10"
            >
              <img
                src="/assets/images/colash3.webp" // Reemplazado por una imagen local tuya
                alt="Buceo de calidad en Loreto"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-110"
              />
              {/* Overlay oscuro para la imagen (Liquid Glass) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/90 via-dark/20 to-transparent opacity-80" />
            </motion.div>

            {/* Marco decorativo estilo cristal oscuro */}
            <div className="absolute -left-6 -bottom-6 -z-10 h-full w-full rounded-[3rem] border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-md" />
          </motion.div>

          {/* =========================================
              LADO DERECHO: TEXTO Y TARJETAS
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 drop-shadow-md">
              {content.tag}
            </span>
            <h2 className="mb-6 mt-4 font-title text-4xl md:text-5xl text-white drop-shadow-lg leading-tight">
              {content.titleStart} <br className="hidden md:block" /><span className="text-yellow-400">{content.titleHighlight}</span>
            </h2>
            <p className="mb-12 font-body text-base md:text-lg leading-relaxed text-slate-300">
              {content.desc}
            </p>

            {/* Grid de Beneficios (Dark Glassmorphism) */}
            <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
              {content.cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-dark/40 p-6 shadow-xl backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-white/5 hover:shadow-[0_15px_30px_rgba(102,216,227,0.15)]"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20">
                    <i className={`${cardIcons[index]} text-2xl text-cyan-400 transition-colors group-hover:text-yellow-400 drop-shadow-md`}></i>
                  </div>
                  <h3 className="mb-2 font-title text-lg md:text-xl text-white group-hover:text-cyan-400 transition-colors">{card.title}</h3>
                  <p className="font-body text-xs md:text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}