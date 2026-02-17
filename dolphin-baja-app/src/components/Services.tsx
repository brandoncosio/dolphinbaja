import { useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Imágenes
import funDivesImg from '/assets/images/colash1.webp';
import snorkelImg from '/assets/images/realsonrkell.jpeg';
import coursesImg from '/assets/images/certificacionpadi.jpeg';

export default function Services() {
  const { t, lang } = useLanguage();
  const content = t.servicesPage;

  useEffect(() => {
    // Scroll to top al cargar la página si no hay hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

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
    // Agregamos pt-32 para dar espacio suficiente a la Navbar flotante
    <section key={lang} className="relative overflow-hidden bg-dark pt-32 pb-24 min-h-screen">

      {/* =========================================
          ANIMACIÓN DE ALGAS (Sutiles y Optimizadas)
      ========================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {seaweeds.map((sw) => (
          <motion.svg
            key={sw.id}
            viewBox="0 0 40 200"
            // Color turquesa para complementar el fondo Azul Arrecife
            className="absolute bottom-0 text-cyan-300"
            style={{
              left: `${sw.left}%`,
              height: `${sw.height}px`,
              width: '40px',
              opacity: sw.opacity,
              transformOrigin: 'bottom center',
              willChange: 'transform' // 👈 Salva a iOS de recalcular el layout
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

      {/* =========================================
          LUCES DE PROFUNDIDAD (Aguas Someras)
      ========================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ willChange: 'transform' }}>
        <div className="absolute top-[10%] -left-[10%] w-[80%] h-[40%] bg-cyan-400/20 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] -right-[20%] w-[60%] h-[50%] bg-ocean/25 blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] left-[10%] w-[80%] h-[30%] bg-navy/40 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* =========================================
            ENCABEZADO
        ========================================= */}
        <div className="mb-20 md:mb-32 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-body text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400 drop-shadow-md"
          >
            {content.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
          >
            {content.titleStart} <span className="text-yellow-400">{content.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* =========================================
            LISTA DE SERVICIOS (Layout Zig-Zag)
        ========================================= */}
        <div className="flex flex-col gap-28 md:gap-40">
          {content.list.map((service, index) => (
            <motion.div
              // Usamos el ID del servicio como Hash para que el Navbar haga scroll hasta aquí
              id={service.id === "01" ? "fundives" : service.id === "02" ? "snorkel" : "cursos"}
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // Añadimos scroll-mt-32 para que el Navbar flotante no tape el título
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24 scroll-mt-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >

              {/* BLOQUE IMAGEN */}
              <div className="group relative w-full md:w-1/2">
                {/* Efecto Apple Glass en la imagen: 
                  Aumentamos backdrop-blur-xl para un borde esmerilado más premium y sombra más difusa
                */}
                <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(102,216,227,0.25)]" style={{ willChange: 'transform' }}>

                  <img
                    src={imageMap[service.id]}
                    alt={service.title}
                    loading="lazy"
                    // Movimiento sutil mediante clases nativas para mejor perf
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out md:group-hover:scale-105 will-change-transform"
                  />

                  {/* Degradado solo en la base (Usando Navy) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 md:opacity-40 md:group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Número Gigante de Fondo (Marca de agua aumentada de 0.03 a 0.08 para visibilidad) */}
                <span className={`absolute -top-10 md:-top-16 ${index % 2 !== 0 ? 'right-0 md:-right-8' : 'left-0 md:-left-8'} select-none font-title text-[6rem] md:text-[10rem] lg:text-[12rem] text-white/[0.08] z-[-1] leading-none mix-blend-overlay pointer-events-none`}>
                  {service.id}
                </span>
              </div>

              {/* BLOQUE TEXTO */}
              <div className="w-full md:w-1/2 text-left relative z-10">
                <h3 className="mb-4 md:mb-6 font-title text-3xl sm:text-4xl lg:text-5xl text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                  {service.title}
                </h3>

                <p className="mb-8 md:mb-10 font-body text-base md:text-lg leading-relaxed text-slate-100 font-medium drop-shadow-sm">
                  {service.description}
                </p>

                {/* 👇 ETIQUETAS (Convertidas en píldoras de cristal esmerilado) */}
                <div className="mb-10 flex flex-wrap gap-2 md:gap-3">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-4 md:px-5 py-2 font-body text-[10px] md:text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botón de Reservar (Amarillo Liquid Glass) */}
                <a
                  href={`https://wa.me/526131182311?text=Hola, estoy interesado en reservar la experiencia: ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-8 py-4 font-title text-sm tracking-widest uppercase text-yellow-400 backdrop-blur-xl transition-all hover:bg-yellow-400 hover:text-dark hover:border-yellow-400 hover:-translate-y-1 active:scale-95 shadow-[0_8px_20px_rgba(250,204,21,0.15)] group w-full sm:w-auto"
                >
                  <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
                  {content.btnDetails}
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}