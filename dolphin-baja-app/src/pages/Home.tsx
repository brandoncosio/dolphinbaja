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
  // Estado para el Splash Screen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Revisamos si ya se mostró el splash en esta sesión
    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (hasLoaded) {
      setIsLoading(false);
    } else {
      // Si es la primera vez, esperamos 2.5s y guardamos la marca
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Splash Screen (Solo aparece una vez por sesión) */}
      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {/* Contenido Principal */}
      <main className="bg-slate-900 text-white w-full overflow-x-hidden">

        {/* 1. Hero Slider (Portada) */}
        <Hero />

        {/* 2. Mosaico de Experiencias (Highlights) */}
        <Highlights />

        {/* 3. Propuesta de Valor (PADI 5 Estrellas, etc.) */}
        <ValueProps />

        {/* 4. Galería Visual (Bento Grid) */}
        <HomeGallery />

        {/* 5. Mapa y Ubicación */}
        <Destination />

      </main>
    </>
  );
}