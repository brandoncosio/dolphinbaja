import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Ajusta la ruta si es necesario
import logo from '/assets/images/logodolphin.webp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const location = useLocation();

  // Detectar Scroll para cambiar fondo del Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    if (hoveredMenu) setHoveredMenu(null);
  }, [location.pathname]);

  // 👇 NUEVO: Lógica para hacer Scroll a la sección (Anclas)
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Pequeño delay para asegurar que la página cargó
      }
    }
  }, [location]);

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const content = {
    es: {
      nav: [
        {
          name: 'Servicios',
          path: '/servicios',
          submenu: [
            // Nota: Para que esto funcione en Servicios, podrías necesitar lógica extra si usas Tabs.
            // Por ahora redirigen a la página general.
            { label: 'Fun Dives', link: '/servicios' },
            { label: 'Cursos PADI', link: '/servicios' },
            { label: 'Snorkel & Tours', link: '/servicios' }
          ]
        },
        {
          name: 'Nosotros',
          path: '/nosotros',
          submenu: [
            // 👇 Aquí están las anclas (IDs) a las secciones de Nosotros
            { label: 'Nuestra Historia', link: '/nosotros#historia' },
            { label: 'Equipo & Staff', link: '/nosotros#equipo' },
            { label: 'Galería', link: '/nosotros#galeria' }
          ]
        },
        {
          name: 'Contacto',
          path: '/contacto',
          submenu: [
            { label: 'Ubicación', link: '/contacto#ubicacion' },
            { label: 'WhatsApp Directo', link: 'https://wa.me/526131182311' },
            { label: 'Preguntas Frecuentes', link: '/contacto#faq' }
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
            { label: 'Our Story', link: '/nosotros#historia' },
            { label: 'Staff & Team', link: '/nosotros#equipo' },
            { label: 'Gallery', link: '/nosotros#galeria' }
          ]
        },
        {
          name: 'Contact',
          path: '/contacto',
          submenu: [
            { label: 'Location', link: '/contacto#ubicacion' },
            { label: 'Direct WhatsApp', link: 'https://wa.me/526131182311' },
            { label: 'FAQ', link: '/contacto#faq' }
          ]
        }
      ],
      cta: 'Book Now'
    }
  };

  return (
    <>
      {/* HEADER: Z-Index 100 para estar siempre arriba */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-20 ${isScrolled ? 'bg-navy shadow-xl py-3' : 'bg-transparent py-5'
          }`}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center z-50 group">
          <img
            src={logo}
            alt="Dolphin Dive Baja"
            className={`transition-all duration-500 w-auto object-contain drop-shadow-lg group-hover:scale-105 ${isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'
              }`}
          />
        </Link>

        {/* MENÚ DESKTOP */}
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
                <i className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${hoveredMenu === item.name ? 'rotate-180 text-cyan' : 'text-white/50'
                  }`}></i>
                <span className="absolute bottom-2 left-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* SUBMENÚ DESKTOP */}
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
                          // Usamos Link normal (HashLink funciona nativo si implementas el useEffect de arriba)
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

        {/* BOTONES DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-body text-sm font-bold text-white transition-colors hover:text-cyan"
            aria-label="Cambiar idioma"
          >
            <i className="ri-global-line text-lg"></i>
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* 👇 BOTÓN RESERVAR CON WHATSAPP (Desktop) */}
          <a
            href="https://wa.me/526131182311"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-yellow px-6 py-2.5 font-title text-xs text-navy transition-transform hover:scale-105 active:scale-95 shadow-lg group"
          >
            <i className="ri-whatsapp-line text-lg group-hover:scale-110 transition-transform"></i>
            {content[lang].cta}
          </a>
        </div>

        {/* BOTONES MÓVILES */}
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

      {/* MENÚ MÓVIL (DRAWER) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 z-[90] h-full w-[85%] max-w-sm bg-navy/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex h-full flex-col justify-center px-8 pt-20 pb-8 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {content[lang].nav.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="text-2xl font-title text-white transition-colors hover:text-cyan block mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {/* Submenú Móvil */}
                <div className="pl-4 flex flex-col gap-3 border-l-2 border-white/10 ml-1">
                  {item.submenu.map((sub, i) => (
                    sub.link.startsWith('http') ? (
                      <a
                        key={i}
                        href={sub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 font-body hover:text-white transition-colors cursor-pointer block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <Link
                        key={i}
                        to={sub.link}
                        className="text-sm text-slate-400 font-body hover:text-white transition-colors cursor-pointer block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="my-8 h-px w-full bg-white/10" />

          <div className="flex flex-col gap-4">
            {/* 👇 BOTÓN RESERVAR CON WHATSAPP (Móvil) */}
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