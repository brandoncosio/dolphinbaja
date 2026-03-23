import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// 🗺️ IMÁGENES
import islaImg from '/assets/images/isla.webp';
import buceoImg from '/assets/images/buceo.webp';
import carmenIslaImg from '/assets/images/carmen.webp';
import carmenBuceoImg from '/assets/images/carmensur.webp';
import coronadoIslaImg from '/assets/images/fuera.webp';
import coronadoBuceoImg from '/assets/images/fondo.webp';

// Nuevo Mapa
const mapImg = '/assets/images/diving_map.jpg';

export default function DiveSites() {
  const { t, lang } = useLanguage();
  const content = t.diveSites; // Usado para los puntos del mapa originales
  const [selectedPoint, setSelectedPoint] = useState<any | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // ========================================================================
  // 📚 NUEVOS TEXTOS LOCALES (Columna Izquierda y Temperaturas)
  // ========================================================================
  const pageData = {
    es: {
      tag: "Explora Nuestros Sitios",
      title: "El Acuario del Mundo",
      p1: "Un santuario marino protegido por la UNESCO que abarca 206,000 hectáreas de océano prístino, hogar de 5 islas y más de 40 sitios de buceo para todos los niveles de experiencia.",
      p2: "Explora un mundo de formaciones volcánicas dramáticas y una rica biodiversidad marina — perfecto para explorar y para fotografía submarina.",
      sightingsTitle: "Vida Marina que te espera:",
      sightings1: "En el camino hacia los sitios de buceo, podemos ver delfines • mantas mobula • peces voladores • ballenas (por temporada), etc.",
      sightings2: "Durante las inmersiones podemos ver gran diversidad de vida marina: Corales duros y blandos (negro, californica, copa naranja y muchos más) • Anémonas tubulares • Tortugas marinas • Anguilas • Tiburones de arrecife • Pecio C-54 (10–25 m de profundidad) • Lobos marinos • Delfines • Grandes cardúmenes • Vida macro (nudibranquios, blénidos, gobios, jawfishes, etc.) • ¡y mucho más!",
      tempTitle: "Temperaturas del Agua",
      temps: [
        "Mayo–Junio: 73–80°F (22–26°C) → Traje de 3–5mm recomendado.",
        "Julio–Med-Nov: 76–85°F (24–29°C) → Traje de 2–5mm o rash guard.",
        "Nov–Abril: 65–75°F (18–24°C) → Traje de 5–7mm (Ene-Mar son los más fríos; trae chaqueta)."
      ],
      bookBtn: "Reservar Expedición"
    },
    en: {
      tag: "Explore Our Sites",
      title: "The World's Aquarium",
      p1: "A UNESCO protected marine sanctuary spanning 206,000 hectares of pristine ocean, home to 5 islands and over 40 dive sites for all experience levels.",
      p2: "Explore a world of dramatic volcanic formations and rich marine biodiversity — perfect for exploring and underwater photography.",
      sightingsTitle: "Marine Life Awaiting You:",
      sightings1: "On the way to the dive sites, we can see dolphins • mobula rays • flying fish • whales (seasonal), etc.",
      sightings2: "During the dives we can see a great diversity of marine life: Hard and soft corals (black, californica, orange cup and many more) • Tube anemones • Sea turtles • Eels • Reef sharks • C-54 Wreck (10–25 m deep) • Sea lions • Dolphins • Large schools of fish • Macro life (nudibranchs, blennies, gobies, jawfishes, etc.) • and much more!",
      tempTitle: "Water Temperatures",
      temps: [
        "May–June: 73–80°F (22–26°C) → 3–5mm wetsuit recommended.",
        "July–Mid-Nov: 76–85°F (24–29°C) → 2–5mm wetsuit or rash guard.",
        "Nov–April: 65–75°F (18–24°C) → 5–7mm full wetsuit (Jan–Mar are coldest months; bring a jacket for surface intervals)."
      ],
      bookBtn: "Book Expedition"
    }
  };

  const localText = pageData[lang === 'en' ? 'en' : 'es'];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (selectedPoint) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPoint]);

  // 📍 BASE DE DATOS DEL MAPA INTERACTIVO
  const mainPoints = [
    { id: 1, name: content.interactiveMap.points[0].name, desc: content.interactiveMap.points[0].desc, top: "75%", left: "45%", imgIsland: islaImg, imgSite: buceoImg, isMain: true },
    { id: 2, name: content.interactiveMap.points[1].name, desc: content.interactiveMap.points[1].desc, top: "45%", left: "55%", imgIsland: carmenIslaImg, imgSite: carmenBuceoImg, isMain: true },
    { id: 3, name: content.interactiveMap.points[2].name, desc: content.interactiveMap.points[2].desc, top: "30%", left: "50%", imgIsland: coronadoIslaImg, imgSite: coronadoBuceoImg, isMain: true }
  ];

  const extraPoints = (content.extraDescriptions || []).map((desc: string, i: number) => {
    const mobileLeft = 48 + (Math.sin(i * 2.1) * 18);
    const mobileTop = 10 + (i * 2.9) + (Math.cos(i * 1.3) * 2);
    const desktopLeft = 20 + (Math.sin(i) * 18 + 20);

    return {
      id: i + 4,
      name: content.extraTitles ? content.extraTitles[i] : `Sitio ${i + 1}`,
      desc: desc,
      top: isMobile ? `${mobileTop}%` : `${12 + (i * 2.8)}%`,
      left: isMobile ? `${mobileLeft}%` : `${desktopLeft}%`,
      imgIsland: `/assets/mapa/i${i + 1}.webp`,
      isMain: false
    };
  });

  const allPoints = [...mainPoints, ...extraPoints];

  const handleNavigate = (direction: 'next' | 'prev') => {
    const currentIndex = allPoints.findIndex(p => p.id === selectedPoint.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= allPoints.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = allPoints.length - 1;
    setSelectedPoint(allPoints[nextIndex]);
  };

  return (
    <section id="divesites" className="relative py-24 px-6 md:px-12 lg:px-20 z-10 max-w-[1400px] mx-auto scroll-mt-24">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ========================================================================
            COLUMNA IZQUIERDA: TEXTOS, TEMPERATURAS Y BOTÓN
            ======================================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white text-cyan-600 border-slate-200 dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 w-max mb-6 shadow-sm">
            <i className="ri-map-pin-line text-lg"></i> {localText.tag}
          </span>

          <h2 className="font-title text-4xl sm:text-5xl md:text-6xl text-navy dark:text-white leading-tight drop-shadow-sm mb-6">
            {localText.title}
          </h2>

          <div className="w-20 h-1 bg-cyan-500 rounded-full mb-8"></div>

          {/* Textos Principales */}
          <div className="space-y-4 font-body text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6">
            <p>{localText.p1}</p>
            <p>{localText.p2}</p>
          </div>

          {/* Bloque de Avistamientos */}
          <div className="mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
            <h4 className="font-title text-lg text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <i className="ri-camera-lens-fill text-xl"></i> {localText.sightingsTitle}
            </h4>
            <div className="space-y-3 font-body text-sm text-slate-600 dark:text-slate-300">
              <p><strong className="text-navy dark:text-white">{lang === 'es' ? 'En superficie:' : 'On surface:'}</strong> {localText.sightings1}</p>
              <p><strong className="text-navy dark:text-white">{lang === 'es' ? 'Bajo el agua:' : 'Underwater:'}</strong> {localText.sightings2}</p>
            </div>
          </div>

          {/* Tarjeta de Temperaturas del Agua */}
          <div className="mb-10 p-5 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800/50 shadow-inner">
            <h4 className="font-title text-lg text-cyan-800 dark:text-cyan-300 mb-3 flex items-center gap-2">
              <i className="ri-temp-hot-line text-xl text-yellow-500"></i> {localText.tempTitle}
            </h4>
            <ul className="space-y-2">
              {localText.temps.map((temp, i) => (
                <li key={i} className="text-sm font-body text-cyan-900 dark:text-cyan-100 flex items-start gap-2">
                  <i className="ri-drop-fill text-cyan-500 mt-0.5"></i>
                  <span className="font-medium">{temp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón de Reserva (Reemplazo de los stats) */}
          <a
            href="mailto:ventas@dolphindivebaja.com?subject=Reserva de Expedición de Buceo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-title text-sm md:text-base tracking-widest uppercase transition-all active:scale-95 shadow-lg shadow-cyan-500/30 border border-cyan-500"
          >
            {localText.bookBtn} <i className="ri-calendar-check-line text-xl"></i>
          </a>

        </motion.div>

        {/* ========================================================================
            COLUMNA DERECHA: MAPA INTERACTIVO
            ======================================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 relative mt-10 lg:mt-0"
        >
          <div className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 border-white dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-100 dark:bg-dark p-1">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-cyan-400/20 opacity-50 animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}></div>

            <div className="relative rounded-[2.2rem] md:rounded-[2.8rem] overflow-hidden bg-white dark:bg-dark group">
              {/* 👇 Imagen del Mapa AHORA ES DIVING_MAP.JPG */}
              <img
                src={mapImg}
                alt="Mapa de Buceo del Parque Marino"
                className="w-full h-auto object-contain mx-auto transition-transform duration-[5s] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-navy/10 dark:to-dark/40 pointer-events-none mix-blend-overlay"></div>

              {/* Renderizado de Puntos Interactivos */}
              {allPoints.map((point) => (
                <div key={point.id} className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300" style={{ top: point.top, left: point.left }}>

                  {/* Animación Ping de fondo para llamar la atención */}
                  <div className={`absolute inset-0 rounded-full animate-ping opacity-60 ${point.isMain ? 'bg-yellow-500' : 'bg-cyan-400'}`}></div>

                  <button
                    onClick={() => setSelectedPoint(point)}
                    className={`relative rounded-full text-white shadow-xl hover:scale-125 transition-transform duration-300 flex items-center justify-center group/pin
                      ${point.isMain
                        ? 'bg-yellow-500 w-8 h-8 md:w-12 md:h-12 border-[3px] border-white dark:border-dark shadow-yellow-500/50 text-navy'
                        : 'bg-cyan-500 w-5 h-5 md:w-8 md:h-8 border-2 border-white dark:border-dark shadow-cyan-500/50'}`}
                  >
                    {point.isMain ? <i className="ri-star-fill text-xs md:text-xl"></i> : <i className="ri-pushpin-fill text-[10px] md:text-sm"></i>}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================
          MODAL DE EXPEDICIÓN (LIGHTBOX DEL MAPA)
          ======================================================================== */}
      <AnimatePresence mode="wait">
        {selectedPoint && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setSelectedPoint(null)} className="absolute inset-0 bg-navy/90 dark:bg-black/95 backdrop-blur-xl cursor-zoom-out" />

            <button onClick={() => handleNavigate('prev')} className="hidden md:flex absolute left-6 lg:left-12 z-[210] w-14 h-14 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-cyan-500 hover:border-cyan-500 transition-all hover:scale-110 shadow-lg backdrop-blur-md"><i className="ri-arrow-left-s-line text-4xl"></i></button>
            <button onClick={() => handleNavigate('next')} className="hidden md:flex absolute right-6 lg:right-12 z-[210] w-14 h-14 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-cyan-500 hover:border-cyan-500 transition-all hover:scale-110 shadow-lg backdrop-blur-md"><i className="ri-arrow-right-s-line text-4xl"></i></button>

            <motion.div
              key={selectedPoint.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) handleNavigate('prev');
                if (info.offset.x < -100) handleNavigate('next');
              }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`relative w-full bg-white dark:bg-dark rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.5)] z-10 flex flex-col border border-slate-200 dark:border-white/10 overflow-hidden touch-none
                ${selectedPoint.isMain ? 'max-w-3xl' : 'max-w-lg'}`}
            >
              <div className="p-6 md:p-8 flex justify-between items-center bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.3em] bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-400 mb-2">
                    <i className="ri-book-open-line"></i> Logbook
                  </span>
                  <h3 className="font-title text-2xl md:text-3xl text-navy dark:text-white leading-tight">{selectedPoint.name}</h3>
                </div>
                <button onClick={() => setSelectedPoint(null)} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <div className="px-6 md:px-8 py-6 relative">
                {selectedPoint.isMain ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[1.5rem] overflow-hidden aspect-video shadow-md border border-slate-200 dark:border-white/10 group">
                      <img src={selectedPoint.imgIsland} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-[1.20] saturate-[1.15]" alt="Island View" />
                    </div>
                    <div className="rounded-[1.5rem] overflow-hidden aspect-video shadow-md border border-slate-200 dark:border-white/10 group">
                      <img src={selectedPoint.imgSite} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-[1.20] saturate-[1.15]" alt="Underwater View" />
                    </div>
                  </div>
                ) : (
                  <div className="w-full rounded-[1.5rem] overflow-hidden aspect-[16/10] md:aspect-[21/9] shadow-md border border-slate-200 dark:border-white/10 group">
                    <img src={selectedPoint.imgIsland} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-[1.20] saturate-[1.15]" alt="Site Detail" />
                  </div>
                )}

                <div className="absolute bottom-10 right-10 flex md:hidden items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 pointer-events-none">
                  <i className="ri-expand-left-right-line text-white text-xs"></i>
                  <span className="text-[8px] font-bold text-white uppercase tracking-widest">Swipe</span>
                </div>
              </div>

              <div className="px-6 md:px-10 pb-10">
                <p className="font-body text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed text-center font-medium italic">
                  "{selectedPoint.desc}"
                </p>
              </div>

              <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5"><motion.div initial={{ width: 0 }} animate={{ width: `${((allPoints.findIndex(p => p.id === selectedPoint.id) + 1) / allPoints.length) * 100}%` }} className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" /></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}