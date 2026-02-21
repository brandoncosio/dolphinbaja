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

  const { t, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Control del scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús al cambiar ruta
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    if (hoveredMenu) setHoveredMenu(null);
  }, [location.pathname]);

  // Scroll a Hash
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

  // Bloquear scroll body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // ========================================================================
  // 📚 ESTRUCTURA DEL MENÚ
  // ========================================================================
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
        // 👇 AÑADIDO: "Dive Sites" antes de Galería
        { label: 'Dive Sites', link: '/nosotros#divesites' },
        { label: t.navbar.submenu.gallery, link: '/nosotros#galeria' }
      ]
    },
    {
      name: t.navbar.contact,
      path: '/contacto',
      submenu: [
        { label: t.navbar.submenu.location, link: '/contacto#ubicacion' },
        { label: t.contact.visitorGuide.tag, link: '/contacto#guia' },
        { label: t.navbar.submenu.whatsapp, link: 'https://wa.me/526131182311' },
        { label: t.navbar.submenu.faq, link: '/contacto#faq' }
      ]
    }
  ];

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Clean Code)
  // ========================================================================

  const headerClass = `
    fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 xl:px-20 transition-all duration-500
    ${isScrolled
      ? 'py-3 backdrop-blur-xl shadow-md border-b bg-white/90 border-slate-200/50 dark:bg-dark/90 dark:border-white/10'
      : 'py-5 lg:py-6 bg-transparent border-b border-transparent shadow-none'
    }
  `;

  const navLinkClass = `
    relative flex items-center gap-1 font-body text-[13px] font-bold uppercase tracking-widest transition-colors py-6 drop-shadow-sm
    text-navy hover:text-cyan-600
    dark:text-white dark:hover:text-cyan-400
  `;

  const dropdownContainerClass = `
    relative z-10 backdrop-blur-2xl rounded-2xl shadow-xl p-2 text-left overflow-hidden border
    bg-white border-slate-200
    dark:bg-dark/95 dark:border-white/15 dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)]
  `;

  const dropdownItemClass = `
    flex items-center justify-between px-4 py-2.5 text-sm font-body font-medium rounded-xl transition-all duration-300 group/link
    text-slate-700 hover:bg-slate-100 hover:text-cyan-700
    dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-300
  `;

  const iconBtnClass = `
    group flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-sm
    bg-white border-slate-200 text-navy hover:text-cyan-600 hover:border-cyan-200
    dark:bg-white/10 dark:border-white/20 dark:text-yellow-400 dark:hover:bg-white/20
  `;

  const langBtnClass = `
    flex items-center gap-2 rounded-full border px-5 py-2.5 font-title text-xs backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-sm group
    bg-white border-slate-200 text-navy hover:bg-slate-50 hover:border-slate-300
    dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-cyan-400/20 dark:hover:text-cyan-300
  `;

  const ctaBtnClass = `
    flex items-center gap-2 rounded-full border px-6 py-2.5 font-title text-xs backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-md group
    bg-yellow-400 border-yellow-400 text-navy hover:bg-yellow-300 hover:border-yellow-300
    dark:bg-white/5 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-dark
  `;

  const mobileSidebarClass = `
    fixed top-0 right-0 z-[90] h-[100dvh] w-[85%] max-w-[320px] backdrop-blur-2xl border-l shadow-2xl lg:hidden
    transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1)
    bg-white/95 border-slate-200
    dark:bg-dark/95 dark:border-white/10
  `;

  const mobileCtaBtnClass = `
    flex items-center justify-center gap-3 rounded-xl py-4 font-title text-sm tracking-widest uppercase shadow-md active:scale-95 transition-all w-full border
    bg-yellow-400 text-navy border-yellow-400 active:bg-yellow-500
    dark:bg-white/5 dark:border-yellow-400 dark:text-yellow-400 dark:active:bg-yellow-400 dark:active:text-dark
  `;

  return (
    <>
      <header
        className={headerClass}
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
              <Link to={item.path} className={navLinkClass}>
                {item.name}
                <i className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${hoveredMenu === item.name ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : 'opacity-50'}`}></i>
                <span className={`absolute bottom-4 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-cyan-400 transition-all duration-300 shadow-[0_0_8px_rgba(102,216,227,0.8)] ${hoveredMenu === item.name ? 'w-full' : ''}`} />
              </Link>

              {/* DROPDOWN */}
              <AnimatePresence>
                {hoveredMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-60 z-50"
                  >
                    <div className={dropdownContainerClass}>
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/20"></div>
                      <div className="flex flex-col relative z-10">
                        {item.submenu.map((subItem, idx) => (
                          subItem.link.startsWith('http') ? (
                            <a
                              key={idx}
                              href={subItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={dropdownItemClass}
                            >
                              <span className="group-hover/link:translate-x-1 transition-transform">{subItem.label}</span>
                              <i className="ri-external-link-line opacity-50 group-hover/link:opacity-100 transition-opacity"></i>
                            </a>
                          ) : (
                            <Link
                              key={idx}
                              to={subItem.link}
                              className={`${dropdownItemClass} block`}
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
        <div className="hidden lg:flex items-center gap-3 shrink-0 z-50">
          <button onClick={toggleTheme} className={iconBtnClass} title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}>
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <i className="ri-sun-fill text-xl"></i> : <i className="ri-moon-clear-fill text-xl"></i>}
            </motion.div>
          </button>

          <button onClick={toggleLanguage} className={langBtnClass}>
            <i className="ri-global-line text-lg opacity-80 group-hover:opacity-100 transition-opacity"></i>
            <span>{t.navbar.languageBtn}</span>
          </button>

          <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className={ctaBtnClass}>
            <i className="ri-whatsapp-line text-lg group-hover:scale-110 transition-transform"></i>
            {t.navbar.cta}
          </a>
        </div>

        {/* CONTROLES MÓVIL */}
        <div className="flex items-center gap-2 lg:hidden z-50">
          <button onClick={toggleTheme} className={iconBtnClass}>
            {theme === 'dark' ? <i className="ri-sun-fill text-lg"></i> : <i className="ri-moon-clear-fill text-lg"></i>}
          </button>

          <button onClick={toggleLanguage} className={langBtnClass}>
            {t.navbar.languageBtn}
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={iconBtnClass}>
            {isMenuOpen ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-3-line text-2xl"></i>}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL (Overlay) */}
      <div
        className={`fixed inset-0 z-[90] transition-opacity duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          } bg-navy/60 backdrop-blur-md`}
        style={{ willChange: 'opacity' }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MENÚ MÓVIL (Sidebar) */}
      <aside
        className={`${mobileSidebarClass} ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ willChange: 'transform' }}
      >
        <div className="flex h-full flex-col justify-between px-6 pt-32 pb-10 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-slate-200 dark:border-white/10 pb-5 last:border-0">
                <Link
                  to={item.path}
                  className="text-2xl font-title transition-colors active:text-cyan-500 block mb-4 drop-shadow-sm text-navy dark:text-white"
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
                        className="text-base font-body active:text-cyan-500 transition-colors flex items-center justify-between text-slate-600 dark:text-slate-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.label} <i className="ri-external-link-line opacity-50 text-sm"></i>
                      </a>
                    ) : (
                      <Link
                        key={i}
                        to={sub.link}
                        className="text-base font-body active:text-cyan-500 transition-colors block text-slate-600 dark:text-slate-200"
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

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 shrink-0">
            <a
              href="https://wa.me/526131182311"
              target="_blank"
              rel="noopener noreferrer"
              className={mobileCtaBtnClass}
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