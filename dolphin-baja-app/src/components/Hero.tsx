import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

import slide1 from '/assets/images/slide1.webp';
import slide2 from '/assets/images/slide2.webp';
import slide3 from '/assets/images/slide3.webp';

const slideImages = [slide1, slide2, slide3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { t, lang } = useLanguage();
  const heroContent = t.home.hero;
  const translatedSlides = heroContent.slides;

  // Pre-carga de imágenes en caché
  useEffect(() => {
    slideImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Temporizador del Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // 'h-[100dvh]' asegura 100% de alto dinámico en móviles. key={lang} fuerza refresco de idioma.
    <section key={lang} className="relative w-full overflow-hidden bg-dark h-[100dvh] min-h-[600px] md:min-h-[700px]">

      {/* =========================================
          FONDOS DE IMAGEN (Crossfade Fluido)
          ========================================= */}
      <div className="absolute inset-0 z-0 bg-dark">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slideImages[currentIndex]})`,
              willChange: 'opacity, transform' // 👈 Optimización clave para iOS
            }}
          >
            {/* Capa de profundidad */}
            <div className="absolute inset-0 bg-dark/20 mix-blend-multiply" />

            {/* Gradiente principal adaptado para que el texto sea siempre legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/10 md:bg-gradient-to-r md:from-dark/95 md:via-dark/60 md:to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================
          CONTENIDO DE TEXTO
          ========================================= */}
      {/* Usamos pt-24 md:pt-0 para dejar espacio al Navbar en móvil */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 pt-24 pb-20 md:py-0 md:px-20 lg:px-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl lg:max-w-4xl"
          >
            {/* Texto decorativo superior */}
            <span className="block font-body text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4 drop-shadow-md">
              {heroContent.tag}
            </span>

            {/* Título adaptativo */}
            <h1
              className="mb-4 md:mb-6 font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] md:leading-[1.1] text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
              dangerouslySetInnerHTML={{ __html: translatedSlides[currentIndex].title }}
            />

            {/* Subtítulo adaptativo */}
            <p className="mb-8 md:mb-10 max-w-xl font-body text-base sm:text-lg lg:text-xl text-slate-200 drop-shadow-md font-medium leading-relaxed">
              {translatedSlides[currentIndex].subtitle}
            </p>

            {/* BOTONES LIQUID GLASS */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              {/* Botón Principal (Amarillo Glass) */}
              <a
                href="https://wa.me/526131182311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-8 py-3.5 md:py-4 font-title text-sm tracking-widest uppercase text-yellow-400 backdrop-blur-md transition-all hover:bg-yellow-400 hover:text-dark hover:border-yellow-400 hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(250,204,21,0.15)] group"
              >
                <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
                {heroContent.btnBook}
              </a>

              {/* Botón Secundario (Cyan Glass) */}
              <Link
                to="/servicios"
                className="flex items-center justify-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-8 py-3.5 md:py-4 font-title text-sm tracking-widest uppercase text-cyan-400 backdrop-blur-md transition-all hover:bg-cyan-400 hover:text-dark hover:border-cyan-400 hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(34,211,238,0.15)] group"
              >
                {heroContent.btnServices} <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================
          CONTROLES (Dots estilo burbuja)
          ========================================= */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        {slideImages.map((_, index) => (
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