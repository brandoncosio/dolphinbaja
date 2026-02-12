import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';

// Páginas Reales
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';

// Componente temporal para Contacto (Próximo paso)
const Contacto = () => (
  <div className="pt-32 pb-20 text-center text-white min-h-screen bg-slate-900 flex items-center justify-center">
    <div>
      <h1 className="text-4xl font-title text-yellow-400 mb-4">Próximamente</h1>
      <p className="font-body text-slate-400">Estamos construyendo la sección de Contacto.</p>
    </div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos carga inicial solo si no se ha visitado antes (opcional)
    // O simplemente un timer fijo para el efecto visual
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* 👇 2. USAR EL COMPONENTE AQUÍ (Dentro del Router, antes de todo lo visual) */}
      <ScrollToTop />

      {/* Contenedor principal */}
      <div className="relative min-h-screen bg-slate-900 text-white font-body selection:bg-cyan-400 selection:text-slate-900">

        {/* Pantalla de Carga (Splash) */}
        <AnimatePresence>
          {isLoading && <SplashScreen key="splash" />}
        </AnimatePresence>

        {/* Navbar (Header) */}
        <Navbar />

        {/* Rutas de la Aplicación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        {/* Footer Global */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}