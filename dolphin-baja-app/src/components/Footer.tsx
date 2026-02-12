import React from 'react';
import { Link } from 'react-router-dom';

// Importamos el logo y la imagen de fondo
import logo from '/assets/images/logodolphin.webp';
import footerBg from '/assets/images/footer.webp';

// (Opcional) Importa tus logos de afiliación si los tienes
// import padiLogo from '/assets/images/padi-logo.png';
// import cressiLogo from '/assets/images/cressi-logo.png';

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
        { label: "Fun Dives", path: "/servicios" },
        { label: "Cursos PADI", path: "/servicios" },
        { label: "Snorkel Tours", path: "/servicios" },
      ]
    }
  ];

  return (
    // Usamos text-slate-200 para un blanco hueso más elegante
    <footer className="relative pt-24 pb-12 overflow-hidden bg-slate-900 text-slate-200">

      {/* ================= FONDO IMAGEN ================= */}
      <div className="absolute inset-0 z-0">
        {/* 1. La imagen real NÍTIDA (Sin blur, sin scale) */}
        <img
          src={footerBg}
          alt="Fondo marino"
          className="w-full h-full object-cover object-center"
        />

        {/* 2. Overlay SÓLIDO OSCURO para contraste */}
        {/* bg-slate-900/90 = 90% de opacidad del color oscuro. Garantiza legibilidad. */}
        <div className="absolute inset-0 bg-slate-900/90" />

        {/* 3. Gradiente superior suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-transparent" />
      </div>


      {/* ================= CONTENIDO (z-10 para estar encima) ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* COLUMNA 1: Marca y Afiliaciones */}
          <div className="space-y-6">
            <Link to="/">
              <img src={logo} alt="Dolphin Dive Baja" className="h-20 w-auto mb-4 drop-shadow-lg" />
            </Link>
            <p className="font-body leading-relaxed">
              Explorando el "Acuario del Mundo" con pasión, seguridad y respeto por la vida marina desde 2010. Tu familia en Loreto.
            </p>

            {/* Área para insignias (PADI/Cressi) - Descomenta si tienes las imágenes */}
            {/* <div className="flex items-center gap-4 pt-4 opacity-80 grayscale hover:grayscale-0 transition-all">
              <img src={padiLogo} alt="PADI 5 Star" className="h-14 w-auto" />
              <img src={cressiLogo} alt="Cressi Dive Center" className="h-12 w-auto" />
            </div> 
            */}
          </div>

          {/* COLUMNAS 2 y 3: Links Dinámicos */}
          {footerLinks.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-title text-xl text-yellow-400 mb-6">{col.title}</h4>
              <ul className="space-y-3 font-body">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400"></i>
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMNA 4: Contacto y Social */}
          <div>
            <h4 className="font-title text-xl text-yellow-400 mb-6">Contacto</h4>
            <ul className="space-y-4 font-body mb-8">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-fill text-cyan-400 text-xl mt-1"></i>
                <span>Marina de Loreto, BCS, México. CP 23880.</span>
              </li>
              <li>
                <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cyan-400 transition-colors group">
                  <i className="ri-whatsapp-fill text-cyan-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>+52 (613) 118 2311</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@dolphindivebaja.com" className="flex items-center gap-3 hover:text-cyan-400 transition-colors group">
                  <i className="ri-mail-fill text-cyan-400 text-xl group-hover:scale-110 transition-transform"></i>
                  <span>info@dolphindivebaja.com</span>
                </a>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cyan-400 hover:text-navy hover:border-cyan-400 transition-all duration-300 group"
                >
                  <i className={`${social.icon} text-xl group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BARRA INFERIOR (Copyright) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-sm text-slate-400">
          <p>© {currentYear} Dolphin Dive Baja. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-cyan-400 transition-colors">Aviso de Privacidad</Link>
            <Link to="/terminos" className="hover:text-cyan-400 transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}