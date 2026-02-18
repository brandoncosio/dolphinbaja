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
    // CAMBIO 1: Borde superior adaptable (border-t)
    <section className="relative z-10 w-full py-16 md:py-24 px-6 md:px-20 overflow-hidden transition-colors duration-500 border-t dark:border-white/10 border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* =========================================
            COLUMNA DE TEXTO
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center lg:text-left"
        >
          {/* Brillo de fondo (Sutil en light mode) */}
          <div className="absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 -z-10 w-64 md:w-80 h-64 md:h-80 rounded-full blur-[80px] pointer-events-none transition-colors duration-500
            dark:bg-cyan-400/15 
            bg-cyan-400/5"
          />

          {/* Textos Adaptables */}
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block drop-shadow-md transition-colors duration-500
            dark:text-cyan-400 text-cyan-600">
            {content.tag}
          </span>

          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] md:leading-tight mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-colors duration-500
            dark:text-white text-navy">
            {content.titleStart} <br className="hidden md:block" />
            <span className="text-yellow-500 dark:text-yellow-400">{content.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-body font-medium drop-shadow-sm max-w-xl mx-auto lg:mx-0 transition-colors duration-500
            dark:text-slate-100 text-slate-600">
            {content.desc}
          </p>
        </motion.div>

        {/* =========================================
            GRID DE TARJETAS (Liquid Glass Dual)
            ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {valuesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              style={{ willChange: "transform" }}
              // CAMBIO 2: Estilos condicionales masivos
              className={`group relative p-6 md:p-8 rounded-[2rem] transition-all duration-500 md:hover:-translate-y-2 backdrop-blur-xl overflow-hidden shadow-lg
                ${item.highlight
                  /* Tarjeta Destacada (Amarilla) */
                  ? `dark:bg-gradient-to-br dark:from-yellow-400/15 dark:to-white/5 dark:border-yellow-400/40 dark:shadow-[0_15px_30px_rgba(254,217,102,0.15)] dark:hover:border-yellow-400/60 
                     bg-yellow-50 border-yellow-500/30 shadow-yellow-200/50 hover:border-yellow-500/60`

                  /* Tarjetas Normales (Blancas/Dark) */
                  : `dark:bg-white/5 dark:border-white/10 dark:shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:hover:bg-white/10 dark:hover:border-cyan-400/40
                     bg-white border-slate-200 shadow-slate-200/50 hover:border-cyan-500/40 hover:shadow-cyan-200/50`
                }`}
            >
              {/* Luz interna en hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none 
                ${item.highlight
                  ? 'bg-gradient-to-tr from-yellow-400/10 to-transparent'
                  : 'bg-gradient-to-tr from-cyan-400/10 to-transparent'
                }`}
              />

              {/* Icono animado */}
              <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-6 border transition-all duration-500 shadow-md 
                ${item.highlight
                  ? `dark:bg-yellow-400/10 dark:border-yellow-400/30 dark:text-yellow-400 dark:group-hover:bg-yellow-400/20
                     bg-yellow-100 border-yellow-500/30 text-yellow-600 group-hover:bg-yellow-200 md:group-hover:scale-110 md:group-hover:rotate-6`
                  : `dark:bg-cyan-400/10 dark:border-cyan-400/30 dark:text-cyan-400 dark:group-hover:bg-cyan-400/20
                     bg-cyan-50 border-cyan-500/20 text-cyan-600 group-hover:bg-cyan-100 md:group-hover:scale-110 md:group-hover:-rotate-6`
                }`}>
                <i className={`${item.icon} text-2xl md:text-3xl drop-shadow-md`}></i>
              </div>

              {/* Textos de Tarjeta */}
              <h3 className="relative z-10 font-title text-lg md:text-xl mb-2 md:mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] leading-tight transition-colors duration-500
                dark:text-white dark:group-hover:text-white
                text-navy group-hover:text-cyan-700">
                {item.title}
              </h3>

              <p className="relative z-10 text-xs md:text-sm leading-relaxed font-body transition-colors duration-500
                dark:text-slate-200 dark:group-hover:text-white
                text-slate-600 group-hover:text-slate-800">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}