import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// 🗺️ IMAGEN DEL MAPA BASE
import mapImg from '/assets/images/isladanzante.webp'; 

// 📍 IMÁGENES ISLA DANZANTE (Punto 1)
import islaImg from '/assets/images/isla.webp'; 
import buceoImg from '/assets/images/buceo.webp';  

// 📍 IMÁGENES ISLA DEL CARMEN (Punto 2)
import carmenIslaImg from '/assets/images/carmen.webp'; 
import carmenBuceoImg from '/assets/images/carmensur.webp';  

// 📍 IMÁGENES ISLA CORONADO (Punto 3)
import coronadoIslaImg from '/assets/images/fuera.webp'; 
import coronadoBuceoImg from '/assets/images/fondo.webp';  

export default function DiveSites() {
  const { t } = useLanguage();
  const content = t.diveSites;

  // Estado para controlar el punto seleccionado
  const [selectedPoint, setSelectedPoint] = useState<any | null>(null);

  // 📍 CONFIGURACIÓN DE LOS 3 PINES EN EL MAPA
  // Ajusta 'top' y 'left' para mover el pin rojo sobre tu imagen del mapa.
  const mapPoints = [
    { 
      id: 1, 
      name: content.interactiveMap.points[0].name, 
      desc: content.interactiveMap.points[0].desc,
      top: "75%", left: "45%", // <-- Posición Danzante (Sur)
      imgIsland: islaImg, 
      imgSite: buceoImg, 
    },
    { 
      id: 2, 
      name: content.interactiveMap.points[1].name, 
      desc: content.interactiveMap.points[1].desc,
      top: "45%", left: "55%", // <-- Posición Carmen (Centro)
      imgIsland: carmenIslaImg, 
      imgSite: carmenBuceoImg, 
    },
    { 
      id: 3, 
      name: content.interactiveMap.points[2].name, 
      desc: content.interactiveMap.points[2].desc,
      top: "30%", left: "50%", // <-- Posición Coronado (Norte)
      imgIsland: coronadoIslaImg, 
      imgSite: coronadoBuceoImg, 
    }
  ];

  const glassCardClass = `
    p-8 rounded-[2rem] border transition-all duration-500 shadow-lg relative overflow-hidden group
    bg-white/80 border-slate-200 hover:border-cyan-400/40
    dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none dark:hover:border-white/20
  `;

  return (
    <section className="relative py-24 px-6 md:px-20 z-10 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-600 dark:text-cyan-400 mb-4 block font-body drop-shadow-md">
          {content.tag}
        </span>
        <h2 className="font-title text-3xl md:text-5xl text-navy dark:text-white drop-shadow-sm leading-tight mb-6">
          {content.title}
        </h2>
        <p className="max-w-3xl mx-auto font-body text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {content.desc}
        </p>
      </div>

      {/* MAPA INTERACTIVO ÚNICO */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <h3 className="font-title text-2xl text-navy dark:text-white flex items-center justify-center gap-3">
            <i className="ri-map-pin-line text-cyan-500 text-3xl animate-bounce"></i> 
            {content.mapInfo.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-body italic">
            {content.mapInfo.instruction}
          </p>
        </div>

        {/* MAPA PRINCIPAL CENTRADO */}
        <div className="relative w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-cyan-50 dark:bg-cyan-900/5 group">
          
          {/* Imagen ajustada para mantener su proporción natural */}
          <img 
            src={mapImg} 
            alt="Mapa Parque Nacional" 
            className="w-full h-auto object-contain mx-auto" 
          />

          {/* RENDERIZADO DE LOS 3 PINES */}
          {mapPoints.map((point) => (
            <button
              key={point.id}
              onClick={() => setSelectedPoint(point)}
              className="absolute w-6 h-6 md:w-8 md:h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.9)] border-[3px] border-white dark:border-dark hover:scale-125 transition-transform flex items-center justify-center z-10 hover:z-20 group/pin"
              style={{ top: point.top, left: point.left }}
            >
              <i className="ri-pushpin-fill text-[10px] md:text-xs pointer-events-none"></i>
              {/* Tooltip Hover */}
              <span className="absolute opacity-0 group-hover/pin:opacity-100 pointer-events-none transition-opacity bg-navy dark:bg-dark text-white text-[10px] font-bold whitespace-nowrap px-3 py-1.5 rounded-full bottom-full mb-3 left-1/2 -translate-x-1/2 font-body shadow-md">
                {point.name}
              </span>
            </button>
          ))}

          {/* Etiqueta Global del mapa */}
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-dark/80 backdrop-blur-md px-4 py-1.5 rounded-xl text-navy dark:text-white font-title text-xs tracking-widest uppercase border border-slate-200 dark:border-white/10 shadow-sm">
            {content.interactiveMap.mapLabel}
          </div>
        </div>
      </div>

      {/* GRID DE INFORMACIÓN (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* EL PAISAJE */}
        <motion.div className={glassCardClass}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/20">
              <i className="ri-landscape-line text-2xl"></i>
            </div>
            <h3 className="font-title text-2xl text-navy dark:text-white">{content.landscape.title}</h3>
          </div>
          <div className="space-y-4">
            <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              <span className="font-bold text-navy dark:text-cyan-400 block mb-1">Superficie:</span>
              {content.landscape.surface}
            </p>
            <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              <span className="font-bold text-navy dark:text-cyan-400 block mb-1">Subacuático:</span>
              {content.landscape.underwater}
            </p>
          </div>
        </motion.div>

        {/* TEMPERATURAS */}
        <motion.div className={`${glassCardClass} border-yellow-200 dark:border-yellow-400/20`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-400/20">
              <i className="ri-temp-hot-line text-2xl"></i>
            </div>
            <h3 className="font-title text-2xl text-navy dark:text-white">{content.temperatures.title}</h3>
          </div>
          <ul className="flex flex-col gap-3">
            {content.temperatures.seasons.map((season: any, idx: number) => (
              <li key={idx} className="flex flex-col bg-slate-50 dark:bg-white/5 px-4 py-3 rounded-xl border border-slate-100 dark:border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-body font-bold text-navy dark:text-slate-100 text-sm md:text-base">{season.time}</span>
                  <span className="font-title text-xs text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-400/10 px-2 py-1 rounded-md">{season.temp}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-body">{season.suit}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SERVICIOS EXTRAS & EMBARCACIONES */}
        <motion.div className={glassCardClass}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-400/20">
              <i className="ri-tools-line text-2xl"></i>
            </div>
            <h3 className="font-title text-2xl text-navy dark:text-white">{content.extras.title}</h3>
          </div>
          <ul className="space-y-3 mb-8">
            {content.extras.list.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300 font-body">
                <i className="ri-check-line text-cyan-500 mt-0.5"></i> {item}
              </li>
            ))}
          </ul>

          <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2">
            <i className="ri-ship-line text-cyan-500"></i> {content.boats.title}
          </h4>
          <p className="text-sm font-body text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{content.boats.desc}</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-1.5 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-bold border border-cyan-200 dark:border-cyan-700/30 shadow-sm tracking-wider">LA TIA</span>
            <span className="px-4 py-1.5 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-bold border border-cyan-200 dark:border-cyan-700/30 shadow-sm tracking-wider">LA CONCHA</span>
            <span className="px-4 py-1.5 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-bold border border-cyan-200 dark:border-cyan-700/30 shadow-sm tracking-wider">LA MAFI</span>
          </div>
        </motion.div>

        {/* SOCIAL */}
        <motion.div className={glassCardClass}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-400/20">
              <i className="ri-heart-3-line text-2xl"></i>
            </div>
            <h3 className="font-title text-2xl text-navy dark:text-white">{content.social.title}</h3>
          </div>
          <p className="text-sm md:text-base font-body text-slate-600 dark:text-slate-300 mb-6 italic leading-relaxed font-medium">
            "{content.social.desc}"
          </p>
          <div className="space-y-5">
            {content.social.items.map((item: any, idx: number) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center shrink-0 mt-1 border border-purple-100 dark:border-purple-800/30">
                  <i className="ri-hand-heart-line text-purple-500 text-sm"></i>
                </div>
                <div>
                  <h5 className="font-title text-navy dark:text-white text-base mb-1">{item.name}</h5>
                  <p className="font-body text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* POPUP / MODAL DEL MAPA - SCROLL INTERNO INTACTO */}
      <AnimatePresence>
        {selectedPoint && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-6">
            
            {/* Fondo oscuro para cerrar */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedPoint(null)}
              className="absolute inset-0 bg-navy/80 dark:bg-dark/90 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Contenedor del Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[2rem] shadow-2xl z-10 flex flex-col max-h-[85vh] overflow-hidden"
            >
              
              {/* Header Fijo con Botón Cerrar */}
              <div className="relative p-5 md:p-6 border-b border-slate-100 dark:border-white/5 shrink-0 bg-white dark:bg-slate-900 z-20 flex justify-between items-center">
                <h3 className="font-title text-xl md:text-2xl text-navy dark:text-white drop-shadow-sm flex-1 text-center pl-8">
                  {selectedPoint.name}
                </h3>
                <button 
                  onClick={() => setSelectedPoint(null)}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-white hover:bg-red-500 hover:text-white hover:rotate-90 transition-all flex items-center justify-center z-20 shadow-sm shrink-0"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              {/* Contenido Scrolleable */}
              <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar relative z-10 bg-slate-50/50 dark:bg-transparent">
                
                {/* Fotos en proporción 16:9 (aspect-video) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-6">
                  {/* Foto Isla */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10 relative group aspect-video shadow-md bg-slate-100 dark:bg-white/5">
                    <img src={selectedPoint.imgIsland} alt="La Isla" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                    <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-dark/90 backdrop-blur-md px-3 py-1 rounded-lg text-navy dark:text-white font-title text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                      <i className="ri-image-line text-cyan-500"></i> {content.interactiveMap.exteriorView}
                    </div>
                  </div>
                  {/* Foto Buceo */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10 relative group aspect-video shadow-md bg-slate-100 dark:bg-white/5">
                    <img src={selectedPoint.imgSite} alt="Bajo el agua" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                    <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-dark/90 backdrop-blur-md px-3 py-1 rounded-lg text-navy dark:text-white font-title text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                      <i className="ri-bubble-chart-line text-cyan-500"></i> {content.interactiveMap.underwaterView}
                    </div>
                  </div>
                </div>

                {/* Caja de Texto */}
                <div className="bg-white dark:bg-white/5 p-5 md:p-6 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm relative">
                  <i className="ri-double-quotes-l text-3xl text-cyan-500/20 absolute top-2 left-2 font-serif"></i>
                  <p className="font-body text-slate-600 dark:text-slate-300 font-medium text-sm leading-relaxed relative z-10 px-4 text-center">
                    {selectedPoint.desc}
                  </p>
                  <i className="ri-double-quotes-r text-3xl text-cyan-500/20 absolute bottom-2 right-2 font-serif"></i>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}