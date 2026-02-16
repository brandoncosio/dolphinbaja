import React from 'react';
import { motion } from 'framer-motion';

// 👇 1. Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

export default function ValueProps() {
  // 👇 2. Extraemos las traducciones de la sección
  const { t } = useLanguage();
  const content = t.home.valueProps;

  // 👇 3. Combinamos los iconos fijos con los textos traducidos
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
    // 👇 Fondo transparente y línea divisoria sutil
    <section className="relative z-10 w-full py-16 md:py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* =========================================
            COLUMNA DE TEXTO (Responsiva)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center lg:text-left" // Centrado en móvil, alineado a la izquierda en PC
        >
          {/* Brillo sutil de fondo centrado en móvil y ajustado en PC */}
          <div className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -z-10 w-48 h-48 bg-cyan-400/10 blur-[80px] rounded-full mix-blend-screen" />

          {/* Textos Traducidos */}
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 drop-shadow-md">
            {content.tag}
          </span>
          <h2 className="font-title text-3xl md:text-5xl text-white leading-tight mb-4 md:mb-6 drop-shadow-lg">
            {content.titleStart} <br className="hidden md:block" /><span className="text-yellow-400">{content.titleHighlight}</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-body drop-shadow-md max-w-xl mx-auto lg:mx-0">
            {content.desc}
          </p>
        </motion.div>

        {/* =========================================
            GRID DE TARJETAS (Liquid Glass)
        ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {valuesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              // Estilos base de cristal con padding responsivo (p-6 en móvil, p-8 en PC)
              className={`group p-6 md:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 backdrop-blur-md ${item.highlight
                ? 'bg-gradient-to-br from-yellow-400/10 to-dark/50 border border-yellow-400/30 shadow-[0_10px_40px_rgba(254,217,102,0.15)] hover:border-yellow-400/50 hover:shadow-[0_15px_50px_rgba(254,217,102,0.25)]'
                : 'bg-dark/40 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-cyan-400/30 hover:bg-dark/60 hover:shadow-[0_10px_40px_rgba(102,216,227,0.12)]'
                }`}
            >
              {/* Icono bloque de cristal con tamaño responsivo */}
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-6 border transition-colors duration-500 ${item.highlight
                ? 'bg-yellow-400/10 border-yellow-400/20 text-yellow-400 group-hover:bg-yellow-400/20'
                : 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400/20'
                }`}>
                <i className={`${item.icon} text-2xl md:text-3xl drop-shadow-md`}></i>
              </div>

              <h3 className="font-title text-lg md:text-xl text-white mb-2 md:mb-3 drop-shadow-md leading-tight">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-body">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}