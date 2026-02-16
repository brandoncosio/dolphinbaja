import React from 'react';
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
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4 font-body drop-shadow-md">
            {content.tag}
          </p>

          {/* 👇 CORRECCIÓN AQUÍ: Tamaños ajustados (text-xl a lg:text-4xl) y la clase 'break-all' para evitar el desbordamiento */}
          <h2 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8 drop-shadow-lg leading-snug break-all w-full px-2">
            {content.hashtag}<span className="text-yellow-400">{content.hashtagHighlight}</span>
          </h2>

          <p className="text-slate-300 mb-10 md:mb-12 max-w-2xl mx-auto text-base md:text-lg font-body drop-shadow-md px-4 md:px-0">
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
          className="w-full h-[350px] md:h-[500px] rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative bg-dark/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.223793633656!2d-111.3458666849811!3d26.01237998352697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b5e60b29792671%3A0x6272506373b876e4!2sDolphin%20Dive%20Baja!5e0!3m2!1ses-419!2smx!4v1683228499252!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) hue-rotate(180deg) contrast(85%) opacity(85%)' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Ubicación Dolphin Dive Baja"
            className="transition-all duration-700 hover:filter-none"
          ></iframe>

          <div className="hidden md:block absolute bottom-6 right-6 w-80 bg-dark/60 backdrop-blur-2xl p-7 rounded-[1.5rem] border border-white/10 text-left shadow-[0_16px_40px_rgba(0,0,0,0.6)] group hover:border-cyan-400/30 transition-colors duration-500">
            <div className="absolute inset-0 border border-white/5 rounded-[1.5rem] pointer-events-none mix-blend-screen"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20 text-cyan-400">
                  <i className="ri-map-pin-2-line text-xl"></i>
                </div>
                <h4 className="font-title text-white text-xl">{content.card.title}</h4>
              </div>

              <p className="text-sm text-slate-300 mb-5 font-body leading-relaxed">
                {content.card.text}
              </p>

              <a
                href="https://goo.gl/maps/tu-link-real"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold font-body group/link hover:text-white transition-colors"
              >
                {content.card.link}
                <i className="ri-external-link-line opacity-70 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:opacity-100 transition-all"></i>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}