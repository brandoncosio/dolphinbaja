import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// 🗺️ IMÁGENES
import mapImg from '/assets/images/isladanzante.webp';
import islaImg from '/assets/images/isla.webp';
import buceoImg from '/assets/images/buceo.webp';
import carmenIslaImg from '/assets/images/carmen.webp';
import carmenBuceoImg from '/assets/images/carmensur.webp';
import coronadoIslaImg from '/assets/images/fuera.webp';
import coronadoBuceoImg from '/assets/images/fondo.webp';

export default function DiveSites() {
  const { t, lang } = useLanguage();
  const content = t.diveSites;
  const [selectedPoint, setSelectedPoint] = useState<any | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Ajustado para coincidir con lg
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

  // 📍 BASE DE DATOS
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

        {/* ====================================================================
            COLUMNA IZQUIERDA: EDITORIAL & CONTEXTO
            ==================================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white text-cyan-600 border-slate-200 dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 w-max mb-6">
            <i className="ri-map-pin-line text-lg"></i> {content.tag}
          </span>

          <h2 className="font-title text-4xl sm:text-5xl md:text-6xl text-navy dark:text-white leading-tight drop-shadow-sm mb-6">
            {content.title}
          </h2>

          <div className="w-20 h-1 bg-cyan-500 rounded-full mb-8"></div>

          <p className="font-body text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-10">
            {lang === 'es'
              ? 'El Parque Nacional Bahía de Loreto, declarado Patrimonio de la Humanidad, esconde un ecosistema submarino vibrante. Navega por nuestro mapa interactivo y descubre los secretos que te esperan bajo la superficie.'
              : 'The Loreto Bay National Park, a World Heritage site, hides a vibrant underwater ecosystem. Navigate through our interactive map and discover the secrets waiting for you beneath the surface.'}
          </p>

          {/* Estadísticas / Badges Rápidos para dar más vida */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0"><i className="ri-anchor-line text-xl"></i></div>
              <div>
                <p className="font-title text-xl text-navy dark:text-white leading-none">+15</p>
                <p className="font-body text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Sitios</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl border bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0"><i className="ri-fish-line text-xl"></i></div>
              <div>
                <p className="font-title text-xl text-navy dark:text-white leading-none">Único</p>
                <p className="font-body text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Ecosistema</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====================================================================
            COLUMNA DERECHA: MAPA INTERACTIVO (Radar)
            ==================================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          {/* Contenedor del Mapa con Efecto Glassmorphism y "Radar" */}
          <div className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-2 border-white/50 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-slate-100 dark:bg-dark p-2">

            {/* Animación de escaneo de radar de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-cyan-400/20 opacity-50 animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}></div>

            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-[#0a0f1c]">
              <img src={mapImg} alt="Mapa del Parque Marino" className="w-full h-auto object-contain mx-auto opacity-90 dark:opacity-75" />

              {/* Filtro Oscuro Mágico */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-navy/30 dark:to-dark/50 pointer-events-none mix-blend-overlay"></div>

              {/* PINES INTERACTIVOS */}
              {allPoints.map((point) => (
                <div key={point.id} className="absolute -translate-x-1/2 -translate-y-1/2 z-10" style={{ top: point.top, left: point.left }}>
                  {/* Efecto de Onda Continua */}
                  <div className={`absolute inset-0 rounded-full animate-ping opacity-60 ${point.isMain ? 'bg-red-500' : 'bg-cyan-400'}`}></div>

                  <button
                    onClick={() => setSelectedPoint(point)}
                    className={`relative rounded-full text-white shadow-xl hover:scale-125 transition-transform duration-300 flex items-center justify-center group/pin
                      ${point.isMain
                        ? 'bg-red-600 w-8 h-8 md:w-12 md:h-12 border-[3px] border-white dark:border-dark shadow-red-500/50'
                        : 'bg-cyan-500 w-5 h-5 md:w-8 md:h-8 border-2 border-white dark:border-dark shadow-cyan-500/50'}`}
                  >
                    {point.isMain ? <i className="ri-star-fill text-xs md:text-xl"></i> : <i className="ri-pushpin-fill text-[10px] md:text-sm"></i>}

                    {/* Tooltip Hover (Opcional, visible en Desktop) */}
                    <span className="absolute left-[120%] top-1/2 -translate-y-1/2 px-2 py-1 bg-navy dark:bg-white text-white dark:text-navy text-[9px] font-bold uppercase tracking-widest rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                      {point.name}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ====================================================================
          🎬 MODAL EXPEDITION (LOGBOOK) - SIN CAMBIOS EN LÓGICA, SOLO ESTILOS
          ==================================================================== */}
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
                    <div className="rounded-[1.5rem] overflow-hidden aspect-video shadow-md border border-slate-200 dark:border-white/10 group"><img src={selectedPoint.imgIsland} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Island View" /></div>
                    <div className="rounded-[1.5rem] overflow-hidden aspect-video shadow-md border border-slate-200 dark:border-white/10 group"><img src={selectedPoint.imgSite} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Underwater View" /></div>
                  </div>
                ) : (
                  <div className="w-full rounded-[1.5rem] overflow-hidden aspect-[16/10] md:aspect-[21/9] shadow-md border border-slate-200 dark:border-white/10 group">
                    <img src={selectedPoint.imgIsland} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Site Detail" />
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