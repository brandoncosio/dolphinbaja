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
        {/* Título adaptable según el idioma */}
        <title>
          {lang === 'es'
            ? 'Dolphin Dive Baja | Buceo y Snorkel en Loreto, BCS'
            : 'Dolphin Dive Baja | Diving & Snorkeling in Loreto, Mexico'}
        </title>

        {/* Descripción para Google */}
        <meta
          name="description"
          content={lang === 'es'
            ? 'Centro de Buceo PADI 5 Estrellas en Loreto. Vive experiencias únicas de buceo y snorkel en el Parque Nacional Bahía de Loreto con expertos locales.'
            : '5-Star PADI Dive Center in Loreto. Enjoy unique diving and snorkeling experiences at Loreto Bay National Park with local experts.'}
        />

        {/* Open Graph para que se vea Pro en WhatsApp/Facebook */}
        <meta property="og:title" content="Dolphin Dive Baja Loreto" />
        <meta property="og:description" content={t.home.valueProps.desc} />
        <meta property="og:image" content="/assets/images/logodolphin.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      <main className="relative bg-dark text-white w-full min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-dark">

        {/* EFECTO UNDERWATER GLOBAL */}
        <div
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ willChange: 'transform' }}
        >
          <div className="absolute -top-[10%] -left-[20%] md:-top-[5%] md:-left-[10%] w-[120%] md:w-[60%] h-[50%] md:h-[60%] bg-cyan-400/20 blur-[90px] md:blur-[130px] rounded-full opacity-90 md:opacity-100" />
          <div className="absolute top-[30%] -right-[30%] md:top-[40%] md:-right-[15%] w-[120%] md:w-[50%] h-[60%] md:h-[60%] bg-ocean/25 blur-[100px] md:blur-[150px] rounded-full opacity-80 md:opacity-100" />
          <div className="absolute -bottom-[20%] left-0 md:-bottom-[20%] md:left-[10%] w-[100%] md:w-[80%] h-[50%] bg-navy/40 blur-[90px] md:blur-[140px] rounded-full" />
        </div>

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