import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useLanguage } from '../context/LanguageContext';
import SplashScreen from '../components/SplashScreen';

// Imágenes importadas
import funDivesImg from '/assets/images/colash1.webp';
import nocturno from '/assets/contentD/img/nocturno.webp';
import coursesImg from '/assets/images/certificacionpadi.jpeg';
import isla from '/assets/contentD/img/recorridoisla.webp'
import experienciasImg from '/assets/images/experiencias.webp';
import refreshImg from '/assets/images/slider5-celular.webp';
import bubbleImg from '/assets/images/bubblem.webp';
import leones from '/assets/contentD/img/leonesm.webp';

// Imágenes agregadas
import colorFImg from '/assets/images/ColorF.webp';
import certImg from '/assets/images/cert.webp';
import cert2Img from '/assets/images/cert2.webp';
import cert3Img from '/assets/images/cert3.webp';
import cert4Img from '/assets/images/cert4.webp';

const imageDict: Record<string, string> = {
  funDivesImg, nocturno, coursesImg,
  isla, experienciasImg, refreshImg, bubbleImg, leones,
  colorFImg, certImg, cert2Img, cert3Img, cert4Img
};

export default function Servicios() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'fundives' | 'cursos' | 'snorkel'>('fundives');

  const location = useLocation();
  const { t, lang } = useLanguage();
  const content = t.servicesPage;

  useEffect(() => {
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

  // ========================================================================
  // 📦 DATOS DE LOS NUEVOS PAQUETES (Basados en la imagen)
  // ========================================================================
  const packagesData = {
    es: {
      title: "Paquetes de buceo en Loreto, Baja",
      subtitle: "Experiencias Completas",
      items: [
        {
          id: 'deep-blue',
          name: "Deep Blue",
          target: "Para buzos certificados",
          features: [
            "5 días buceando (10 tanques)",
            "6 noches de hotel con desayuno incluido",
            "Transfer aeropuerto - hotel - aeropuerto"
          ],
          note: "Mínimo 2 buzos",
          color: "cyan"
        },
        {
          id: 'blue-escape',
          name: "Blue Escape",
          target: "Para buzos certificados",
          features: [
            "3 días buceando (6 tanques)",
            "4 noches de hotel con desayuno incluido",
            "Transfer aeropuerto - hotel - aeropuerto"
          ],
          note: "Mínimo 2 buzos",
          color: "ocean"
        },
        {
          id: 'beyond-surface',
          name: "Beyond the Surface",
          target: "Get your PADI Open Water",
          features: [
            "Open Water Certification",
            "Repaso de teoría 1, 2, 3 y 4",
            "+2 días extra de buceo (4 tanques)",
            "1 Computadora Cressi"
          ],
          note: "Mínimo 2 buzos",
          color: "yellow"
        }
      ]
    },
    en: {
      title: "Dive Packages in Loreto, Baja.",
      subtitle: "All-Inclusive Experiences",
      items: [
        {
          id: 'deep-blue',
          name: "Deep Blue",
          target: "For certified divers",
          features: [
            "5 days diving (10 tanks)",
            "6 nights hotel with breakfast included",
            "Airport - hotel - airport transfer"
          ],
          note: "Minimum 2 divers",
          color: "cyan"
        },
        {
          id: 'blue-escape',
          name: "Blue Escape",
          target: "For certified divers",
          features: [
            "3 days diving (6 tanks)",
            "4 nights hotel with breakfast included",
            "Airport - hotel - airport transfer"
          ],
          note: "Minimum 2 divers",
          color: "ocean"
        },
        {
          id: 'beyond-surface',
          name: "Beyond the Surface",
          target: "Get your PADI Open Water",
          features: [
            "Open Water Certification",
            "Theory review 1, 2, 3, and 4",
            "+2 extra days diving (4 tanks)",
            "1 Cressi Dive Computer"
          ],
          note: "Minimum 2 divers",
          color: "yellow"
        }
      ]
    }
  };

  const currentLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const pkgData = packagesData[currentLang];

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Clean Code & Matte Fixes)
  // ========================================================================

  const pageContainerClass = `
    min-h-screen pt-32 pb-20 selection:bg-cyan-400 selection:text-dark transition-colors duration-500
    bg-slate-50 dark:bg-dark
  `;

  const atmosphereClass = `
    fixed inset-0 pointer-events-none overflow-hidden z-0 transition-colors duration-500
    opacity-30 dark:opacity-50
  `;

  const tabsContainerClass = `
    mx-auto max-w-2xl rounded-full border p-1.5 backdrop-blur-2xl shadow-lg transition-all duration-500
    bg-white border-slate-200 shadow-slate-200/50
    dark:bg-white/5 dark:border-white/20 dark:shadow-none
  `;

  const getTabClass = (isActive: boolean) => `
    relative flex flex-1 items-center justify-center gap-2 rounded-full px-2 py-3.5 md:px-4 md:py-4 text-xs md:text-sm font-bold transition-all duration-300
    ${isActive
      ? 'text-dark shadow-md'
      : 'text-slate-500 hover:text-navy hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
    }
  `;

  const serviceCardClass = `
    group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border transition-all duration-500 flex flex-col md:flex-row hover:-translate-y-1 shadow-lg
    bg-white border-slate-200 shadow-slate-200/50 hover:border-cyan-400/40 hover:shadow-cyan-200/30
    dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none dark:hover:border-white/20
  `;

  const bookBtnClass = `
    inline-flex w-full md:w-auto py-3.5 px-8 font-title text-sm tracking-widest uppercase rounded-xl transition-all duration-300 items-center justify-center gap-2 group/btn shadow-md active:scale-95 border
    bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-cyan-200/50
    dark:bg-cyan-400/10 dark:border-cyan-400/30 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-dark
  `;

  const scheduleCardClass = `
    rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border relative overflow-hidden shadow-xl
    bg-white border-slate-200 shadow-slate-200/50
    dark:bg-white/5 dark:backdrop-blur-2xl dark:border-white/10 dark:shadow-none
  `;

  const timeBlockClass = `
    p-6 md:p-8 rounded-2xl border transition-colors shadow-sm group
    bg-slate-50 border-slate-200
    dark:bg-white/5 dark:border-white/5
  `;

  const importantInfoClass = `
    border-l-4 rounded-r-2xl p-6 md:p-8 mt-10 transition-colors duration-500
    bg-yellow-50 border-yellow-400
    dark:bg-yellow-400/5 dark:border-yellow-400/30
  `;

  // Estilos dinámicos para los Paquetes
  const getPackageColorClass = (color: string) => {
    switch (color) {
      case 'yellow': return 'text-yellow-500 border-yellow-400 bg-yellow-50 dark:bg-yellow-400/10 dark:text-yellow-400';
      case 'cyan': return 'text-cyan-600 border-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 dark:text-cyan-400';
      default: return 'text-blue-500 border-blue-400 bg-blue-50 dark:bg-blue-400/10 dark:text-blue-400'; // ocean
    }
  };

  const packageCardClass = `
    relative flex flex-col p-8 md:p-10 rounded-[2rem] border transition-all duration-500 shadow-xl hover:-translate-y-2
    bg-white border-slate-200
    dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none dark:hover:border-white/20
  `;

  return (
    <>
      <Helmet>
        <title>
          {lang === 'es'
            ? 'Catálogo de Servicios y Tours | Dolphin Dive Baja Loreto'
            : 'Diving Services & Tours | Dolphin Dive Baja Loreto'}
        </title>
        <meta name="description" content={content.heroDesc} />
        <meta property="og:title" content={content.catalogTitle} />
        <meta property="og:description" content={content.heroDesc} />
        <meta property="og:image" content={funDivesImg} />
      </Helmet>

      <div key={lang} className={pageContainerClass}>
        <AnimatePresence>
          {isLoading && <SplashScreen key="splash" />}
        </AnimatePresence>

        {/* LUCES DE FONDO */}
        <div className={atmosphereClass} style={{ willChange: 'transform' }}>
          <div className="absolute top-[5%] -left-[10%] w-[60%] h-[50%] bg-cyan-400/20 blur-[130px] rounded-full dark:bg-cyan-500/10" />
          <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[60%] bg-ocean/25 blur-[150px] rounded-full dark:bg-ocean/10" />
        </div>

        <div className="relative z-10">

          {/* ENCABEZADO */}
          <div className="px-6 md:px-20 mb-16 md:mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <span className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.4em] drop-shadow-md text-cyan-600 dark:text-cyan-400">
                {content.catalogTitle}
              </span>
              <h1 className="mt-4 font-title text-4xl md:text-6xl lg:text-7xl drop-shadow-sm leading-tight text-navy dark:text-white">
                {content.heroTitle} <br className="hidden md:block" />
                <span className="text-yellow-500 dark:text-yellow-400">{content.heroHighlight}</span>
              </h1>
              <p className="mt-6 font-body text-base md:text-lg leading-relaxed drop-shadow-sm font-medium text-slate-600 dark:text-slate-200">
                {content.heroDesc}
              </p>
            </motion.div>
          </div>

          {/* ====================================================================
              🚀 NUEVA SECCIÓN: PAQUETES EXCLUSIVOS (Pricing Tables)
              ==================================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-center mb-10"
            >
              <h2 className="font-title text-3xl md:text-5xl text-navy dark:text-white drop-shadow-sm mb-3">
                {pkgData.title}
              </h2>
              <p className="font-body font-bold tracking-widest uppercase text-sm text-cyan-600 dark:text-cyan-400">
                {pkgData.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {pkgData.items.map((pkg, idx) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={packageCardClass}
                >
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md border mb-4 ${getPackageColorClass(pkg.color)}`}>
                      {pkg.target}
                    </span>
                    <h3 className="font-title text-3xl text-navy dark:text-white leading-tight">
                      "{pkg.name}"
                    </h3>
                  </div>

                  <ul className="flex-grow space-y-4 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 font-body text-sm md:text-base font-medium text-slate-600 dark:text-slate-300">
                        <i className={`ri-checkbox-circle-fill mt-0.5 text-lg ${pkg.color === 'yellow' ? 'text-yellow-500 dark:text-yellow-400' : 'text-cyan-500 dark:text-cyan-400'}`}></i>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4 font-body text-xs font-bold text-slate-500 dark:text-slate-400">
                      <i className="ri-group-fill"></i> {pkg.note}
                    </div>
                    <a
                      href={`https://wa.me/526131182311?text=${encodeURIComponent(`Hola, me interesa reservar el Paquete: ${pkg.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 rounded-xl font-title text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-95 border
                        ${pkg.color === 'yellow'
                          ? 'bg-yellow-400 text-navy border-yellow-400 hover:bg-yellow-300 dark:bg-yellow-400/10 dark:text-yellow-400 dark:border-yellow-400/30 dark:hover:bg-yellow-400 dark:hover:text-dark'
                          : 'bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 dark:bg-cyan-400/10 dark:text-cyan-400 dark:border-cyan-400/30 dark:hover:bg-cyan-400 dark:hover:text-dark'
                        }`}
                    >
                      Reservar <i className="ri-whatsapp-line text-lg"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ====================================================================
              TABS NAVEGACIÓN (Catálogo Individual)
              ==================================================================== */}
          <div id="catalogo-top" className="py-4 mb-10 px-4 scroll-mt-32">
            <div className="text-center mb-6">
              <h2 className="font-title text-2xl md:text-3xl text-slate-400 dark:text-slate-500">
                {lang === 'es' ? 'O personaliza tu experiencia:' : 'Or customize your experience:'}
              </h2>
            </div>
            <div className={tabsContainerClass}>
              <div className="flex justify-between">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={getTabClass(activeTab === cat.id)}
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

          {/* CATÁLOGO DE SERVICIOS */}
          <div className="max-w-6xl mx-auto px-6 md:px-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8 md:gap-12"
              >
                {content.services[activeTab].map((item, index) => (
                  <div
                    key={index}
                    className={serviceCardClass}
                    style={{ willChange: 'transform' }}
                  >
                    {/* IMAGEN */}
                    <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:h-auto relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/10">
                      <img
                        src={item.title.includes('Open Water Diver') ? colorFImg :
                          item.title.includes('Advanced Open Water') ? certImg :
                            item.title.includes('Rescue Diver') ? cert2Img :
                              (item.title.includes('Especialidades PADI') || item.title.includes('PADI Specialties')) ? cert3Img :
                                item.title.includes('Dive Master') ? cert4Img :
                                  imageDict[item.imgKey]}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform"
                      />
                    </div>

                    {/* CONTENIDO */}
                    <div className="p-6 md:p-10 lg:p-12 flex flex-col flex-grow relative z-10 justify-center">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <h3 className="font-title text-2xl md:text-3xl lg:text-4xl transition-colors drop-shadow-sm leading-tight
                          text-navy group-hover:text-cyan-600
                          dark:text-white dark:group-hover:text-cyan-300">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider font-body px-3 py-1.5 rounded-lg border shrink-0 self-start sm:self-auto
                          text-cyan-700 bg-cyan-50 border-cyan-200
                          dark:text-cyan-400 dark:bg-cyan-400/10 dark:border-cyan-400/20">
                          <i className="ri-time-line"></i> {item.duration}
                        </div>
                      </div>

                      <p className="text-sm md:text-base leading-relaxed mb-6 font-body font-medium
                        text-slate-600
                        dark:text-slate-300">
                        {item.desc}
                      </p>

                      {/* INCLUYE */}
                      <div className="mb-8 border-t pt-6 border-slate-100 dark:border-white/10">
                        <p className="text-[10px] md:text-xs mb-3 font-bold uppercase tracking-widest font-body
                          text-slate-400
                          dark:text-slate-400">
                          {content.ui.includes}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.includes.map((inc, i) => (
                            <span key={i} className="text-[11px] md:text-xs px-3.5 py-1.5 rounded-lg border font-body shadow-sm
                              bg-slate-100 text-slate-600 border-slate-200
                              dark:bg-white/5 dark:text-slate-200 dark:border-white/10">
                              {inc}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* BOTÓN RESERVAR */}
                      <div className="mt-auto">
                        <a
                          href={`https://wa.me/526131182311?text=Hola, quiero información sobre el servicio individual: ${item.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={bookBtnClass}
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

          {/* HORARIOS */}
          <div className="mt-20 md:mt-32 max-w-5xl mx-auto px-6">
            <motion.div layout className={scheduleCardClass}>
              {/* Luz interior (Solo Dark - Muy sutil) */}
              <div className="absolute top-0 right-0 w-[150%] h-[150%] -z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] 
                from-transparent via-transparent to-transparent
                dark:from-cyan-400/5"
              ></div>

              <div className="relative z-10">
                <h3 className="font-title text-xl md:text-3xl mb-8 md:mb-12 flex items-center gap-4 drop-shadow-md text-navy dark:text-white">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md
                    bg-yellow-400 text-white border-yellow-400
                    dark:bg-yellow-400 dark:text-dark dark:border-yellow-400 dark:shadow-none">
                    <i className="ri-calendar-check-fill text-2xl"></i>
                  </div>
                  {content.schedules.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                  {/* MAÑANA */}
                  <div className={`${timeBlockClass} hover:border-cyan-400/50`}>
                    <div className="flex justify-between items-start mb-4">
                      <p className="font-title text-sm md:text-base tracking-wider text-cyan-600 dark:text-cyan-400">{content.schedules.morning}</p>
                      <span className="text-[10px] px-2.5 py-1 rounded font-body border
                        bg-slate-200 text-slate-600 border-slate-300
                        dark:bg-white/10 dark:text-white dark:border-white/10">{currentSchedule.morning.season}</span>
                    </div>
                    <p className="text-2xl md:text-4xl font-title mb-2 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-300 text-navy dark:text-white">{currentSchedule.morning.time}</p>
                    <p className="text-xs md:text-sm font-body font-medium text-slate-500 dark:text-slate-300">{currentSchedule.morning.note}</p>
                  </div>

                  {/* TARDE */}
                  <div className={`${timeBlockClass} hover:border-yellow-400/50`}>
                    <div className="flex justify-between items-start mb-4">
                      <p className="font-title text-sm md:text-base tracking-wider text-yellow-600 dark:text-yellow-400">{content.schedules.afternoon}</p>
                      <span className="text-[10px] px-2.5 py-1 rounded font-body border
                        bg-slate-200 text-slate-600 border-slate-300
                        dark:bg-white/10 dark:text-white dark:border-white/10">{currentSchedule.afternoon.season}</span>
                    </div>
                    <p className="text-2xl md:text-4xl font-title mb-2 transition-colors group-hover:text-yellow-600 dark:group-hover:text-yellow-400 text-navy dark:text-white">{currentSchedule.afternoon.time}</p>
                    <p className="text-xs md:text-sm font-body font-medium text-slate-500 dark:text-slate-300">{currentSchedule.afternoon.note}</p>
                  </div>

                  {/* NOCHE */}
                  {(currentSchedule as any).night ? (
                    <div className={`${timeBlockClass} hover:border-purple-400/50`}>
                      <div className="flex justify-between items-start mb-4">
                        <p className="font-title text-sm md:text-base tracking-wider text-purple-600 dark:text-purple-400">{content.schedules.night}</p>
                        <span className="text-[10px] px-2.5 py-1 rounded font-body border
                          bg-slate-200 text-slate-600 border-slate-300
                          dark:bg-white/10 dark:text-white dark:border-white/10">{(currentSchedule as any).night.season}</span>
                      </div>
                      <p className="text-2xl md:text-4xl font-title mb-2 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400 text-navy dark:text-white">{(currentSchedule as any).night.time}</p>
                      <p className="text-xs md:text-sm font-body font-medium text-slate-500 dark:text-slate-300">{(currentSchedule as any).night.note}</p>
                    </div>
                  ) : (
                    <div className="p-6 md:p-8 rounded-2xl border flex flex-col justify-center items-center text-center opacity-70
                      bg-slate-50 border-slate-200
                      dark:bg-white/5 dark:border-white/5">
                      <i className="ri-moon-clear-line text-3xl mb-3 text-slate-400"></i>
                      <p className="text-xs md:text-sm font-body tracking-wide text-slate-400">{content.schedules.notAvailable}</p>
                    </div>
                  )}
                </div>

                {/* REGLAS IMPORTANTE */}
                <div className={importantInfoClass}>
                  <h4 className="font-title text-sm md:text-base mb-4 uppercase tracking-widest flex items-center gap-2 
                    text-yellow-600 dark:text-yellow-400">
                    <i className="ri-information-fill text-xl"></i>
                    {content.schedules.important}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentSchedule.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-body font-medium 
                        text-slate-700 dark:text-slate-200">
                        <span className="w-2 h-2 rounded-full mt-2 shrink-0 bg-yellow-400 shadow-sm"></span>
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