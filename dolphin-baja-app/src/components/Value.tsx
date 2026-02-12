import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: "ri-medal-line",
    title: "PADI 5 Stars",
    desc: "Único centro con la máxima calificación de calidad y seguridad en Loreto."
  },
  {
    icon: "ri-group-line",
    title: "Grupos Pequeños",
    desc: "Máximo 6 buzos por guía para una atención 100% personalizada."
  },
  {
    icon: "ri-leaf-line",
    title: "Eco-Consciente",
    desc: "Operaciones responsables dentro del Parque Nacional Bahía de Loreto."
  },
  {
    icon: "ri-anchor-line",
    title: "Cressi Dive Center",
    desc: "Equipos de gama alta renovados constantemente para tu confort."
  }
];

export default function Value() {
  // Partículas bioluminiscentes flotantes
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
    // CAMBIO CLAVE: bg-dark en lugar de bg-slate-50
    <section className="relative overflow-hidden bg-dark py-24 z-0">
      
      {/* Luces de fondo (Bioluminiscencia sutil) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan/10 blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" 
        />
      </div>

      {/* Partículas brillantes */}
      {motes.map((mote) => (
        <motion.div
          key={mote.id}
          className="absolute rounded-full bg-cyan/50 shadow-[0_0_10px_rgba(102,216,227,0.8)] z-0"
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
          
          {/* Lado Izquierdo: Imagen principal */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative z-10 aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl transition-all border border-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=800" 
                alt="Buceo de calidad en Loreto"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Overlay oscuro para la imagen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/80 to-transparent mix-blend-overlay" />
            </motion.div>
            
            {/* Marco decorativo estilo cristal oscuro */}
            <div className="absolute -left-6 -bottom-6 -z-10 h-full w-full rounded-[3rem] border-2 border-cyan/20 bg-white/5 backdrop-blur-sm" />
          </motion.div>

          {/* Lado Derecho: Contenido */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-cyan">
              Por qué elegirnos
            </span>
            <h2 className="mb-6 mt-4 font-title text-4xl text-white md:text-5xl">
              Seguridad, Calidad y <br/><span className="text-yellow drop-shadow-sm">Consciencia</span>
            </h2>
            <p className="mb-12 font-body text-lg leading-relaxed text-slate-300">
              No solo te llevamos al agua; creamos un entorno donde puedes relajarte y disfrutar de la vida marina sabiendo que estás en manos de profesionales capacitados con los más altos estándares internacionales.
            </p>

            {/* Grid de Beneficios (Dark Glassmorphism) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md transition-all hover:border-cyan/30 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(102,216,227,0.15)]"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:border-cyan/50 group-hover:bg-cyan/20">
                    <i className={`${feature.icon} text-2xl text-cyan transition-colors group-hover:text-yellow`}></i>
                  </div>
                  <h3 className="mb-2 font-title text-xl text-white">{feature.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-slate-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}