import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function ValueProps() {
  const { t, lang } = useLanguage();
  const content = t.home.valueProps;

  const valuesData = [
    { 
      // 👇 Restaurado el ícono de la medalla
      icon: "ri-award-line", 
      title: content.cards[0].title, 
      desc: content.cards[0].desc, 
      highlight: false,
      padiBadge: "/assets/contentD/img/PADI.png",
      cressiBadge: "/assets/contentD/img/cressi.png", 
      makersImg: "/assets/nosotros/makers.png" // Mantenemos la data por completitud
    },
    { icon: "ri-group-line", title: content.cards[1].title, desc: content.cards[1].desc, highlight: false },
    { icon: "ri-restaurant-line", title: content.cards[2].title, desc: content.cards[2].desc, highlight: false },
    { icon: "ri-leaf-line", title: content.cards[3].title, desc: content.cards[3].desc, highlight: true }
  ];

  // ========================================================================
  // 🎭 VARIANTES DE ANIMACIÓN (Staggering Suave)
  // ========================================================================
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative z-10 w-full py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500 bg-slate-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* =========================================
            COLUMNA DE TEXTO (Izquierda)
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center lg:text-left lg:col-span-5 flex flex-col justify-center"
        >
          {/* Brillo de fondo sutil */}
          <div className="absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 -z-10 w-64 md:w-80 h-64 md:h-80 rounded-full blur-[80px] pointer-events-none transition-colors duration-500 bg-cyan-400/10 dark:bg-cyan-500/5" />

          <span className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-1.5 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 w-max mx-auto lg:mx-0 shadow-sm text-cyan-700 bg-white border-slate-200 dark:text-cyan-400 dark:bg-white/5 dark:border-white/10">
            <i className="ri-medal-fill text-sm"></i> {content.tag}
          </span>

          <h2 className="font-title text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 drop-shadow-sm transition-colors duration-500 text-navy dark:text-white">
            {content.titleStart} <br className="hidden md:block" />
            <span className="text-yellow-500 dark:text-yellow-400">{content.titleHighlight}</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8 mx-auto lg:mx-0"></div>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-body font-medium drop-shadow-sm max-w-xl mx-auto lg:mx-0 transition-colors duration-500 text-slate-600 dark:text-slate-300">
            {content.desc}
          </p>
        </motion.div>

        {/* =========================================
            GRID DE TARJETAS (Derecha)
            ========================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:pl-8"
        >
          {valuesData.map((item, idx) => {

            // Estilos para TARJETA
            const cardClasses = item.highlight
              ? `bg-yellow-50/80 border-yellow-200 shadow-xl shadow-yellow-100/50 hover:border-yellow-400 dark:bg-white/5 dark:border-yellow-500/30 dark:shadow-none dark:hover:border-yellow-400/80 dark:hover:bg-white/10`
              : `bg-white/80 border-slate-200 shadow-xl shadow-slate-200/50 hover:border-cyan-400 dark:bg-white/5 dark:border-white/10 dark:shadow-none dark:hover:border-cyan-400/50 dark:hover:bg-white/10`;

            // Estilos para ICONO
            const iconClasses = item.highlight
              ? `bg-yellow-100 text-yellow-600 border-yellow-200 group-hover:bg-yellow-400 group-hover:text-navy dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30 dark:group-hover:bg-yellow-400 dark:group-hover:text-dark`
              : `bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:bg-cyan-500 group-hover:text-white dark:bg-cyan-900/30 dark:text-cyan-400 dark:border-cyan-800/50 dark:group-hover:bg-cyan-500 dark:group-hover:text-navy`;

            return (
              <motion.div
                key={idx}
                variants={itemVariants} 
                style={{ willChange: "transform" }}
                className={`group relative p-6 md:p-8 rounded-[2rem] transition-all duration-500 backdrop-blur-xl overflow-hidden border hover:-translate-y-1 hover:shadow-2xl ${cardClasses}`}
              >
                {/* Halo interactivo en Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none dark:from-white/5"></div>

                {/* Icono animado (Solo se muestra si existe item.icon) */}
                {item.icon && (
                  <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${iconClasses}`}>
                    <i className={`${item.icon} text-2xl md:text-3xl drop-shadow-sm`}></i>
                  </div>
                )}

                {/* Título */}
                <h3 className="relative z-10 font-title text-xl md:text-2xl mb-3 leading-tight transition-colors duration-500 text-navy dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="relative z-10 text-sm leading-relaxed font-body font-medium transition-colors duration-500 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                  {item.desc}
                </p>

                {/* 👇 CONTENEDOR DE LOGOS (DESPUÉS DEL TEXTO) */}
                {item.padiBadge && (
                  <div className="relative z-10 flex items-center gap-8 mt-6">
                    {/* LOGO PADI (Tamaño mini) */}
                    <motion.img 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      src={item.padiBadge} 
                      alt="PADI Certification"
                      className="h-3.5 md:h-4.5 w-auto object-contain filter brightness-110 drop-shadow-md"
                    />
                    {/* LOGO CRESSI (Tamaño protagonista) */}
                    {item.cressiBadge && (
                      <motion.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        src={item.cressiBadge} 
                        alt="Cressi Dive Center"
                        className="h-12 md:h-16 w-auto object-contain filter brightness-110 drop-shadow-sm"
                      />
                    )}
                  </div>
                )}

                {/* IMAGEN MAKERS (Oculta por defecto) */}
                {item.makersImg && false && (
                  <motion.img 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    src={item.makersImg} 
                    alt="Makers" 
                    className="relative z-10 h-10 md:h-14 w-auto mt-6 object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}