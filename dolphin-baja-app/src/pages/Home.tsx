import React, { useState, useEffect } from 'react';
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

      {/* Contenedor Principal: Color base de profundidad oceánica */}
      <main className="relative bg-dark text-white w-full min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-dark">

        {/* =========================================================
            EFECTO UNDERWATER GLOBAL (Liquid Light) - 100% Responsivo
        ========================================================= */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Luz superior izquierda (Reflejo de la superficie) */}
          <div className="absolute -top-[5%] -left-[10%] w-[80%] md:w-[50%] h-[40%] md:h-[50%] bg-cyan-400/10 blur-[100px] md:blur-[120px] rounded-full mix-blend-screen"></div>

          {/* Luz profunda derecha (Tono marino) */}
          <div className="absolute top-[40%] -right-[20%] md:-right-[15%] w-[80%] md:w-[45%] h-[50%] md:h-[60%] bg-ocean/15 blur-[120px] md:blur-[150px] rounded-full mix-blend-screen"></div>

          {/* Sombra abisal inferior (Profundidad) */}
          <div className="absolute -bottom-[10%] md:-bottom-[20%] left-[10%] md:left-[20%] w-[90%] md:w-[60%] h-[40%] md:h-[50%] bg-navy/30 blur-[100px] md:blur-[130px] rounded-full mix-blend-multiply"></div>
        </div>

        {/* =========================================================
            COMPONENTES (Z-10 para estar sobre el agua)
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