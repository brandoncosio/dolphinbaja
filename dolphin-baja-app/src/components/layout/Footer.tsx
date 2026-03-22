import { Link } from 'react-router-dom';

// Importamos el contexto de idioma
import { useLanguage } from "../../context/LanguageContext";

import logo from '/assets/images/logodolphin.webp';
import footerBg from '/assets/images/footer.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const { t, lang } = useLanguage();
  const content = t.footer;

  const socialLinks = [
    {
      icon: 'ri-facebook-circle-fill',
      link: 'https://www.facebook.com/share/1H4r35gxtz/?mibextid=wwXIfr',
      label: 'Facebook'
    },
    {
      icon: 'ri-instagram-line',
      link: 'https://www.instagram.com/dolphindivebajaloreto?igsh=MWxwMmIxYzM0dGU1cw==',
      label: 'Instagram'
    },
    {
      icon: 'ri-youtube-fill',
      link: 'https://www.youtube.com/channel/UChMVDDccE3BLX6Xe5cLaBhQ',
      label: 'YouTube'
    },
    {
      icon: 'ri-plane-fill',
      link: 'https://www.tripadvisor.com/Attraction_Review-g150772-d627994-Reviews-Dolphin_Dive_Center-Loreto_Baja_California.html',
      label: 'TripAdvisor'
    }
  ];

  // ========================================================================
  // 📚 ESTRUCTURA DE ENLACES DEL FOOTER
  // ========================================================================
  const footerLinks = [
    {
      title: content.navTitle,
      links: [
        { label: content.navLinks.home, path: "/" },
        { label: content.navLinks.about, path: "/nosotros" },
        { label: content.navLinks.services, path: "/servicios" },
        { label: lang === 'en' ? 'Gallery' : 'Galería', path: "/galeria" },
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

  // ========================================================================
  // 🎨 ESTILOS PREMIUM (Corrección de Fondo y Franja Gris)
  // ========================================================================

  const footerClass = `
    relative pt-24 md:pt-32 pb-8 overflow-hidden transition-colors duration-500 z-10
    bg-slate-50 text-slate-600
    dark:bg-dark dark:text-slate-200 
  `;

  const bgImageClass = `
    absolute bottom-0 left-0 w-full h-full object-cover object-bottom transition-all duration-500
    /* LIGHT MODE: Más sutil para no ensuciar el blanco */
    opacity-15 grayscale-[50%] mix-blend-multiply
    /* DARK MODE: Más contraste y luminosidad */
    dark:opacity-30 dark:grayscale-[20%] dark:mix-blend-luminosity
  `;

  // 👇 LA CORRECCIÓN MÁGICA: El gradiente ahora funde el bg-slate-50 puro con transparencia, eliminando la línea cortada.
  const overlayGradientClass = `
    absolute inset-0 bg-gradient-to-b transition-colors duration-500 pointer-events-none
    /* LIGHT MODE */
    from-slate-50 via-slate-50/90 to-slate-50/40
    /* DARK MODE */
    dark:from-dark dark:via-dark/90 dark:to-dark/40
  `;

  const glowClass = `
    absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[150%] md:w-[800px] h-[300px] rounded-full blur-[120px] transition-colors duration-500 pointer-events-none
    bg-cyan-400/10
    dark:bg-cyan-400/15
  `;

  const colTitleClass = `
    font-title text-lg md:text-xl tracking-widest mb-6 transition-colors duration-500 relative inline-block
    text-navy dark:text-white
  `;

  const linkClass = `
    font-body font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 group w-fit py-1.5
    text-slate-500 hover:text-cyan-600 hover:translate-x-2
    dark:text-slate-400 dark:hover:text-cyan-400
  `;

  const socialBtnClass = `
    w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 group hover:-translate-y-1.5
    /* LIGHT */
    bg-white border border-slate-200 text-slate-500 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 hover:shadow-cyan-200/50
    /* DARK */
    dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-cyan-400 dark:hover:text-navy dark:hover:border-cyan-400 dark:shadow-none
  `;

  return (
    <footer className={footerClass}>

      {/* =========================================
          FONDO OCEÁNICO PERFECTO
      ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={footerBg}
          alt="Fondo marino"
          loading="lazy"
          decoding="async"
          className={bgImageClass}
        />
        <div className={overlayGradientClass} />
        <div className={glowClass} style={{ willChange: 'transform' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        {/* =========================================
            GRID PRINCIPAL DE 4 COLUMNAS
        ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">

          {/* COLUMNA 1: Marca y Misión (Toma 4 espacios) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left pr-0 lg:pr-8">
            <Link to="/" className="inline-block group mb-6">
              <img
                src={logo}
                alt="Dolphin Dive Baja"
                className="h-24 md:h-28 w-auto drop-shadow-xl md:group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <p className="font-body font-medium leading-relaxed text-sm md:text-base text-slate-500 dark:text-slate-300 mb-8 max-w-sm">
              {content.desc}
            </p>

            {/* Redes Sociales movidas aquí para mayor cohesión de marca */}
            <div className="flex gap-3 justify-center sm:justify-start w-full flex-wrap">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={socialBtnClass}
                >
                  <i className={`${social.icon} text-lg md:text-xl transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMNAS 2 Y 3: Enlaces Rápido (Toman 2 espacios c/u) */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className={colTitleClass}>
                {col.title}
                <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-8 h-1 bg-cyan-500 rounded-full opacity-50"></span>
              </h4>
              <ul className="space-y-2 mt-2 w-full flex flex-col items-center sm:items-start">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className={linkClass}>
                      <span className="relative">
                        {link.label}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMNA 4: Contacto (Toma 4 espacios) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className={colTitleClass}>
              <span className="text-yellow-600 dark:text-yellow-400">{content.contactTitle}</span>
              <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-8 h-1 bg-yellow-500 rounded-full opacity-50"></span>
            </h4>

            <ul className="space-y-6 mt-2 w-full max-w-sm">

              {/* Ubicación */}
              <li className="flex items-start justify-center sm:justify-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-cyan-50 dark:group-hover:bg-cyan-400/20 transition-colors">
                  <i className="ri-map-pin-2-fill text-lg text-cyan-600 dark:text-cyan-400"></i>
                </div>
                <span className="text-sm md:text-base font-medium leading-relaxed text-slate-500 dark:text-slate-300 group-hover:text-navy dark:group-hover:text-white transition-colors pt-1 text-left">
                  {content.address}
                </span>
              </li>

              {/* Teléfono */}
              <li>
                <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-yellow-50 dark:group-hover:bg-yellow-400/20 transition-colors">
                    <i className="ri-whatsapp-fill text-xl text-yellow-600 dark:text-yellow-400"></i>
                  </div>
                  <span className="text-base font-medium tracking-wide text-slate-500 dark:text-slate-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    +52 (613) 118 2311
                  </span>
                </a>
              </li>

              {/* Correo */}
              <li>
                <a href="mailto:ventas@dolphindivebaja.com" className="flex items-center justify-center sm:justify-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-cyan-50 dark:group-hover:bg-cyan-400/20 transition-colors">
                    <i className="ri-mail-send-fill text-lg text-cyan-600 dark:text-cyan-400"></i>
                  </div>
                  <span className="text-base font-medium text-slate-500 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    ventas@dolphindivebaja.com
                  </span>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* =========================================
            BARRA INFERIOR DE LEGALES
        ========================================= */}
        <div className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs md:text-sm text-center md:text-left transition-colors duration-500
          border-slate-200/60 text-slate-400
          dark:border-white/10 dark:text-slate-500">
          <p className="tracking-wide">© {currentYear} Dolphin Dive Baja. {content.rights}</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 font-medium">
            <Link to="/privacidad" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{content.privacy}</Link>
            <Link to="/terminos" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{content.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}