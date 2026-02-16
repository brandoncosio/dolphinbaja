import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: "ri-award-line",
    title: "Centro PADI 5 Estrellas",
    desc: "Somos el único Centro PADI 5 Estrellas y Cressi Dive Center en Loreto, cumpliendo con los más altos estándares."
  },
  {
    icon: "ri-group-line",
    title: "Grupos Pequeños",
    desc: "Máximo 6 buzos por Dive Master o 8 snorkelistas por guía. Atención humana y personalizada."
  },
  {
    icon: "ri-restaurant-line",
    title: "Todo Incluido",
    desc: "Brazaletes del parque, lunch y bebidas incluidos para que solo te preocupes por disfrutar."
  },
  {
    icon: "ri-leaf-line",
    title: "Nuestra Misión",
    desc: "Educar para proteger. Primero los animales, segundo los animales, tercero los animales.",
    highlight: true
  }
];

export default function ValueProps() {
  return (
    // 👇 1. Fondo transparente y línea divisoria sutil (Liquid Glass)
    <section className="relative z-10 w-full py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* =========================================
            COLUMNA DE TEXTO
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Brillo sutil de fondo para resaltar el texto en el agua */}
          <div className="absolute top-0 left-0 -z-10 w-48 h-48 bg-cyan-400/10 blur-[80px] rounded-full mix-blend-screen" />

          <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 drop-shadow-md">
            Te ofrecemos
          </span>
          <h2 className="font-title text-3xl text-white md:text-5xl leading-tight mb-6 drop-shadow-lg">
            Buceo responsable y <br /><span className="text-yellow-400">experiencias auténticas</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-body drop-shadow-md">
            En Dolphin Dive Baja no solo te llevamos a bucear. Creamos experiencias seguras, humanas y conscientes dentro del Parque Nacional Bahía de Loreto.
          </p>
        </motion.div>

        {/* =========================================
            GRID DE TARJETAS (Liquid Glass)
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              // 👇 2. Estilos base de las tarjetas de cristal
              className={`group p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 backdrop-blur-md ${item.highlight
                  // Tarjeta destacada (Amarilla)
                  ? 'bg-gradient-to-br from-yellow-400/10 to-dark/50 border border-yellow-400/30 shadow-[0_10px_40px_rgba(254,217,102,0.15)] hover:border-yellow-400/50 hover:shadow-[0_15px_50px_rgba(254,217,102,0.25)]'
                  // Tarjetas normales (Cyan oscuro)
                  : 'bg-dark/40 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-cyan-400/30 hover:bg-dark/60 hover:shadow-[0_10px_40px_rgba(102,216,227,0.12)]'
                }`}
            >
              {/* 👇 3. Icono dentro de un bloque de cristal para más profundidad */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-colors duration-500 ${item.highlight
                  ? 'bg-yellow-400/10 border-yellow-400/20 text-yellow-400 group-hover:bg-yellow-400/20'
                  : 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400/20'
                }`}>
                <i className={`${item.icon} text-3xl drop-shadow-md`}></i>
              </div>

              <h3 className="font-title text-xl text-white mb-3 drop-shadow-md">{item.title}</h3>
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