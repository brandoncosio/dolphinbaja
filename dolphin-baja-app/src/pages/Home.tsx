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

  // ========================================================================
  // 🎨 ESTILOS ATMOSFÉRICOS (Separados por Capas)
  // ========================================================================

  // 1. Contenedor Principal (Fondo Base)
  const mainContainerClass = `
    relative w-full min-h-screen overflow-x-hidden transition-colors duration-500 
    selection:bg-cyan-400 selection:text-dark
    
    /* LIGHT: Fondo Hielo, Texto Azul Marino */
    bg-slate-50 text-navy
    
    /* DARK: Fondo Azul Arrecife, Texto Blanco */
    dark:bg-dark dark:text-white
  `;

  // 2. Luz Superior Izquierda (El "Sol" subacuático)
  const blobTopLeftClass = `
    absolute -top-[10%] -left-[20%] md:-top-[5%] md:-left-[10%] w-[120%] md:w-[60%] h-[50%] md:h-[60%] rounded-full blur-[90px] md:blur-[130px] transition-all duration-500
    
    /* LIGHT: Aire fresco, casi imperceptible para limpieza */
    bg-cyan-400/5 opacity-40
    
    /* DARK: Profundidad misteriosa, no neón (opacity-30) */
    dark:bg-cyan-500/10 dark:opacity-30
  `;

  // 3. Luz Derecha (Profundidad)
  const blobRightClass = `
    absolute top-[30%] -right-[30%] md:top-[40%] md:-right-[15%] w-[120%] md:w-[50%] h-[60%] md:h-[60%] rounded-full blur-[100px] md:blur-[150px] transition-all duration-500
    
    /* LIGHT: Azul cielo muy tenue */
    bg-blue-400/5 opacity-30
    
    /* DARK: Azul océano profundo */
    dark:bg-ocean/10 dark:opacity-40
  `;

  // 4. Sombra Inferior (Base del Footer)
  const blobBottomClass = `
    absolute -bottom-[20%] left-0 md:-bottom-[20%] md:left-[10%] w-[100%] md:w-[80%] h-[50%] rounded-full blur-[90px] md:blur-[140px] transition-all duration-500
    
    /* LIGHT: Gris suave para asentar */
    bg-slate-200/30
    
    /* DARK: Navy sólido para fundirse con el footer */
    dark:bg-navy/60
  `;

  return (
    <>
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

      <main className={mainContainerClass}>

        {/* EFECTO UNDERWATER GLOBAL */}
        <div
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ willChange: 'transform' }}
        >
          <div className={blobTopLeftClass} />
          <div className={blobRightClass} />
          <div className={blobBottomClass} />
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="relative z-10 flex flex-col">
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