import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Datos de los servicios
const categories = [
  { id: 'fundives', label: 'Fun Dives', icon: 'ri-anchor-line' },
  { id: 'cursos', label: 'Cursos PADI', icon: 'ri-medal-line' },
  { id: 'snorkel', label: 'Snorkel & Tours', icon: 'ri-sun-line' }
];

const servicesData = {
  fundives: [
    {
      title: "Local Dive (Loreto Bay)",
      price: "$110 USD",
      duration: "4 Horas",
      desc: "Explora los arrecifes volcánicos del Parque Nacional. Vida marina abundante y formaciones rocosas impresionantes.",
      includes: ["2 Tanques", "Lastre y Cinturón", "Snacks y Bebidas", "Guía PADI"],
      image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Coronados Island",
      price: "$140 USD",
      duration: "5 Horas",
      desc: "Nuestra inmersión más popular. Juega con lobos marinos y explora barcos hundidos llenos de vida.",
      includes: ["2 Tanques", "Equipo Completo", "Lunch en playa", "Permisos de Parque"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Night Dive",
      price: "$95 USD",
      duration: "2.5 Horas",
      desc: "Descubre la bioluminiscencia y las criaturas que solo salen al caer el sol. Una experiencia mística.",
      includes: ["1 Tanque", "Linterna Primaria", "Luz de Tanque", "Guía Especializado"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
  ],
  cursos: [
    {
      title: "Discover Scuba (Bautizo)",
      price: "$160 USD",
      duration: "1 Día",
      desc: "¿Primera vez? Aprende lo básico en piscina y realiza tu primera inmersión en el mar bajo supervisión directa.",
      includes: ["Clase Teórica", "Práctica en Alberca", "1 Inmersión en Mar", "Equipo Completo"],
      image: "https://images.unsplash.com/photo-1590533357552-3286f76f78f6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Open Water Diver",
      price: "$480 USD",
      duration: "3-4 Días",
      desc: "Tu certificación de por vida. Aprende a bucear de forma autónoma hasta 18 metros de profundidad.",
      includes: ["Material eLearning", "5 Módulos de Alberca", "4 Inmersiones en Mar", "Certificación Digital"],
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=800"
    }
  ],
  snorkel: [
    {
      title: "Tour Isla Coronados",
      price: "$85 USD",
      duration: "4 Horas",
      desc: "Para toda la familia. Playas de arena blanca, aguas turquesas y avistamiento de delfines en el trayecto.",
      includes: ["Equipo de Snorkel", "Chaleco Salvavidas", "Lunch Box", "Sombra en Playa"],
      image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sunset Cruise",
      price: "$60 USD",
      duration: "3 Horas",
      desc: "Disfruta del atardecer en el Mar de Cortés con música suave y bebidas refrescantes.",
      includes: ["Bebidas (No alcohólicas)", "Botana", "Capitán Bilingüe", "Fotos"],
      image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800"
    }
  ]
};

export default function Servicios() {
  const [activeTab, setActiveTab] = useState('fundives');

  return (
    <div className="min-h-screen bg-dark pt-32 pb-20">
      
      {/* 1. HEADER DE SECCIÓN */}
      <div className="relative px-6 md:px-20 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="font-body text-xs font-bold uppercase tracking-[0.4em] text-cyan">
            Catálogo de Aventuras
          </span>
          <h1 className="mt-4 font-title text-4xl text-white md:text-6xl">
            Elige tu próxima <br/> <span className="text-yellow">Inmersión</span>
          </h1>
          <p className="mt-6 text-slate-400 font-body text-lg">
            Desde tu primera respiración bajo el agua hasta expediciones técnicas. 
            Todo nuestro equipo es Cressi® y se renueva cada temporada.
          </p>
        </motion.div>
      </div>

      {/* 2. PESTAÑAS (TABS) MEJORADAS - "Glassmorphism Dock"
         - sticky top-[70px]: Deja espacio para que el Navbar (aprox 60-80px) viva arriba.
         - z-40: Queda debajo del Navbar (z-50) pero encima del contenido (z-0).
         - backdrop-blur-xl: Efecto de vidrio esmerilado intenso.
      */}
      <div className="sticky top-[70px] z-40 py-4 mb-12 px-4">
        <div className="mx-auto max-w-lg rounded-full border border-white/10 bg-navy/80 p-1.5 backdrop-blur-xl shadow-2xl">
          <div className="flex justify-between">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-colors ${
                  activeTab === cat.id ? 'text-navy' : 'text-slate-400 hover:text-white'
                }`}
              >
                {/* Fondo Animado (Slider) */}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-cyan shadow-[0_0_15px_rgba(102,216,227,0.5)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {/* Contenido del botón (Ícono y Texto) */}
                <span className="relative z-10 flex items-center gap-2 font-title uppercase tracking-wider">
                  <i className={`${cat.icon} text-lg`}></i>
                  <span className="hidden md:inline">{cat.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. GRID DE SERVICIOS */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* @ts-ignore */}
            {servicesData[activeTab].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-navy rounded-[2rem] overflow-hidden border border-white/5 hover:border-cyan/30 transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Imagen */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-navy/90 backdrop-blur-md text-yellow font-title px-4 py-2 rounded-xl text-sm border border-yellow/20 shadow-lg">
                    {item.price}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-title text-2xl text-white group-hover:text-cyan transition-colors">{item.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-white/5 pb-4">
                    <i className="ri-time-line text-cyan"></i> {item.duration}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  {/* Lista de Inclusiones */}
                  <div className="mb-8">
                    <p className="text-[10px] text-slate-500 mb-3 font-bold uppercase tracking-widest">Tu experiencia incluye:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.includes.map((inc, i) => (
                        <span key={i} className="text-[11px] bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5">
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-cyan/10 to-transparent border border-cyan/20 text-cyan font-title rounded-2xl hover:bg-cyan hover:text-navy transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(102,216,227,0.3)]">
                    Reservar ahora <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. SECCIÓN DE HORARIOS (SCHEDULE) */}
      <div className="mt-32 max-w-5xl mx-auto px-6">
        <div className="bg-navy rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-[100px] -z-0"></div>

          <div className="relative z-10 text-center">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Planifica tu día</span>
            <h3 className="font-title text-3xl md:text-4xl text-white mb-12 mt-4">⏰ Horarios de Salida</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-dark/40 p-8 rounded-3xl border border-white/5 hover:border-cyan/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mb-4 text-cyan text-xl"><i className="ri-sun-foggy-line"></i></div>
                <p className="text-cyan font-title text-lg mb-1">Mañana</p>
                <p className="text-4xl text-white font-title mb-2">8:00 AM</p>
                <p className="text-xs text-slate-400 leading-relaxed">Presentarse 7:30 AM para check-in y prueba de equipo.</p>
              </div>
              
              <div className="bg-dark/40 p-8 rounded-3xl border border-white/5 hover:border-yellow/30 transition-colors">
                 <div className="w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center mb-4 text-yellow text-xl"><i className="ri-sun-line"></i></div>
                <p className="text-yellow font-title text-lg mb-1">Tarde</p>
                <p className="text-4xl text-white font-title mb-2">1:00 PM</p>
                <p className="text-xs text-slate-400 leading-relaxed">Ideal para cursos, check-out dives y snorkel relajado.</p>
              </div>

              <div className="bg-dark/40 p-8 rounded-3xl border border-white/5 hover:border-purple-400/30 transition-colors">
                 <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 text-xl"><i className="ri-moon-clear-line"></i></div>
                <p className="text-purple-400 font-title text-lg mb-1">Nocturno</p>
                <p className="text-4xl text-white font-title mb-2">6:30 PM</p>
                <p className="text-xs text-slate-400 leading-relaxed">El horario varía ligeramente según la puesta de sol.</p>
              </div>
            </div>

            <div className="mt-12 p-4 bg-yellow/5 border border-yellow/10 rounded-2xl inline-flex items-center gap-3">
              <i className="ri-information-line text-yellow text-xl"></i>
              <p className="text-slate-300 text-sm font-medium text-left">
                Todos los tours requieren reservación previa de al menos 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}