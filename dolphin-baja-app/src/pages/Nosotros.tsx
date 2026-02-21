import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import DiveSites from '../components/DiveSites';

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
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Clean Code)
  // ========================================================================

  // 1. Contenedor Principal
  const pageContainerClass = `
    relative min-h-screen w-full overflow-x-hidden transition-colors duration-500 selection:bg-cyan-400 selection:text-dark
    bg-slate-50 text-slate-600
    dark:bg-dark dark:text-slate-200
  `;

  // 2. Contenedor Atmósfera (Luces de fondo)
  const atmosphereContainerClass = `
    fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-500
    /* LIGHT: Muy sutil (40%) para que se vea limpio */
    opacity-40
    /* DARK: Total (100%) para profundidad */
    dark:opacity-100
  `;

  // 3. Luz Superior Izquierda
  const blobTopLeftClass = `
    absolute top-[5%] -left-[10%] w-[80%] md:w-[60%] h-[40%] md:h-[50%] rounded-full blur-[120px] md:blur-[130px] transition-colors duration-500
    bg-cyan-400/10
    dark:bg-cyan-400/20
  `;

  // 4. Luz Derecha Profunda
  const blobRightClass = `
    absolute top-[40%] -right-[15%] w-[70%] md:w-[50%] h-[50%] md:h-[60%] rounded-full blur-[130px] md:blur-[150px] transition-colors duration-500
    bg-blue-400/10
    dark:bg-ocean/25
  `;

  // 5. Sombra Inferior
  const blobBottomClass = `
    absolute -bottom-[10%] left-[10%] w-[80%] h-[40%] rounded-full blur-[120px] transition-colors duration-500
    bg-slate-200/50
    dark:bg-navy/40
  `;

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

      <main key={lang} className={pageContainerClass}>

        {/* =========================================================
            EFECTO UNDERWATER GLOBAL (Atmósfera)
        ========================================================= */}
        <div className={atmosphereContainerClass} style={{ willChange: 'transform' }}>
          <div className={blobTopLeftClass} />
          <div className={blobRightClass} />
          <div className={blobBottomClass} />
        </div>

        {/* =========================================================
            CONTENIDO (Z-10 para flotar sobre el agua)
        ========================================================= */}
        <div className="relative z-10 flex flex-col">

          {/* 1. Hero */}
          <AboutHero />

          {/* 2. Historia & Misión */}
          <OurStory />

          {/* 3. Timeline */}
          <History />

          {/* 4. Staff */}
          <Team />

          {/* 5. Galería */}
          <DiveSites />

          <Gallery />

        </div>
      </main>
    </>
  );
}