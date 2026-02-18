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
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Clean Code)
  // ========================================================================

  // 1. Botón Principal (WhatsApp)
  const primaryBtnClass = `
    flex items-center justify-center gap-3 rounded-full px-8 py-3.5 md:py-4 font-title text-sm tracking-widest uppercase backdrop-blur-md transition-all hover:-translate-y-1 active:scale-95 group shadow-lg border
    
    /* LIGHT MODE: Sólido, Vibrante, Alto Contraste */
    bg-yellow-400 border-yellow-400 text-navy 
    hover:bg-yellow-300 hover:border-yellow-300 shadow-yellow-500/30

    /* DARK MODE: Matte Glass (Fondo oscuro, Borde nítido, Sin neón difuso) */
    dark:bg-black/30 dark:border-yellow-400 dark:text-yellow-400 
    dark:hover:bg-yellow-400 dark:hover:text-dark dark:shadow-none
  `;

  // 2. Botón Secundario (Servicios)
  const secondaryBtnClass = `
    flex items-center justify-center gap-3 rounded-full border px-8 py-3.5 md:py-4 font-title text-sm tracking-widest uppercase backdrop-blur-md transition-all hover:-translate-y-1 active:scale-95 group shadow-lg
    
    /* LIGHT MODE: Blanco casi sólido, Limpio */
    bg-white/90 border-white text-navy 
    hover:bg-cyan-500 hover:text-white hover:border-cyan-500 shadow-black/10

    /* DARK MODE: Matte Glass (Fondo oscuro, Borde nítido cyan) */
    dark:bg-black/30 dark:border-cyan-400 dark:text-cyan-400 
    dark:hover:bg-cyan-400 dark:hover:text-dark dark:shadow-none
  `;

  // 3. Gradiente de Fondo (Overlay sobre la imagen)
  const overlayGradientClass = `
    absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r transition-colors duration-500
    
    /* LIGHT: Se funde hacia blanco/hielo */
    from-slate-50/90 via-slate-50/30 to-transparent

    /* DARK: Se funde hacia el azul oscuro (Dark Reef) */
    dark:from-dark/90 dark:via-dark/30 dark:to-transparent
  `;

  return (
    <section key={lang} className="relative w-full overflow-hidden h-[100dvh] min-h-[600px] transition-colors duration-500 bg-slate-50 dark:bg-dark">

      {/* FONDOS DE IMAGEN */}
      <div className="absolute inset-0 z-0">
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
              willChange: 'opacity, transform'
            }}
          >
            {/* Gradiente aplicado desde la variable */}
            <div className={overlayGradientClass} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 pt-20 pb-32 md:py-0 md:px-20 lg:px-32 pointer-events-auto">

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl lg:max-w-4xl"
          >
            <span className="block font-body text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md transition-colors
              text-cyan-700 dark:text-cyan-400">
              {heroContent.tag}
            </span>

            <h1
              className="mb-4 md:mb-6 font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] md:leading-[1.1] drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-colors duration-500
              text-navy dark:text-white"
              dangerouslySetInnerHTML={{ __html: getSlideContent(currentIndex).title }}
            />

            <p className="mb-8 md:mb-10 max-w-xl font-body text-base sm:text-lg lg:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] font-medium leading-relaxed transition-colors duration-500
              text-slate-700 dark:text-slate-100">
              {getSlideContent(currentIndex).subtitle}
            </p>

            {/* BOTONES CON CLASES SEPARADAS */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">

              {/* Botón Principal */}
              <a
                href="https://wa.me/526131182311"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtnClass}
              >
                <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
                {heroContent.btnBook}
              </a>

              {/* Botón Secundario */}
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

      {/* CONTROLES (Dots) */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-700 shadow-md backdrop-blur-sm ${index === currentIndex
              ? "w-8 bg-cyan-400 border border-cyan-400/50" // Activo (Igual en ambos)
              : "w-2.5 hover:bg-navy/40 border-navy/10 bg-navy/20 dark:hover:bg-white/60 dark:border-white/20 dark:bg-white/30" // Inactivo (Adaptable)
              }`}
          />
        ))}
      </div>

    </section>
  );
}