import { motion } from 'framer-motion';

// Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

export default function Destination() {
  const { t } = useLanguage();
  const content = t.home.destination;

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Clean Code)
  // ========================================================================

  // 1. Estilo para el Contenedor del Mapa
  const mapContainerClass = `
    w-full h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative group transition-all duration-500
    
    /* LIGHT MODE: Sombra suave, borde gris, fondo blanco */
    border-slate-200 bg-white shadow-xl shadow-slate-200/50

    /* DARK MODE: Cristal oscuro, borde sutil, sin sombra brillante */
    dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
  `;

  // 2. Estilo para el Filtro del Mapa (Iframe)
  const mapFilterClass = `
    w-full h-full transition-all duration-[1.5s]
    
    /* LIGHT MODE: Mapa normal a todo color (Sin filtros) */
    grayscale-0 invert-0 contrast-100

    /* DARK MODE: Mapa invertido (Negativo) para que se vea oscuro y azulado */
    dark:grayscale-[80%] dark:invert-[90%] dark:hue-rotate-180deg dark:contrast-[85%] 
    dark:group-hover:grayscale-[20%] dark:group-hover:invert-0 dark:group-hover:filter-none
  `;

  // 3. Estilo para la Tarjeta Flotante
  const floatingCardClass = `
    hidden md:block absolute bottom-8 right-8 w-80 backdrop-blur-2xl p-7 rounded-[2rem] border text-left transition-all duration-500 z-20 group/card
    
    /* LIGHT MODE: Blanca, limpia, sombra suave */
    bg-white/95 border-slate-200 shadow-xl 
    hover:border-cyan-500/30 hover:bg-white

    /* DARK MODE: Cristal oscuro mate */
    dark:bg-white/5 dark:border-white/20 dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] 
    dark:hover:border-cyan-400/40 dark:hover:bg-white/10
  `;

  // 4. Estilo para el Icono de Ubicación
  const iconBoxClass = `
    w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors duration-300
    
    /* LIGHT MODE */
    bg-cyan-50 border-cyan-100 text-cyan-600 group-hover/card:bg-cyan-100

    /* DARK MODE */
    dark:bg-white/5 dark:border-white/20 dark:text-cyan-400 dark:group-hover/card:bg-cyan-400 dark:group-hover/card:text-dark
  `;

  // 5. Estilo para el Botón de "Ver en Maps"
  const mapBtnClass = `
    inline-flex items-center justify-center w-full py-3 rounded-xl border text-sm font-bold font-title tracking-widest uppercase hover:-translate-y-1 active:scale-95 transition-all duration-300 gap-2 shadow-md
    
    /* LIGHT MODE: Botón sólido Cyan */
    bg-cyan-600 text-white border-cyan-600 
    hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-cyan-200/50

    /* DARK MODE: Botón Cristal Cyan */
    dark:bg-cyan-400/10 dark:border-cyan-400/30 dark:text-cyan-400 
    dark:hover:bg-cyan-400 dark:hover:text-dark dark:hover:border-cyan-400
  `;

  return (
    <section id="ubicacion" className="relative z-10 w-full py-16 md:py-24 px-6 md:px-20 overflow-hidden scroll-mt-20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center relative z-20">

        {/* =========================================
            ENCABEZADO (Adaptable)
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 font-body drop-shadow-md transition-colors duration-500
            text-cyan-600 dark:text-cyan-400">
            {content.tag}
          </p>

          <h2 className="font-title text-[1.3rem] sm:text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] leading-snug w-full px-2 break-words transition-colors duration-500
            text-navy dark:text-white">
            <span className="opacity-90">{content.hashtag.trim()}</span>
            <span className="text-yellow-500 dark:text-yellow-400 ml-2">{content.hashtagHighlight.trim()}</span>
          </h2>

          <p className="mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-body drop-shadow-sm px-2 md:px-0 leading-relaxed font-medium transition-colors duration-500
            text-slate-600 dark:text-slate-100">
            {content.desc}
          </p>
        </motion.div>

        {/* =========================================
            MAPA Y TARJETA FLOTANTE
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={mapContainerClass} // 👈 Variable limpia
          style={{ willChange: "transform" }}
        >
          {/* Overlay interactivo para el mapa (Solo en Dark Mode para oscurecerlo más si se desea) */}
          <div className="absolute inset-0 z-10 pointer-events-none transition-colors duration-700 
            bg-transparent dark:bg-cyan-900/10 dark:mix-blend-overlay dark:group-hover:bg-transparent"
          />

          {/* MAPA OFICIAL */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.697666270384!2d-111.34446508896016!3d26.00898839846359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ca61c0e357672f%3A0xb35a9094770e28e9!2sDolphin%20Dive%20Center!5e0!3m2!1ses-419!2smx!4v1708456012012!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Ubicación Dolphin Dive Baja"
            className={mapFilterClass} // 👈 Variable limpia
          ></iframe>

          {/* Tarjeta flotante */}
          <div className={floatingCardClass}> {/* 👈 Variable limpia */}

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className={iconBoxClass}> {/* 👈 Variable limpia */}
                  <i className="ri-map-pin-2-fill text-2xl"></i>
                </div>
                <h4 className="font-title text-xl drop-shadow-md transition-colors duration-300
                  text-navy dark:text-white">
                  {content.card.title}
                </h4>
              </div>

              <p className="text-sm mb-6 font-body leading-relaxed drop-shadow-sm transition-colors duration-300
                text-slate-600 dark:text-slate-200">
                {content.card.text}
              </p>

              <a
                href="https://maps.app.goo.gl/uXvJ3R3P4yQ2Q2bA7"
                target="_blank"
                rel="noopener noreferrer"
                className={mapBtnClass} // 👈 Variable limpia
              >
                {content.card.link}
                <i className="ri-external-link-line"></i>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}