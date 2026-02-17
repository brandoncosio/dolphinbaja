import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// 👇 Importamos el Provider de Helmet
import { HelmetProvider } from 'react-helmet-async';

// Provider y Hook de Idioma
import { LanguageProvider, useLanguage } from './context/LanguageContext';

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
  // Actualizado de bg-slate-900 a bg-dark
  <div className="min-h-screen bg-dark flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Componente interno para acceder al context
function AppContent() {
  const { lang } = useLanguage(); // Escuchamos el cambio de idioma

  return (
    // Actualizado de bg-slate-900 a bg-dark
    <div className="relative min-h-screen bg-dark text-white font-body selection:bg-cyan-400 selection:text-dark">
      <Navbar />

      {/* 👇 La 'key={lang}' fuerza a las páginas lazy a actualizarse al cambiar idioma */}
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
      {/* 👇 Aquí agregamos el componente de Cookies */}
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
    // 👇 Envolvemos toda la aplicación en el HelmetProvider
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AnimatePresence>
            {isLoading && <SplashScreen key="splash" />}
          </AnimatePresence>

          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}