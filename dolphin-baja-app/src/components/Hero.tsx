import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useLanguage } from '../context/LanguageContext';

import slide1 from '/assets/images/slide1.webp';
import slide2 from '/assets/images/slide2.webp';
import slide3 from '/assets/images/slide3.webp';
import slide4 from '/assets/images/colash1.webp';
import slide5 from '/assets/images/colash2.webp';

const slideImages = [slide1, slide2, slide3, slide4, slide5];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, lang } = useLanguage();
  const heroContent = t.home.hero;

  const translatedSlides = heroContent.slides;
  const getSlideContent = (index: number) => {
    return translatedSlides[index % translatedSlides.length];
  };

  useEffect(() => {
    slideImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // ========================================================================
  // 🎨 ESTILOS PREMIUM (100% Consistentes con el resto de la app)
  // ========================================================================

  // 👇 Ahora usan rounded-xl en lugar de rounded-full para coincidir con Servicios y Contacto
  const primaryBtnClass = `
    flex items-center justify-center gap-3 rounded-xl px-6 py-4 md:px-10 md:py-4.5 
    font-title text-[11px] md:text-xs tracking-widest uppercase transition-all duration-300
    hover:-translate-y-1 active:scale-95 group shadow-xl border w-full sm:w-auto
    bg-cyan-600 border-cyan-600 text-white hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-cyan-500/30
    dark:bg-cyan-500 dark:border-cyan-500 dark:text-navy dark:hover:bg-cyan-400 dark:hover:border-cyan-400 dark:shadow-none
  `;

  // 👇 Igual aquí, rounded-xl estricto.
  const secondaryBtnClass = `
    flex items-center justify-center gap-3 rounded-xl px-6 py-4 md:px-10 md:py-4.5 
    font-title text-[11px] md:text-xs tracking-widest uppercase transition-all duration-300
    hover:-translate-y-1 active:scale-95 group shadow-lg border w-full sm:w-auto
    bg-white/90 backdrop-blur-md border-white/60 text-slate-700 hover:bg-white hover:text-cyan-600 hover:shadow-cyan-100
    dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/40 dark:shadow-none
  `;

  const overlayGradientClass = `
    absolute inset-0 transition-colors duration-500
    bg-gradient-to-t from-slate-50 via-slate-50/70 to-slate-50/20 md:bg-gradient-to-r md:from-slate-50/95 md:via-slate-50/60 md:to-transparent
    dark:bg-gradient-to-t dark:from-dark dark:via-dark/80 dark:to-dark/40 md:dark:bg-gradient-to-r md:dark:from-dark/95 md:dark:via-dark/70 md:dark:to-transparent
  `;

  // La etiqueta (Tag) sí mantiene el rounded-full porque es un estándar de diseño para "Badges" o etiquetas.
  const heroTagClass = `
    inline-block font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8
    px-4 py-1.5 md:px-6 md:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-500 shadow-md
    bg-white/80 border-white/60 text-cyan-700
    dark:bg-black/60 dark:border-white/10 dark:text-cyan-400
  `;

  return (
    <section key={lang} className="relative w-full overflow-hidden h-[100dvh] min-h-[650px] transition-colors duration-500 bg-slate-50 dark:bg-dark">

      {/* FONDOS */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
            style={{ willChange: 'opacity, transform' }}
          >
            <img
              src={slideImages[currentIndex]}
              alt="Dolphin Dive Baja Loreto"
              className="w-full h-full object-cover object-[center_30%] md:object-center"
            />
            <div className="absolute inset-0 bg-navy/20 dark:bg-black/30" />
            <div className={overlayGradientClass} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENIDO TEXTUAL */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 pt-48 pb-24 md:pt-56 lg:pt-64 md:px-12 lg:px-24 xl:px-32 pointer-events-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full"
          >
            <span className={heroTagClass}>
              {heroContent.tag}
            </span>

            <h1
              className="mb-6 md:mb-8 font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] md:leading-[1.05] drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-colors duration-500
              text-navy dark:text-white"
              dangerouslySetInnerHTML={{ __html: getSlideContent(currentIndex).title }}
            />

            <p className="mb-10 md:mb-12 max-w-xl font-body text-base sm:text-lg lg:text-xl drop-shadow-sm font-medium leading-relaxed transition-colors duration-500
              text-slate-600 dark:text-slate-200">
              {getSlideContent(currentIndex).subtitle}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/526131182311"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtnClass}
              >
                <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
                {heroContent.btnBook}
              </a>

              <Link
                to="/servicios"
                className={secondaryBtnClass}
              >
                {heroContent.btnServices} <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLES DEL CARRUSEL (Puntos alineados a la izquierda) */}
      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 lg:left-24 xl:left-32 flex gap-3 z-20">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-700 shadow-md backdrop-blur-md ${index === currentIndex
                ? "w-8 bg-cyan-600 border border-cyan-600 dark:bg-cyan-400 dark:border-cyan-400"
                : "w-2.5 bg-slate-300/50 border border-slate-400/50 hover:bg-slate-400 dark:bg-white/20 dark:border-white/20 dark:hover:bg-white/40"
              }`}
          />
        ))}
      </div>

    </section>
  );
}