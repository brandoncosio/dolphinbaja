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
    <section className="bg-slate-800 py-24 px-6 md:px-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4">
            Te ofrecemos
          </span>
          {/* CORREGIDO: font-title */}
          <h2 className="font-title text-3xl text-white md:text-5xl leading-tight mb-6">
            Buceo responsable y <br/><span className="text-yellow-400">experiencias auténticas</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-body">
            En Dolphin Dive Baja no solo te llevamos a bucear. Creamos experiencias seguras, humanas y conscientes dentro del Parque Nacional Bahía de Loreto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-8 rounded-3xl border transition-all hover:-translate-y-2 ${
                item.highlight 
                  ? 'bg-gradient-to-br from-yellow-400/20 to-transparent border-yellow-400/40 shadow-[0_0_30px_rgba(250,204,21,0.1)]' 
                  : 'bg-white/5 border-white/10 hover:border-cyan-400/30'
              }`}
            >
              <i className={`${item.icon} text-3xl mb-4 block ${item.highlight ? 'text-yellow-400' : 'text-cyan-400'}`}></i>
              {/* CORREGIDO: font-title */}
              <h3 className="font-title text-xl text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-body">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}