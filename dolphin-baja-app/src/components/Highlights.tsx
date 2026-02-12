import React from 'react';
import { motion } from 'framer-motion';

// 👇 IMPORTACIÓN DE IMÁGENES LOCALES
import highlight1 from '/assets/images/colash1.webp';  // Lobos marinos / Naturaleza
import highlight2 from '/assets/images/colash4.webp';  // Tortuga / Aventura
import highlight3 from '/assets/images/realsonrkell.jpeg'; // Snorkel
import highlight4 from '/assets/images/certificacionpadi.jpeg'; // Cursos

const highlights = [
  {
    id: 1,
    title: "Encuentro con Lobos Marinos",
    category: "Naturaleza",
    image: highlight1, // Variable importada
    size: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "Buceo en Arrecifes",
    category: "Aventura",
    image: highlight2,
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    title: "Snorkel en Loreto",
    category: "Tour",
    image: highlight3,
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    title: "Certificaciones PADI",
    category: "Cursos",
    image: highlight4,
    size: "md:col-span-2 md:row-span-1"
  }
];

export default function Highlights() {
  return (
    <section className="bg-dark py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Decoración de fondo (Blur de color) */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs font-bold uppercase tracking-[0.4em] text-cyan">
            Descubre el Acuario del Mundo
          </span>
          <h2 className="mt-4 font-title text-4xl text-white md:text-6xl leading-tight">
            Experiencias <br/> <span className="text-yellow">Inmersivas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className={`group relative overflow-hidden rounded-[2.5rem] ${item.size} shadow-2xl border border-white/5`}
            >
              {/* Imagen con Overlay Gradual */}
              <img 
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Glassmorphism Effect on Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent p-8 flex flex-col justify-end">
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-3xl border border-white/10 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="font-body text-xs font-black uppercase tracking-widest text-cyan mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-title text-xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}