import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '/assets/images/logodolphin.webp';

import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const { t, toggleLanguage, lang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Control de Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de página
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    if (hoveredMenu) setHoveredMenu(null);
  }, [location.pathname]);

  // Scroll suave a Hashes (#)
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        setTimeout(() => elem.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  // Bloquear el fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navItems = [
    {
      name: t.navbar.about,
      path: '/nosotros',
      submenu: [
        { label: t.navbar.submenu.history, link: '/nosotros#historia' },
        { label: t.navbar.submenu.team, link: '/nosotros#equipo' },
        { label: 'Dive Sites', link: '/nosotros#divesites' }
      ]
    },
    {
      name: t.navbar.services,
      path: '/servicios',
      submenu: [
        { label: t.navbar.submenu.funDives, link: '/servicios#fundives' },
        { label: t.navbar.submenu.courses, link: '/servicios#cursos' },
        { label: t.navbar.submenu.snorkel, link: '/servicios#snorkel' }
      ]
    },
    {
      name: lang === 'en' ? 'Gallery' : 'Galería',
      path: '/galeria'
    },
    {
      name: t.navbar.contact,
      path: '/contacto',
      submenu: [
        { label: t.navbar.submenu.location, link: '/contacto#ubicacion' },
        { label: t.contact.visitorGuide?.tag || 'Guía de Viaje', link: '/contacto#guia' },
        { label: t.navbar.submenu.whatsapp, link: 'https://wa.me/526131182311' },
        { label: t.navbar.submenu.faq, link: '/contacto#faq' }
      ]
    }
  ];

  // ========================================================================
  // 🎨 ESTILOS PREMIUM (Logo Gigante, Textos Legibles, Animación Suave)
  // ========================================================================

  const headerClass = `
    fixed z-[100] left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out flex items-center justify-between
    ${isScrolled
      ? 'top-0 md:top-4 w-full md:w-[96%] max-w-7xl md:rounded-[2.5rem] bg-white/95 dark:bg-dark/95 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] border-b md:border border-slate-200/60 dark:border-white/10 py-3 md:py-4 px-5 md:px-8'
      : 'top-0 w-full max-w-[100vw] md:rounded-none bg-slate-50/95 dark:bg-dark/95 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-20'
    }
  `;

  // Textos más grandes pero con buen espaciado (tracking)
  const navLinkClass = `
    relative flex items-center gap-1.5 font-body text-xs lg:text-sm font-bold uppercase tracking-[0.15em] transition-colors py-4 whitespace-nowrap
    text-slate-600 hover:text-cyan-600
    dark:text-slate-300 dark:hover:text-cyan-400
  `;

  const dropdownContainerClass = `
    relative z-10 backdrop-blur-3xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-2.5 text-left overflow-hidden border
    bg-white/95 border-slate-200
    dark:bg-dark/95 dark:border-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
  `;

  const dropdownItemClass = `
    flex items-center justify-between px-4 py-3 text-sm lg:text-[15px] font-body font-medium rounded-xl transition-all duration-300 group/link whitespace-nowrap
    text-slate-600 hover:bg-slate-50 hover:text-cyan-700
    dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-300
  `;

  const iconBtnClass = `
    flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border transition-all hover:scale-110 active:scale-95
    bg-slate-100 border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-200
    dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-400 dark:hover:border-white/20
  `;

  const langBtnClass = `
    flex items-center justify-center gap-2 h-10 md:h-11 px-3 md:px-4 rounded-full border transition-all hover:scale-105 active:scale-95
    bg-slate-100 border-slate-200 text-slate-700 hover:bg-white
    dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10
  `;

  const ctaBtnClass = `
    flex items-center gap-2 rounded-full border px-6 py-2.5 md:py-3 font-title text-xs md:text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-md group
    bg-cyan-600 border-cyan-600 text-white hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-cyan-500/30
    dark:bg-cyan-500 dark:border-cyan-500 dark:text-navy dark:hover:bg-cyan-400 dark:hover:border-cyan-400
  `;

  return (
    <>
      <header className={headerClass}>

        {/* =========================================
            LOGO (Gigante a petición del cliente)
            ========================================= */}
        <Link to="/" className="relative flex items-center z-50 group shrink-0" onClick={() => setIsMenuOpen(false)}>
          <img
            src={logo}
            alt="Dolphin Dive Baja"
            className={`transition-all duration-500 ease-in-out w-auto object-contain drop-shadow-md md:group-hover:scale-105 ${isScrolled ? 'h-14 md:h-16 lg:h-20' : 'h-20 md:h-24 lg:h-28'
              }`}
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 xl:gap-12 h-full">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group h-full flex items-center justify-center cursor-pointer" onMouseEnter={() => item.submenu ? setHoveredMenu(item.name) : null} onMouseLeave={() => setHoveredMenu(null)}>
              <Link to={item.path} className={navLinkClass}>
                {item.name}
                {item.submenu && <i className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${hoveredMenu === item.name ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : 'opacity-40'}`}></i>}
                <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 h-[2px] rounded-full w-0 bg-cyan-500 transition-all duration-300 ${hoveredMenu === item.name || location.pathname === item.path ? 'w-full' : ''}`} />
              </Link>

              {/* DROPDOWN */}
              <AnimatePresence>
                {item.submenu && hoveredMenu === item.name && (
                  <motion.div initial={{ opacity: 0, y: 15, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2, ease: "easeOut" }} className="absolute top-[85%] left-1/2 -translate-x-1/2 pt-3 w-64 z-50">
                    <div className={dropdownContainerClass}>
                      <div className="flex flex-col relative z-10">
                        {item.submenu.map((subItem, subIdx) => (
                          subItem.link.startsWith('http') ? (
                            <a key={subIdx} href={subItem.link} target="_blank" rel="noopener noreferrer" className={dropdownItemClass}>
                              <span className="group-hover/link:translate-x-1 transition-transform">{subItem.label}</span>
                              <i className="ri-external-link-line opacity-40 group-hover/link:opacity-100 transition-opacity text-base"></i>
                            </a>
                          ) : (
                            <Link key={subIdx} to={subItem.link} className={`${dropdownItemClass} block`}>
                              <span className="inline-block group-hover/link:translate-x-1 transition-transform">{subItem.label}</span>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CONTROLES DERECHA (DESKTOP & TABLET) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 z-50">
          <button onClick={toggleTheme} className={iconBtnClass} aria-label="Toggle Theme">
            <motion.div key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
              {theme === 'dark' ? <i className="ri-sun-fill text-xl"></i> : <i className="ri-moon-clear-fill text-xl"></i>}
            </motion.div>
          </button>

          <button onClick={toggleLanguage} className={langBtnClass} aria-label="Toggle Language">
            <img
              src={lang === 'es' ? "https://flagcdn.com/us.svg" : "https://flagcdn.com/mx.svg"}
              alt="Flag"
              className="w-5 h-5 rounded-full object-cover border border-black/10 dark:border-white/20 shadow-sm"
            />
            <span className="font-title text-xs font-bold tracking-widest mt-0.5">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* BOTÓN RESERVAR CON WHATSAPP */}
          <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className={ctaBtnClass}>
            {t.navbar.cta} <i className="ri-whatsapp-line text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
          </a>
        </div>

        {/* CONTROLES MÓVIL */}
        <div className="flex items-center gap-2 lg:hidden z-50">
          <button onClick={toggleLanguage} className={iconBtnClass}>
            <img
              src={lang === 'es' ? "https://flagcdn.com/us.svg" : "https://flagcdn.com/mx.svg"}
              alt="Flag"
              className="w-5 h-5 rounded-full object-cover shadow-sm"
            />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={iconBtnClass}>
            {isMenuOpen ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-4-line text-2xl"></i>}
          </button>
        </div>
      </header>

      {/* ========================================================================
          📱 MENÚ MÓVIL FULL-SCREEN
          ======================================================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col pt-32 px-6 pb-10 bg-slate-50 dark:bg-dark lg:hidden overflow-y-auto"
          >
            {/* Control de Tema dentro del menú móvil */}
            <div className="absolute top-6 right-20 mt-2">
              <button onClick={toggleTheme} className="flex items-center gap-2 px-4 py-2.5 rounded-full border shadow-sm bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-xs font-title tracking-widest uppercase text-slate-600 dark:text-slate-300">
                {theme === 'dark' ? <><i className="ri-sun-fill text-lg"></i> Modo Claro</> : <><i className="ri-moon-clear-fill text-lg"></i> Modo Oscuro</>}
              </button>
            </div>

            <nav className="flex flex-col gap-6 mt-4">
              {navItems.map((item, idx) => (
                <div key={idx} className="border-b border-slate-200 dark:border-white/10 pb-6">
                  <Link to={item.path} className="text-3xl sm:text-4xl font-title text-navy dark:text-white block mb-5" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 flex flex-col gap-4 border-l-2 border-cyan-400/30">
                      {item.submenu.map((sub, i) => (
                        sub.link.startsWith('http') ? (
                          <a key={i} href={sub.link} target="_blank" rel="noopener noreferrer" className="text-lg font-body font-medium text-slate-600 dark:text-slate-300 flex items-center justify-between" onClick={() => setIsMenuOpen(false)}>
                            {sub.label} <i className="ri-external-link-line opacity-40"></i>
                          </a>
                        ) : (
                          <Link key={i} to={sub.link} className="text-lg font-body font-medium text-slate-600 dark:text-slate-300 block" onClick={() => setIsMenuOpen(false)}>
                            {sub.label}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-2xl flex items-center justify-center gap-3 bg-cyan-600 text-white font-title text-sm tracking-widest uppercase shadow-lg active:scale-95 transition-transform">
                <i className="ri-whatsapp-line text-2xl"></i> {t.navbar.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================
          💬 LOGO FLOTANTE WHATSAPP
          ======================================================================== */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[80]">
        <div className="relative group">
          <div className="absolute inset-0 bg-cyan-400/40 rounded-full animate-ping opacity-75"></div>

          <a
            href="https://wa.me/526131182311"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-navy backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
            aria-label="Contactar por WhatsApp"
          >
            <img
              src={logo}
              alt="WhatsApp Dolphin Dive Baja"
              className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all"
            />
            <span className="absolute right-[110%] top-1/2 -translate-y-1/2 mr-2 px-4 py-2 bg-navy dark:bg-white text-white dark:text-navy font-title text-[10px] md:text-xs tracking-widest uppercase rounded-xl shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
              {lang === 'es' ? '¡Escríbenos!' : 'Chat with us!'}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}