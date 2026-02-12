import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Componentes
import Hero from '../components/Hero';
import Highlights from '../components/Highlights.tsx'; // Sección Mosaico (Tours/Snorkel/Staff)
import ValueProps from '../components/ValueProps.tsx'; // Sección "Te ofrecemos"
import Destination from '../components/Destination.tsx'; // Sección Mapa
import SplashScreen from '../components/SplashScreen.tsx'; // Tu splash screen

export default function Home() {
  // Estado para el Splash Screen (opcional, si lo quieres solo en el Home)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos carga o usamos sessionStorage para que salga solo una vez por sesión
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
      {/* Splash Screen solo en Home */}
      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {/* Contenido Principal */}
      <main className="bg-dark text-white w-full overflow-x-hidden">
        
        {/* 1. Hero Slider */}
        <Hero />

        {/* 2. Mosaico de Experiencias (Adaptado de tu sección Highlights) */}
        <Highlights />

        {/* 3. Propuesta de Valor (PADI 5 Estrellas, Grupos pequeños) */}
        <ValueProps />

        {/* 4. Mapa y Destino */}
        <Destination />

      </main>
    </>
  );
}