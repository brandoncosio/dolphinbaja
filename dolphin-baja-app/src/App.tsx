import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

// Páginas Reales
import Home from './pages/Home';
import Servicios from './pages/Servicios'; // ¡Aquí importamos la nueva página!

// Componentes temporales (Construiremos estos en los siguientes pasos)
const Nosotros = () => <div className="pt-32 pb-20 text-center text-white min-h-screen bg-navy">Página de Nosotros en construcción...</div>;
const Contacto = () => <div className="pt-32 pb-20 text-center text-white min-h-screen bg-navy">Página de Contacto en construcción...</div>;

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos el tiempo de carga inicial (2.5 segundos) para la animación de burbujas
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Contenedor principal con position relative */}
      <div className="relative min-h-screen bg-dark text-white font-body">
        
        {/* Pantalla de Carga (Splash) */}
        <AnimatePresence>
          {isLoading && <SplashScreen key="splash" />}
        </AnimatePresence>

        {/* Navbar siempre visible */}
        <Navbar />

        {/* Gestor de Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        {/* Footer siempre visible */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}