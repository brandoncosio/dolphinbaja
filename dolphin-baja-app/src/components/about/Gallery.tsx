import React from 'react';

export default function Gallery() {
  return (
    <section className="bg-slate-900 pt-20 pb-0">
      
      {/* 1. SECCIÓN CRESSI POINT */}
      <div className="px-6 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto bg-slate-800 rounded-[3rem] overflow-hidden border border-white/5 flex flex-col md:flex-row">
          
          {/* Imágenes Tienda */}
          <div className="w-full md:w-1/2 grid grid-cols-2 p-4 gap-4 bg-slate-900/50">
            <div className="rounded-2xl overflow-hidden h-40 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/nosotros/tienda4.webp")' }}></div>
            <div className="rounded-2xl overflow-hidden h-40 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/nosotros/tienda2.webp")' }}></div>
            <div className="rounded-2xl overflow-hidden h-40 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/nosotros/tienda3.webp")' }}></div>
            <div className="rounded-2xl overflow-hidden h-40 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/nosotros/tienda1.webp")' }}></div>
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4">Cressi Point</span>
            <h2 className="font-title text-3xl md:text-4xl text-white mb-6">Pasión y tecnología bajo el mar</h2>
            <p className="font-body text-slate-300 mb-8 leading-relaxed">
              Somos el único distribuidor autorizado Cressi en Loreto. Calidad y servicio para garantizar que tu equipo esté a la altura de tu aventura.
            </p>
            <a href="https://wa.me/526131182311" className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors font-body">
              Visítanos o contáctanos <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 2. COLLAGE FINAL (Sin márgenes abajo para pegar con footer) */}
      <div className="w-full">
        <div className="text-center mb-12 px-6">
          <h2 className="font-title text-2xl md:text-4xl text-white">Atrévete a vivir la experiencia</h2>
        </div>
        
        {/* Grid Full Width */}
        <div className="grid grid-cols-2 md:grid-cols-4 h-[400px] md:h-[500px]">
          {['colash1.webp', 'colash2.webp', 'colash3.webp', 'colash4.webp', 'colash5.webp', 'colash6.webp', 'time3.webp', 'time4.webp'].map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden border-[0.5px] border-slate-900">
              <img 
                src={`/assets/nosotros/${img}`} 
                alt="Galería" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}