import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
      {/* Fondo con Parallax suave */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full"
        >
          {/* USANDO RUTA PUBLIC DIRECTA */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("/assets/nosotros/team.webp")' }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4"
        >
          Nuestra Esencia
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-title text-5xl md:text-7xl text-white mb-6 drop-shadow-lg"
        >
          Más que buceo, <br/> somos <span className="text-yellow-400">Familia</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-body text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
        >
          Conectando personas con la vida marina del Parque Nacional Bahía de Loreto a través de experiencias responsables y humanas.
        </motion.p>
      </div>
    </section>
  );
}