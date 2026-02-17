import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // 👇 Importación vital para SEO

// Contexto de idioma
import { useLanguage } from '../context/LanguageContext';

// Componentes de la página Nosotros
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import History from '../components/about/History';
import Team from '../components/about/Team';
import Gallery from '../components/about/Gallery';
import SplashScreen from '../components/SplashScreen';

export default function Nosotros() {
  const [isLoading, setIsLoading] = useState(true);
  const { t, lang } = useLanguage();

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
      {/* =========================================
          METADATOS DINÁMICOS (SEO & Redes Sociales)
      ========================================= */}
      <Helmet>
        <title>
          {lang === 'es'
            ? 'Nuestra Historia y Equipo | Dolphin Dive Baja Loreto'
            : 'Our Story & Team | Dolphin Dive Baja Loreto'}
        </title>
        <meta
          name="description"
          content={lang === 'es'
            ? 'Conoce a la familia detrás de Dolphin Dive Baja. Más de 15 años de experiencia, instructores PADI y capitanes locales en el Parque Nacional Bahía de Loreto.'
            : 'Meet the family behind Dolphin Dive Baja. Over 15 years of experience, PADI instructors, and local captains in the Loreto Bay National Park.'}
        />
        <meta property="og:title" content="Dolphin Dive Baja - Familia y Equipo" />
        <meta property="og:description" content={t.aboutPage.hero.desc} />
        <meta property="og:image" content="/assets/nosotros/team.webp" />
      </Helmet>

      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {/* 👇 Fondo Dark Corporativo (Ahora usa el vibrante Azul Arrecife) */}
      <main key={lang} className="relative min-h-screen bg-dark text-white w-full overflow-x-hidden selection:bg-cyan-400 selection:text-dark">

        {/* =========================================================
            EFECTO UNDERWATER GLOBAL (Aguas Someras)
        ========================================================= */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ willChange: 'transform' }}>
          {/* Luz superior izquierda (Aumentamos intensidad a /20) */}
          <div className="absolute top-[5%] -left-[10%] w-[80%] md:w-[60%] h-[40%] md:h-[50%] bg-cyan-400/20 blur-[120px] md:blur-[130px] rounded-full" />

          {/* Luz profunda derecha (Usando la variable ocean) */}
          <div className="absolute top-[40%] -right-[15%] w-[70%] md:w-[50%] h-[50%] md:h-[60%] bg-ocean/25 blur-[130px] md:blur-[150px] rounded-full" />

          {/* Sombra de profundidad usando navy para dar contraste sin usar negro */}
          <div className="absolute -bottom-[10%] left-[10%] w-[80%] h-[40%] bg-navy/40 blur-[120px] rounded-full" />
        </div>

        {/* =========================================================
            CONTENIDO (Z-10 para flotar sobre el agua)
        ========================================================= */}
        <div className="relative z-10 flex flex-col">
          {/* 1. Hero con foto del equipo */}
          <AboutHero />

          {/* 2. Historia, Misión y Estadísticas (¡Ya pulido al inicio!) */}
          <OurStory />

          {/* 3. Línea de Tiempo (Timeline) */}
          <History />

          {/* 4. Grid del Equipo (Staff) (¡Ya pulido al inicio!) */}
          <Team />

          {/* 5. Tienda Cressi y Galería */}
          <Gallery />
        </div>
      </main>
    </>
  );
}