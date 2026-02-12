import React from 'react';

export default function Gallery() {
  return (
    <section id="galeria" className="bg-slate-900 pt-20 pb-0 scroll-mt-20">

      {/* 1. SECCIÓN CRESSI POINT */}
      <div className="px-6 md:px-20 mb-32">
        <div className="max-w-7xl mx-auto bg-slate-800 rounded-[3rem] overflow-hidden border border-white/5 flex flex-col md:flex-row shadow-2xl">

          {/* Imágenes Tienda */}
          <div className="w-full md:w-1/2 grid grid-cols-2 p-4 gap-4 bg-slate-900/50">
            <div className="rounded-2xl overflow-hidden h-40 bg-cover bg-center border border-white/5" style={{ backgroundImage: 'url("/assets/nosotros/tienda4.webp")' }}></div>
            <div className="rounded-2xl overflow-hidden h-40 bg-cover bg-center border border-white/5" style={{ backgroundImage: 'url("/assets/nosotros/tienda2.webp")' }}></div>
            <div className="rounded-2xl overflow-hidden h-40 bg-cover bg-center border border-white/5" style={{ backgroundImage: 'url("/assets/nosotros/tienda3.webp")' }}></div>
            <div className="rounded-2xl overflow-hidden h-40 bg-cover bg-center border border-white/5" style={{ backgroundImage: 'url("/assets/nosotros/tienda1.webp")' }}></div>
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 font-body">Cressi Point</span>
            <h2 className="font-title text-3xl md:text-4xl text-white mb-6">Pasión y tecnología bajo el mar</h2>
            <p className="font-body text-slate-300 mb-8 leading-relaxed">
              Somos el único distribuidor autorizado Cressi en Loreto. Calidad y servicio para garantizar que tu equipo esté a la altura de tu aventura.
            </p>
            <a href="https://wa.me/526131182311" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors font-body group">
              Visítanos o contáctanos <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 2. COLLAGE FINAL */}
      <div className="w-full">
        <div className="text-center mb-12 px-6">
          <h2 className="font-title text-2xl md:text-4xl text-white">Atrévete a vivir la experiencia</h2>
        </div>

        {/* Grid Full Width */}
        <div className="grid grid-cols-2 md:grid-cols-4 h-[400px] md:h-[500px]">
          {['colash1.webp', 'colash2.webp', 'colash3.webp', 'colash4.webp', 'colash5.webp', 'colash6.webp', 'colash7.webp', 'colash8.webp'].map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden border-[0.5px] border-slate-900">
              <img
                src={`/assets/images/${img}`}
                alt="Galería Dolphin Dive"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay azul al hover */}
              <div className="absolute inset-0 bg-cyan-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}