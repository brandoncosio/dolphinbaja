import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Componentes de la página Nosotros
import AboutHero from '../components/about/AboutHero.tsx';
import OurStory from '../components/about/OurStory.tsx';
import History from '../components/about/History.tsx';
import Team from '../components/about/Team.tsx';
import Gallery from '../components/about/Gallery.tsx';
import SplashScreen from '../components/SplashScreen.tsx';

export default function Nosotros() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Carga un poco más rápida para páginas internas
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      <main className="bg-slate-900 text-white w-full overflow-x-hidden">
        {/* 1. Hero con foto del equipo */}
        <AboutHero />

        {/* 2. Historia, Misión y Estadísticas */}
        <OurStory />

        {/* 3. Línea de Tiempo (Timeline) */}
        <History />

        {/* 4. Grid del Equipo (Staff) */}
        <Team />

        {/* 5. Tienda Cressi y Galería */}
        <Gallery />
      </main>
    </>
  );
}