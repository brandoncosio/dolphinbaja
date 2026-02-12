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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 aspect-[3/4] md:h-screen md:aspect-auto">

      {/* Slides de Imágenes */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slidesData[currentIndex].image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contenido de Texto */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-20 lg:px-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl pt-20 md:pt-0" // Un poco de padding top en móvil para que no choque con el header
          >
            <h1
              className="mb-6 font-title text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg"
              dangerouslySetInnerHTML={{ __html: slidesData[currentIndex].title }}
            />

            <p className="mb-8 max-w-xl font-body text-lg text-slate-200 md:text-xl drop-shadow-md font-medium">
              {slidesData[currentIndex].subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/526131182311"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 px-8 py-3 font-body font-bold text-slate-900 transition-transform hover:scale-105 hover:bg-yellow-300 inline-flex items-center gap-2 shadow-lg"
              >
                <i className="ri-whatsapp-line text-xl"></i> Reservar experiencia
              </a>

              <Link
                to="/servicios"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3 font-body font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 inline-flex items-center gap-2"
              >
                Ver servicios <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots de navegación */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-500 shadow-md ${index === currentIndex ? "w-8 bg-yellow-400" : "w-2.5 bg-white/60 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
}