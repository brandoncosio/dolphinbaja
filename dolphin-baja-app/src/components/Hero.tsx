import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Interfaz para los datos de cada slide
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
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: 2,
    title: "EXPLORA LORETO<br/>DESDE EL MAR",
    subtitle: "Tours guiados y excursiones para descubrir paisajes submarinos únicos.",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: 3,
    title: "SNORKEL Y AVENTURA<br/>PARA TODOS",
    subtitle: "Vive el océano con actividades diseñadas para familias y amantes del mar.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1920"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica del auto-play (4.5 segundos como en tu script original)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
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
            {/* Overlay (reemplaza los gradientes complejos de tu CSS) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
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
            className="max-w-4xl"
          >
            <h1 
              className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
              dangerouslySetInnerHTML={{ __html: slidesData[currentIndex].title }}
            />
            <p className="mb-8 max-w-xl text-lg text-slate-200 md:text-xl">
              {slidesData[currentIndex].subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-yellow-400 px-8 py-3 font-bold text-slate-900 transition-transform hover:scale-105 hover:bg-yellow-300">
                Reservar experiencia
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                Ver servicios
              </button>
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
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-8 bg-yellow-400" : "w-2.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}