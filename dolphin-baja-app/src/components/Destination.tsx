import { motion } from 'framer-motion';

// Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

export default function Destination() {
  const { t } = useLanguage();
  const content = t.home.destination;

  return (
    <section id="ubicacion" className="relative z-10 w-full py-16 md:py-24 px-6 md:px-20 overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto text-center relative z-20">

        {/* =========================================
            ENCABEZADO
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4 font-body drop-shadow-md">
            {content.tag}
          </p>

          {/* CORRECCIÓN FINAL DE ALINEACIÓN DEL HASHTAG:
              - Se quitó 'flex flex-wrap'
              - Se usa 'break-words' para que la palabra se adapte al contenedor sin separar los span
              - Se pegan los span sin saltos de línea para evitar el espacio "fantasma" de React JSX.
          */}
          <h2 className="font-title text-[1.3rem] sm:text-2xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] leading-snug w-full px-2 break-words">
            <span className="opacity-90">{content.hashtag.trim()}</span><span className="text-yellow-400">{content.hashtagHighlight.trim()}</span>
          </h2>

          <p className="text-slate-200 mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-body drop-shadow-md px-2 md:px-0 leading-relaxed">
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
          // Actualizamos el fondo a bg-white/5 para seguir la estética luminosa de las tarjetas anteriores
          className="w-full h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative bg-white/5 group"
        >
          {/* Overlay interactivo para el mapa */}
          <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />

          {/* MAPA DE LORETO REAL: Enlace embebido oficial de Google Maps apuntando a Loreto, BCS */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113402.13110993439!2d-111.41724039130765!3d25.99268383389025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c757c96369c0d5%3A0xe54d24925828f73b!2sLoreto%2C%20B.C.S.!5e0!3m2!1sen!2smx!4v1709665322960!5m2!1sen!2smx"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(80%) invert(90%) hue-rotate(180deg) contrast(85%)' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Ubicación Dolphin Dive Baja"
            className="transition-all duration-[1.5s] group-hover:grayscale-[20%] group-hover:invert-0 group-hover:filter-none"
          ></iframe>

          {/* Tarjeta flotante (Solo visible en PC) */}
          <div className="hidden md:block absolute bottom-8 right-8 w-80 bg-dark/70 backdrop-blur-md p-7 rounded-[2rem] border border-white/10 text-left shadow-[0_15px_40px_rgba(0,0,0,0.5)] group/card hover:border-cyan-400/40 hover:bg-dark/80 transition-all duration-500 z-20">

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20 text-cyan-400 group-hover/card:bg-cyan-400 group-hover/card:text-dark transition-colors duration-300">
                  <i className="ri-map-pin-2-fill text-2xl"></i>
                </div>
                <h4 className="font-title text-white text-xl">{content.card.title}</h4>
              </div>

              <p className="text-sm text-slate-300 mb-6 font-body leading-relaxed">
                {content.card.text}
              </p>

              <a
                href="https://goo.gl/maps/tu-link-real" /* Recuerda actualizar este href con tu link de Maps */
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold font-title tracking-widest uppercase hover:bg-cyan-400 hover:text-dark hover:border-cyan-400 transition-all duration-300 gap-2"
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