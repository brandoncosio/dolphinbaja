import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

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

// Diccionario para mapear las imágenes
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
          setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 200);
        }
      }
    }
  }, [location]);

  const categories = [
    { id: 'fundives', label: content.categories.fundives, icon: 'ri-anchor-line' },
    { id: 'cursos', label: content.categories.cursos, icon: 'ri-medal-line' },
    { id: 'snorkel', label: content.categories.snorkel, icon: 'ri-sun-line' }
  ] as const;

  const currentSchedule = content.schedules[activeTab];

  return (
    <div key={lang} className="min-h-screen bg-dark pt-32 pb-20 selection:bg-cyan-400 selection:text-dark">
      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {/* =========================================
          LUCES DE PROFUNDIDAD (Liquid Light Apple-Style)
          Optimizadas: Sin mix-blend-screen, puro blur nativo
      ======================================== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ willChange: 'transform' }}>
        <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] bg-cyan-400/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] -right-[15%] w-[45%] h-[60%] bg-ocean/20 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* ENCABEZADO */}
        <div className="px-6 md:px-20 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="font-body text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 drop-shadow-md">
              {content.catalogTitle}
            </span>
            <h1 className="mt-4 font-title text-4xl text-white md:text-6xl drop-shadow-lg leading-tight">
              {content.heroTitle} <br className="hidden md:block" /> <span className="text-yellow-400">{content.heroHighlight}</span>
            </h1>
            <p className="mt-6 text-slate-200 font-body text-base md:text-lg leading-relaxed drop-shadow-md">
              {content.heroDesc}
            </p>
          </motion.div>
        </div>

        {/* TABS NAVEGACIÓN */}
        <div id="catalogo-top" className="py-4 mb-12 px-4 scroll-mt-24">
          <div className="mx-auto max-w-2xl rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="flex justify-between">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex flex-1 items-center justify-center gap-2 rounded-full px-2 py-3 md:px-4 md:py-3 text-xs md:text-sm font-bold transition-colors ${activeTab === cat.id ? 'text-dark' : 'text-slate-300 hover:text-white'
                    }`}
                >
                  {activeTab === cat.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(102,216,227,0.5)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1 md:gap-2 font-title uppercase tracking-wider">
                    <i className={`${cat.icon} text-base md:text-lg`}></i>
                    <span className="hidden sm:inline">{cat.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="max-w-7xl mx-auto px-6 md:px-20 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {content.services[activeTab].map((item, index) => (
                <div
                  key={index}
                  // 👇 TARJETAS LUMINOSAS: bg-white/5 en lugar de bg-dark/40
                  className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-500 flex flex-col hover:-translate-y-2 shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(102,216,227,0.15)]"
                  style={{ willChange: 'transform' }} // GPU Boost
                >
                  {/* IMAGEN DE LA TARJETA */}
                  <div className="w-full aspect-[4/3] md:aspect-video overflow-hidden relative">
                    <img
                      src={imageDict[item.imgKey]}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform"
                    />
                    {/* 👇 DEGRADADO APPLE: Oscurece solo abajo y se vuelve transparente rápido */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90" />

                    <div className="absolute top-4 right-4 bg-dark/70 backdrop-blur-md text-yellow-400 font-title px-4 py-2 rounded-xl text-xs md:text-sm border border-yellow-400/20 shadow-lg">
                      {item.price}
                    </div>
                  </div>

                  {/* CONTENIDO DE LA TARJETA */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 -mt-12">
                    {/* 👇 Drop-shadow en el texto para que resalte sobre el fondo de la imagen */}
                    <h3 className="font-title text-xl md:text-2xl text-white group-hover:text-cyan-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-2 leading-tight">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 font-body drop-shadow-md">
                      <i className="ri-time-line"></i> {item.duration}
                    </div>

                    <p className="text-slate-200 text-sm leading-relaxed mb-6 flex-grow font-body">
                      {item.desc}
                    </p>

                    {/* INCLUYE (Pills) */}
                    <div className="mb-8 border-t border-white/10 pt-5">
                      <p className="text-[10px] text-slate-400 mb-3 font-bold uppercase tracking-widest font-body">
                        {content.ui.includes}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.includes.map((inc, i) => (
                          <span key={i} className="text-[11px] bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg border border-white/10 font-body shadow-sm">
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* BOTÓN RESERVAR LIQUID GLASS */}
                    <a
                      href={`https://wa.me/526131182311?text=Hola, quiero información sobre: ${item.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-cyan-400/10 backdrop-blur-md border border-cyan-400/30 text-cyan-400 font-title text-sm tracking-widest uppercase rounded-xl hover:bg-cyan-400 hover:text-dark transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_4px_15px_rgba(102,216,227,0.1)] hover:shadow-[0_8px_25px_rgba(102,216,227,0.3)] active:scale-95"
                    >
                      {content.ui.bookNow} <i className="ri-whatsapp-line text-lg group-hover/btn:scale-110 transition-transform"></i>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SECCIÓN HORARIOS (Glassmorphism Premium) */}
        <div className="mt-20 md:mt-24 max-w-5xl mx-auto px-6">
          <motion.div
            layout
            // Usamos bg-white/5 para seguir la estética de cristal sobre el mar profundo
            className="bg-white/5 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[80px] -z-0"></div>

            <div className="relative z-10">
              <h3 className="font-title text-xl md:text-2xl text-white mb-6 md:mb-8 flex items-center gap-3 drop-shadow-md">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20 text-yellow-400">
                  <i className="ri-calendar-check-line text-xl"></i>
                </div>
                {content.schedules.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                {/* MAÑANA */}
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-colors shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-cyan-400 font-title text-base">{content.schedules.morning}</p>
                    <span className="text-[10px] bg-dark/80 px-2 py-1 rounded text-slate-300 font-body border border-white/5">{currentSchedule.morning.season}</span>
                  </div>
                  <p className="text-2xl md:text-3xl text-white font-title mb-1 drop-shadow-md">{currentSchedule.morning.time}</p>
                  <p className="text-xs text-slate-300 font-body">{currentSchedule.morning.note}</p>
                </div>

                {/* TARDE */}
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-colors shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-yellow-400 font-title text-base">{content.schedules.afternoon}</p>
                    <span className="text-[10px] bg-dark/80 px-2 py-1 rounded text-slate-300 font-body border border-white/5">{currentSchedule.afternoon.season}</span>
                  </div>
                  <p className="text-2xl md:text-3xl text-white font-title mb-1 drop-shadow-md">{currentSchedule.afternoon.time}</p>
                  <p className="text-xs text-slate-300 font-body">{currentSchedule.afternoon.note}</p>
                </div>

                {/* NOCHE */}
                {(currentSchedule as any).night ? (
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-colors shadow-lg">
                    <div className="flex justify-between items-start mb-3">
                      <p className="text-purple-400 font-title text-base">{content.schedules.night}</p>
                      <span className="text-[10px] bg-dark/80 px-2 py-1 rounded text-slate-300 font-body border border-white/5">{(currentSchedule as any).night.season}</span>
                    </div>
                    <p className="text-2xl md:text-3xl text-white font-title mb-1 drop-shadow-md">{(currentSchedule as any).night.time}</p>
                    <p className="text-xs text-slate-300 font-body">{(currentSchedule as any).night.note}</p>
                  </div>
                ) : (
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center opacity-70">
                    <i className="ri-moon-clear-line text-2xl text-slate-400 mb-2"></i>
                    <p className="text-xs md:text-sm text-slate-400 font-body">{content.schedules.notAvailable}</p>
                  </div>
                )}
              </div>

              {/* REGLAS IMPORTANTE */}
              <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-5 md:p-6 backdrop-blur-sm">
                <h4 className="font-title text-yellow-400 text-xs md:text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                  <i className="ri-alert-line text-lg"></i>
                  {content.schedules.important}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentSchedule.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-200 font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0 shadow-[0_0_5px_rgba(250,204,21,0.8)]"></span>
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
  );
}