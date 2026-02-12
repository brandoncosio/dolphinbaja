import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 👇 IMPORTACIÓN DE IMÁGENES (Usando tus rutas confirmadas)
import funDivesImg from '/assets/images/colash1.webp';
import coronadosImg from '/assets/images/colash11.webp';
import nightDiveImg from '/assets/images/colash2.webp';
import coursesImg from '/assets/images/certificacionpadi.jpeg';
import snorkelImg from '/assets/images/realsonrkell.jpeg';
import experienciasImg from '/assets/images/experiencias.webp';
// Usaremos algunas del slider celular para variar en los nuevos servicios
import refreshImg from '/assets/images/slider5-celular.webp'; 
import bubbleImg from '/assets/images/slider1-celular.webp';

const categories = [
  { id: 'fundives', label: 'Fun Dives', icon: 'ri-anchor-line' },
  { id: 'cursos', label: 'Cursos & Programas', icon: 'ri-medal-line' },
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
      image: funDivesImg
    },
    {
      title: "Coronados Island",
      price: "$140 USD",
      duration: "5 Horas",
      desc: "Nuestra inmersión más popular. Juega con lobos marinos y explora barcos hundidos llenos de vida.",
      includes: ["2 Tanques", "Equipo Completo", "Lunch en playa", "Permisos"],
      image: coronadosImg
    },
    {
      title: "Night Dive",
      price: "$95 USD",
      duration: "2.5 Horas",
      desc: "Descubre la bioluminiscencia y las criaturas que solo salen al caer el sol. Una experiencia mística.",
      includes: ["1 Tanque", "Linterna Primaria", "Luz de Tanque", "Solo Avanzados"],
      image: nightDiveImg
    }
  ],
  cursos: [
    {
      title: "Discover Scuba (Bautizo)",
      price: "$160 USD",
      duration: "1 Día",
      desc: "¿Primera vez? Aprende lo básico en piscina y realiza tu primera inmersión en el mar bajo supervisión directa.",
      includes: ["Clase Teórica", "Práctica en Alberca", "1 Inmersión en Mar", "Equipo Completo"],
      image: coursesImg
    },
    {
      title: "Open Water Diver",
      price: "$480 USD",
      duration: "3-4 Días",
      desc: "Tu certificación de por vida. Aprende a bucear de forma autónoma hasta 18 metros de profundidad.",
      includes: ["eLearning", "5 Módulos Alberca", "4 Inmersiones Mar", "Certificación"],
      image: coursesImg
    },
    {
      title: "Refresher (Refresh)",
      price: "Consultar",
      duration: "1 Día",
      desc: "¿Más de 1 año sin bucear? Retoma confianza y técnica en un área controlada antes de explorar.",
      includes: ["1 Tanque Habilidades", "1 Tanque Exploración", "Equipo NO incluido"],
      image: refreshImg
    },
    {
      title: "Bubble Makers",
      price: "Consultar",
      duration: "Medio día",
      desc: "Introducción segura y divertida para niños de 8 a 11 años. Máximo 2 metros de profundidad.",
      includes: ["1 Tanque", "Equipo Incluido", "Instructor PADI", "Lunch"],
      image: bubbleImg
    }
  ],
  snorkel: [
    {
      title: "Tour Isla Coronados",
      price: "$85 USD",
      duration: "4 Horas",
      desc: "Para toda la familia. Playas de arena blanca, aguas turquesas y avistamiento de delfines en el trayecto.",
      includes: ["Equipo de Snorkel", "Chaleco Salvavidas", "Lunch Box", "Sombra en Playa"],
      image: snorkelImg
    },
    {
      title: "Sunset Cruise",
      price: "$60 USD",
      duration: "3 Horas",
      desc: "Disfruta del atardecer en el Mar de Cortés con música suave y bebidas refrescantes.",
      includes: ["Bebidas (No alcohólicas)", "Botana", "Capitán Bilingüe", "Fotos"],
      image: experienciasImg
    }
  ]
};

// Datos de horarios y reglas (Adaptados de tu HTML anterior)
const scheduleData = {
  fundives: {
    morning: { time: "08:00 – 12:30", note: "Cita 07:30 AM", season: "Todo el año" },
    afternoon: { time: "13:00 – 17:30", note: "Cita 12:30 PM", season: "Mayo – Octubre" },
    night: { time: "18:00 – 20:00", note: "Cita 17:30 PM", season: "Julio – Octubre" },
    rules: ["Equipo de buceo NO incluido en tarifa Fun Dives.", "Mínimo 2 personas para salir.", "Buzos solos: tarifa privada."]
  },
  cursos: {
    morning: { time: "08:00 – 13:00", note: "Teoría + Alberca", season: "Todo el año" },
    afternoon: { time: "13:00 – 17:00", note: "Inmersiones", season: "Todo el año" },
    night: null,
    rules: ["Incluye todo el material didáctico.", "Certificación digital PADI incluida.", "Requiere llenado de formulario médico."]
  },
  snorkel: {
    morning: { time: "08:00 – 12:30", note: "Cita 07:30 AM", season: "Todo el año" },
    afternoon: { time: "13:00 – 17:30", note: "Cita 12:30 PM", season: "Mayo – Octubre" },
    night: null,
    rules: ["Equipo de snorkel SÍ incluido.", "Mínimo 3 personas.", "Chaleco salvavidas obligatorio en el agua."]
  }
};

