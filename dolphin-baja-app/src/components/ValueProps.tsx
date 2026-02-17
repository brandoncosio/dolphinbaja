import { motion } from 'framer-motion';

// Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

export default function ValueProps() {
  const { t } = useLanguage();
  const content = t.home.valueProps;

  const valuesData = [
    {
      icon: "ri-award-line",
      title: content.cards[0].title,
      desc: content.cards[0].desc,
      highlight: false
    },
    {
      icon: "ri-group-line",
      title: content.cards[1].title,
      desc: content.cards[1].desc,
      highlight: false
    },
    {
      icon: "ri-restaurant-line",
      title: content.cards[2].title,
      desc: content.cards[2].desc,
      highlight: false
    },
    {
      icon: "ri-leaf-line",
      title: content.cards[3].title,
      desc: content.cards[3].desc,
      highlight: true
    }
  ];

  return (
    // Agregamos overflow-hidden para asegurar que el brillo de fondo no cree scroll horizontal
    <section className="relative z-10 w-full py-16 md:py-24 px-6 md:px-20 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* =========================================
            COLUMNA DE TEXTO (Responsiva y Luminosa)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center lg:text-left"
        >
          {/* Brillo sutil de fondo ajustado al nuevo Azul Arrecife */}
          <div className="absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 -z-10 w-64 md:w-80 h-64 md:h-80 bg-cyan-400/15 blur-[80px] rounded-full pointer-events-none" />

          {/* Textos Traducidos */}
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 drop-shadow-md">
            {content.tag}
          </span>
          {/* Sombra de texto aumentada a [0_2px_10px_rgba(0,0,0,0.5)] para contraste perfecto */}
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] md:leading-tight mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {content.titleStart} <br className="hidden md:block" /><span className="text-yellow-400">{content.titleHighlight}</span>
          </h2>
          <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed font-body font-medium drop-shadow-sm max-w-xl mx-auto lg:mx-0">
            {content.desc}
          </p>
        </motion.div>

        {/* =========================================
            GRID DE TARJETAS (Liquid Glass Apple-Style)
        ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {valuesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              style={{ willChange: "transform" }} // Optimización Safari
              // 👇 CAMBIO: backdrop-blur-xl para un esmerilado más premium
              className={`group relative p-6 md:p-8 rounded-[2rem] transition-all duration-500 md:hover:-translate-y-2 backdrop-blur-xl overflow-hidden ${item.highlight
                ? 'bg-gradient-to-br from-yellow-400/15 to-white/5 border border-yellow-400/40 shadow-[0_15px_30px_rgba(254,217,102,0.15)] hover:border-yellow-400/60 hover:shadow-[0_20px_40px_rgba(254,217,102,0.25)]'
                : 'bg-white/5 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:bg-white/10 hover:border-cyan-400/40 hover:shadow-[0_20px_40px_rgba(102,216,227,0.2)]'
                }`}
            >
              {/* Luz interna en hover (Liquid Light) */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${item.highlight ? 'bg-gradient-to-tr from-yellow-400/10 to-transparent' : 'bg-gradient-to-tr from-cyan-400/10 to-transparent'
                }`} />

              {/* Icono animado */}
              <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-6 border transition-all duration-500 shadow-md ${item.highlight
                ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400 group-hover:bg-yellow-400/20 md:group-hover:scale-110 md:group-hover:rotate-6'
                : 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400 group-hover:bg-cyan-400/20 md:group-hover:scale-110 md:group-hover:-rotate-6'
                }`}>
                <i className={`${item.icon} text-2xl md:text-3xl drop-shadow-md`}></i>
              </div>

              {/* Textos */}
              <h3 className="relative z-10 font-title text-lg md:text-xl text-white mb-2 md:mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-tight group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="relative z-10 text-xs md:text-sm text-slate-200 leading-relaxed font-body group-hover:text-white transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}