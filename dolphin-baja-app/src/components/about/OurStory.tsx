import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* PARTE 1: HISTORIA Y STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Desde 2010
            </span>
            <h2 className="font-title text-3xl md:text-4xl text-white leading-tight">
              Un negocio familiar en el corazón de Loreto
            </h2>
            <div className="space-y-4 font-body text-slate-400 text-lg leading-relaxed">
              <p>
                Somos Rafa (abogado) y María (mercadóloga). Llegamos a este paraíso buscando una vida tranquila para nuestros hijos, quienes hoy son orgullosamente loretanos.
              </p>
              <p>
                El destino nos trajo al mar y la comunidad nos acogió. Hoy, los cuatro trabajamos para devolver un poco de lo recibido, ofreciendo experiencias auténticas donde tú eres el invitado de honor en nuestra casa: el Mar de Cortés.
              </p>
            </div>

            {/* Chips de Valores */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Familia", "Comunidad", "Respeto", "Pasión"].map((val) => (
                <span key={val} className="px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm font-bold uppercase tracking-wider">
                  {val}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "2010", label: "Año de inicio" },
              { num: "15+", label: "Años en Loreto" },
              { num: "4", label: "Miembros familia" },
              { num: "100%", label: "Pasión por el mar" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800 p-8 rounded-3xl border border-white/5 text-center hover:border-yellow-400/30 transition-colors"
              >
                <span className="block font-title text-4xl text-white mb-2">{stat.num}</span>
                <span className="text-sm text-slate-400 font-body font-medium uppercase tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PARTE 2: MISIÓN BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] flex items-center justify-center text-center px-6 py-20"
        >
          {/* Fondo Peces */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: 'url("/nosotros/assets/imagenes/peces.webp")' }}
          />
          <div className="absolute inset-0 bg-slate-900/80 z-10" /> {/* Overlay oscuro */}

          <div className="relative z-20 max-w-3xl mx-auto">
            <p className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-sm mb-6">Nuestra Misión</p>
            <h3 className="font-title text-3xl md:text-5xl text-white leading-tight mb-8">
              Educar sobre qué <span className="text-cyan-400">ES</span> el mar, <br/>
              ¡para <span className="text-cyan-400">PROTEGERLO</span>!
            </h3>
            <p className="font-body text-xl text-slate-300 italic mb-10">
              "Primero los animales, segundo los animales, tercero los animales. <br/>
              Nosotros somos los visitantes."
            </p>
            
            <a 
              href="mailto:ventas@dolphindivebaja.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold hover:bg-white/20 transition-all group"
            >
              <i className="ri-mail-send-line text-xl group-hover:text-yellow-400 transition-colors"></i>
              Contáctanos por correo
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}