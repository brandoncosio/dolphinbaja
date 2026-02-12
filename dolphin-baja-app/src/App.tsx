import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';

// 👇 IMPORTACIÓN "LAZY": Carga diferida para optimizar velocidad
const Home = lazy(() => import('./pages/Home'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Nosotros = lazy(() => import('./pages/Nosotros'));

// 👇 AHORA SÍ cargamos el archivo real de Contacto
const Contacto = lazy(() => import('./pages/Contacto'));

// Loader de transición
const PageLoader = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Scroll Top al cambiar de ruta */}
      <ScrollToTop />

      <div className="relative min-h-screen bg-slate-900 text-white font-body selection:bg-cyan-400 selection:text-slate-900">

        {/* Pantalla de Carga Inicial (Splash) */}
        <AnimatePresence>
          {isLoading && <SplashScreen key="splash" />}
        </AnimatePresence>

        <Navbar />

        {/* 👇 SUSPENSE: Maneja la carga de páginas */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />

            {/* Ruta actualizada a la nueva página */}
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Suspense>

        <Footer />

      </div>
    </BrowserRouter>
  );
}