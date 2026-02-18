import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Contextos
import { LanguageProvider, useLanguage } from './context/LanguageContext';
// 👇 1. IMPORTAMOS EL THEME PROVIDER
import { ThemeProvider } from './context/ThemeContext';

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
  // 👇 Actualizado: Fondo dinámico (oscuro en dark mode, blanco en light mode)
  <div className="min-h-screen flex items-center justify-center dark:bg-dark bg-slate-50">
    <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Componente interno para acceder al context
function AppContent() {
  const { lang } = useLanguage();

  return (
    // 👇 CAMBIO CRÍTICO DE DISEÑO:
    // Quitamos 'bg-dark' fijo. Usamos clases duales:
    // - dark:bg-dark (Fondo azul arrecife en modo noche)
    // - bg-slate-50 (Fondo blanco hielo en modo día)
    // - dark:text-white (Texto blanco en noche)
    // - text-navy (Texto azul marino en día)
    <div className="relative min-h-screen font-body selection:bg-cyan-400 selection:text-dark transition-colors duration-500 dark:bg-dark bg-slate-50 dark:text-white text-navy">
      <Navbar />

      <Suspense fallback={<PageLoader />}>
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        {/* 👇 2. ENVOLVEMOS TODO CON EL THEME PROVIDER */}
        <ThemeProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AnimatePresence>
              {isLoading && <SplashScreen key="splash" />}
            </AnimatePresence>

            <AppContent />
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}