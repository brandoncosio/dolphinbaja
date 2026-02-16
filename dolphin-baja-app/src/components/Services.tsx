import React, { useMemo, useEffect } from 'react'; // Agregamos useEffect
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Imágenes
import funDivesImg from '/assets/images/colash1.webp';
import snorkelImg from '/assets/images/realsonrkell.jpeg';
import coursesImg from '/assets/images/certificacionpadi.jpeg';

export default function Services() {
  const { t, lang } = useLanguage();
  const content = t.servicesPage;

  // DEBUG: Revisa tu consola (F12) al dar clic al botón. 
  // Si no sale este mensaje, el problema es el botón de la Navbar.
  useEffect(() => {
    console.log("Idioma cambiado a:", lang);
    console.log("Contenido actual de servicios:", content);
  }, [lang, content]);

  const imageMap: Record<string, string> = {
    "01": funDivesImg,
    "02": snorkelImg,
    "03": coursesImg
  };

  const seaweeds = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      height: Math.random() * 200 + 150,
      duration: Math.random() * 4 + 6,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.1 + 0.05,
    }));
  }, []);

  return (
    // 👇 AGREGAMOS LA KEY AQUÍ PARA FORZAR EL REFRESCO
    <section key={lang} className="relative overflow-hidden bg-dark py-24">

      {/* ANIMACIÓN DE ALGAS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {seaweeds.map((sw) => (
          <motion.svg
            key={sw.id}
            viewBox="0 0 40 200"
            className="absolute bottom-0 text-cyan-400"
            style={{
              left: `${sw.left}%`,
              height: `${sw.height}px`,
              width: '40px',
              opacity: sw.opacity,
              transformOrigin: 'bottom center'
            }}
            animate={{
              skewX: [-5, 5, -5],
              rotate: [-3, 3, -3]
            }}
            transition={{
              duration: sw.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sw.delay
            }}
          >
            <path
              d="M20,200 C0,150 40,100 20,50 C0,20 20,0 20,0 C20,0 40,20 20,50 C0,100 40,150 20,200 Z"
              fill="currentColor"
            />
          </motion.svg>
        ))}
      </div>

      {/* Luces de profundidad */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-cyan-400/5 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-20">

        <div className="mb-20 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-body text-xs font-bold uppercase tracking-[0.5em] text-cyan-400"
          >
            {content.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-title text-4xl text-white md:text-6xl leading-tight"
          >
            {content.titleStart} <span className="text-yellow-400">{content.titleHighlight}</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {content.list.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className="group relative w-full md:w-1/2">
                <div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-[0_20px_60px_rgba(102,216,227,0.15)]">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    src={imageMap[service.id]}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <span className={`absolute -top-10 ${index % 2 !== 0 ? '-right-4' : '-left-4'} select-none font-title text-7xl md:text-9xl text-white/[0.05] z-[-1]`}>
                  {service.id}
                </span>
              </div>

              <div className="w-full md:w-1/2 text-left">
                <h3 className="mb-6 font-title text-3xl text-white md:text-5xl leading-tight drop-shadow-md">
                  {service.title}
                </h3>
                <p className="mb-8 font-body text-base md:text-lg leading-relaxed text-slate-300">
                  {service.description}
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 font-body text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-400 backdrop-blur-md shadow-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-5 font-title text-sm md:text-base text-white tracking-widest uppercase transition-colors hover:text-cyan-400"
                >
                  {content.btnDetails}
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-dark group-hover:shadow-[0_0_20px_rgba(102,216,227,0.5)]">
                    <i className="ri-arrow-right-line text-xl"></i>
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