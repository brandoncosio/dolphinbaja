import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Componentes
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import ValueProps from '../components/ValueProps';
import HomeGallery from '../components/HomeGallery';
import Destination from '../components/Destination';
import SplashScreen from '../components/SplashScreen';

import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { t, lang } = useLanguage();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (hasLoaded) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* =========================================
          METADATOS DINÁMICOS (SEO & Redes Sociales)
      ========================================= */}
      <Helmet>
        <title>
          {lang === 'es'
            ? 'Dolphin Dive Baja | Buceo y Snorkel en Loreto, BCS'
            : 'Dolphin Dive Baja | Diving & Snorkeling in Loreto, Mexico'}
        </title>

        <meta
          name="description"
          content={lang === 'es'
            ? 'Centro de Buceo PADI 5 Estrellas en Loreto. Vive experiencias únicas de buceo y snorkel en el Parque Nacional Bahía de Loreto con expertos locales.'
            : '5-Star PADI Dive Center in Loreto. Enjoy unique diving and snorkeling experiences at Loreto Bay National Park with local experts.'}
        />

        <meta property="og:title" content="Dolphin Dive Baja Loreto" />
        <meta property="og:description" content={t.home.valueProps.desc} />
        <meta property="og:image" content="/assets/images/logodolphin.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {/* 👇 CAMBIO MAESTRO DE TEMA:
          - dark:bg-dark (Noche) | bg-slate-50 (Día - Blanco Hielo)
          - dark:text-white (Noche) | text-navy (Día - Azul Marino)
      */}
      <main className="relative w-full min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-dark transition-colors duration-500 dark:bg-dark bg-slate-50 dark:text-white text-navy">

        {/* EFECTO UNDERWATER GLOBAL (Adaptable) */}
        <div
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ willChange: 'transform' }}
        >
          {/* Luz Superior Izquierda:
              - Noche: Cyan brillante (opacity-90)
              - Día: Cyan muy pálido y sutil (bg-cyan-500/5 opacity-40) para no ensuciar el blanco
          */}
          <div className="absolute -top-[10%] -left-[20%] md:-top-[5%] md:-left-[10%] w-[120%] md:w-[60%] h-[50%] md:h-[60%] rounded-full blur-[90px] md:blur-[130px] transition-all duration-500
            dark:bg-cyan-400/20 dark:opacity-90 
            bg-cyan-500/5 opacity-40"
          />

          {/* Luz Derecha Profunda:
              - Noche: Ocean/Azul (opacity-80)
              - Día: Azul casi transparente
          */}
          <div className="absolute top-[30%] -right-[30%] md:top-[40%] md:-right-[15%] w-[120%] md:w-[50%] h-[60%] md:h-[60%] rounded-full blur-[100px] md:blur-[150px] transition-all duration-500
            dark:bg-ocean/25 dark:opacity-80 
            bg-blue-500/5 opacity-30"
          />

          {/* Sombra Inferior:
              - Noche: Navy oscuro para profundidad
              - Día: Desaparece casi por completo para dejar el footer limpio
          */}
          <div className="absolute -bottom-[20%] left-0 md:-bottom-[20%] md:left-[10%] w-[100%] md:w-[80%] h-[50%] rounded-full blur-[90px] md:blur-[140px] transition-all duration-500
            dark:bg-navy/40 
            bg-slate-200/20"
          />
        </div>

        <div className="relative z-10 flex flex-col">
          {/* Los componentes hijos heredarán el color de texto base (Navy en día, Blanco en noche) */}
          <Hero />
          <Highlights />
          <ValueProps />
          <HomeGallery />
          <Destination />
        </div>

      </main>
    </>
  );
}