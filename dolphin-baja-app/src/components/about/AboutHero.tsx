import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutHero() {
  const { t, lang } = useLanguage();

  // Asumimos que crearemos un objeto 'aboutPage' en translations.ts
  const content = t.aboutPage.hero;

  return (
    // Agregamos la key para forzar la actualización de animaciones e idiomas
    <section key={lang} className="relative h-[60vh] min-h-[500px] md:min-h-[600px] w-full overflow-hidden flex items-center justify-center">

      {/* =========================================
          FONDO PARALLAX OCEÁNICO
      ========================================= */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          className="w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("/assets/nosotros/team.webp")' }}
          />
        </motion.div>

        {/* Degradado adaptado al color corporativo (Dark) */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark" />
        <div className="absolute inset-0 bg-dark/20 mix-blend-multiply" />
      </div>

      {/* =========================================
          CONTENIDO TEXTUAL
      ========================================= */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 md:mt-24">

        {/* Brillo sutil detrás del texto para hacerlo resaltar de la foto */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-40 w-64 md:w-96 rounded-full bg-cyan-400/20 blur-[80px] pointer-events-none" />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 md:mb-6 drop-shadow-md"
        >
          {content.tag}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="font-title text-4xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 drop-shadow-lg leading-tight"
        >
          {/* dangerouslySetInnerHTML permite leer los <br/> que pongamos en el texto */}
          <span dangerouslySetInnerHTML={{ __html: content.titleStart }} />{' '}
          <span className="text-yellow-400">{content.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="font-body text-base md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          {content.desc}
        </motion.p>
      </div>
    </section>
  );
}