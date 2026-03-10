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
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
    // 🎯 Dispersión optimizada para evitar empalmes en móviles
    // Aumentamos el multiplicador del seno para que se muevan más a los lados (horizontal)
    // Agregamos un pequeño offset al 'top' para que no sea una progresión lineal aburrida
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
    <section className="relative py-24 px-6 md:px-20 z-10 max-w-7xl mx-auto">
      
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-600 dark:text-cyan-400 mb-4 block font-body">{content.tag}</span>
        <h2 className="font-title text-4xl md:text-6xl text-navy dark:text-white drop-shadow-sm">{content.title}</h2>
      </div>

      {/* MAPA */}
      <div className="relative w-full max-w-4xl mx-auto rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-dark mb-20">
        <img src={mapImg} alt="Mapa" className="w-full h-auto object-contain mx-auto" />
        {allPoints.map((point) => (
          <button
            key={point.id}
            onClick={() => setSelectedPoint(point)}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 text-white shadow-xl border-[2.5px] md:border-[3.5px] border-white dark:border-dark hover:scale-125 transition-all flex items-center justify-center z-10 group/pin 
              ${point.isMain 
                ? 'w-7 h-7 md:w-14 md:h-14 shadow-red-500/40' 
                : 'w-5 h-5 md:w-9 md:h-9 shadow-black/20'}`}
            style={{ top: point.top, left: point.left }}
          >
            {point.isMain ? <i className="ri-star-fill text-[9px] md:text-lg"></i> : <i className="ri-pushpin-fill text-[8px] md:text-xs"></i>}
          </button>
        ))}
      </div>

      {/* MODAL EXPEDITION */}
      <AnimatePresence mode="wait">
        {selectedPoint && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPoint(null)} className="absolute inset-0 bg-navy/95 dark:bg-dark/98 backdrop-blur-md cursor-zoom-out" />

            <button onClick={() => handleNavigate('prev')} className="hidden md:block absolute left-8 z-[210] text-white/20 hover:text-cyan-400 transition-all hover:scale-110"><i className="ri-arrow-left-s-line text-9xl"></i></button>
            <button onClick={() => handleNavigate('next')} className="hidden md:block absolute right-8 z-[210] text-white/20 hover:text-cyan-400 transition-all hover:scale-110"><i className="ri-arrow-right-s-line text-9xl"></i></button>

            <motion.div 
              key={selectedPoint.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) handleNavigate('prev');
                if (info.offset.x < -100) handleNavigate('next');
              }}
              initial={{ opacity: 0, scale: 0.95, x: 20 }} 
              animate={{ opacity: 1, scale: 1, x: 0, y: isMobile ? 0 : 35 }} 
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              className={`relative w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.5)] z-10 flex flex-col border border-white/10 overflow-hidden touch-none
                ${selectedPoint.isMain ? 'max-w-3xl' : 'max-w-lg'}`}
            >
              <div className="p-6 md:p-8 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-500">Logbook</span>
                  <h3 className="font-title text-xl md:text-3xl text-navy dark:text-white leading-tight">{selectedPoint.name}</h3>
                </div>
                <button onClick={() => setSelectedPoint(null)} className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"><i className="ri-close-line text-xl"></i></button>
              </div>

              <div className="px-6 md:px-8 relative">
                {selectedPoint.isMain ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden aspect-video shadow-lg border border-white/5"><img src={selectedPoint.imgIsland} className="w-full h-full object-cover" alt="View" /></div>
                    <div className="rounded-2xl overflow-hidden aspect-video shadow-lg border border-white/5"><img src={selectedPoint.imgSite} className="w-full h-full object-cover" alt="View" /></div>
                  </div>
                ) : (
                  <div className="w-full rounded-[1.5rem] overflow-hidden aspect-[16/10] md:aspect-[21/9] shadow-lg border border-white/5">
                    <img src={selectedPoint.imgIsland} className="w-full h-full object-cover" alt="Detail" />
                  </div>
                )}

                <div className="absolute bottom-3 right-8 flex md:hidden items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 pointer-events-none opacity-60">
                   <i className="ri-expand-left-right-line text-white text-[10px]"></i>
                   <span className="text-[7px] font-bold text-white uppercase tracking-widest">Swipe</span>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <p className="font-body text-slate-700 dark:text-slate-300 text-sm md:text-lg leading-relaxed text-center italic font-light">
                    "{selectedPoint.desc}"
                </p>
              </div>

              <div className="w-full h-1 bg-slate-100 dark:bg-white/5"><motion.div initial={{ width: 0 }} animate={{ width: `${((allPoints.findIndex(p => p.id === selectedPoint.id) + 1) / allPoints.length) * 100}%` }} className="h-full bg-cyan-500" /></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}