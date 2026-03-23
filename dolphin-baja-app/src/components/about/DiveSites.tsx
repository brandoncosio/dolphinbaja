import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// 🗺️ IMÁGENES ESPECÍFICAS (ESTRELLAS)
import islaImg from '/assets/images/isla.webp';
import buceoImg from '/assets/images/buceo.webp';
import carmenIslaImg from '/assets/images/carmen.webp';
import carmenBuceoImg from '/assets/images/carmensur.webp';
import coronadoIslaImg from '/assets/images/fuera.webp';
import coronadoBuceoImg from '/assets/images/fondo.webp';

// 📸 IMPORTACIÓN COMPLETA DESDE TUS SCREENSHOTS
import alebrije from '/assets/images/alebrije.webp';
import bubblem from '/assets/images/bubblem.webp';
import caballitos from '/assets/images/caballitos de mar.webp';
import cert1 from '/assets/images/cert.webp';
import cert2 from '/assets/images/cert2.webp';
import cert3 from '/assets/images/cert3.webp';
import cert4 from '/assets/images/cert4.webp';
import padi from '/assets/images/certificacionpadi.jpeg';
import colash1 from '/assets/images/colash1.webp';
import colash2 from '/assets/images/colash2.webp';
import colash3 from '/assets/images/colash3.webp';
import colash4 from '/assets/images/colash4.webp';
import colash5 from '/assets/images/colash5.webp';
import colash6 from '/assets/images/colash6.webp';
import colash7 from '/assets/images/colash7.webp';
import colorF from '/assets/images/colash8.webp';
import cor1 from '/assets/images/ColorF.webp';
import cor2 from '/assets/images/DolphinDive1.webp';
import experiencias from '/assets/images/experiencias.webp';
import nocturno from '/assets/images/DolphinDive2.webp';
import recorrido from '/assets/images/focahome.webp';
import slide1 from '/assets/images/FunDive1.webp';
import slide2 from '/assets/images/Gallery1.webp';
import slide3 from '/assets/images/Gallery2.webp';

const mapImg = '/assets/images/diving_map.webp';

