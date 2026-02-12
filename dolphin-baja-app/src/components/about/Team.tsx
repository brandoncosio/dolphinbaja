import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: "Kaliman", role: "Capitán", img: "/assets/nosotros/kaliman2.png" },
  { name: "Alex", role: "Dive Master", img: "/assets/nosotros/alex.webp" },
  { name: "Pablo", role: "Dive Master", img: "/assets/nosotros/pablo.webp" },
  { name: "Luis", role: "Capitán", img: "/assets/nosotros/luis.webp" },
  { name: "Fiona", role: "DM Training", img: "/assets/nosotros/fiona.webp" },
  { name: "Rafa Jr", role: "DM Training", img: "/assets/nosotros/rafa3.webp" },
  { name: "Rafa", role: "Instructor", img: "/assets/nosotros/rafa2.webp" },
  { name: "María", role: "Assistant Inst.", img: "/assets/nosotros/maria.webp" },
];

export default function Team() {
  return (
    <section className="bg-navy py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-cyan-400/5 blur-[100px] rounded-full -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-3 block">Nuestro Recurso Humano</span>
          <h2 className="font-title text-3xl md:text-5xl text-white mb-6">Equipo local y profesional</h2>
          <p className="font-body text-slate-300">
            Creemos en el desarrollo profesional. Hemos formado 7 Dive Masters mexicanos y nuestros capitanes son gente de mar que conoce cada rincón del Parque Nacional.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 border border-white/10 group-hover:border-yellow-400/50 transition-colors mb-4 relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="font-title text-xl text-white mb-1">{member.name}</h3>
              <p className="font-body text-sm text-cyan-400 font-bold uppercase tracking-wide">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}