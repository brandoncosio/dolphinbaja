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

  return (
    <footer className="relative pt-24 md:pt-32 pb-8 md:pb-10 overflow-hidden bg-dark text-slate-200 border-t border-white/10 md:min-h-[550px] flex flex-col justify-end z-10">

      {/* =========================================
          FONDO OCEÁNICO PROFUNDO (Visible y Texturizado)
      ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={footerBg}
          alt="Fondo marino"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-bottom opacity-50 grayscale-[30%] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/30 to-navy/90" />

        <div
          className="absolute -bottom-[10%] md:-bottom-[20%] left-1/2 -translate-x-1/2 w-[120%] md:w-[800px] h-[200px] md:h-[300px] bg-cyan-400/15 blur-[100px] md:blur-[150px] rounded-full"
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
            <p className="font-body text-slate-200 font-medium leading-relaxed text-sm md:text-base max-w-[280px] sm:max-w-none drop-shadow-sm">
              {content.desc}
            </p>
          </div>

          {/* COLUMNAS 2 Y 3: Enlaces de Navegación */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="font-title text-lg tracking-widest text-cyan-400 mb-6 drop-shadow-md">
                {col.title}
              </h4>
              <ul className="space-y-3 md:space-y-4 font-body w-full">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-cyan-300 font-medium transition-colors inline-flex items-center justify-center sm:justify-start gap-2 group text-base w-full sm:w-auto py-1 sm:py-0"
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

            {/* 👇 LISTA DE CONTACTO CON BURBUJAS APPLE GLASS */}
            <ul className="space-y-5 font-body mb-8 w-full">

              {/* Ubicación */}
              <li className="flex flex-row items-center sm:items-start justify-center sm:justify-start gap-4 text-slate-300 group">
                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-colors duration-300 shadow-sm">
                  <i className="ri-map-pin-2-fill text-cyan-400 text-lg group-hover:text-dark transition-colors duration-300"></i>
                </div>
                <span className="text-sm md:text-base font-medium leading-relaxed max-w-[200px] sm:max-w-none text-left sm:mt-2 group-hover:text-white transition-colors">{content.address}</span>
              </li>

              {/* Teléfono */}
              <li className="flex justify-center sm:justify-start">
                <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-4 text-slate-300 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors duration-300 shadow-sm">
                    <i className="ri-whatsapp-fill text-yellow-400 text-xl group-hover:text-dark transition-colors duration-300"></i>
                  </div>
                  <span className="text-base font-medium tracking-wide group-hover:text-yellow-400 transition-colors">+52 (613) 118 2311</span>
                </a>
              </li>

              {/* Correo */}
              <li className="flex justify-center sm:justify-start">
                <a href="mailto:ventas@dolphindivebaja.com" className="flex flex-row items-center gap-4 text-slate-300 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-colors duration-300 shadow-sm">
                    <i className="ri-mail-send-fill text-cyan-400 text-lg group-hover:text-dark transition-colors duration-300"></i>
                  </div>
                  <span className="text-base font-medium group-hover:text-cyan-400 transition-colors">ventas@dolphindivebaja.com</span>
                </a>
              </li>

            </ul>

            {/* Redes Sociales (Liquid Glass) */}
            <div className="flex gap-3 justify-center sm:justify-start w-full flex-wrap">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ willChange: 'transform' }}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/15 flex items-center justify-center text-slate-200 shadow-lg hover:bg-cyan-400 hover:text-dark hover:border-cyan-400 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(34,211,238,0.4)] transition-all duration-300 group"
                >
                  <i className={`${social.icon} text-xl transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================
            BARRA INFERIOR (Copyright y Legales)
        ========================================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-body text-xs md:text-sm text-slate-400 text-center md:text-left">
          <p className="tracking-wide">© {currentYear} {content.rights}</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 font-medium">
            <Link to="/privacidad" className="hover:text-cyan-400 transition-colors py-2 md:py-0">{content.privacy}</Link>
            <Link to="/terminos" className="hover:text-cyan-400 transition-colors py-2 md:py-0">{content.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}