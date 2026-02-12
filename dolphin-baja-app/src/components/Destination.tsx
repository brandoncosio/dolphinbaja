import React from 'react';

export default function Destination() {
  return (

    <section id="ubicacion" className="bg-slate-900 py-24 px-6 relative overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto text-center relative z-10">

        <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500 mb-4 font-body">
          Destino
        </p>

        <h2 className="font-title text-2xl md:text-4xl text-white mb-6">
          #Loreto_donde_el_lujo_es_la_naturaleza
        </h2>

        <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg font-body">
          Loreto es un paraíso natural dentro del Parque Nacional Bahía de Loreto: islas, arrecifes y biodiversidad incomparable.
        </p>

        {/* Mapa Embedido */}
        <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative bg-slate-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.223793633656!2d-111.3458666849811!3d26.01237998352697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b5e60b29792671%3A0x6272506373b876e4!2sDolphin%20Dive%20Baja!5e0!3m2!1ses-419!2smx!4v1683228499252!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            // Filtro para que el mapa no brille tanto en modo oscuro
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) hue-rotate(180deg) contrast(85%)' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Ubicación Dolphin Dive Baja"
          ></iframe>

          {/* Tarjeta flotante sobre el mapa */}
          <div className="hidden md:block absolute bottom-6 right-6 w-80 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-left shadow-xl">
            <h4 className="font-title text-white text-lg mb-2">Visítanos</h4>
            <p className="text-sm text-slate-300 mb-4 font-body">Estamos ubicados en el corazón de Loreto, listos para planear tu aventura.</p>
            <a
              href="https://goo.gl/maps/tu-link-real"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-sm font-bold flex items-center gap-2 hover:underline font-body"
            >
              Ver en Google Maps <i className="ri-external-link-line"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}