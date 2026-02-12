import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Provider de Idioma
import { LanguageProvider } from './context/LanguageContext';

// Componentes Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';

// Páginas Lazy
const Home = lazy(() => import('./pages/Home'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Contacto = lazy(() => import('./pages/Contacto'));

const PageLoader = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // 👇 Envolvemos TODO con el proveedor de idioma
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />

        <div className="relative min-h-screen bg-slate-900 text-white font-body selection:bg-cyan-400 selection:text-slate-900">

          <AnimatePresence>
            {isLoading && <SplashScreen key="splash" />}
          </AnimatePresence>

          <Navbar />

          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </Suspense>

          <Footer />

        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}