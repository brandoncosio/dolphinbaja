import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function ValueProps() {
  const { t } = useLanguage();
  const content = t.home.valueProps;

  const valuesData = [
    { icon: "ri-award-line", title: content.cards[0].title, desc: content.cards[0].desc, highlight: false },
    { icon: "ri-group-line", title: content.cards[1].title, desc: content.cards[1].desc, highlight: false },
    { icon: "ri-restaurant-line", title: content.cards[2].title, desc: content.cards[2].desc, highlight: false },
    { icon: "ri-leaf-line", title: content.cards[3].title, desc: content.cards[3].desc, highlight: true }
  ];

  return (
    <section className="relative z-10 w-full py-16 md:py-24 px-6 md:px-20 overflow-hidden transition-colors duration-500 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* COLUMNA DE TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center lg:text-left"
        >
          {/* Brillo de fondo (Muy sutil en ambos casos) */}
          <div className="absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 -z-10 w-64 md:w-80 h-64 md:h-80 rounded-full blur-[80px] pointer-events-none transition-colors duration-500
            bg-cyan-400/10 dark:bg-cyan-500/5"
          />

          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block drop-shadow-md transition-colors duration-500
            text-cyan-600 dark:text-cyan-400">
            {content.tag}
          </span>

          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] md:leading-tight mb-6 drop-shadow-sm transition-colors duration-500
            text-navy dark:text-white">
            {content.titleStart} <br className="hidden md:block" />
            <span className="text-yellow-500 dark:text-yellow-400">{content.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-body font-medium drop-shadow-sm max-w-xl mx-auto lg:mx-0 transition-colors duration-500
            text-slate-600 dark:text-slate-300">
            {content.desc}
          </p>
        </motion.div>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {valuesData.map((item, idx) => {

            // 🧠 ESTRATEGIA DE DIVISIÓN: Definimos los estilos por separado para mayor claridad

            // 1. Estilos para la TARJETA DESTACADA (Highlight)
            const highlightClasses = item.highlight
              ? `
                /* LIGHT MODE (Papel Crema Vibrante) */
                bg-yellow-50 border-yellow-200 shadow-xl shadow-yellow-100/50 
                hover:border-yellow-400 hover:-translate-y-1
                
                /* DARK MODE (Cristal Mate Sutil - Sin neón) */
                dark:bg-white/5 dark:border-white/10 dark:shadow-none 
                dark:hover:border-yellow-400/50 dark:hover:bg-white/10
                `
              : `
                /* LIGHT MODE (Papel Blanco Limpio) */
                bg-white border-slate-100 shadow-xl shadow-slate-200/50 
                hover:border-cyan-300 hover:-translate-y-1
                
                /* DARK MODE (Cristal Mate Sutil) */
                dark:bg-white/5 dark:border-white/5 dark:shadow-none 
                dark:hover:border-cyan-400/50 dark:hover:bg-white/10
                `;

            // 2. Estilos para el ICONO
            const iconClasses = item.highlight
              ? `
                /* LIGHT */
                bg-yellow-100 text-yellow-600 border-yellow-200
                /* DARK */
                dark:bg-white/5 dark:text-yellow-400 dark:border-white/10
                `
              : `
                /* LIGHT */
                bg-cyan-50 text-cyan-600 border-cyan-100
                /* DARK */
                dark:bg-white/5 dark:text-cyan-400 dark:border-white/10
                `;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                style={{ willChange: "transform" }}
                className={`group relative p-6 md:p-8 rounded-[2rem] transition-all duration-500 backdrop-blur-xl overflow-hidden border ${highlightClasses}`}
              >

                {/* Icono */}
                <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-6 border transition-all duration-500 ${iconClasses}`}>
                  <i className={`${item.icon} text-2xl md:text-3xl drop-shadow-sm`}></i>
                </div>

                {/* Título */}
                <h3 className="relative z-10 font-title text-lg md:text-xl mb-2 md:mb-3 leading-tight transition-colors duration-500
                  text-navy dark:text-white">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="relative z-10 text-xs md:text-sm leading-relaxed font-body transition-colors duration-500
                  text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}