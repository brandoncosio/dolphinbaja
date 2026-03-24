import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// Importación directa de la imagen
import teamImg from '/assets/nosotros/team.webp';

export default function AboutHero() {
  const { lang } = useLanguage();

  // ========================================================================
  // 📚 TEXTOS LOCALES (Aplicando correcciones de la clienta)
  // ========================================================================
  const pageContent = {
    es: {
      tag: "Nuestra Historia",
      titleStart: "Más que solo un centro de buceo,",
      titleHighlight: "somos una familia que amamos el mar",
      desc: "Nuestra pasión por el océano nos une. Guiados por el respeto a la vida marina y décadas de experiencia en el Parque Nacional Bahía de Loreto, te invitamos a descubrir el 'Acuario del Mundo' guiado por verdaderos locales."
    },
    en: {
      tag: "Our Story",
      titleStart: "More than just a dive center,",
      titleHighlight: "we are a family that loves the sea",
      desc: "Our passion for the ocean unites us. Guided by our respect for marine life and decades of experience in the Loreto Bay National Park, we invite you to discover the 'Aquarium of the World' guided by true locals."
    }
  };

  const content = pageContent[lang === 'en' ? 'en' : 'es'];

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Ajuste Perfecto para la Nueva Navbar)
  // ========================================================================

  const gradientOverlayClass = `
    absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t transition-colors duration-500 z-10
    from-slate-50 via-slate-50/60 to-transparent
    dark:from-dark dark:via-dark/80 dark:to-transparent
  `;

  const imageDimmerClass = `
    absolute inset-0 transition-colors duration-500
    bg-white/5
    dark:bg-black/20
  `;

  // Halo suavizado para no competir con el contenido
  const textGlowClass = `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-56 w-80 md:w-[600px] rounded-full blur-[90px] pointer-events-none transition-colors duration-500
    bg-slate-50/40
    dark:bg-black/70
  `;

  const tagClass = `
    inline-block font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 
    px-4 py-1.5 md:px-6 md:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-500 shadow-lg pointer-events-auto
    bg-white/90 border-white/60 text-navy
    dark:bg-black/60 dark:border-white/10 dark:text-cyan-400
  `;

  // 👇 Ajuste: Bajé de text-7xl a text-6xl máximo porque el título ahora es muy largo
  const titleClass = `
    font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight pointer-events-auto transition-colors
    text-navy drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)]
    dark:text-white dark:drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]
  `;

  const descClass = `
    font-body text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md pointer-events-auto transition-colors
    text-slate-800 dark:text-slate-100
  `;

  return (
    <section key={lang} className="relative h-[85vh] min-h-[550px] md:min-h-[700px] lg:h-[90vh] w-full overflow-hidden flex flex-col justify-center items-center pt-16 pb-8">

      {/* =========================================
          FONDO PARALLAX OCEÁNICO
          ========================================= */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          className="w-full h-full"
          style={{ willChange: "transform" }}
        >
          <img
            src={teamImg}
            alt={`${content.titleHighlight} - Dolphin Dive Baja`}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            // object-[center_20%] para que en móvil se vean las caras, no el cielo
            className="w-full h-full object-cover object-[center_20%] md:object-center"
          />
        </motion.div>

        {/* Capa de contraste */}
        <div className={imageDimmerClass} />

        {/* Gradiente de base */}
        <div className={gradientOverlayClass} />
      </div>

      {/* =========================================
          CONTENIDO TEXTUAL (Centrado y desplazado hacia abajo)
          ========================================= */}
      <div className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto mt-8 md:mt-16 pointer-events-none">

        {/* Halo suave detrás del texto */}
        <div className={textGlowClass} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <span className={tagClass}>
            {content.tag}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className={titleClass}
        >
          <span dangerouslySetInnerHTML={{ __html: content.titleStart }} />{' '}
          <span className="text-yellow-500 dark:text-yellow-400 drop-shadow-md block mt-2 sm:inline sm:mt-0">{content.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className={descClass}
        >
          {content.desc}
        </motion.p>
      </div>
    </section>
  );
}