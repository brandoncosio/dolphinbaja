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
    // Aseguramos que la página inicie desde arriba
    window.scrollTo(0, 0);

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

      {/* 👇 1. Fondo Dark Corporativo (Azul Marino) */}
      <main className="relative min-h-screen bg-dark text-white w-full overflow-x-hidden selection:bg-cyan-400 selection:text-dark">

        {/* =========================================================
            EFECTO UNDERWATER GLOBAL (Liquid Light Fijo y Optimizado)
            - Fuera mix-blend-screen
            - Adición de aceleración por hardware (will-change)
            - Uso de la nueva paleta de colores (ocean y navy)
        ========================================================= */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ willChange: 'transform' }}>
          {/* Luz superior izquierda */}
          <div className="absolute top-[5%] -left-[10%] w-[80%] md:w-[60%] h-[40%] md:h-[50%] bg-cyan-400/15 blur-[100px] md:blur-[120px] rounded-full" />

          {/* Luz profunda derecha (Usando la variable ocean) */}
          <div className="absolute top-[40%] -right-[15%] w-[70%] md:w-[50%] h-[50%] md:h-[60%] bg-ocean/20 blur-[120px] md:blur-[150px] rounded-full" />

          {/* Sombra de profundidad usando navy para dar contraste sin usar negro */}
          <div className="absolute -bottom-[10%] left-[10%] w-[80%] h-[40%] bg-navy/60 blur-[120px] rounded-full" />
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