import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutHero() {
  const { t, lang } = useLanguage();
  const content = t.aboutPage.hero;

  return (
    <section key={lang} className="relative h-[60vh] min-h-[500px] md:min-h-[600px] w-full overflow-hidden flex items-center justify-center">

      {/* =========================================
          FONDO PARALLAX OCEÁNICO LUMINOSO
      ========================================= */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          className="w-full h-full"
          style={{ willChange: "transform" }} // Optimización clave para iOS
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("/assets/nosotros/team.webp")' }}
          />
        </motion.div>

        {/* 👇 DEGRADADO APPLE: 
             - Eliminado el mix-blend-multiply
             - Oscurece solo abajo para el texto, deja la parte de arriba transparente 
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
      </div>

      {/* =========================================
          CONTENIDO TEXTUAL
      ========================================= */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 md:mt-24 pointer-events-none">

        {/* Brillo sutil detrás del texto (Usamos el azul claro) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-40 w-64 md:w-96 rounded-full bg-cyan-400/15 blur-[80px] pointer-events-none" />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 md:mb-6 drop-shadow-md pointer-events-auto"
        >
          {content.tag}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          // Aumentamos el contraste de la sombra para asegurar legibilidad sobre la foto brillante
          className="font-title text-4xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-[1.1] pointer-events-auto"
        >
          <span dangerouslySetInnerHTML={{ __html: content.titleStart }} />{' '}
          <span className="text-yellow-400">{content.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="font-body text-base md:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pointer-events-auto"
        >
          {content.desc}
        </motion.p>
      </div>
    </section>
  );
}