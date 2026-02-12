import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-dark pt-24 pb-12 text-white">
      {/* Fondo con overlay sutil para profundidad */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark/90 via-dark/80 to-navy/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-20">
        
        {/* Logo */}
        <a href="/" className="mb-6 inline-block transition-transform hover:scale-105">
          <img 
            src="src/assets/images/logodolphin.webp" 
            alt="Dolphin Dive Baja Logo" 
            className="mx-auto h-24 w-auto object-contain drop-shadow-2xl md:h-32"
            // Si no tienes el logo local aún, usa este placeholder temporal para ver el diseño:
            // src="https://ui-avatars.com/api/?name=Dolphin+Dive&background=0E3D59&color=fff&size=128"
          />
        </a>

        {/* Tagline */}
        <p className="mx-auto mb-10 max-w-lg font-body text-sm leading-relaxed text-slate-300 md:text-base">
          Experiencias responsables, inmersivas y seguras dentro del Parque Nacional Bahía de Loreto.
        </p>

        {/* Redes Sociales */}
        <nav className="mb-10 flex justify-center gap-4" aria-label="Redes sociales">
          {[
            { icon: "ri-instagram-line", url: "https://www.instagram.com/dolphindivebajaloreto" },
            { icon: "ri-facebook-circle-line", url: "https://www.facebook.com/share/1H4r35gxtz" },
            { icon: "ri-map-pin-line", url: "https://maps.app.goo.gl/xsDbhWbAN9WkQZuU9" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow/50 hover:bg-yellow/20 hover:text-yellow"
            >
              <i className={`${social.icon} text-xl`}></i>
            </a>
          ))}
        </nav>

        {/* Links Legales y Copyright */}
        <div className="flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 md:flex-row md:gap-8">
          <div className="flex items-center gap-4 font-body text-sm font-semibold text-slate-400">
            <a href="/politicadeprivacidad" className="transition-colors hover:text-yellow">Política de Privacidad</a>
            <span className="text-white/20">•</span>
            <a href="/" className="transition-colors hover:text-yellow">Inicio</a>
          </div>
          
          <small className="font-body text-sm text-slate-500 md:ml-auto">
            © {currentYear} Dolphin Dive Baja. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
}