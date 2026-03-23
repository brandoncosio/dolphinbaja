import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { sileo } from 'sileo';
import logo from '/assets/images/logodolphin.webp';

import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const { t, toggleLanguage, lang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Control de Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús al cambiar de página
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    if (hoveredMenu) setHoveredMenu(null);
    setOpenMobileSubmenu(null);
  }, [location.pathname]);

  // Scroll suave a Hashes (#)
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        const yOffset = isScrolled ? -100 : -140;
        const y = elem.getBoundingClientRect().top + window.scrollY + yOffset;
        setTimeout(() => window.scrollTo({ top: y, behavior: 'smooth' }), 100);
      }
    }
  }, [location, isScrolled]);

  // Bloquear scroll del fondo en menú móvil
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // 🚀 EVENTO: Disparo de Sileo Toast
  const handleReservation = (e: React.MouseEvent) => {
    e.preventDefault();
    sileo.success({
      title: lang === 'es' ? '¡Conectando con el equipo!' : 'Connecting with our team!',
      description: lang === 'es' ? 'Abriendo chat seguro en WhatsApp...' : 'Opening a secure WhatsApp chat...',
    });
    setTimeout(() => {
      window.open('https://wa.me/526131182311', '_blank');
    }, 1500);
  };

  // 👇 AQUÍ ACTUALIZAMOS TODOS LOS ENLACES (Menús completos y mapeados correctamente)
  const navItems = [
    {
      name: t.navbar.about,
      path: '/nosotros',
      submenu: [
        { label: lang === 'es' ? 'Nuestra Historia' : 'Our Story', link: '/nosotros#historia' },
        { label: lang === 'es' ? 'Nuestro Equipo' : 'Our Team', link: '/nosotros#equipo' },
        { label: lang === 'es' ? 'Sitios de Buceo' : 'Dive Sites', link: '/nosotros#divesites' }
      ]
    },
    {
      name: t.navbar.services,
      path: '/servicios',
      submenu: [
        { label: lang === 'es' ? 'Paquetes' : 'Packages', link: '/servicios#paquetes' },
        { label: 'Fun Dives', link: '/servicios#fundives' },
        { label: lang === 'es' ? 'Intro al Buceo' : 'Intro to Diving', link: '/servicios#intro' },
        { label: lang === 'es' ? 'Cursos PADI' : 'PADI Courses', link: '/servicios#cursos' },
        { label: 'Snorkel', link: '/servicios#snorkel' }
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
        { label: t.navbar.submenu.location || (lang === 'es' ? 'Ubicación' : 'Location'), link: '/contacto#ubicacion' },
        { label: t.contact.visitorGuide?.tag || (lang === 'es' ? 'Guía de Viaje' : 'Travel Guide'), link: '/contacto#guia' },
        { label: t.navbar.submenu.whatsapp || 'WhatsApp', link: 'https://wa.me/526131182311' },
        { label: t.navbar.submenu.faq || 'FAQ', link: '/contacto#faq' }
      ]
    }
  ];

  // ========================================================================
  // 🎨 ESTILOS PREMIUM
  // ========================================================================
  const headerClass = `
    fixed z-[100] left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out flex items-center justify-between
    ${isScrolled
      ? 'top-2 md:top-4 w-[96%] md:w-[95%] max-w-6xl rounded-[2rem] md:rounded-[2.5rem] bg-white/95 dark:bg-dark/95 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-slate-200/60 dark:border-white/10 py-2.5 md:py-3 px-5 md:px-6'
      : 'top-0 w-full max-w-[100vw] md:rounded-none bg-slate-50/95 dark:bg-dark/95 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 py-3 md:py-4 px-6 md:px-12 lg:px-16'
    }
  `;

  const dropdownContainerClass = `
    backdrop-blur-3xl rounded-[1.5rem] shadow-[0_25px_50px_rgba(0,0,0,0.2)] p-2 text-left overflow-hidden border
    bg-white/95 border-slate-200/80
    dark:bg-dark/95 dark:border-white/10 dark:shadow-[0_25px_50px_rgba(0,0,0,0.6)]
  `;

  const dropdownItemClass = `
    flex items-center justify-between px-4 py-3.5 text-[13px] lg:text-[14px] font-body font-bold tracking-wide rounded-xl transition-all duration-300 group/link whitespace-nowrap
    text-slate-600 hover:bg-slate-100 hover:text-cyan-600
    dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-400
  `;

  const iconBtnClass = `
    flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl border transition-all hover:scale-110 active:scale-95
    bg-slate-100 border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-200
    dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-400 dark:hover:border-white/20
  `;

  const langBtnClass = `
    flex items-center justify-center gap-2 h-10 md:h-11 px-3 md:px-4 rounded-xl border transition-all hover:scale-105 active:scale-95
    bg-slate-100 border-slate-200 text-slate-700 hover:bg-white
    dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10
  `;

  return (
    <>
      <header className={headerClass}>

        {/* =========================================
            1. COLUMNA IZQUIERDA (LOGO + TEXTO SIEMPRE VISIBLE)
            ========================================= */}
        <div className="flex-1 flex items-center justify-start z-50">
          <Link to="/" className="relative flex flex-col items-center justify-center group shrink-0" onClick={() => setIsMenuOpen(false)}>
            <img
              src={logo}
              alt="Dolphin Dive Baja"
              className={`transition-all duration-500 ease-in-out w-auto object-contain drop-shadow-md md:group-hover:scale-105 ${isScrolled ? 'h-10 md:h-12 lg:h-14 mb-1.5' : 'h-12 md:h-16 lg:h-20 mb-1.5'
                }`}
            />
            {/* 👇 Texto "Ir al inicio" siempre visible y sutil */}
            <span className="absolute -bottom-1 md:bottom-0 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500 font-title text-[7px] md:text-[8px] tracking-[0.2em] uppercase whitespace-nowrap pointer-events-none opacity-80 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
              {lang === 'es' ? 'Ir al inicio' : 'Back to home'}
            </span>
          </Link>
        </div>

        {/* =========================================
            2. COLUMNA CENTRAL (NAVEGACIÓN)
            ========================================= */}
        <nav className="hidden lg:flex flex-none items-center justify-center gap-1 xl:gap-2 h-full z-50 mt-1 md:mt-0">
          {navItems.map((item, idx) => {
            const isActive = hoveredMenu === item.name;

            return (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center cursor-pointer h-full px-1"
                onMouseEnter={() => item.submenu ? setHoveredMenu(item.name) : null}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {/* Botón Principal */}
                <Link
                  to={item.path}
                  className={`relative z-20 flex items-center gap-1.5 font-body text-xs lg:text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 py-2.5 px-4 rounded-xl whitespace-nowrap
                  ${isActive
                      ? 'text-cyan-600 dark:text-cyan-400 bg-slate-100/50 dark:bg-white/5'
                      : 'text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 bg-transparent'}`}
                >
                  {item.name}
                  {item.submenu && <i className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${isActive ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : 'opacity-40'}`}></i>}

                  {/* Línea Activa */}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full w-0 bg-cyan-500 transition-all duration-300 ${isActive || location.pathname === item.path ? 'w-3/4' : ''}`} />
                </Link>

                {/* 👇 DROPDOWN SILEO ULTRA ANIMADO */}
                <AnimatePresence>
                  {item.submenu && isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -25, scaleX: 0.4, scaleY: 0.2, filter: "blur(15px)" }}
                      animate={{ opacity: 1, y: 0, scaleX: 1, scaleY: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, scaleX: 0.7, scaleY: 0.4, filter: "blur(10px)" }}
                      transition={{ type: "spring", stiffness: 450, damping: 25, mass: 1 }}
                      style={{ transformOrigin: "top center" }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[240px] z-10 pt-1"
                    >
                      <div className={dropdownContainerClass}>
                        <div className="flex flex-col relative z-10 gap-0.5">
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
            );
          })}
        </nav>

        {/* =========================================
            3. COLUMNA DERECHA (CONTROLES)
            ========================================= */}
        <div className="flex-1 flex items-center justify-end gap-2 md:gap-3 z-50">

          {/* Desktop Only: Theme & Language */}
          <div className="hidden lg:flex items-center gap-3">
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
              <span className="font-title text-[11px] font-bold tracking-widest mt-0.5">{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Botón WhatsApp Sileo (Desktop) - 🟢 VERDE WHATSAPP */}
          <button onClick={handleReservation} className="hidden lg:flex items-center gap-2 rounded-xl border px-5 py-2.5 xl:px-6 xl:py-3 font-title text-[10px] xl:text-xs tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-md group bg-green-500 border-green-500 text-white hover:bg-green-400 hover:border-green-400 hover:shadow-green-500/30 dark:bg-green-600 dark:border-green-600 dark:text-white dark:hover:bg-green-500 dark:hover:border-green-500">
            {t.navbar.cta} <i className="ri-whatsapp-line text-lg xl:text-xl group-hover:scale-110 transition-transform"></i>
          </button>

          {/* Controles Móviles */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleLanguage} className={iconBtnClass}>
              <img src={lang === 'es' ? "https://flagcdn.com/us.svg" : "https://flagcdn.com/mx.svg"} alt="Flag" className="w-5 h-5 rounded-full object-cover shadow-sm" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={iconBtnClass}>
              {isMenuOpen ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-4-line text-xl"></i>}
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================
          📱 NUEVO MENÚ MÓVIL FULL-SCREEN (App-Like Modal)
          ======================================================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-0 z-[110] bg-white/95 dark:bg-dark/95 backdrop-blur-3xl lg:hidden flex flex-col overflow-hidden"
          >
            {/* Header del Menú Móvil */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200 dark:border-white/10">
              <img src={logo} alt="Logo" className="h-10 object-contain" />
              <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white">
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {/* Cuerpo del Menú */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <div key={idx} className="border-b border-slate-100 dark:border-white/5 pb-2">
                    <div className="flex items-center justify-between w-full py-4">
                      <Link to={item.path} className="text-3xl font-title text-navy dark:text-white" onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.name ? null : item.name)}
                          className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-300 active:bg-cyan-100 dark:active:bg-cyan-900"
                        >
                          <i className={`ri-arrow-down-s-line text-3xl transition-transform duration-300 ${openMobileSubmenu === item.name ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : ''}`}></i>
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {item.submenu && openMobileSubmenu === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-6 pb-6 flex flex-col gap-6 border-l-2 border-cyan-400/30 ml-2 mt-2">
                            {item.submenu.map((sub, i) => (
                              sub.link.startsWith('http') ? (
                                <a key={i} href={sub.link} target="_blank" rel="noopener noreferrer" className="text-xl font-body font-medium text-slate-500 dark:text-slate-400 flex items-center justify-between" onClick={() => setIsMenuOpen(false)}>
                                  {sub.label} <i className="ri-external-link-line opacity-40"></i>
                                </a>
                              ) : (
                                <Link key={i} to={sub.link} className="text-xl font-body font-medium text-slate-500 dark:text-slate-400" onClick={() => setIsMenuOpen(false)}>
                                  {sub.label}
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
            </div>

            {/* Footer del Menú Móvil */}
            <div className="p-6 bg-slate-50 dark:bg-[#0f172a] border-t border-slate-200 dark:border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <button onClick={toggleTheme} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 font-title text-xs tracking-widest uppercase text-slate-600 dark:text-slate-300 shadow-sm">
                  {theme === 'dark' ? <><i className="ri-sun-fill text-lg"></i> Claro</> : <><i className="ri-moon-clear-fill text-lg"></i> Oscuro</>}
                </button>
                <button onClick={toggleLanguage} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 font-title text-xs tracking-widest uppercase text-slate-600 dark:text-slate-300 shadow-sm">
                  <img src={lang === 'es' ? "https://flagcdn.com/us.svg" : "https://flagcdn.com/mx.svg"} alt="Flag" className="w-5 h-5 rounded-full object-cover" />
                  {lang === 'es' ? 'English' : 'Español'}
                </button>
              </div>

              <button onClick={handleReservation} className="w-full py-4 rounded-xl flex items-center justify-center gap-3 bg-green-500 text-white font-title text-sm tracking-widest uppercase shadow-lg active:scale-95 transition-transform mt-2 dark:bg-green-600">
                <i className="ri-whatsapp-line text-2xl"></i> {t.navbar.cta}
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================
          💬 LOGO FLOTANTE WHATSAPP (Con Logo del Cliente + Badge Verde)
          ======================================================================== */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[80]">
        <div className="relative group">
          {/* Pulso verde de fondo que indica que es WhatsApp */}
          <div className="absolute inset-0 bg-green-400/50 rounded-full animate-ping opacity-75"></div>

          <button
            onClick={handleReservation}
            className="relative w-16 h-16 md:w-20 md:h-20 bg-white/95 dark:bg-navy/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
            aria-label="Contactar por WhatsApp"
          >
            {/* EL LOGO DEL CLIENTE (El protagonista) */}
            <img
              src={logo}
              alt="WhatsApp Dolphin Dive Baja"
              className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all"
            />

            {/* BADGE DE WHATSAPP (Aclara inmediatamente la acción del botón) */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-green-500 rounded-full border-2 border-white dark:border-navy flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
              <i className="ri-whatsapp-line text-white text-sm md:text-base"></i>
            </div>

            {/* Tooltip redondeado congruente con los demás botones */}
            <span className="absolute right-[115%] top-1/2 -translate-y-1/2 mr-2 px-4 py-2 bg-white/95 dark:bg-dark/95 backdrop-blur-md text-navy dark:text-white border border-slate-200 dark:border-white/10 font-title text-[10px] md:text-xs tracking-widest uppercase rounded-xl shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
              {lang === 'es' ? '¡Chatea con nosotros!' : 'Chat with us!'}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}