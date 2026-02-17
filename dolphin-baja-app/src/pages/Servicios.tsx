import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // 👇 SEO

import { useLanguage } from '../context/LanguageContext';
import SplashScreen from '../components/SplashScreen';

// Imágenes importadas
import funDivesImg from '/assets/images/colash1.webp';
import coronadosImg from '/assets/images/colash11.webp';
import nightDiveImg from '/assets/images/colash2.webp';
import coursesImg from '/assets/images/certificacionpadi.jpeg';
import snorkelImg from '/assets/images/realsonrkell.jpeg';
import experienciasImg from '/assets/images/experiencias.webp';
import refreshImg from '/assets/images/slider5-celular.webp';
import bubbleImg from '/assets/images/slider1-celular.webp';

// Diccionario para mapear las imágenes de los servicios detallados
const imageDict: Record<string, string> = {
  funDivesImg,
  coronadosImg,
  nightDiveImg,
  coursesImg,
  snorkelImg,
  experienciasImg,
  refreshImg,
  bubbleImg
};

export default function Servicios() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'fundives' | 'cursos' | 'snorkel'>('fundives');

  const location = useLocation();
  const { t, lang } = useLanguage();
  const content = t.servicesPage;

  useEffect(() => {
    // Al cargar directo, subir al top si no hay anclas
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const tabId = location.hash.replace('#', '') as 'fundives' | 'cursos' | 'snorkel';
      if (['fundives', 'cursos', 'snorkel'].includes(tabId)) {
        setActiveTab(tabId);
        const element = document.getElementById('catalogo-top');
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 300);
        }
      }
    }
  }, [location, isLoading]);

  const categories = [
    { id: 'fundives', label: content.categories.fundives, icon: 'ri-anchor-line' },
    { id: 'cursos', label: content.categories.cursos, icon: 'ri-medal-line' },
    { id: 'snorkel', label: content.categories.snorkel, icon: 'ri-sun-line' }
  ] as const;

  const currentSchedule = content.schedules[activeTab];

  return (
    <>
      {/* =========================================
          METADATOS DINÁMICOS (SEO & Open Graph)
      ========================================= */}
      <Helmet>
        <title>
          {lang === 'es'
            ? 'Catálogo de Servicios y Tours | Dolphin Dive Baja Loreto'
            : 'Diving Services & Tours | Dolphin Dive Baja Loreto'}
        </title>
        <meta
          name="description"
          content={content.heroDesc}
        />
        <meta property="og:title" content={content.catalogTitle} />
        <meta property="og:description" content={content.heroDesc} />
        <meta property="og:image" content={funDivesImg} />
      </Helmet>

      <div key={lang} className="min-h-screen bg-dark pt-32 pb-20 selection:bg-cyan-400 selection:text-dark">
        <AnimatePresence>
          {isLoading && <SplashScreen key="splash" />}
        </AnimatePresence>

        {/* =========================================
            LUCES DE PROFUNDIDAD (Aguas Someras)
        ======================================== */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ willChange: 'transform' }}>
          <div className="absolute top-[5%] -left-[10%] w-[60%] h-[50%] bg-cyan-400/20 blur-[130px] rounded-full" />
          <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[60%] bg-ocean/25 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10">

          {/* =========================================
              ENCABEZADO
          ======================================== */}
          <div className="px-6 md:px-20 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <span className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400 drop-shadow-md">
                {content.catalogTitle}
              </span>
              <h1 className="mt-4 font-title text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] leading-tight">
                {content.heroTitle} <br className="hidden md:block" /> <span className="text-yellow-400">{content.heroHighlight}</span>
              </h1>
              <p className="mt-6 text-slate-100 font-body text-base md:text-lg leading-relaxed drop-shadow-sm font-medium">
                {content.heroDesc}
              </p>
            </motion.div>
          </div>

          {/* =========================================
              TABS NAVEGACIÓN (Píldora Flotante Cristalina)
          ======================================== */}
          <div id="catalogo-top" className="py-4 mb-16 px-4 scroll-mt-32">
            <div className="mx-auto max-w-2xl rounded-full border border-white/20 bg-white/5 p-1.5 backdrop-blur-2xl shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
              <div className="flex justify-between">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`relative flex flex-1 items-center justify-center gap-2 rounded-full px-2 py-3.5 md:px-4 md:py-4 text-xs md:text-sm font-bold transition-all duration-300 ${activeTab === cat.id ? 'text-dark shadow-md' : 'text-slate-200 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {activeTab === cat.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 rounded-full bg-cyan-400"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5 md:gap-2 font-title uppercase tracking-wider">
                      <i className={`${cat.icon} text-base md:text-lg`}></i>
                      <span className="hidden sm:inline">{cat.label}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================
              CATÁLOGO DE SERVICIOS (Layout Híbrido)
          ======================================== */}
          <div className="max-w-6xl mx-auto px-6 md:px-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                // En móvil es 1 columna, en PC sigue siendo 1 columna pero el contenido interior será horizontal
                className="flex flex-col gap-8 md:gap-12"
              >
                {/* 👇 Aquí iteramos sobre el tab activo, NO sobre la lista genérica del Home */}
                {content.services[activeTab].map((item, index) => (
                  <div
                    key={index}
                    // Diseño Horizontal en PC, Vertical en Móvil (Apple Glass)
                    className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-500 flex flex-col md:flex-row hover:-translate-y-1 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(102,216,227,0.2)]"
                    style={{ willChange: 'transform' }}
                  >
                    {/* IMAGEN DE LA TARJETA (Ocupa 40% en PC) */}
                    <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:h-auto relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/10">
                      <img
                        src={imageDict[item.imgKey]}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform"
                      />
                      {/* Etiqueta de Precio Flotante */}
                      <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md text-yellow-400 font-title px-4 py-2 rounded-xl text-xs md:text-sm border border-yellow-400/20 shadow-lg z-10">
                        {item.price}
                      </div>
                    </div>

                    {/* CONTENIDO DE LA TARJETA (Ocupa 60% en PC) */}
                    <div className="p-6 md:p-10 lg:p-12 flex flex-col flex-grow relative z-10 justify-center">

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <h3 className="font-title text-2xl md:text-3xl lg:text-4xl text-white group-hover:text-cyan-300 transition-colors drop-shadow-sm leading-tight">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400 text-xs md:text-sm font-bold uppercase tracking-wider font-body bg-cyan-400/10 px-3 py-1.5 rounded-lg border border-cyan-400/20 shrink-0 self-start sm:self-auto">
                          <i className="ri-time-line"></i> {item.duration}
                        </div>
                      </div>

                      <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-6 font-body font-medium">
                        {item.desc}
                      </p>

                      {/* INCLUYE (Pills Esmerilados) */}
                      <div className="mb-8 border-t border-white/10 pt-6">
                        <p className="text-[10px] md:text-xs text-slate-300 mb-3 font-bold uppercase tracking-widest font-body">
                          {content.ui.includes}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.includes.map((inc, i) => (
                            <span key={i} className="text-[11px] md:text-xs bg-white/10 text-white px-3.5 py-1.5 rounded-lg border border-white/10 font-body shadow-sm">
                              {inc}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* BOTÓN RESERVAR (Liquid Glass Avanzado) */}
                      <div className="mt-auto">
                        <a
                          href={`https://wa.me/526131182311?text=Hola, quiero información sobre: ${item.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full md:w-auto py-3.5 px-8 bg-cyan-400/10 backdrop-blur-md border border-cyan-400/30 text-cyan-400 font-title text-sm tracking-widest uppercase rounded-xl hover:bg-cyan-400 hover:text-dark transition-all duration-300 items-center justify-center gap-2 group/btn shadow-[0_4px_15px_rgba(102,216,227,0.1)] hover:shadow-[0_8px_25px_rgba(102,216,227,0.3)] active:scale-95"
                        >
                          {content.ui.bookNow} <i className="ri-whatsapp-line text-lg group-hover/btn:scale-110 transition-transform"></i>
                        </a>
                      </div>

                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================================
              SECCIÓN HORARIOS (Holográfico Premium)
          ======================================== */}
          <div className="mt-20 md:mt-32 max-w-5xl mx-auto px-6">
            <motion.div
              layout
              className="bg-white/5 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-white/20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              {/* Luz interior de la tarjeta */}
              <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent -z-0"></div>

              <div className="relative z-10">
                <h3 className="font-title text-xl md:text-3xl text-white mb-8 md:mb-12 flex items-center gap-4 drop-shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400 border border-yellow-400 flex items-center justify-center text-dark shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                    <i className="ri-calendar-check-fill text-2xl"></i>
                  </div>
                  {content.schedules.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                  {/* MAÑANA */}
                  <div className="bg-dark/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-colors shadow-inner group">
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-cyan-400 font-title text-sm md:text-base tracking-wider">{content.schedules.morning}</p>
                      <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded text-white font-body border border-white/10">{currentSchedule.morning.season}</span>
                    </div>
                    <p className="text-2xl md:text-4xl text-white font-title mb-2 group-hover:text-cyan-300 transition-colors">{currentSchedule.morning.time}</p>
                    <p className="text-xs md:text-sm text-slate-300 font-body font-medium">{currentSchedule.morning.note}</p>
                  </div>

                  {/* TARDE */}
                  <div className="bg-dark/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-colors shadow-inner group">
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-yellow-400 font-title text-sm md:text-base tracking-wider">{content.schedules.afternoon}</p>
                      <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded text-white font-body border border-white/10">{currentSchedule.afternoon.season}</span>
                    </div>
                    <p className="text-2xl md:text-4xl text-white font-title mb-2 group-hover:text-yellow-400 transition-colors">{currentSchedule.afternoon.time}</p>
                    <p className="text-xs md:text-sm text-slate-300 font-body font-medium">{currentSchedule.afternoon.note}</p>
                  </div>

                  {/* NOCHE */}
                  {(currentSchedule as any).night ? (
                    <div className="bg-dark/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-colors shadow-inner group">
                      <div className="flex justify-between items-start mb-4">
                        <p className="text-purple-400 font-title text-sm md:text-base tracking-wider">{content.schedules.night}</p>
                        <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded text-white font-body border border-white/10">{(currentSchedule as any).night.season}</span>
                      </div>
                      <p className="text-2xl md:text-4xl text-white font-title mb-2 group-hover:text-purple-400 transition-colors">{(currentSchedule as any).night.time}</p>
                      <p className="text-xs md:text-sm text-slate-300 font-body font-medium">{(currentSchedule as any).night.note}</p>
                    </div>
                  ) : (
                    <div className="bg-dark/20 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center opacity-70">
                      <i className="ri-moon-clear-line text-3xl text-slate-400 mb-3"></i>
                      <p className="text-xs md:text-sm text-slate-400 font-body tracking-wide">{content.schedules.notAvailable}</p>
                    </div>
                  )}
                </div>

                {/* REGLAS IMPORTANTE */}
                <div className="bg-gradient-to-r from-yellow-400/10 to-transparent border-l-4 border-yellow-400 rounded-r-2xl p-6 md:p-8 mt-10">
                  <h4 className="font-title text-yellow-400 text-sm md:text-base mb-4 uppercase tracking-widest flex items-center gap-2">
                    <i className="ri-information-fill text-xl"></i>
                    {content.schedules.important}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentSchedule.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-slate-200 font-body font-medium">
                        <span className="w-2 h-2 rounded-full bg-yellow-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(250,204,21,0.8)]"></span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}