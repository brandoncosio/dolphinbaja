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
    size: "md:col-span-1 md:row-span-1 min-h-[250px]",
    delay: 0.1
  },
  {
    id: 3,
    kicker: "Nosotros",
    title: "Familia y Misión",
    image: imgStaff,
    link: "/nosotros",
    size: "md:col-span-1 md:row-span-1 min-h-[250px]",
    delay: 0.2
  },
  {
    id: 4,
    kicker: "Planifica",
    title: "Ubicación y Contacto",
    image: imgPlanifica,
    link: "/contacto",
    size: "md:col-span-2 md:row-span-1 min-h-[250px]",
    delay: 0.3
  }
];

export default function Highlights() {
  return (
    // 👇 1. Fondo transparente para dejar pasar la luz del Home.
    // Usamos relative y z-10 para asegurar que el contenido esté sobre las luces.
    <section className="relative z-10 w-full py-24 px-6 md:px-20">

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center md:text-left relative"
        >
          {/* Luz decorativa sutil detrás del título */}
          <div className="absolute top-1/2 left-0 md:-left-10 -translate-y-1/2 -z-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-[60px]" />

          <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 drop-shadow-md">
            Explora
          </span>
          <h2 className="font-title text-3xl text-white md:text-5xl leading-tight drop-shadow-lg">
            Elige tu próxima <br /> <span className="text-yellow-400">Experiencia en Loreto</span>
          </h2>
          <p className="mt-6 text-slate-300 max-w-2xl text-lg leading-relaxed font-body font-medium drop-shadow-md">
            Tours, experiencias y el mar como debe vivirse: en grupos pequeños y con respeto total por la vida marina.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3">
          {highlights.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              // 👇 2. Liquid Glass en los bordes y sombras oceánicas
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-dark/40 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-cyan-400/40 hover:shadow-[0_8px_40px_rgba(102,216,227,0.15)] transition-all duration-500 ${item.size} block`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6, ease: "easeOut" }}
                className="h-full w-full relative"
              >
                {/* Imagen con zoom fluido */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />

                {/* 👇 3. Degradado usando el color 'dark' corporativo para sumergir la foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block drop-shadow-md">
                      {item.kicker}
                    </span>
                    <h3 className="font-title text-2xl text-white mb-2 drop-shadow-lg">
                      {item.title}
                    </h3>

                    {/* Texto que aparece suavemente */}
                    <div className="flex items-center gap-2 text-sm font-bold text-yellow-400 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 drop-shadow-md">
                      Ver detalles <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>

                {/* 👇 4. Botón flotante estilo Glassmorphism */}
                <div className="absolute top-6 right-6 h-11 w-11 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white shadow-lg group-hover:bg-cyan-400/20 group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all duration-500 z-10">
                  <i className="ri-arrow-right-up-line text-lg group-hover:rotate-45 transition-transform duration-300"></i>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}