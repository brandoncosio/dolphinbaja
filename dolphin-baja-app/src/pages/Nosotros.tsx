import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Componentes de la página Nosotros
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import History from '../components/about/History';
import Team from '../components/about/Team';
import Gallery from '../components/about/Gallery';
import SplashScreen from '../components/SplashScreen';

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

      {/* 👇 1. Fondo Dark Corporativo y Selección de texto Premium */}
      <main className="relative min-h-screen bg-dark text-white w-full overflow-x-hidden selection:bg-cyan-400 selection:text-dark">

        {/* =========================================================
            EFECTO UNDERWATER GLOBAL (Liquid Light Fijo)
        ========================================================= */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Luz superior izquierda */}
          <div className="absolute top-[5%] -left-[10%] w-[80%] md:w-[60%] h-[40%] md:h-[50%] bg-cyan-400/10 blur-[100px] md:blur-[120px] rounded-full mix-blend-screen" />

          {/* Luz profunda derecha */}
          <div className="absolute top-[40%] -right-[15%] w-[70%] md:w-[50%] h-[50%] md:h-[60%] bg-[#0C71A5]/15 blur-[120px] md:blur-[150px] rounded-full mix-blend-screen" />
        </div>

        {/* =========================================================
            CONTENIDO (Z-10 para flotar sobre el agua)
        ========================================================= */}
        <div className="relative z-10">
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
        </div>
      </main>
    </>
  );
}