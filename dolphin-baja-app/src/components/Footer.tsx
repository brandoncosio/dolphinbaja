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

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Corrección de Fondo)
  // ========================================================================

  // 1. Contenedor Principal Footer
  const footerClass = `
    relative pt-24 md:pt-32 pb-8 md:pb-10 overflow-hidden transition-colors duration-500 z-10 border-t 
    bg-slate-50 border-slate-200 text-slate-600
    dark:bg-dark dark:border-white/10 dark:text-slate-200 
  `;

  // 2. Imagen de Fondo (CORREGIDA)
  const bgImageClass = `
    w-full h-full object-cover object-bottom transition-all duration-500
    
    /* LIGHT MODE (Corrección): 
       - opacity-25: Más visible.
       - mix-blend-multiply: Se funde con el fondo blanco como tinta sobre papel.
       - grayscale-[20%]: Mantiene un poco de color (azulados) para que no sea triste.
    */
    opacity-25 grayscale-[20%] mix-blend-multiply
    
    /* DARK MODE: 
       - Oscura, luminosa y sutil para no molestar el texto blanco.
    */
    dark:opacity-50 dark:grayscale-[30%] dark:mix-blend-luminosity dark:mix-blend-normal
  `;

  // 3. Gradiente de Superposición (Overlay)
  const overlayGradientClass = `
    absolute inset-0 bg-gradient-to-b transition-colors duration-500
    
    /* LIGHT MODE: 
       - Top/Bottom sólidos para transición.
       - Centro (via) muy transparente (slate-50/40) para DEJAR VER LA IMAGEN.
    */
    from-slate-50/90 via-slate-50/40 to-slate-200/90
    
    /* DARK MODE: Azul profundo */
    dark:from-dark dark:via-dark/30 dark:to-navy/90
  `;

  // 4. Luz de Fondo (Glow)
  const glowClass = `
    absolute -bottom-[10%] md:-bottom-[20%] left-1/2 -translate-x-1/2 w-[120%] md:w-[800px] h-[200px] md:h-[300px] rounded-full blur-[100px] md:blur-[150px] transition-colors duration-500
    bg-cyan-400/10
    dark:bg-cyan-400/15
  `;

  // 5. Títulos de Columnas
  const colTitleClass = `
    font-title text-lg tracking-widest mb-6 drop-shadow-md transition-colors duration-500
    text-cyan-700
    dark:text-cyan-400
  `;

  // 6. Enlaces de Navegación
  const linkClass = `
    font-medium transition-colors inline-flex items-center justify-center sm:justify-start gap-2 group text-base w-full sm:w-auto py-1 sm:py-0
    text-slate-600 hover:text-cyan-600
    dark:text-slate-300 dark:hover:text-cyan-300
  `;

  // 7. Botones Redes Sociales
  const socialBtnClass = `
    w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group hover:-translate-y-1
    /* LIGHT */
    bg-white border border-slate-200 text-slate-600 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 hover:shadow-cyan-200/50
    /* DARK */
    dark:bg-white/5 dark:border-white/15 dark:text-slate-200 dark:hover:bg-cyan-400 dark:hover:text-dark dark:hover:border-cyan-400 dark:shadow-none
  `;

  // 8. Iconos Contacto
  const contactIconClass = `
    w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm
    /* LIGHT */
    bg-white border border-slate-200 group-hover:bg-cyan-50 group-hover:border-cyan-300
    /* DARK */
    dark:bg-white/5 dark:border-white/10 dark:group-hover:bg-cyan-400 dark:group-hover:border-cyan-400
  `;

  return (
    <footer className={footerClass}>

      {/* =========================================
          FONDO OCEÁNICO (Dual Texture)
      ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={footerBg}
          alt="Fondo marino"
          loading="lazy"
          decoding="async"
          className={bgImageClass}
        />

        {/* Gradiente Adaptable */}
        <div className={overlayGradientClass} />

        {/* Luz de fondo sutil */}
        <div
          className={glowClass}
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        {/* =========================================
            GRID PRINCIPAL
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
            <p className="font-body font-medium leading-relaxed text-sm md:text-base max-w-[280px] sm:max-w-none drop-shadow-sm transition-colors duration-500
              text-slate-600 dark:text-slate-200">
              {content.desc}
            </p>
          </div>

          {/* COLUMNAS 2 Y 3: Enlaces */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className={colTitleClass}>
                {col.title}
              </h4>
              <ul className="space-y-3 md:space-y-4 font-body w-full">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className={linkClass}
                    >
                      <i className="ri-arrow-right-s-line opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:inline-block
                        text-cyan-600 dark:text-cyan-400"></i>
                      <span className="sm:group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMNA 4: Contacto y Redes */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-title text-lg tracking-widest mb-6 drop-shadow-md transition-colors duration-500
              text-yellow-600 dark:text-yellow-400">
              {content.contactTitle}
            </h4>

            <ul className="space-y-5 font-body mb-8 w-full">

              {/* Ubicación */}
              <li className="flex flex-row items-center sm:items-start justify-center sm:justify-start gap-4 group transition-colors
                text-slate-600 dark:text-slate-300">
                <div className={contactIconClass}>
                  <i className="ri-map-pin-2-fill text-lg transition-colors
                    text-cyan-600 dark:text-cyan-400 dark:group-hover:text-dark"></i>
                </div>
                <span className="text-sm md:text-base font-medium leading-relaxed max-w-[200px] sm:max-w-none text-left sm:mt-2 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors">{content.address}</span>
              </li>

              {/* Teléfono */}
              <li className="flex justify-center sm:justify-start">
                <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-4 group transition-colors
                  text-slate-600 dark:text-slate-300">
                  <div className={contactIconClass.replace('cyan', 'yellow')}>
                    <i className="ri-whatsapp-fill text-xl transition-colors
                      text-yellow-600 dark:text-yellow-400 dark:group-hover:text-dark"></i>
                  </div>
                  <span className="text-base font-medium tracking-wide group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">+52 (613) 118 2311</span>
                </a>
              </li>

              {/* Correo */}
              <li className="flex justify-center sm:justify-start">
                <a href="mailto:ventas@dolphindivebaja.com" className="flex flex-row items-center gap-4 group transition-colors
                  text-slate-600 dark:text-slate-300">
                  <div className={contactIconClass}>
                    <i className="ri-mail-send-fill text-lg transition-colors
                      text-cyan-600 dark:text-cyan-400 dark:group-hover:text-dark"></i>
                  </div>
                  <span className="text-base font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">ventas@dolphindivebaja.com</span>
                </a>
              </li>

            </ul>

            {/* Redes Sociales */}
            <div className="flex gap-3 justify-center sm:justify-start w-full flex-wrap">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ willChange: 'transform' }}
                  className={socialBtnClass}
                >
                  <i className={`${social.icon} text-xl transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================
            BARRA INFERIOR
        ========================================= */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 font-body text-xs md:text-sm text-center md:text-left transition-colors duration-500
          border-slate-200 text-slate-500
          dark:border-white/10 dark:text-slate-400">
          <p className="tracking-wide">© {currentYear} {content.rights}</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 font-medium">
            <Link to="/privacidad" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-2 md:py-0">{content.privacy}</Link>
            <Link to="/terminos" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-2 md:py-0">{content.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}