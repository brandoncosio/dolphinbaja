import React from 'react';
import { Link } from 'react-router-dom';

import logo from '/assets/images/logodolphin.webp';
import footerBg from '/assets/images/footer.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'ri-facebook-circle-fill', link: 'https://facebook.com', label: 'Facebook' },
    { icon: 'ri-instagram-line', link: 'https://instagram.com', label: 'Instagram' },
    { icon: 'ri-tripadvisor-fill', link: 'https://tripadvisor.com', label: 'TripAdvisor' }
  ];

  const footerLinks = [
    {
      title: "Navegación", links: [
        { label: "Inicio", path: "/" },
        { label: "Servicios", path: "/servicios" },
        { label: "Nosotros", path: "/nosotros" },
        { label: "Contacto", path: "/contacto" }
      ]
    },
    {
      title: "Experiencias", links: [
        { label: "Fun Dives", path: "/servicios#fundives" },
        { label: "Cursos PADI", path: "/servicios#cursos" },
        { label: "Snorkel Tours", path: "/servicios#snorkel" },
      ]
    }
  ];

  return (
    <footer className="relative pt-32 pb-10 overflow-hidden bg-dark text-slate-200 border-t border-white/5 md:min-h-[550px] flex flex-col justify-end">

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
        {/* Degradado para fundirse con la sección anterior */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-[#05131a]" />

        {/* Bioluminiscencia en el fondo */}
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] md:w-[600px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* COLUMNA 1: Marca y Misión */}
          <div className="space-y-6 lg:pr-8">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Dolphin Dive Baja"
                className="h-20 w-auto mb-2 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <p className="font-body text-slate-300 leading-relaxed drop-shadow-md text-sm md:text-base">
              Explorando el "Acuario del Mundo" con pasión, seguridad y respeto por la vida marina desde 2010. Tu familia en Loreto.
            </p>
          </div>

          {/* COLUMNAS 2 Y 3: Enlaces de Navegación */}
          {footerLinks.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-title text-lg tracking-wider text-cyan-400 mb-6 drop-shadow-md">{col.title}</h4>
              <ul className="space-y-4 font-body">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMNA 4: Contacto y Redes */}
          <div>
            <h4 className="font-title text-lg tracking-wider text-yellow-400 mb-6 drop-shadow-md">Contacto</h4>
            <ul className="space-y-5 font-body mb-8">
              <li className="flex items-start gap-3 text-slate-300">
                <i className="ri-map-pin-2-fill text-cyan-400 text-lg mt-0.5"></i>
                <span className="text-sm md:text-base leading-relaxed">Marina de Loreto, BCS, México. CP 23880.</span>
              </li>
              <li>
                <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors group">
                  <i className="ri-whatsapp-fill text-yellow-400 text-lg group-hover:scale-110 transition-transform"></i>
                  <span className="text-sm md:text-base">+52 (613) 118 2311</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@dolphindivebaja.com" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <i className="ri-mail-send-fill text-cyan-400 text-lg group-hover:scale-110 transition-transform"></i>
                  <span className="text-sm md:text-base">info@dolphindivebaja.com</span>
                </a>
              </li>
            </ul>

            {/* Redes Sociales (Liquid Glass) */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 shadow-lg hover:bg-cyan-400/20 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <i className={`${social.icon} text-xl group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================
            BARRA INFERIOR (Copyright y Legales)
        ========================================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs md:text-sm text-slate-400">
          <p className="drop-shadow-md">© {currentYear} Dolphin Dive Baja. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacidad" className="hover:text-cyan-400 transition-colors">Aviso de Privacidad</Link>
            <Link to="/terminos" className="hover:text-cyan-400 transition-colors">Términos y Condiciones</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}