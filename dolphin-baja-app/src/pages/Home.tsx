import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Componentes
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import ValueProps from '../components/ValueProps';
import HomeGallery from '../components/HomeGallery';
import Destination from '../components/Destination';
import SplashScreen from '../components/SplashScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {/* Contenedor Principal: bg-dark ahora invoca tu nuevo Azul Marino de index.css */}
      <main className="relative bg-dark text-white w-full min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-dark">

        {/* =========================================================
            EFECTO UNDERWATER GLOBAL (Vibrante y Safari-Friendly)
        ========================================================= */}
        <div
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ willChange: 'transform' }} // 👈 Mantiene los 60fps en iPhone
        >
          {/* Luz superior izquierda (El sol entrando al agua) */}
          <div className="absolute -top-[10%] -left-[20%] md:-top-[5%] md:-left-[10%] w-[120%] md:w-[60%] h-[50%] md:h-[60%] bg-cyan-400/15 blur-[90px] md:blur-[130px] rounded-full opacity-90 md:opacity-100" />

          {/* Luz media (Tono cálido de arrecife usando tu variable bg-ocean) */}
          <div className="absolute top-[30%] -right-[30%] md:top-[40%] md:-right-[15%] w-[120%] md:w-[50%] h-[60%] md:h-[60%] bg-ocean/20 blur-[100px] md:blur-[150px] rounded-full opacity-80 md:opacity-100" />

          {/* Sombra abisal inferior (Eliminamos el negro, usamos bg-navy profundo) */}
          <div className="absolute -bottom-[20%] left-0 md:-bottom-[20%] md:left-[10%] w-[100%] md:w-[80%] h-[50%] bg-navy/50 blur-[90px] md:blur-[140px] rounded-full" />
        </div>

        {/* =========================================================
            COMPONENTES (Z-10 para estar sobre las luces de fondo)
        ========================================================= */}
        <div className="relative z-10">
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