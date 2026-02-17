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
    // Al cargar el Home, aseguramos que inicie arriba si no hay un hash en la URL
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
      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {/* Contenedor Principal: bg-dark ahora invoca el Azul Arrecife de index.css */}
      <main className="relative bg-dark text-white w-full min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-dark">

        {/* =========================================================
            EFECTO UNDERWATER GLOBAL (Tropical y Safari-Friendly)
            Ajustamos las opacidades para que el nuevo fondo brille
        ========================================================= */}
        <div
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
          style={{ willChange: 'transform' }} // 👈 Mantiene los 60fps en iPhone
        >
          {/* Luz superior izquierda (El sol penetrando cristalino) 
              Subimos a cyan-400/20 para que los rayos destaquen sobre el azul más claro */}
          <div className="absolute -top-[10%] -left-[20%] md:-top-[5%] md:-left-[10%] w-[120%] md:w-[60%] h-[50%] md:h-[60%] bg-cyan-400/20 blur-[90px] md:blur-[130px] rounded-full opacity-90 md:opacity-100" />

          {/* Luz media (Tono cálido turquesa usando tu variable bg-ocean) */}
          <div className="absolute top-[30%] -right-[30%] md:top-[40%] md:-right-[15%] w-[120%] md:w-[50%] h-[60%] md:h-[60%] bg-ocean/25 blur-[100px] md:blur-[150px] rounded-full opacity-80 md:opacity-100" />

          {/* Sombra abisal inferior (usamos bg-navy profundo para dar base) 
              Bajamos ligeramente la opacidad a /40 para mantener la frescura */}
          <div className="absolute -bottom-[20%] left-0 md:-bottom-[20%] md:left-[10%] w-[100%] md:w-[80%] h-[50%] bg-navy/40 blur-[90px] md:blur-[140px] rounded-full" />
        </div>

        {/* =========================================================
            COMPONENTES (Z-10 para flotar sobre las luces)
        ========================================================= */}
        {/* Usamos un div con flex-col para asegurar un flujo de bloque perfecto sin colisiones de márgenes */}
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