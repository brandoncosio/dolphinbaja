import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setHoveredMenu(null);
  }, [location]);

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const content = {
    es: {
      nav: [
        // Eliminamos "Inicio" explícito, se accede por el Logo.
        { 
          name: 'Servicios', 
          path: '/servicios',
          submenu: [
            { label: 'Fun Dives', link: '/servicios' },
            { label: 'Cursos PADI', link: '/servicios' },
            { label: 'Snorkel & Tours', link: '/servicios' }
          ]
        },
        { 
          name: 'Nosotros', 
          path: '/nosotros',
          submenu: [
            { label: 'Nuestra Historia', link: '/nosotros' },
            { label: 'Equipo & Staff', link: '/nosotros' },
            { label: 'Galería', link: '/nosotros' }
          ]
        },
        { 
          name: 'Contacto', 
          path: '/contacto',
          submenu: [
            { label: 'Ubicación', link: '/contacto' },
            { label: 'WhatsApp Directo', link: 'https://wa.me/526131182311' },
            { label: 'Preguntas Frecuentes', link: '/contacto' }
          ]
        }
      ],
      cta: 'Reservar'
    },
    en: {
      nav: [
        { 
          name: 'Services', 
          path: '/servicios',
          submenu: [
            { label: 'Fun Dives', link: '/servicios' },
            { label: 'PADI Courses', link: '/servicios' },
            { label: 'Snorkel & Tours', link: '/servicios' }
          ]
        },
        { 
          name: 'About Us', 
          path: '/nosotros',
          submenu: [
            { label: 'Our Story', link: '/nosotros' },
            { label: 'Staff & Team', link: '/nosotros' },
            { label: 'Gallery', link: '/nosotros' }
          ]
        },
        { 
          name: 'Contact', 
          path: '/contacto',
          submenu: [
            { label: 'Location', link: '/contacto' },
            { label: 'Direct WhatsApp', link: 'https://wa.me/526131182311' },
            { label: 'FAQ', link: '/contacto' }
          ]
        }
      ],
      cta: 'Book Now'
    }
  };

  return (
    <>
      {/* IMPORTANTE: z-[100] en el header.
         Esto lo coloca por encima de TODO (incluyendo la barra de servicios que es z-40).
      */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-20 ${
          isScrolled ? 'bg-navy shadow-xl py-3' : 'bg-transparent py-5'
        }`}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        {/* Logo (Home) */}
        <Link to="/" className="flex items-center z-50 group">
          <img 
            src="src/assets/images/logodolphin.webp" 
            alt="Dolphin Dive Baja" 
            className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'} w-auto object-contain drop-shadow-lg group-hover:scale-105`}
          />
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden gap-10 md:flex items-center">
          {content[lang].nav.map((item) => (
            <div 
              key={item.name}
              className="relative group h-full flex items-center"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link 
                to={item.path}
                className="flex items-center gap-1 font-body text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-cyan py-4"
              >
                {item.name}
                <i className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${
                  hoveredMenu === item.name ? 'rotate-180 text-cyan' : 'text-white/50'
                }`}></i>
                <span className="absolute bottom-2 left-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Submenú Desktop */}
              <AnimatePresence>
                {hoveredMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
                  >
                    <div className="bg-navy/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2">
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-navy border-t border-l border-white/10 rotate-45 transform"></div>
                      {item.submenu.map((subItem, idx) => (
                        subItem.link.startsWith('http') ? (
                          <a
                            key={idx}
                            href={subItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-3 text-sm font-body text-slate-300 hover:bg-white/10 hover:text-cyan rounded-lg transition-colors"
                          >
                            {subItem.label} <i className="ri-external-link-line ml-1 text-xs"></i>
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            to={subItem.link}
                            className="block px-4 py-3 text-sm font-body text-slate-300 hover:bg-white/10 hover:text-cyan rounded-lg transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Botones Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-body text-sm font-bold text-white transition-colors hover:text-cyan"
            aria-label="Cambiar idioma"
          >
            <i className="ri-global-line text-lg"></i>
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <a 
            href="https://wa.me/526131182311" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full bg-yellow px-6 py-2.5 font-title text-xs text-navy transition-transform hover:scale-105 active:scale-95 shadow-lg"
          >
            {content[lang].cta}
          </a>
        </div>

        {/* Botones Móviles */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button 
            onClick={toggleLanguage}
            className="font-body text-sm font-bold text-white"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-colors active:bg-white/10"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-3-line text-2xl"></i>}
          </button>
        </div>
      </header>

      {/* =========================
          MENÚ MÓVIL (Drawer)
      ========================= */}
      
      {/* IMPORTANTE: z-[90] en el overlay y el aside.
         Esto asegura que cubran cualquier elemento pegajoso de la página (z-40),
         pero que queden debajo del header (z-[100]) para que el botón de cerrar siga visible.
      */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside 
        className={`fixed top-0 right-0 z-[90] h-full w-[85%] max-w-sm bg-navy/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8 pt-20 pb-8 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {content[lang].nav.map((item, index) => (
              <div key={item.name}>
                <Link 
                  to={item.path}
                  className="text-2xl font-title text-white transition-colors hover:text-cyan block mb-2"
                >
                  {item.name}
                </Link>
                {/* Submenú Móvil */}
                <div className="pl-4 flex flex-col gap-3 border-l-2 border-white/10 ml-1">
                  {item.submenu.map((sub, i) => (
                    <span key={i} className="text-sm text-slate-400 font-body hover:text-white transition-colors cursor-pointer">
                      {sub.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          
          <div className="my-8 h-px w-full bg-white/10" />
          
          <div className="flex flex-col gap-4">
            <a 
              href="https://wa.me/526131182311" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-yellow py-4 font-title text-navy shadow-lg active:scale-95 transition-transform"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              {content[lang].cta}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}