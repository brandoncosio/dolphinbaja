import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Importamos la nueva imagen
import viajeImg from '/assets/images/Viaje.webp';

export default function VisitorGuide() {
  const { t } = useLanguage();
  const content = t.contact.visitorGuide;

  // Estilo base para las tarjetas de cristal
  const glassCardClass = `
    p-8 rounded-[2rem] border transition-all duration-500 shadow-lg relative overflow-hidden group
    bg-white/80 border-slate-200 hover:border-cyan-400/40
    dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none dark:hover:border-white/20
  `;

  return (
    <section id="guia" className="relative py-24 px-6 md:px-20 z-10 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Encabezado de la Sección */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-600 dark:text-cyan-400 mb-4 block font-body drop-shadow-md"
        >
          {content.tag}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-title text-3xl md:text-5xl text-navy dark:text-white drop-shadow-sm leading-tight"
        >
          {content.title}
        </motion.h2>
      </div>

      {/* Grid de Información (Estilo Bento) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Tarjeta: Ubicación */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={glassCardClass}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-400/20 group-hover:scale-110 transition-transform">
                <i className="ri-map-pin-user-fill text-2xl"></i>
              </div>
              <h3 className="font-title text-2xl text-navy dark:text-white">{content.location.title}</h3>
            </div>
            <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {content.location.text}
            </p>
          </motion.div>

          {/* Tarjeta: Carretera */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={glassCardClass}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-400/20 group-hover:scale-110 transition-transform">
                <i className="ri-car-fill text-2xl"></i>
              </div>
              <h3 className="font-title text-2xl text-navy dark:text-white">{content.road.title}</h3>
            </div>
            <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {content.road.text}
            </p>
          </motion.div>

          {/* 👇 NUEVA TARJETA: Imagen de Viaje */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg relative group flex-grow min-h-[250px] md:min-h-[300px]"
          >
            <div className="absolute inset-0 bg-dark/10 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            <img 
              src={viajeImg} 
              alt="Viaje a Loreto" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
          </motion.div>

        </div>

        {/* COLUMNA DERECHA */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Tarjeta: Vuelos */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${glassCardClass} border-cyan-200 dark:border-cyan-400/20`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-400/20 group-hover:scale-110 transition-transform">
                <i className="ri-plane-fill text-2xl"></i>
              </div>
              <h3 className="font-title text-2xl text-navy dark:text-white">{content.flights.title}</h3>
            </div>
            <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6">
              {content.flights.text}
            </p>
            {/* Lista de vuelos */}
            <ul className="flex flex-col gap-3">
              {content.flights.routes.map((route: any, idx: number) => (
                <li key={idx} className="flex justify-between items-center bg-slate-50 dark:bg-white/5 px-4 py-3 rounded-xl border border-slate-100 dark:border-white/10">
                  <span className="font-body font-bold text-sm md:text-base text-navy dark:text-slate-100">{route.route}</span>
                  <span className="font-title text-xs text-yellow-600 dark:text-yellow-400 uppercase tracking-widest bg-yellow-100 dark:bg-yellow-400/10 px-2 py-1 rounded-md">{route.airline}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tarjeta: Hoteles */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={glassCardClass}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-400/20 group-hover:scale-110 transition-transform">
                <i className="ri-hotel-fill text-2xl"></i>
              </div>
              <h3 className="font-title text-2xl text-navy dark:text-white">{content.hotels.title}</h3>
            </div>
            <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-4">
              {content.hotels.text}
            </p>
            <p className="font-body text-sm text-cyan-700 dark:text-cyan-300 italic mb-6">
              {content.hotels.list}
            </p>
            {/* Destacado de Paquetes */}
            <div className="bg-yellow-50 dark:bg-yellow-400/10 border border-yellow-300 dark:border-yellow-400/30 p-4 rounded-xl flex items-start gap-3">
              <i className="ri-star-smile-fill text-yellow-500 text-xl mt-0.5"></i>
              <p className="font-body font-bold text-sm text-yellow-800 dark:text-yellow-400">
                {content.hotels.packages}
              </p>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}