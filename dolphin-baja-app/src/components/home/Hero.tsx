import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useLanguage } from '../../context/LanguageContext';

import slide1 from '/assets/images/slide1.webp';
import slide2 from '/assets/images/slide2.webp';
import slide3 from '/assets/images/slide3.webp';
import slide4 from '/assets/images/colash1.webp';
import slide5 from '/assets/images/colash2.webp';

const slideImages = [slide1, slide2, slide3, slide4, slide5];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lang } = useLanguage();

  // ========================================================================
  // 📚 TEXTOS LOCALES (Control total de los 5 slides en EN y ES)
  // ========================================================================
  const pageData = {
    es: {
      tag: "Explora el Mar de Cortés",
      btnBook: "Reservar Ahora",
      btnServices: "Nuestros Servicios",
      slides: [
        {
          title: "Descubre el <br/><span class='text-cyan-500 drop-shadow-md'>Acuario del Mundo</span>",
          subtitle: "Buceo y snorkel de clase mundial en el Parque Nacional Bahía de Loreto. Sumérgete en uno de los ecosistemas más vibrantes del planeta."
        },
        {
          title: "PADI 5-Star & <br/><span class='text-cyan-500 drop-shadow-md'>Cressi Center</span>",
          subtitle: "Tu seguridad es nuestra prioridad. Como el único centro exclusivo de la región, ofrecemos certificaciones y equipos con los más altos estándares."
        },
        {
          title: "Encuentros <br/><span class='text-cyan-500 drop-shadow-md'>Inolvidables</span>",
          subtitle: "Nada junto a amigables lobos marinos, tortugas, delfines y la majestuosa vida marina que habita en las profundidades de Baja California."
        },
        {
          title: "Más que un centro de buceo, <br/><span class='text-cyan-500 drop-shadow-md'>somos familia</span>",
          subtitle: "Conoce el océano de la mano de verdaderos locales, enamorados del mar y apasionados por la conservación, seguridad y enseñanza."
        },
        {
          title: "Expediciones a <br/><span class='text-cyan-500 drop-shadow-md'>las Islas</span>",
          subtitle: "Descubre las maravillas submarinas de Coronados, Carmen y Danzantes. Aventura y paisajes increíbles para todos los niveles de experiencia."
        }
      ]
    },
    en: {
      tag: "Explore the Sea of Cortez",
      btnBook: "Book Now",
      btnServices: "Our Services",
      slides: [
        {
          title: "Discover the <br/><span class='text-cyan-500 drop-shadow-md'>World's Aquarium</span>",
          subtitle: "World-class diving and snorkeling in the Loreto Bay National Marine Park. Dive into one of the most vibrant ecosystems on the planet."
        },
        {
          title: "PADI 5-Star & <br/><span class='text-cyan-500 drop-shadow-md'>Cressi Center</span>",
          subtitle: "Your safety is our top priority. As the only exclusive dive center in the region, we offer certifications and gear with the highest standards."
        },
        {
          title: "<span class='text-cyan-500 drop-shadow-md'>Unforgettable</span> <br/>Encounters",
          subtitle: "Swim alongside friendly sea lions, sea turtles, dolphins, and the majestic marine life that inhabits the depths of Baja California."
        },
        {
          title: "More than a dive center, <br/><span class='text-cyan-500 drop-shadow-md'>we are a family</span>",
          subtitle: "Explore the ocean guided by true locals who deeply love the sea and are passionate about conservation, safety, and teaching."
        },
        {
          title: "Island <br/><span class='text-cyan-500 drop-shadow-md'>Expeditions</span>",
          subtitle: "Discover the underwater wonders of Coronados, Carmen, and Danzantes. Guaranteed adventure and stunning landscapes for all experience levels."
        }
      ]
    }
  };

  const content = pageData[lang === 'en' ? 'en' : 'es'];

  useEffect(() => {
    slideImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 5500); // 5.5s para dar tiempo a leer bien
    return () => clearTimeout(timer);
  }, []);

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Clean Code)
  // ========================================================================

  // 👇 AJUSTE APLICADO: Cambiado de 'rounded-full' a 'rounded-xl'
  const primaryBtnClass = `
    flex items-center justify-center gap-3 rounded-xl px-6 py-3.5 md:px-8 md:py-4 
    font-title text-sm tracking-widest uppercase backdrop-blur-md transition-all 
    hover:-translate-y-1 active:scale-95 group shadow-lg border w-full sm:w-auto
    bg-yellow-400 border-yellow-400 text-navy 
    hover:bg-yellow-300 hover:border-yellow-300 shadow-yellow-500/30
    dark:bg-black/30 dark:border-yellow-400 dark:text-yellow-400 
    dark:hover:bg-yellow-400 dark:hover:text-dark dark:shadow-none
  `;

  // 👇 AJUSTE APLICADO: Cambiado de 'rounded-full' a 'rounded-xl'
  const secondaryBtnClass = `
    flex items-center justify-center gap-3 rounded-xl border px-6 py-3.5 md:px-8 md:py-4 
    font-title text-sm tracking-widest uppercase backdrop-blur-md transition-all 
    hover:-translate-y-1 active:scale-95 group shadow-lg w-full sm:w-auto
    bg-white/90 border-white text-navy 
    hover:bg-cyan-500 hover:text-white hover:border-cyan-500 shadow-black/10
    dark:bg-black/30 dark:border-cyan-400 dark:text-cyan-400 
    dark:hover:bg-cyan-400 dark:hover:text-dark dark:shadow-none
  `;

  const overlayGradientClass = `
    absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r transition-colors duration-500
    from-slate-50/95 via-slate-50/60 md:via-slate-50/40 to-transparent
    dark:from-dark/95 dark:via-dark/70 md:dark:via-dark/40 dark:to-transparent
  `;

  const heroTagClass = `
    inline-block font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 
    px-4 py-1.5 md:px-5 md:py-2 rounded-xl backdrop-blur-md border transition-all duration-500 shadow-sm
    bg-white/80 border-white/60 text-navy
    dark:bg-black/50 dark:border-white/10 dark:text-cyan-400
  `;

  return (
    <section key={lang} className="relative w-full overflow-hidden h-[100dvh] min-h-[600px] transition-colors duration-500 bg-slate-50 dark:bg-dark">

      {/* FONDOS DE IMAGEN CON KEN BURNS EFFECT SUTIL */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-[center_top] md:bg-center"
            style={{
              backgroundImage: `url(${slideImages[currentIndex]})`,
              willChange: 'opacity, transform'
            }}
          >
            <div className={overlayGradientClass} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENIDO TEXTUAL */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 pt-32 pb-24 md:pt-40 md:px-20 lg:px-32 pointer-events-auto">

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl lg:max-w-4xl w-full"
          >
            <span className={heroTagClass}>
              {content.tag}
            </span>

            <h1
              className="mb-4 md:mb-6 font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] md:leading-[1.1] drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] transition-colors duration-500 text-navy dark:text-white dark:drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]"
              dangerouslySetInnerHTML={{ __html: content.slides[currentIndex].title }}
            />

            <p className="whitespace-pre-line mb-8 md:mb-12 max-w-2xl font-body text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md font-medium leading-relaxed transition-colors duration-500 text-slate-700 dark:text-slate-100">
              {content.slides[currentIndex].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/526131182311"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtnClass}
              >
                <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
                {content.btnBook}
              </a>

              <Link
                to="/servicios"
                className={secondaryBtnClass}
              >
                {content.btnServices} <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLES (Dots) */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-700 shadow-md backdrop-blur-sm ${index === currentIndex
              ? "w-8 bg-cyan-400 border border-cyan-400/50"
              : "w-2.5 hover:bg-navy/40 border-navy/10 bg-navy/20 dark:hover:bg-white/60 dark:border-white/20 dark:bg-white/30"
              }`}
          />
        ))}
      </div>

    </section>
  );
}