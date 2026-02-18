import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// Importación directa de la imagen
import teamImg from '/assets/nosotros/team.webp';

export default function AboutHero() {
  const { t, lang } = useLanguage();
  const content = t.aboutPage.hero;

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Corrección de Línea y Neón)
  // ========================================================================

  // 1. Gradiente de Fusión
  const gradientOverlayClass = `
    absolute inset-0 bg-gradient-to-t transition-colors duration-500 z-10
    
    /* LIGHT MODE: Se funde hacia el blanco hielo */
    from-slate-50 via-slate-50/30 to-transparent
    
    /* DARK MODE: Opacidad ajustada para evitar línea de corte */
    dark:from-dark dark:via-dark/90 dark:to-transparent
  `;

  // 2. Capa de Oscurecimiento General
  const imageDimmerClass = `
    absolute inset-0 bg-dark/20 transition-opacity duration-500
    /* Un poco más oscuro en Dark Mode para que el texto resalte naturalmente */
    opacity-20 dark:opacity-50
  `;

  // 3. Brillo detrás del texto (Corrección de "Luz Neón")
  const textGlowClass = `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-40 w-64 md:w-96 rounded-full blur-[80px] pointer-events-none transition-colors duration-500
    
    /* LIGHT: Sombra oscura suave */
    bg-dark/30
    
    /* DARK: Sombra negra suave */
    dark:bg-black/50
  `;

  return (
    <section key={lang} className="relative h-[60vh] min-h-[500px] md:min-h-[600px] lg:min-h-[70vh] w-full overflow-hidden flex items-center justify-center pt-20">

      {/* =========================================
          FONDO PARALLAX OCEÁNICO
          ========================================= */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
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
            // CORRECCIÓN MÓVIL: object-[center_top] para que no corte las cabezas en celular
            className="w-full h-full object-cover object-[center_top] md:object-center"
          />
        </motion.div>

        {/* Capa de oscurecimiento base */}
        <div className={imageDimmerClass} />

        {/* GRADIENTE DE FUSIÓN */}
        <div className={gradientOverlayClass} />
      </div>

      {/* =========================================
          CONTENIDO TEXTUAL
          ========================================= */}
      {/* CORRECCIÓN MÓVIL: Padding lateral reducido (px-4) y ancho máximo ajustado */}
      {/* AJUSTE: Margen negativo añadido (-mt-12 md:-mt-16) para subir el texto */}
      <div className="relative z-20 text-center px-4 md:px-6 max-w-4xl mx-auto -mt-12 md:-mt-16 pointer-events-none">

        {/* Brillo/Sombra detrás del texto */}
        <div className={textGlowClass} />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          // CORRECCIÓN MÓVIL: Tamaño de fuente más pequeño en móvil (text-[10px])
          className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-cyan-400 block mb-3 md:mb-6 drop-shadow-md pointer-events-auto"
        >
          {content.tag}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          // CORRECCIÓN MÓVIL: Texto ajustado (text-3xl) para evitar desbordes
          className="font-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] leading-tight pointer-events-auto"
        >
          <span dangerouslySetInnerHTML={{ __html: content.titleStart }} />{' '}
          <span className="text-yellow-400">{content.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          // CORRECCIÓN MÓVIL: Texto base más pequeño en móvil (text-sm)
          className="font-body text-sm sm:text-lg md:text-xl text-slate-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm pointer-events-auto"
        >
          {content.desc}
        </motion.p>
      </div>
    </section>
  );
}