import { Link } from 'react-router-dom';

// Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

import logo from '/assets/images/logodolphin.webp';
import footerBg from '/assets/images/footer.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const { t } = useLanguage();
  const content = t.footer;

  const socialLinks = [
    { icon: 'ri-facebook-circle-fill', link: 'https://facebook.com', label: 'Facebook' },
    { icon: 'ri-instagram-line', link: 'https://instagram.com', label: 'Instagram' },
    { icon: 'ri-tripadvisor-fill', link: 'https://tripadvisor.com', label: 'TripAdvisor' }
  ];

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
          FONDO OCEÁNICO PROFUNDO (Optimizado Safari & Luminosidad)
      ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={footerBg}
          alt="Fondo marino"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-20 grayscale"
        />
        {/* 👇 EL SECRETO DEL AZUL PROFUNDO: Terminamos en '#04111B' (Azul Marino Súper Oscuro) en lugar de negro puro */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-[#04111B]" />

        {/* Luz abisal con aceleración por hardware */}
        <div
          className="absolute -bottom-[10%] md:-bottom-[20%] left-1/2 -translate-x-1/2 w-[120%] md:w-[600px] h-[200px] md:h-[300px] bg-cyan-500/10 blur-[80px] md:blur-[120px] rounded-full"
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        {/* =========================================
            GRID PRINCIPAL (Mejorado para móvil)
        ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-20">

          {/* COLUMNA 1: Marca y Misión */}
          <div className="space-y-6 lg:pr-8 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Dolphin Dive Baja"
                className="h-20 md:h-24 w-auto drop-shadow-2xl md:group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <p className="font-body text-slate-300 leading-relaxed text-sm md:text-base max-w-[280px] sm:max-w-none">
              {content.desc}
            </p>
          </div>

          {/* COLUMNAS 2 Y 3: Enlaces de Navegación */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="font-title text-lg tracking-widest text-cyan-400 mb-6 drop-shadow-md">
                {col.title}
              </h4>
              <ul className="space-y-2 md:space-y-4 font-body w-full">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-white transition-colors inline-flex items-center justify-center sm:justify-start gap-2 group text-base w-full sm:w-auto py-2 sm:py-0"
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
            <h4 className="font-title text-lg tracking-widest text-yellow-400 mb-6 drop-shadow-md">
              {content.contactTitle}
            </h4>
            <ul className="space-y-5 font-body mb-8 w-full">
              <li className="flex flex-row items-start justify-center sm:justify-start gap-3 text-slate-300">
                <i className="ri-map-pin-2-fill text-cyan-400 text-lg mt-1 shrink-0"></i>
                <span className="text-sm md:text-base leading-relaxed max-w-[200px] sm:max-w-none text-left">{content.address}</span>
              </li>
              <li className="flex justify-center sm:justify-start">
                <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors group py-1">
                  <i className="ri-whatsapp-fill text-yellow-400 text-xl md:group-hover:scale-110 transition-transform shrink-0"></i>
                  <span className="text-base tracking-wide">+52 (613) 118 2311</span>
                </a>
              </li>
              <li className="flex justify-center sm:justify-start">
                <a href="mailto:ventas@dolphindivebaja.com" className="flex flex-row items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group py-1">
                  <i className="ri-mail-send-fill text-cyan-400 text-xl md:group-hover:scale-110 transition-transform shrink-0"></i>
                  <span className="text-base">ventas@dolphindivebaja.com</span>
                </a>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="flex gap-4 justify-center sm:justify-start w-full">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ willChange: 'transform' }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shadow-lg hover:bg-cyan-400/20 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <i className={`${social.icon} text-xl md:group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================
            BARRA INFERIOR (Copyright y Legales)
        ========================================= */}
        {/* 👇 Aclaramos un tono (text-slate-400) para mejor contraste de lectura */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-body text-xs md:text-sm text-slate-400 text-center md:text-left">
          <p className="tracking-wide">© {currentYear} {content.rights}</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <Link to="/privacidad" className="hover:text-cyan-400 transition-colors py-2 md:py-0">{content.privacy}</Link>
            <Link to="/terminos" className="hover:text-cyan-400 transition-colors py-2 md:py-0">{content.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}