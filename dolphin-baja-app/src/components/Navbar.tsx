import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '/assets/images/logodolphin.webp';

import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const { t, toggleLanguage } = useLanguage();
  const location = useLocation();

  // Control del fondo de la Navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    if (hoveredMenu) setHoveredMenu(null);
  }, [location.pathname]);

  // Scroll suave hacia los Hash (#)
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Bloquear el scroll del cuerpo cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navItems = [
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
      name: t.navbar.about,
      path: '/nosotros',
      submenu: [
        { label: t.navbar.submenu.history, link: '/nosotros#historia' },
        { label: t.navbar.submenu.team, link: '/nosotros#equipo' },
        { label: t.navbar.submenu.gallery, link: '/nosotros#galeria' }
      ]
    },
    {
      name: t.navbar.contact,
      path: '/contacto',
      submenu: [
        { label: t.navbar.submenu.location, link: '/contacto#ubicacion' },
        { label: t.navbar.submenu.whatsapp, link: 'https://wa.me/526131182311' },
        { label: t.navbar.submenu.faq, link: '/contacto#faq' }
      ]
    }
  ];

  return (
    <>
      <header
        // Usamos el nuevo color base (Dark -> #133E60) con alta transparencia para que el cristal sea notable
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 xl:px-20 transition-all duration-500 ${isScrolled
            ? 'py-3 bg-dark/60 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
            : 'py-5 lg:py-6 bg-dark/0 border-b border-transparent shadow-none'
          }`}
        onMouseLeave={() => setHoveredMenu(null)}
        style={{ willChange: 'backdrop-filter, background-color' }}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center z-50 group shrink-0" onClick={() => setIsMenuOpen(false)}>
          <img
            src={logo}
            alt="Dolphin Dive Baja"
            className={`transition-all duration-500 w-auto object-contain drop-shadow-2xl md:group-hover:scale-105 ${isScrolled ? 'h-12 lg:h-14' : 'h-14 lg:h-16'
              }`}
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10 h-full">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group h-full flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                to={item.path}
                className="relative flex items-center gap-1 font-body text-[13px] font-bold uppercase tracking-widest text-white transition-colors hover:text-cyan-400 py-6 drop-shadow-md"
              >
                {item.name}
                <i className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${hoveredMenu === item.name ? 'rotate-180 text-cyan-400' : 'text-white/50'}`}></i>
                <span className={`absolute bottom-4 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-cyan-400 transition-all duration-300 shadow-[0_0_8px_rgba(102,216,227,0.8)] ${hoveredMenu === item.name ? 'w-full' : ''}`} />
              </Link>

              {/* 👇 SUBMENÚ DROPDOWN CRISTALINO */}
              <AnimatePresence>
                {hoveredMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50"
                  >
                    {/* Contenedor del Dropdown usando bg-white/10 sobre el azul oscuro para lograr puro efecto Glassmorphism */}
                    <div className="relative z-10 bg-dark/40 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-2 text-left overflow-hidden">

                      {/* Triangulito superior fusionado con el contenedor */}
                      <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-4 h-4 bg-dark/40 border-t border-l border-white/20 rotate-45 z-0 rounded-tl-sm pointer-events-none" />

                      {/* Lista de Enlaces */}
                      <div className="relative z-10">
                        {item.submenu.map((subItem, idx) => (
                          subItem.link.startsWith('http') ? (
                            <a
                              key={idx}
                              href={subItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-3 text-sm font-body font-medium text-slate-100 hover:bg-white/10 hover:text-cyan-300 rounded-xl transition-all duration-300 group/link"
                            >
                              <span className="group-hover/link:translate-x-1 transition-transform">{subItem.label}</span>
                              <i className="ri-external-link-line opacity-50 group-hover/link:opacity-100 transition-opacity"></i>
                            </a>
                          ) : (
                            <Link
                              key={idx}
                              to={subItem.link}
                              className="block px-4 py-3 text-sm font-body font-medium text-slate-100 hover:bg-white/10 hover:text-cyan-300 rounded-xl transition-all duration-300 group/link"
                            >
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

        {/* CONTROLES DERECHA DESKTOP */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 z-50">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-title text-xs text-white backdrop-blur-md transition-all hover:bg-cyan-400/20 hover:border-cyan-400/40 hover:text-cyan-300 hover:scale-105 active:scale-95 shadow-md group"
          >
            <i className="ri-global-line text-lg opacity-80 group-hover:opacity-100 transition-opacity"></i>
            <span>{t.navbar.languageBtn}</span>
          </button>

          <a
            href="https://wa.me/526131182311"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-2.5 font-title text-xs text-yellow-400 backdrop-blur-md transition-all hover:bg-yellow-400 hover:text-dark hover:border-yellow-400 hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(250,204,21,0.15)] group"
          >
            <i className="ri-whatsapp-line text-lg group-hover:scale-110 transition-transform"></i>
            {t.navbar.cta}
          </a>
        </div>

        {/* CONTROLES MÓVIL (Idioma + Hamburguesa) */}
        <div className="flex items-center gap-3 lg:hidden z-50">
          <button
            onClick={toggleLanguage}
            className="font-body text-[11px] font-bold tracking-widest uppercase text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
          >
            {t.navbar.languageBtn}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition-all active:bg-white/20 active:scale-95 shadow-md"
          >
            {isMenuOpen ? <i className="ri-close-line text-xl"></i> : <i className="ri-menu-3-line text-xl"></i>}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL (Overlay oscuro) */}
      <div
        className={`fixed inset-0 bg-navy/60 backdrop-blur-md z-[90] transition-opacity duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ willChange: 'opacity' }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MENÚ MÓVIL (Sidebar lateral de cristal) */}
      <aside
        className={`fixed top-0 right-0 z-[90] h-[100dvh] w-[85%] max-w-[320px] bg-dark/60 backdrop-blur-2xl border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.4)] lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          willChange: 'transform',
          transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <div className="flex h-full flex-col justify-between px-6 pt-28 pb-10 overflow-y-auto">

          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-white/10 pb-5 last:border-0">
                <Link
                  to={item.path}
                  className="text-2xl font-title text-white transition-colors active:text-cyan-300 block mb-4 drop-shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>

                <div className="pl-4 flex flex-col gap-4 border-l border-cyan-400/30">
                  {item.submenu.map((sub, i) => (
                    sub.link.startsWith('http') ? (
                      <a
                        key={i}
                        href={sub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-slate-200 font-body active:text-cyan-300 transition-colors flex items-center justify-between"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.label} <i className="ri-external-link-line opacity-50 text-sm"></i>
                      </a>
                    ) : (
                      <Link
                        key={i}
                        to={sub.link}
                        className="text-base text-slate-200 font-body active:text-cyan-300 transition-colors block"
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

          <div className="mt-8 pt-6 border-t border-white/10 shrink-0">
            <a
              href="https://wa.me/526131182311"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-md py-4 font-title text-sm tracking-widest uppercase text-yellow-400 shadow-[0_8px_32px_rgba(254,217,102,0.2)] active:scale-95 active:bg-yellow-400 active:text-dark transition-all w-full"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              {t.navbar.cta}
            </a>
          </div>

        </div>
      </aside>
    </>
  );
}