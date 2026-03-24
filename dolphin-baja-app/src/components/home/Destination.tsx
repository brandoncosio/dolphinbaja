import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Destination() {
  const { t, lang } = useLanguage();
  const content = t.home.destination;

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Clean Code)
  // ========================================================================

  const mapContainerClass = `
    w-full h-[450px] md:h-[550px] lg:h-[650px] rounded-[2.5rem] overflow-hidden relative group transition-all duration-500
    /* LIGHT MODE */
    border-2 border-white shadow-[0_30px_70px_rgba(0,0,0,0.1)] bg-slate-100
    /* DARK MODE */
    dark:border-white/10 dark:bg-dark dark:shadow-[0_30px_70px_rgba(0,0,0,0.5)]
  `;

  const mapFilterClass = `
    w-full h-full transition-all duration-[1.5s]
    /* LIGHT MODE */
    grayscale-0 invert-0 contrast-100
    /* DARK MODE: Filtros seguros para el iframe */
    dark:grayscale-[80%] dark:invert-[90%] dark:hue-rotate-180 dark:contrast-[85%] 
    dark:group-hover:grayscale-[20%] dark:group-hover:invert-0 dark:group-hover:filter-none
  `;

  const primaryBtnClass = `
    inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 md:px-10 md:py-4.5 
    font-title text-[11px] md:text-xs tracking-widest uppercase transition-all duration-300
    hover:-translate-y-1 active:scale-95 group shadow-lg border w-full sm:w-auto mt-8
    bg-cyan-600 border-cyan-600 text-white hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-400 hover:shadow-cyan-500/30
    dark:bg-cyan-500 dark:border-cyan-500 dark:text-navy dark:hover:bg-cyan-400 dark:hover:border-cyan-400 dark:shadow-none
  `;

  return (
    <section id="ubicacion" className="relative z-10 w-full py-10 md:py-16 px-6 md:px-12 lg:px-20 overflow-hidden scroll-mt-24 transition-colors duration-500 bg-slate-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto relative z-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* =========================================
              COLUMNA IZQUIERDA: CONTENIDO EDITORIAL
              ========================================= */}
          {/* 👇 Animación segura de bloque completo (sin stagger problemático) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left lg:pr-6"
          >
            {/* Etiqueta */}
            <span className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-1.5 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 w-max mx-auto lg:mx-0 shadow-sm
              text-cyan-700 bg-white border-slate-200
              dark:text-cyan-400 dark:bg-white/5 dark:border-white/10">
              <i className="ri-map-pin-user-fill text-sm"></i> {content.tag}
            </span>

            {/* Título Principal */}
            <h2 className="font-title text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-navy dark:text-white mb-4">
              {lang === 'es' ? 'Nuestra Hogar en ' : 'Our Home in '}
              <br className="hidden lg:block" />
              <span className="text-yellow-500 dark:text-yellow-400">Loreto</span>
            </h2>

            {/* 🏷️ HASHTAG DE MARCA */}
            <p className="font-title text-2xl sm:text-3xl tracking-tight mb-8 transition-colors duration-500 text-cyan-600 dark:text-cyan-400">
              #{content.hashtag.trim()}{content.hashtagHighlight.trim()}
            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8 mx-auto lg:mx-0"></div>

            {/* Descripción */}
            <p className="text-sm sm:text-base md:text-lg font-body leading-relaxed font-medium transition-colors duration-500 text-slate-600 dark:text-slate-300 mb-10">
              {content.desc}
            </p>

            {/* Tarjeta de Información Integrada */}
            <div className="flex flex-col gap-5 p-6 md:p-8 rounded-[2rem] border bg-white shadow-sm border-slate-200 dark:bg-white/5 dark:border-white/10 mb-2">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 bg-cyan-50 border-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:border-cyan-800 dark:text-cyan-400 overflow-hidden relative">
                  <i className="ri-map-pin-2-fill text-2xl relative z-10"></i>
                  {/* Sutil pulso de radar dentro del icono */}
                  <div className="absolute inset-0 bg-cyan-400/20 animate-pulse z-0"></div>
                </div>
                <h4 className="font-title text-xl text-navy dark:text-white text-left">
                  {content.card.title}
                </h4>
              </div>
              <p className="font-body text-sm font-medium text-slate-600 dark:text-slate-400 text-center lg:text-left">
                {content.card.text}
              </p>
            </div>

            {/* Botón de Acción a Google Maps */}
            <div>
              <a
                href="https://goo.gl/maps/b5R4D1w7c1y3B2A1"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtnClass}
              >
                {content.card.link} <i className="ri-external-link-line text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </a>
            </div>

          </motion.div>

          {/* =========================================
              COLUMNA DERECHA: MAPA INTERACTIVO (Panel)
              ========================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            {/* Contenedor del panel con radar de fondo */}
            <div className="relative w-full rounded-[3rem] p-2 border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-dark/50 overflow-hidden group/radar">

              {/* Sutil animación de pulso de radar de fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] aspect-square rounded-full border border-cyan-400/10 opacity-60 animate-[spin_15s_linear_infinite] pointer-events-none z-0" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}></div>

              <div className={`${mapContainerClass} z-10`}>

                {/* Overlay protector dark mode */}
                <div className="absolute inset-0 z-10 pointer-events-none transition-colors duration-700 bg-transparent dark:bg-cyan-900/10 dark:mix-blend-overlay dark:group-hover:bg-transparent" />

                {/* 👇 Iframe con URL real de Google Maps de Loreto BCS */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28430.73032549216!2d-111.3653139!3d26.0135899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c7553b1b3fb49d%3A0x67c2dfd13264422e!2sLoreto%2C%20B.C.S.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Ubicación Dolphin Dive Baja"
                  className={mapFilterClass}
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}