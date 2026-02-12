import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    year: "2013",
    title: "Nace Dolphin Dive Baja",
    desc: "Bruce Williams y Susan Speck nos pasan la estafeta. Le agregamos el 'Baja' y comenzamos esta aventura.",
    image: "/assets/nosotros/time1.webp"
  },
  {
    year: "PADI",
    title: "26 Años de Excelencia",
    desc: "Mantenemos el estatus de PADI Dive Center 5 Estrellas, celebrando más de dos décadas de seguridad y calidad.",
    image: "/assets/nosotros/time2.webp"
  },
  {
    year: "AWARE",
    title: "Compromiso Ambiental",
    desc: "Trabajamos activamente en el proyecto PADI AWARE para mantener nuestro océano limpio y protegido.",
    image: "/assets/nosotros/time3.webp"
  },
  {
    year: "2022",
    title: "Somos Cressi Point",
    desc: "Nos convertimos en Centro de Buceo Cressi (CDC), garantizando el mejor equipo y tecnología para ti.",
    image: "/assets/nosotros/time4.webp"
  }
];

export default function History() {
  return (
    // 👇 AQUÍ ESTÁ EL ID PARA EL MENÚ
    <section id="historia" className="bg-slate-900 pb-24 px-6 md:px-20 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-title text-3xl md:text-5xl text-white">Un Poco de Historia...</h2>
        </div>

        <div className="space-y-12">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800 p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-cyan-400/20 transition-all flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Columna Fecha */}
              <div className="flex flex-col items-center md:items-start min-w-[100px]">
                <span className="font-title text-4xl text-yellow-400">{event.year}</span>
                <div className="h-1 w-12 bg-cyan-400 rounded-full mt-2"></div>
              </div>

              {/* Columna Texto */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-title text-2xl text-white mb-3">{event.title}</h3>
                <p className="font-body text-slate-400 leading-relaxed">{event.desc}</p>
              </div>

              {/* Columna Imagen */}
              <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}