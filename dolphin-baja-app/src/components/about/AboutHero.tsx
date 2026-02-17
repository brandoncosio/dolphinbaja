import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// Importación directa de la imagen para que Vite la procese y optimice
import teamImg from '/assets/nosotros/team.webp';

export default function AboutHero() {
  const { t, lang } = useLanguage();
  const content = t.aboutPage.hero;

  return (
    <section key={lang} className="relative h-[60vh] min-h-[500px] md:min-h-[600px] lg:min-h-[70vh] w-full overflow-hidden flex items-center justify-center pt-20">

      {/* =========================================
          FONDO PARALLAX OCEÁNICO (LCP Optimizado para SEO)
      ========================================= */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          className="w-full h-full"
          style={{ willChange: "transform" }} // Optimización clave para iOS
        >
          {/* 👇 CAMBIO VITAL SEO: Usamos <img> en lugar de background-image 
                 Esto le dice a Google que esta imagen es la pieza principal de la pantalla */}
          <img
            src={teamImg}
            alt={`${content.titleHighlight} - Dolphin Dive Baja`}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* 👇 DEGRADADO APPLE: 
             Oscurece abajo (from-dark) para anclar la siguiente sección, 
             y deja la parte superior muy clara para que la foto brille.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/10" />
      </div>

      {/* =========================================
          CONTENIDO TEXTUAL
      ========================================= */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12 md:mt-16 pointer-events-none">

        {/* Brillo sutil detrás del texto (Aumentado a /20 para destacar en el nuevo fondo) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-40 w-64 md:w-96 rounded-full bg-cyan-400/20 blur-[80px] pointer-events-none" />

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
          // Sombras ajustadas para el contraste perfecto
          className="font-title text-4xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] leading-tight pointer-events-auto"
        >
          <span dangerouslySetInnerHTML={{ __html: content.titleStart }} />{' '}
          <span className="text-yellow-400">{content.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="font-body text-base md:text-xl text-slate-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm pointer-events-auto"
        >
          {content.desc}
        </motion.p>
      </div>
    </section>
  );
}