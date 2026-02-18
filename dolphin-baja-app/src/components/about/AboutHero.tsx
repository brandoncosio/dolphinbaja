import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// Importación directa de la imagen
import teamImg from '/assets/nosotros/team.webp';

export default function AboutHero() {
  const { t, lang } = useLanguage();
  const content = t.aboutPage.hero;

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Corrección de Visibilidad de Foto)
  // ========================================================================

  // 1. Gradiente de Fusión (Limitado a la parte INFERIOR)
  // CORRECCIÓN: Ya no usamos 'inset-0'. Usamos 'bottom-0 h-[60%]' para que el gradiente 
  // solo afecte la parte de abajo y deje las caras limpias.
  const gradientOverlayClass = `
    absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t transition-colors duration-500 z-10
    
    /* LIGHT MODE: Fusión suave hacia blanco solo abajo */
    from-slate-50 via-slate-50/60 to-transparent
    
    /* DARK MODE: Fusión hacia oscuro solo abajo */
    dark:from-dark dark:via-dark/80 dark:to-transparent
  `;

  // 2. Capa de Oscurecimiento General (Muy sutil ahora)
  const imageDimmerClass = `
    absolute inset-0 transition-colors duration-500
    /* LIGHT: Casi transparente para ver colores vivos */
    bg-white/5
    /* DARK: Muy sutil, solo para que no deslumbre */
    dark:bg-black/20
  `;

  // 3. Atmósfera detrás del Texto (Reducida y sutil)
  // CORRECCIÓN: Bajamos la opacidad drásticamente (de /60 a /30 o /40) para que no parezca una mancha.
  const textGlowClass = `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-56 w-80 md:w-[500px] rounded-full blur-[80px] pointer-events-none transition-colors duration-500
    
    /* LIGHT: Halo blanco muy suave */
    bg-slate-50/40
    
    /* DARK: Sombra negra suave detrás del texto (no azul ni gris fuerte) */
    dark:bg-black/60
  `;

  // 4. Clases de Texto (Contrastados)
  const tagClass = `
    text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] block mb-3 md:mb-6 drop-shadow-md pointer-events-auto transition-colors
    text-cyan-600 dark:text-cyan-400
  `;

  const titleClass = `
    font-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight pointer-events-auto transition-colors
    
    /* LIGHT: Navy fuerte con sombra para despegarse de la foto sin borrarla */
    text-navy drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]
    
    /* DARK: Blanco con sombra negra fuerte para leerse sobre la foto limpia */
    dark:text-white dark:drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]
  `;

  const descClass = `
    font-body text-sm sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md pointer-events-auto transition-colors
    text-slate-800 dark:text-slate-100
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
            // Alineación superior para no cortar cabezas en móvil
            className="w-full h-full object-cover object-[center_top] md:object-center"
          />
        </motion.div>

        {/* Capa de contraste general (Muy limpia) */}
        <div className={imageDimmerClass} />

        {/* Gradiente de fusión (Solo abajo) */}
        <div className={gradientOverlayClass} />
      </div>

      {/* =========================================
          CONTENIDO TEXTUAL
          ========================================= */}
      <div className="relative z-20 text-center px-4 md:px-6 max-w-4xl mx-auto -mt-12 md:-mt-16 pointer-events-none">

        {/* Halo suave detrás del texto */}
        <div className={textGlowClass} />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className={tagClass}
        >
          {content.tag}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className={titleClass}
        >
          <span dangerouslySetInnerHTML={{ __html: content.titleStart }} />{' '}
          <span className="text-yellow-500 dark:text-yellow-400 drop-shadow-md">{content.titleHighlight}</span>
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