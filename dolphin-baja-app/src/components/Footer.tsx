import React from 'react';
import { Link } from 'react-router-dom';

// 👇 1. Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

import logo from '/assets/images/logodolphin.webp';
import footerBg from '/assets/images/footer.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // 👇 2. Extraemos las traducciones del footer y la navbar (para reutilizar nombres de servicios)
  const { t } = useLanguage();
  const content = t.footer;

  const socialLinks = [
    { icon: 'ri-facebook-circle-fill', link: 'https://facebook.com', label: 'Facebook' },
    { icon: 'ri-instagram-line', link: 'https://instagram.com', label: 'Instagram' },
    { icon: 'ri-tripadvisor-fill', link: 'https://tripadvisor.com', label: 'TripAdvisor' }
  ];

  // 👇 3. Enlaces dinámicos conectados al traductor
  const footerLinks = [
    {
      title: content.navTitle,
      links: [
        { label: content.navLinks.home, path: "/" },
        { label: content.navLinks.services, path: "/servicios" },
        { label: content.navLinks.about, path: "/nosotros" },
        { label: content.navLinks.contact, path: "/contacto" }
      ]
    },
    {
      title: content.expTitle,
      links: [
        { label: t.navbar.submenu.funDives, path: "/servicios#fundives" },
        { label: t.navbar.submenu.courses, path: "/servicios#cursos" },
        { label: t.navbar.submenu.snorkel, path: "/servicios#snorkel" },
      ]
    }
  ];

  return (
    <footer className="relative pt-24 md:pt-32 pb-8 md:pb-10 overflow-hidden bg-dark text-slate-200 border-t border-white/5 md:min-h-[550px] flex flex-col justify-end">

      {/* =========================================
          FONDO OCEÁNICO PROFUNDO
      ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={footerBg}
          alt="Fondo marino"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-[#05131a]" />

        {/* Luz abisal (Responsiva) */}
        <div className="absolute -bottom-[10%] md:-bottom-[20%] left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[200px] md:h-[300px] bg-cyan-500/15 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        {/* 👇 4. Grid responsivo: 1 col en móvil, 2 en tablet, 4 en PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 md:mb-16">

          {/* COLUMNA 1: Marca y Misión */}
          <div className="space-y-4 md:space-y-6 lg:pr-8 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Dolphin Dive Baja"
                className="h-16 md:h-20 w-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <p className="font-body text-slate-300 leading-relaxed drop-shadow-md text-sm md:text-base">
              {content.desc}
            </p>
          </div>

          {/* COLUMNAS 2 Y 3: Enlaces de Navegación */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="font-title text-base md:text-lg tracking-wider text-cyan-400 mb-4 md:mb-6 drop-shadow-md">
                {col.title}
              </h4>
              <ul className="space-y-3 md:space-y-4 font-body">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-white transition-colors inline-flex items-center justify-center sm:justify-start gap-2 group text-sm md:text-base"
                    >
                      <i className="ri-arrow-right-s-line text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:inline-block"></i>
                      <span className="sm:group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMNA 4: Contacto y Redes */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-title text-base md:text-lg tracking-wider text-yellow-400 mb-4 md:mb-6 drop-shadow-md">
              {content.contactTitle}
            </h4>
            <ul className="space-y-4 md:space-y-5 font-body mb-6 md:mb-8">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-slate-300">
                <i className="ri-map-pin-2-fill text-cyan-400 text-xl sm:text-lg sm:mt-0.5"></i>
                <span className="text-sm md:text-base leading-relaxed">{content.address}</span>
              </li>
              <li>
                <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 text-slate-300 hover:text-yellow-400 transition-colors group">
                  <i className="ri-whatsapp-fill text-yellow-400 text-xl sm:text-lg sm:group-hover:scale-110 transition-transform"></i>
                  <span className="text-sm md:text-base">+52 (613) 118 2311</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@dolphindivebaja.com" className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <i className="ri-mail-send-fill text-cyan-400 text-xl sm:text-lg sm:group-hover:scale-110 transition-transform"></i>
                  <span className="text-sm md:text-base">info@dolphindivebaja.com</span>
                </a>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="flex gap-3 justify-center sm:justify-start">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 shadow-lg hover:bg-cyan-400/20 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <i className={`${social.icon} text-lg md:text-xl group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================
            BARRA INFERIOR (Copyright y Legales)
        ========================================= */}
        {/* 👇 5. Apilado en móvil, en fila en PC */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs md:text-sm text-slate-400 text-center md:text-left">
          <p className="drop-shadow-md">© {currentYear} {content.rights}</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link to="/privacidad" className="hover:text-cyan-400 transition-colors">{content.privacy}</Link>
            <Link to="/terminos" className="hover:text-cyan-400 transition-colors">{content.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}