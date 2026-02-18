import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Contextos
import { LanguageProvider, useLanguage } from './context/LanguageContext';
// 👇 Importamos ThemeProvider y useTheme
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Componentes Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieConsent from './components/CookieConsent';

// Páginas Lazy
const Home = lazy(() => import('./pages/Home'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Contacto = lazy(() => import('./pages/Contacto'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center dark:bg-dark bg-slate-50">
    <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// ====================================================================
// 🧠 CEREBRO DE LA APP (Ahora controla el Splash y las Transiciones)
// ====================================================================
function AppContent() {
  const { lang } = useLanguage();
  const { theme } = useTheme(); // Escuchamos el cambio de tema

  // 1. Estado de carga movido AQUÍ
  const [isLoading, setIsLoading] = useState(true);

  // 2. Ref para detectar si es la primera carga o un cambio posterior
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

      // Hacemos una transición más rápida (1 seg) para que sea ágil
      const timer = setTimeout(() => {
        setIsLoading(false); // Ocultamos Splash
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [theme, lang]); // 👈 ¡Se dispara cuando cambia el tema o idioma!

  return (
    <div className="relative min-h-screen font-body selection:bg-cyan-400 selection:text-dark transition-colors duration-500 dark:bg-dark bg-slate-50 dark:text-white text-navy">

      {/* 👇 EL SPLASH SCREEN AHORA VIVE AQUÍ DENTRO */}
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      <Navbar />

      <Suspense fallback={<PageLoader />}>
        {/* Usamos key={lang} para recargar textos, el Splash cubrirá el parpadeo */}
        <main key={lang}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
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
  // El estado 'isLoading' se eliminó de aquí y se movió a AppContent

  return (
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <ScrollToTop />

            {/* AppContent maneja la lógica visual y el Splash */}
            <AppContent />

          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}