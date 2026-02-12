import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Imágenes
import imgTours from '/assets/images/tours.webp';
import imgExperiencias from '/assets/images/experiencias.webp';
import imgStaff from '/assets/images/staff.webp';
import imgPlanifica from '/assets/images/planifica2.webp';

const highlights = [
  {
    id: 1,
    kicker: "Servicios",
    title: "Fun Dives & Aventuras",
    image: imgTours,
    link: "/servicios",
    size: "md:col-span-2 md:row-span-2 min-h-[400px]", 
    delay: 0
  },
  {
    id: 2,
    kicker: "Experiencias",
    title: "Snorkeling & Familia",
    image: imgExperiencias,
    link: "/servicios",
    size: "md:col-span-1 md:row-span-1 min-h-[200px]",
    delay: 0.1
  },
  {
    id: 3,
    kicker: "Nosotros",
    title: "Familia y Misión",
    image: imgStaff,
    link: "/nosotros",
    size: "md:col-span-1 md:row-span-1 min-h-[200px]",
    delay: 0.2
  },
  {
    id: 4,
    kicker: "Planifica",
    title: "Ubicación y Contacto",
    image: imgPlanifica,
    link: "/contacto",
    size: "md:col-span-2 md:row-span-1 min-h-[200px]", 
    delay: 0.3
  }
];

export default function Highlights() {
  return (
    <section className="bg-slate-900 py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4">
            Explora
          </span>
          {/* CORREGIDO: font-title */}
          <h2 className="font-title text-3xl text-white md:text-5xl leading-tight">
            Elige tu próxima <br/> <span className="text-yellow-400">Experiencia en Loreto</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg leading-relaxed font-body">
            Tours, experiencias y el mar como debe vivirse: en grupos pequeños y con respeto total por la vida marina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3">
          {highlights.map((item) => (
            <Link 
              to={item.link} 
              key={item.id}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl ${item.size} block`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.5 }}
                className="h-full w-full relative"
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
                      {item.kicker}
                    </span>
                    {/* CORREGIDO: font-title */}
                    <h3 className="font-title text-2xl text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-bold text-yellow-400 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Ver detalles <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 h-10 w-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white group-hover:bg-yellow-400 group-hover:text-slate-900 group-hover:border-yellow-400 transition-colors">
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}