export default function Servicios() {
  const [activeTab, setActiveTab] = useState('fundives');

  // Helper para obtener los datos actuales sin errores de TS
  const currentSchedule = scheduleData[activeTab as keyof typeof scheduleData];

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      
      {/* HEADER */}
      <div className="relative px-6 md:px-20 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="font-body text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
            Catálogo de Aventuras
          </span>
          <h1 className="mt-4 font-title text-4xl text-white md:text-6xl">
            Elige tu próxima <br/> <span className="text-yellow-400">Inmersión</span>
          </h1>
          <p className="mt-6 text-slate-400 font-body text-lg">
            Desde tu primera respiración bajo el agua hasta expediciones técnicas. 
            Todo nuestro equipo es Cressi® y se renueva cada temporada.
          </p>
        </motion.div>
      </div>

      {/* TABS */}
      <div className="sticky top-[90px] z-40 py-4 mb-12 px-4">
        <div className="mx-auto max-w-lg rounded-full border border-white/10 bg-slate-900/80 p-1.5 backdrop-blur-xl shadow-2xl">
          <div className="flex justify-between">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-colors ${
                  activeTab === cat.id ? 'text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2 font-title uppercase tracking-wider">
                  <i className={`${cat.icon} text-lg`}></i>
                  <span className="hidden md:inline">{cat.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRID DE SERVICIOS */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData[activeTab as keyof typeof servicesData].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-slate-800 rounded-[2rem] overflow-hidden border border-white/5 hover:border-cyan-400/30 transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Imagen */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-yellow-400 font-title px-4 py-2 rounded-xl text-sm border border-yellow-400/20 shadow-lg">
                    {item.price}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-title text-2xl text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-white/5 pb-4 font-body">
                    <i className="ri-time-line text-cyan-400"></i> {item.duration}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-body">
                    {item.desc}
                  </p>

                  <div className="mb-8">
                    <p className="text-[10px] text-slate-500 mb-3 font-bold uppercase tracking-widest font-body">Incluye:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.includes.map((inc, i) => (
                        <span key={i} className="text-[11px] bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5 font-body">
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/526131182311"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="w-full py-4 bg-gradient-to-r from-cyan-400/10 to-transparent border border-cyan-400/20 text-cyan-400 font-title rounded-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Reservar ahora <i className="ri-whatsapp-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SECCIÓN DE DETALLES OPERATIVOS (Adaptado de tu HTML anterior) */}
      <div className="mt-24 max-w-5xl mx-auto px-6">
        <motion.div 
          layout
          className="bg-slate-800 rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden shadow-2xl"
        >
          {/* Decoración */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px] -z-0"></div>

          <div className="relative z-10">
            <h3 className="font-title text-2xl text-white mb-8 flex items-center gap-3">
              <i className="ri-calendar-check-line text-yellow-400"></i> 
              Horarios y Detalles Operativos
            </h3>
            
            {/* Grid de Horarios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Mañana */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-cyan-400 font-title text-lg">Mañana</p>
                  <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-slate-300 font-body">{currentSchedule.morning.season}</span>
                </div>
                <p className="text-3xl text-white font-title mb-1">{currentSchedule.morning.time}</p>
                <p className="text-xs text-slate-400 font-body">{currentSchedule.morning.note}</p>
              </div>
              
              {/* Tarde */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-yellow-400 font-title text-lg">Tarde</p>
                  <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-slate-300 font-body">{currentSchedule.afternoon.season}</span>
                </div>
                <p className="text-3xl text-white font-title mb-1">{currentSchedule.afternoon.time}</p>
                <p className="text-xs text-slate-400 font-body">{currentSchedule.afternoon.note}</p>
              </div>

              {/* Noche (Condicional) */}
              {currentSchedule.night ? (
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-purple-400 font-title text-lg">Nocturno</p>
                    <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-slate-300 font-body">{currentSchedule.night.season}</span>
                  </div>
                  <p className="text-3xl text-white font-title mb-1">{currentSchedule.night.time}</p>
                  <p className="text-xs text-slate-400 font-body">{currentSchedule.night.note}</p>
                </div>
              ) : (
                <div className="bg-slate-900/30 p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center opacity-50">
                  <i className="ri-moon-clear-line text-2xl text-slate-500 mb-2"></i>
                  <p className="text-sm text-slate-500 font-body">No disponible en esta modalidad</p>
                </div>
              )}
            </div>

            {/* Reglas e Importante */}
            <div className="bg-yellow-400/5 border border-yellow-400/10 rounded-2xl p-6">
              <h4 className="font-title text-yellow-400 text-sm mb-4 uppercase tracking-widest">Información Importante</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentSchedule.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300 font-body">
                    <i className="ri-alert-line text-yellow-400 mt-0.5"></i>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>

    </div>
  );
}