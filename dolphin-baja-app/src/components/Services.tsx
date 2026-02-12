import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Fun Dives",
    description: "Inmersiones de dos tanques para buzos certificados. Explora los mejores arrecifes de las islas Coronados y Carmen.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
    tags: ["2 Tanques", "PADI", "Guía Pro"]
  },
  {
    id: "02",
    title: "Snorkeling Adventure",
    description: "Perfecto para familias. Conecta con la vida marina en aguas cristalinas y disfruta de un lunch en playas vírgenes.",
    image: "https://images.unsplash.com/photo-1590533357552-3286f76f78f6?auto=format&fit=crop&q=80&w=1200",
    tags: ["Familiar", "Equipo Incluido", "Lunch"]
  },
  {
    id: "03",
    title: "Cursos de Buceo",
    description: "¿Quieres aprender? Desde tu primera burbuja hasta certificaciones avanzadas con el único centro PADI 5 Estrellas.",
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=1200",
    tags: ["Open Water", "Referidos", "e-Learning"]
  }
];

export default function Services() {
  // Generador de Algas Marinas (Kelp)
  const seaweeds = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Posición horizontal
      height: Math.random() * 150 + 100, // Altura entre 100px y 250px
      duration: Math.random() * 4 + 5, // Velocidad de balanceo (5 a 9 seg)
      delay: Math.random() * 2,
      opacity: Math.random() * 0.15 + 0.05, // Opacidad sutil para que no estorbe el texto
    }));
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dark to-navy py-24 z-0">
      
      {/* Animación de Algas en el fondo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {seaweeds.map((sw) => (
          <motion.svg
            key={sw.id}
            viewBox="0 0 40 200"
            className="absolute bottom-0 text-cyan"
            style={{ 
              left: `${sw.left}%`, 
              height: `${sw.height}px`,
              width: '40px',
              opacity: sw.opacity,
              transformOrigin: 'bottom center' 
            }}
            animate={{ 
              skewX: [-8, 8, -8], // Efecto de doblez por el agua
              rotate: [-5, 5, -5] // Inclinación
            }}
            transition={{ 
              duration: sw.duration, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: sw.delay 
            }}
          >
            {/* Ruta SVG que dibuja una hoja de alga */}
            <path 
              d="M20,200 C0,150 40,100 20,50 C0,20 20,0 20,0 C20,0 40,20 20,50 C0,100 40,150 20,200 Z" 
              fill="currentColor" 
            />
          </motion.svg>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-20">
        
        {/* Título de Sección */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-4 font-body text-xs font-black uppercase tracking-[0.5em] text-cyan"
          >
            Nuestros Servicios
          </motion.p>
          <h2 className="font-title text-4xl text-white md:text-6xl">
            Vive el <span className="text-yellow">Mar de Cortés</span>
          </h2>
        </div>

        {/* Listado de Servicios */}
        <div className="flex flex-col gap-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Imagen con Contenedor de Cristal */}
              <div className="group relative w-full md:w-1/2">
                <div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_0_40px_rgba(102,216,227,0.1)] transition-shadow duration-500 group-hover:shadow-[0_0_60px_rgba(102,216,227,0.25)]">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={service.image} 
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700"
                  />
                  {/* Overlay sutil para oscurecer un poco la imagen y unificar el tono */}
                  <div className="absolute inset-0 bg-navy/20 mix-blend-overlay" />
                </div>
              </div>

              {/* Contenido de Texto */}
              <div className="relative w-full md:w-1/2">
                <span className="absolute -left-8 -top-16 -z-10 select-none font-title text-[8rem] text-white/[0.03]">
                  {service.id}
                </span>
                
                <h3 className="mb-6 font-title text-3xl text-white md:text-4xl">
                  {service.title}
                </h3>
                <p className="mb-8 font-body text-lg leading-relaxed text-slate-300">
                  {service.description}
                </p>

                {/* Tags estilo "Pills" bajo el agua */}
                <div className="mb-10 flex flex-wrap gap-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-wider text-cyan backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 font-title text-white transition-colors hover:text-cyan"
                >
                  Ver detalles 
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors group-hover:bg-cyan group-hover:border-cyan group-hover:text-navy">
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}