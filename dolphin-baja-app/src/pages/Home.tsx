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

      {/* Contenedor Principal */}
      <main className="relative bg-dark text-white w-full min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-dark">

        {/* =========================================================
            EFECTO UNDERWATER GLOBAL (Optimizado para Apple / Safari)
            - Eliminamos mix-blend-mode (Causa lag al hacer scroll)
            - Agregamos willChange: 'transform' (Fuerza uso de GPU)
            - Tamaños relativos adaptados a móviles y escritorio
        ========================================================= */}
        <div
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ willChange: 'transform' }}
        >
          {/* Luz superior izquierda (Reflejo de la superficie) */}
          <div className="absolute -top-[10%] -left-[20%] md:-top-[5%] md:-left-[10%] w-[120%] md:w-[50%] h-[50%] md:h-[50%] bg-cyan-400/10 blur-[80px] md:blur-[120px] rounded-full opacity-80 md:opacity-100" />

          {/* Luz profunda derecha (Tono marino) */}
          <div className="absolute top-[30%] -right-[30%] md:top-[40%] md:-right-[15%] w-[120%] md:w-[45%] h-[60%] md:h-[60%] bg-[#0C71A5]/15 blur-[100px] md:blur-[150px] rounded-full opacity-70 md:opacity-100" />

          {/* Sombra abisal inferior (Profundidad) */}
          <div className="absolute -bottom-[20%] left-0 md:-bottom-[20%] md:left-[20%] w-[100%] md:w-[60%] h-[50%] bg-black/30 blur-[80px] md:blur-[130px] rounded-full" />
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