export default function DiveSites() {
  const { t, lang } = useLanguage();
  const content = t.diveSites; 
  const [selectedPoint, setSelectedPoint] = useState<any | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Pool extendido con 26 imágenes para evitar repeticiones en los 30 puntos
  const imagePool = [
    alebrije, bubblem, buceoImg, caballitos, cert1, cert2, cert3, cert4, 
    padi, colash1, colash2, colash3, colash4, colash5, colash6, colash7, 
    colorF, cor1, cor2, experiencias, nocturno, recorrido, slide1, slide2, slide3
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -150;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const pageData = {
    es: {
      tag: "Explora Nuestros Sitios",
      title: "El Acuario del Mundo",
      p1: "Un santuario marino protegido por la UNESCO que abarca 206,000 hectáreas de océano prístino, hogar de 5 islas y más de 40 sitios de buceo para todos los niveles de experiencia.",
      p2: "Explora un mundo de formaciones volcánicas espectaculares y una rica biodiversidad marina.",
      sightingsTitle: "Vida Marina que te espera:",
      sightings1: "Delfines • mantas mobula • peces voladores • ballenas (por temporada).",
      sightings2: "Corales • Anémonas • Tortugas • Tiburones • Pecio C-54 • Lobos marinos • Vida macro.",
      nightDiveText: "* Buceos nocturnos disponibles para buzos avanzados:",
      nightDiveBtn: "Ver Info",
      tempTitle: "Temperaturas del Agua",
      temps: ["Mayo–Junio: 22–26°C", "Julio–Nov: 24–29°C", "Nov–Abril: 18–24°C"],
      bookBtn: "Reservar Expedición"
    },
    en: {
      tag: "Explore Our Sites",
      title: "The World's Aquarium",
      p1: "A UNESCO protected marine sanctuary spanning 206,000 hectares of pristine ocean, home to 5 islands and over 40 dive sites.",
      p2: "Explore a world of dramatic volcanic formations and rich marine biodiversity.",
      sightingsTitle: "Marine Life Awaiting You:",
      sightings1: "On the way to the dive sites, we can see dolphins • mobula rays • flying fish • whales (seasonal).",
      sightings2: "During the dives we can see a great diversity of marine life: Corals • Anemones • Turtles • Reef sharks • Wreck C-54 • Sea lions.",
      nightDiveText: "* Night dives available for advanced divers:",
      nightDiveBtn: "See Info",
      tempTitle: "Water Temperatures",
      temps: ["May–June: 22–26°C", "July–Nov: 24–29°C", "Nov–April: 18–24°C"],
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
    if (selectedPoint) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPoint]);

  // 📍 BASE DE DATOS DE 30 PUNTOS
  const allPoints = [
    { id: 8, name: "Punta Los Patos", top: "5.5%", left: "32.5%", isMain: false },
    { id: 1, name: "Las Lagrimas", top: "2.8%", left: "44.5%", isMain: true },
    { id: 2, name: "Las Tijeretas", top: "3.5%", left: "47.5%", isMain: false },
    { id: 3, name: "Las Lajas", top: "5.5%", left: "48.5%", isMain: false },
    { id: 4, name: "La Lobera", top: "8.5%", left: "49.5%", isMain: false },
    { id: 5, name: "Piedras Blancas", top: "10.5%", left: "48%", isMain: false },
    { id: 6, name: "El Repollo", top: "12.5%", left: "48.5%", isMain: false },
    { id: 7, name: "Candelaria", top: "15.5%", left: "50.5%", isMain: false },
    { id: 9, name: "Punta Lobos", top: "15.5%", left: "59.8%", isMain: true },
    { id: 10, name: "El Sombrerito", top: "17.8%", left: "67.8%", isMain: false },
    { id: 11, name: "Islote de la Vaca", top: "18.5%", left: "70.8%", isMain: false },
    { id: 16, name: "El Murcielago", top: "23.5%", left: "54.8%", isMain: false },
    { id: 17, name: "La Pared", top: "27.5%", left: "57.5%", isMain: false },
    { id: 12, name: "Punta Tintorera", top: "43.5%", left: "49.5%", isMain: false },
    { id: 13, name: "La Cholla", top: "42.5%", left: "52.5%", isMain: false },
    { id: 14, name: "Punta Balandra", top: "47.5%", left: "52.5%", isMain: false },
    { id: 15, name: "Los Picachos", top: "49.5%", left: "50.5%", isMain: false },
    { id: 26, name: "C-54 Wreck", top: "39.5%", left: "34.8%", isMain: false },
    { id: 27, name: "Punta Coyote", top: "41.5%", left: "35.8%", isMain: false },
    { id: 28, name: "Los Anegados", top: "51.5%", left: "37.5%", isMain: false },
    { id: 29, name: "Los Nidos", top: "61.0%", left: "40.5%", isMain: false },
    { id: 30, name: "Punta Colorada", top: "75.5%", left: "45.0%", isMain: false },
    { id: 18, name: "Faro Sur", top: "55.5%", left: "39.2%", isMain: false },
    { id: 19, name: "Faro Norte", top: "55.8%", left: "41.5%", isMain: false },
    { id: 20, name: "El Bulldog", top: "57.5%", left: "43.5%", isMain: false },
    { id: 21, name: "Piedra Partida", top: "59.2%", left: "45.8%", isMain: true },
    { id: 22, name: "El Submarino", top: "61.5%", left: "43.2%", isMain: false },
    { id: 23, name: "El Camaron", top: "64.2%", left: "44.8%", isMain: false },
    { id: 24, name: "Los Candeleros", top: "66.2%", left: "46.5%", isMain: false },
    { id: 25, name: "Piedra Bola", top: "68.5%", left: "48.8%", isMain: false },
    { id: 40, name: "La Reynita", top: "59.5%", left: "69.5%", isMain: false }
  ].map(p => {
    let imgIsland, imgSite;

    // Estrellas (Fotos Fijas)
    if (p.id === 1) { imgIsland = coronadoIslaImg; imgSite = coronadoBuceoImg; }
    else if (p.id === 9) { imgIsland = carmenIslaImg; imgSite = carmenBuceoImg; }
    else if (p.id === 21) { imgIsland = islaImg; imgSite = buceoImg; }
    else {
      // Rotación con pool de 26 imágenes
      imgIsland = imagePool[p.id % imagePool.length];
      imgSite = imagePool[(p.id + 7) % imagePool.length];
    }

    return {
      ...p,
      desc: content.extraDescriptions?.[p.id - 1] || "Sitio espectacular para descubrir Loreto.",
      imgIsland, imgSite
    };
  });

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (!selectedPoint) return;
    const currentIndex = allPoints.findIndex(p => p.id === selectedPoint.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= allPoints.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = allPoints.length - 1;
    setSelectedPoint(allPoints[nextIndex]);
  };

  return (
    <section id="divesites" className="relative py-24 px-6 md:px-12 lg:px-20 z-10 max-w-[1400px] mx-auto scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* COLUMNA IZQUIERDA */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white text-cyan-600 border-slate-200 dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 w-max mb-6 shadow-sm">
            <i className="ri-map-pin-line text-lg"></i> {localText.tag}
          </span>
          <h2 className="font-title text-4xl sm:text-5xl md:text-6xl text-navy dark:text-white leading-tight mb-6">{localText.title}</h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mb-8"></div>
          <div className="space-y-4 font-body text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6">
            <p>{localText.p1}</p>
            <p>{localText.p2}</p>
          </div>
          <div className="mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
            <h4 className="font-title text-lg text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <i className="ri-camera-lens-fill text-xl"></i> {localText.sightingsTitle}
            </h4>
            <div className="space-y-3 font-body text-sm text-slate-600 dark:text-slate-300">
              <p><strong className="text-navy dark:text-white">{lang === 'es' ? 'Superficie:' : 'Surface:'}</strong> {localText.sightings1}</p>
              <p><strong className="text-navy dark:text-white">{lang === 'es' ? 'Buceo:' : 'Dive:'}</strong> {localText.sightings2}</p>
              <div className="pt-2 mt-2 border-t border-slate-200 dark:border-white/10">
                <span className="text-slate-500 dark:text-slate-400 italic">{localText.nightDiveText}</span>
                <button onClick={() => scrollToSection('night-dive')} className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[9px] font-bold uppercase tracking-tighter hover:bg-cyan-200 transition-colors">
                  {localText.nightDiveBtn} <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
            </div>
          </div>
          <a href="mailto:ventas@dolphindivebaja.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-title text-sm md:text-base tracking-widest uppercase transition-all active:scale-95 shadow-lg shadow-cyan-500/30 border border-cyan-500">
            {localText.bookBtn} <i className="ri-calendar-check-line text-xl"></i>
          </a>
        </motion.div>

        {/* COLUMNA DERECHA: MAPA */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-7 relative mt-10 lg:mt-0">
          <div className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-dark p-1">
            <div className="relative rounded-[2.2rem] md:rounded-[2.8rem] overflow-hidden bg-white dark:bg-dark group">
              <img src={mapImg} alt="Mapa de Buceo" className="w-full h-auto object-contain mx-auto" />
              {allPoints.map((point) => (
                <div key={point.id} className="absolute -translate-x-1/2 -translate-y-1/2 z-20" style={{ top: point.top, left: point.left }}>
                  <div className={`absolute inset-0 rounded-full animate-ping opacity-60 ${point.isMain ? 'bg-yellow-500' : 'bg-cyan-400'}`}></div>
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedPoint(point); }} className={`relative rounded-full text-white shadow-xl hover:scale-125 transition-all duration-300 flex items-center justify-center cursor-pointer z-30 ${point.isMain ? 'bg-yellow-500 w-6 h-6 md:w-10 md:h-10 border-2 border-white' : 'bg-cyan-500 w-4 h-4 md:w-7 md:h-7 border border-white'}`}>
                    {point.isMain ? <i className="ri-star-fill text-[10px] md:text-lg pointer-events-none"></i> : <i className="ri-pushpin-fill text-[8px] md:text-xs pointer-events-none"></i>}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* MODAL DETALLES */}
      <AnimatePresence mode="wait">
        {selectedPoint && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPoint(null)} className="absolute inset-0 bg-navy/90 dark:bg-black/95 backdrop-blur-xl cursor-zoom-out" />
            <button onClick={(e) => { e.stopPropagation(); handleNavigate('prev'); }} className="hidden md:flex absolute left-6 lg:left-12 z-[220] w-14 h-14 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-cyan-500 transition-all hover:scale-110 shadow-lg backdrop-blur-md cursor-pointer"><i className="ri-arrow-left-s-line text-4xl pointer-events-none"></i></button>
            <button onClick={(e) => { e.stopPropagation(); handleNavigate('next'); }} className="hidden md:flex absolute right-6 lg:right-12 z-[220] w-14 h-14 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-cyan-500 transition-all hover:scale-110 shadow-lg backdrop-blur-md cursor-pointer"><i className="ri-arrow-right-s-line text-4xl pointer-events-none"></i></button>
            <motion.div key={selectedPoint.id} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.4} onDragEnd={(_, info) => { if (info.offset.x > 70) handleNavigate('prev'); if (info.offset.x < -70) handleNavigate('next'); }} initial={{ opacity: 0, scale: 0.9, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.9, x: -50 }} transition={{ duration: 0.3 }} className={`relative w-full bg-white dark:bg-dark rounded-[2.5rem] shadow-2xl z-[210] flex flex-col border border-slate-200 dark:border-white/10 overflow-hidden touch-none ${selectedPoint.isMain ? 'max-w-3xl' : 'max-w-lg'}`}>
              <div className="p-6 md:p-8 flex justify-between items-center bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 shrink-0">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.3em] bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-400 mb-2">
                    <i className="ri-anchor-line"></i> Site #{selectedPoint.id}
                  </span>
                  <h3 className="font-title text-2xl md:text-3xl text-navy dark:text-white leading-tight">{selectedPoint.name}</h3>
                </div>
                <button onClick={() => setSelectedPoint(null)} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-red-500 transition-colors flex items-center justify-center shrink-0 cursor-pointer"><i className="ri-close-line text-2xl"></i></button>
              </div>
              <div className="px-6 md:px-8 py-6 relative shrink-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden flex flex-col items-center gap-2 pointer-events-none opacity-40">
                  <i className="ri-arrow-left-right-line text-4xl text-white"></i>
                  <span className="text-[10px] text-white font-bold uppercase tracking-widest">Swipe</span>
                </div>
                {selectedPoint.isMain ? (
                  <div className="grid grid-cols-2 gap-4">
                    <img src={selectedPoint.imgIsland} className="rounded-2xl aspect-video object-cover shadow-sm w-full h-auto" alt="Island" />
                    <img src={selectedPoint.imgSite} className="rounded-2xl aspect-video object-cover shadow-sm w-full h-auto" alt="Dive" />
                  </div>
                ) : (
                  <img src={selectedPoint.imgIsland} className="w-full h-auto rounded-2xl aspect-video object-cover shadow-sm" alt="Detail" />
                )}
              </div>
              <div className="px-6 md:px-10 pb-10 grow overflow-y-auto">
                <p className="font-body text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed text-center font-medium italic">"{selectedPoint.desc}"</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}