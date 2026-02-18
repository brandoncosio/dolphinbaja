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

  // 1. Gradiente de Fusión (El "Difuminado" inferior)
  // CORRECCIÓN: Aumentamos la opacidad en Dark Mode (via-dark/90) para "tapar" la foto al final y evitar la línea.
  const gradientOverlayClass = `
    absolute inset-0 bg-gradient-to-t transition-colors duration-500 z-10
    
    /* LIGHT MODE: Se funde hacia el blanco hielo */
    from-slate-50 via-slate-50/30 to-transparent
    
    /* DARK MODE: Se funde hacia el azul profundo con más fuerza para borrar el corte */
    dark:from-dark dark:via-dark/90 dark:to-transparent
  `;

  // 2. Capa de Oscurecimiento General
  const imageDimmerClass = `
    absolute inset-0 bg-dark/20 transition-opacity duration-500
    /* Un poco más oscuro en Dark Mode para que el texto resalte naturalmente */
    opacity-20 dark:opacity-50
  `;

  // 3. Brillo detrás del texto (Corrección de "Luz Neón")
  // CORRECCIÓN: Cambiamos el cyan brillante por una sombra negra suave en Dark Mode.
  // Esto hace que el texto sea legible sin parecer un cartel de neón.
  const textGlowClass = `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-40 w-64 md:w-96 rounded-full blur-[80px] pointer-events-none transition-colors duration-500
    
    /* LIGHT: Sombra oscura suave para separar letras blancas del fondo claro */
    bg-dark/30
    
    /* DARK: Sombra negra suave (Antes era cyan neón) */
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
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Capa de oscurecimiento base */}
        <div className={imageDimmerClass} />

        {/* 👇 EL GRADIENTE DE FUSIÓN (Ahora más sólido en Dark Mode) */}
        <div className={gradientOverlayClass} />
      </div>

      {/* =========================================
          CONTENIDO TEXTUAL
          ========================================= */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-12 md:mt-16 pointer-events-none">

        {/* Brillo/Sombra detrás del texto */}
        <div className={textGlowClass} />

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