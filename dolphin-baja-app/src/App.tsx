import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sileo'; // 👈 IMPORTACIÓN DE LA LIBRERÍA SILEO

// Contextos
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Componentes Globales
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SplashScreen from './components/layout/SplashScreen';
import ScrollToTop from './components/layout/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieConsent from './components/layout/CookieConsent';
import DiveSites from './components/DiveSites';

// ==========================================
// 🚀 PÁGINAS LAZY (Carga Diferida)
// ==========================================
const Home = lazy(() => import('./pages/Home'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Contacto = lazy(() => import('./pages/Contacto'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center dark:bg-dark bg-slate-50 transition-colors duration-500">
    <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// ====================================================================
// 🧠 CEREBRO DE LA APP (Controla el Splash y las Transiciones)
// ====================================================================
function AppContent() {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  // Estado de carga y control de primera ejecución
  const [isLoading, setIsLoading] = useState(true);
  const isFirstRun = useRef(true);

  // A. Efecto de Carga Inicial (Al abrir la web)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      isFirstRun.current = false; // Marcamos que ya terminó la intro
    }, 2500); // 2.5 seg de intro
    return () => clearTimeout(timer);
  }, []);

  // B. Efecto de Transición (Al cambiar Tema o Idioma)
  useEffect(() => {
    // Si NO es la primera vez (para no chocar con el efecto A)
    if (!isFirstRun.current) {
      setIsLoading(true); // Mostramos Splash

      // Transición rápida (1 seg) para que sea ágil
      const timer = setTimeout(() => {
        setIsLoading(false); // Ocultamos Splash
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [theme, lang]);

  return (
    <div className="relative min-h-screen font-body selection:bg-cyan-400 selection:text-dark transition-colors duration-500 dark:bg-dark bg-slate-50 dark:text-white text-navy">

      {/* ====================================================================
          🔔 TOASTER GLOBAL DE SILEO (Ajustado para la Navbar Gigante)
          ==================================================================== */}
      {/* Eliminamos el className problemático. Sileo maneja el z-index internamente */}
      <Toaster position="top-center" offset={160} />

      {/* SPLASH SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      <Navbar />

      <Suspense fallback={<PageLoader />}>
        {/* Usamos key={lang} para forzar la recarga de textos; el Splash cubrirá el parpadeo */}
        <main key={lang}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/divesites" element={<DiveSites />} />
            <Route path="/galeria" element={<GalleryPage />} />
          </Routes>
        </main>
      </Suspense>

      <Footer />
      <CookieConsent />

    </div>
  );
}

// ====================================================================
// COMPONENTE RAÍZ (Solo Proveedores)
// ====================================================================
export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <ScrollToTop />
            {/* AppContent maneja la lógica visual y el Router interno */}
            <AppContent />
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}