import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import slide1 from '/assets/images/slide1.webp';
import slide2 from '/assets/images/slide2.webp';
import slide3 from '/assets/images/slide3.webp';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

// Nota: Mantendremos los textos aquí por ahora. 
// En el siguiente paso los migraremos a translations.ts
const slidesData: Slide[] = [
  {
    id: 1,
    title: "MÁS QUE BUCEO,<br/>UNA EXPERIENCIA INOLVIDABLE",
    subtitle: "Cada inmersión está diseñada para conectarte con el océano y la naturaleza.",
    image: slide1
  },
  {
    id: 2,
    title: "EXPLORA LORETO<br/>DESDE EL MAR",
    subtitle: "Tours guiados y excursiones para descubrir paisajes submarinos únicos.",
    image: slide2
  },
  {
    id: 3,
    title: "SNORKEL Y AVENTURA<br/>PARA TODOS",
    subtitle: "Vive el océano con actividades diseñadas para familias y amantes del mar.",
    image: slide3
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. MEJORA DE FLUIDEZ: Pre-carga de imágenes en caché
  useEffect(() => {
    slidesData.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Temporizador del Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 5000); // Lo subí a 5s para darle un ritmo más "relajado" y acuático
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-dark min-h-[600px] h-[85vh] md:h-screen">

      {/* =========================================
          FONDOS DE IMAGEN (Crossfade Fluido)
          ========================================= */}
      <div className="absolute inset-0 z-0 bg-dark">
        {/* Quitamos mode="wait" para que se mezclen suavemente */}
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }} // 1.5s para un cruce súper sedoso
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slidesData[currentIndex].image})` }}
          >
            {/* Capa de profundidad (Agua oscura) */}
            <div className="absolute inset-0 bg-dark/30 mix-blend-multiply" />

            {/* Gradiente principal para legibilidad (Tonos oceánicos) */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-navy/60 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================
          CONTENIDO DE TEXTO
          ========================================= */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-20 lg:px-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl pt-20 md:pt-0"
          >
            {/* Texto decorativo superior (Aporta al estilo premium) */}
            <span className="block font-body text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4 drop-shadow-md">
              Parque Nacional Bahía de Loreto
            </span>

            <h1
              className="mb-6 font-title text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
              dangerouslySetInnerHTML={{ __html: slidesData[currentIndex].title }}
            />

            <p className="mb-10 max-w-xl font-body text-base md:text-lg lg:text-xl text-slate-200 drop-shadow-md font-medium leading-relaxed">
              {slidesData[currentIndex].subtitle}
            </p>

            {/* BOTONES LIQUID GLASS */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">

              {/* Botón Principal (Amarillo Glass) */}
              <a
                href="https://wa.me/526131182311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-8 py-3.5 font-title text-sm text-yellow-400 backdrop-blur-md transition-all hover:bg-yellow-400/20 hover:border-yellow-400/50 hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(254,217,102,0.15)] group"
              >
                <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
                Reservar experiencia
              </a>

              {/* Botón Secundario (Cyan Glass) */}
              <Link
                to="/servicios"
                className="flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-8 py-3.5 font-title text-sm text-cyan-400 backdrop-blur-md transition-all hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(102,216,227,0.15)] group"
              >
                Ver servicios <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
              </Link>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================
          CONTROLES (Dots estilo burbuja)
          ========================================= */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-700 shadow-md backdrop-blur-sm ${index === currentIndex
                ? "w-8 bg-cyan-400 border border-cyan-400/50"
                : "w-2.5 bg-white/30 border border-white/20 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </section>
  );
}