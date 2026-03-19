import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useLanguage } from '../context/LanguageContext';
import SplashScreen from '../components/SplashScreen';

// ========================================================================
// 🖼️ IMPORTACIÓN DE IMÁGENES
// ========================================================================
import funDivesImg from '/assets/images/colash1.webp';
import nocturno from '/assets/contentD/img/nocturno.webp';
import coursesImg from '/assets/images/certificacionpadi.jpeg';
import isla from '/assets/contentD/img/recorridoisla.webp';
import experienciasImg from '/assets/images/experiencias.webp';
import bubbleImg from '/assets/images/bubblem.webp';
import leones from '/assets/contentD/img/leonesm.webp';
import carmen from '/assets/contentD/img/IslaCarmen.webp';
import danzantes from '/assets/contentD/img/IslaDanzantes.webp';

import colorFImg from '/assets/images/ColorF.webp';
import certImg from '/assets/images/cert.webp';
import cert2Img from '/assets/images/cert2.webp';
import cert3Img from '/assets/images/cert3.webp';
import cert4Img from '/assets/images/cert4.webp';

// Logos de Autoridad PADI y CRESSI
import padiLogo from '/assets/contentD/img/PADI.png';
import cressiLogo from '/assets/contentD/img/cressi.png';

const imageDict: Record<string, string> = {
  funDivesImg, nocturno, coursesImg,
  isla, experienciasImg, bubbleImg, leones,
  carmen, danzantes,
  colorFImg, certImg, cert2Img, cert3Img, cert4Img
};

// ========================================================================
// 🛠️ INTERFACES DE TYPESCRIPT
// ========================================================================
type TabKey = 'fundives' | 'cursos' | 'snorkel';

interface ServiceItem {
  title: string;
  duration: string;
  desc: string;
  includes: string[];
  imgKey: string;
  extraContent?: React.ReactNode;
}

interface ModalData {
  title: string;
  desc: string;
  duration?: string;
  includes: string[];
  images: string[];
  extraContent?: React.ReactNode;
}

export default function Servicios() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('paquetes');

  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (modalData) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalData]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -150;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash && !isLoading) {
      scrollToSection(location.hash.replace('#', ''));
    } else if (!location.hash && !isLoading) {
      window.scrollTo(0, 0);
    }
  }, [location.hash, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['paquetes', 'fundives', 'cursos', 'snorkel'];
      let current = 'paquetes';
      for (const sec of sections) {
        const element = document.getElementById(sec);
        if (element && window.scrollY >= element.offsetTop - 200) current = sec;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateGallery = (mainImg: string, type: 'dive' | 'snorkel' | 'course' | 'package') => {
    const fallbackGalleries = {
      dive: [mainImg, bubbleImg, leones, nocturno],
      snorkel: [mainImg, experienciasImg, isla, carmen],
      course: [mainImg, certImg, cert2Img, colorFImg],
      package: [mainImg, funDivesImg, danzantes, isla]
    };
    return Array.from(new Set(fallbackGalleries[type])).slice(0, 4);
  };

  // ========================================================================
  // 📚 DATOS LOCALES CON COMPONENTES JSX PARA TEXTOS DETALLADOS
  // ========================================================================
  const localData = {
    es: {
      hero: {
        tag: "Catálogo de Servicios",
        title: "Sumérgete en el",
        highlight: "Acuario del Mundo",
        desc: "Explora el Parque Nacional Bahía de Loreto. Como el único centro exclusivo PADI 5-Star y Cressi Dive Center en la región, tu seguridad y disfrute son nuestra máxima prioridad."
      },
      paquetes: {
        title: "Paquetes de Buceo",
        subtitle: "Experiencias All-Inclusive",
        items: [
          {
            id: 'deep-blue', name: "Baja Ocean", target: "Para buzos certificados", duration: "5 Días", color: "cyan",
            desc: "Disfruta 5 días espectaculares de buceo en el parque nacional bahía de loreto. Te alojarás en uno de los mejores hoteles de loreto. NOTA: No incluye equipo de renta, ni propinas para el staff.",
            features: ["De 12 hasta 70+ años", "5 días buceando (10 tanques)", "6 noches de hotel con desayuno", "Transfer: aeropuerto - hotel - aeropuerto", "Impuestos incluídos", "Vigencia: Julio a Octubre"],
            note: "Mínimo 2 buzos"
          },
          {
            id: 'blue-escape', name: "Blue Escape", target: "Para buzos certificados", duration: "3 Días", color: "ocean",
            desc: "La escapada perfecta de fin de semana. Tres días intensos de inmersiones en las majestuosas aguas de Loreto, combinados con una estancia cómoda y relajante.",
            features: ["De 12 hasta 70+ años", "3 días buceando (6 tanques)", "4 noches de hotel con desayuno", "Transfer aeropuerto - hotel"],
            note: "Mínimo 2 buzos"
          },
          {
            id: 'beyond-surface', name: "Beyond the Surface", target: "Obtén tu PADI Open Water", duration: "4-5 Días", color: "yellow",
            desc: "Conviértete en un buzo certificado con este paquete integral. Incluye toda tu teoría, inmersiones de práctica y certificación oficial PADI.",
            features: ["De 12 hasta 70+ años", "Certificación Open Water", "Repaso de teoría 1, 2, 3 y 4", "+2 días extra de buceo (4 tanques)", "Computadora Cressi"],
            note: "Mínimo 2 buzos"
          }
        ]
      },
      fundives: [
        {
          title: "Parque Nacional Bahía de Loreto", duration: "Medio Día", imgKey: "funDivesImg",
          desc: "En el camino hacia los sitios de buceo podemos ver delfines, mantas mobula, peces voladores y ballenas (por temporada). Durante las inmersiones veremos corales, tortugas marinas, anguilas, tiburones de arrecife, el Pecio C-54, lobos marinos y mucha vida macro.",
          includes: ["2 tanques (3er opcional extra)", "Plomos y tanques", "Lunch, fruta, agua", "Edad: 12 - 70+ años"]
        },
        {
          title: "Isla Coronado", duration: "Medio Día", imgKey: "isla",
          desc: "Impresiona con sus formaciones de roca volcánica de más de 125,000 años de antigüedad. Es hogar de aves marinas (garzas, pelícanos, águilas pescadoras) y una amigable colonia de lobos marinos (excepto mediados de julio a mediados de agosto).",
          includes: ["Paseo guiado", "Plomos y tanques", "Lunch, fruta, agua", "Edad: 12 - 70+ años"]
        },
        {
          title: "Night Dive (Buceo Nocturno)", duration: "18:00 - 21:00 hrs", imgKey: "nocturno",
          desc: "La actividad perfecta para ver el mar con otros ojos. Disponible solamente de julio a octubre. Solo para buzos avanzados.",
          includes: ["1 o 2 tanques (según horario)", "Luz en el tanque", "Lunch y agua", "Plomos y tanques"]
        }
      ],
      cursos: [
        {
          title: "Bubble Makers", duration: "2 - 3 hrs", imgKey: "bubbleImg",
          desc: "Es una actividad diseñada especialmente para niños. NO ES UNA CERTIFICACIÓN. Inmersión máxima en aguas controladas de 2 a 4 metros.",
          includes: ["Edad: 8 - 11 años", "1 Tanque", "Equipo completo incluido", "Mínimo 2 pax + 1 adulto responsable"]
        },
        {
          title: "Discover Scuba (Introducción al Buceo)", duration: "Medio Día", imgKey: "colorFImg",
          desc: "Vivirás por primera vez la experiencia del buceo, dirigida por un Dive Master capacitado. NO ES UNA CERTIFICACIÓN. Inmersión máxima de 12 mts / 36 ft. El primer tanque es de explicación y el segundo de exploración.",
          includes: ["Edad: 12 - 70+ años", "Corta clase teórica", "2 Tanques (Explicación y Exploración)", "Mínimo 2 pax"]
        },
        {
          title: "Open Water Diver", duration: "Máx 3 Días", imgKey: "coursesImg",
          desc: "Como el único PADI 5-Star y Cressi Dive Center en Loreto, haremos tu experiencia inolvidable. Repaso de teoría en salón de clases, seguido de ejercicios en aguas confinadas y aguas abiertas.",
          includes: ["Edad: 12 - 70+ años", "Renta de equipo, lastre y tanques", "Lunch y agua", "Brazaletes del parque marino"],
          extraContent: (
            <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <h4 className="font-title text-lg text-navy dark:text-white mb-3">Cómo funciona la certificación</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">1. Teoría (online – PADI eLearning):</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>Ve a store.padi.com y completa la teoría en línea.</li>
                    <li>Al registrarte, selecciona nuestro dive shop: <strong className="text-navy dark:text-white">Dolphin Dive Center #20390</strong>.</li>
                    <li>Una vez que te registres, recibiremos una notificación y nos prepararemos para guiarte en las sesiones prácticas en Loreto.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">2. Entrenamiento Práctico (en Loreto):</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>Día 1: Sesión en salón de clases (3 horas)</li>
                    <li>Día 2: Práctica en aguas confinadas + Inmersiones en Aguas Abiertas 1 & 2</li>
                    <li>Día 3: Inmersiones en Aguas Abiertas 3 & 4</li>
                  </ul>
                </div>
                <p className="text-sm italic text-slate-500 mt-2 border-t border-slate-200 dark:border-white/10 pt-3">
                  Proporcionamos todo el equipo de buceo, además de lunch, fruta, snacks y tarifas del parque marino todos los días.
                </p>
              </div>
            </div>
          )
        },
        {
          title: "Advanced Open Water", duration: "2 - 3 Días", imgKey: "certImg",
          desc: "¿Ya eres un buzo certificado? Es hora de expandir tus habilidades y explorar nuevas profundidades con el Curso PADI Advanced Open Water. ¡Experimenta nuevas aventuras, gana confianza y descubre el océano de una manera completamente nueva!",
          includes: ["Edad: 12 - 70+ años", "5 Inmersiones en total", "Lunch y agua", "Solo buzos certificados"],
          extraContent: (
            <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
              <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-compass-3-fill text-cyan-600"></i> Resumen del Curso</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">Para unirte, debes haber completado tu Certificación PADI Open Water. Recomendamos tener al menos 20 inmersiones registradas para sentirte más cómodo.</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Nuestro programa funciona de <strong className="text-cyan-600 dark:text-cyan-400">Mayo a Octubre</strong>, cuando el océano ofrece la mejor visibilidad y condiciones más tranquilas.</p>
              </div>
              <div className="pt-1">
                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-star-smile-fill text-yellow-500"></i> Qué Aprenderás</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Completarás cinco inmersiones de aventura diseñadas para mejorar tus habilidades de buceo.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-sm text-cyan-700 dark:text-cyan-400 mb-1">Inmersiones Obligatorias:</p>
                    <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>Buceo Profundo</li>
                      <li>Navegación Subacuática</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-cyan-700 dark:text-cyan-400 mb-1">Elige Tres Opciones:</p>
                    <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>Flotabilidad Avanzada</li>
                      <li>Buceo en Naufragio</li>
                      <li>Buceo a la Deriva</li>
                      <li>Buceo Nocturno</li>
                      <li>Dive Against Debris</li>
                      <li>Búsqueda y Recuperación</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Rescue Diver", duration: "3 - 4 Días", imgKey: "cert2Img",
          desc: "Desafiante y gratificante. Aprende a prevenir y manejar emergencias en el agua. Desarrolla tu confianza como buzo practicando escenarios de rescate reales.",
          includes: ["Edad: 12 - 70+ años", "Prácticas de rescate", "Equipo y tanques", "Lunch y agua"]
        }
      ],
      snorkel: [
        {
          title: "Tour a Isla del Carmen", duration: "Medio Día", imgKey: "carmen",
          desc: "La isla más grande del Parque. Sus impresionantes acantilados, una mezcla de arena fosilizada, roca volcánica y basalto, te dejarán maravillado; además de contar con cuevas que deslumbrarán tus sentidos.",
          includes: ["Edad: 12 - 70+ años", "Paseo en lancha y Guía", "Equipo de Snorkel", "Lunch y bebidas"]
        },
        {
          title: "Tour a Islas Danzantes", duration: "Medio Día", imgKey: "danzantes",
          desc: "Nombrada por las danzas ancestrales de los Guaycuras. Cuenta con impresionantes formaciones rocosas en forma de pináculo y una formación similar a una ventana con ángulos perfectos de 90°.",
          includes: ["Edad: 12 - 70+ años", "Paseo en lancha y Guía", "Equipo de Snorkel", "Lunch y bebidas"]
        }
      ]
    },
    en: {
      hero: {
        tag: "Services Catalog",
        title: "Dive into the",
        highlight: "Aquarium of the World",
        desc: "Explore the Loreto Bay National Park. As the only exclusive PADI 5-Star Dive Center & Cressi Dive Center in the region, your safety and enjoyment are our top priorities."
      },
      paquetes: {
        title: "Dive Packages",
        subtitle: "All-Inclusive Experiences",
        items: [
          {
            id: 'deep-blue', name: "Baja Ocean", target: "For certified divers", duration: "5 Days", color: "cyan",
            desc: "Enjoy 5 spectacular days of diving in the Loreto Bay National Park. Stay at one of Loreto's premier hotels. NOTE: Rental gear and staff gratuities are not included.",
            features: ["Ages 12 to 70+", "5 days of diving (10 tanks)", "6 hotel nights with breakfast", "Transfer: Airport - Hotel - Airport", "Taxes included", "Valid: July to October"],
            note: "Minimum 2 divers"
          },
          {
            id: 'blue-escape', name: "Blue Escape", target: "For certified divers", duration: "3 Days", color: "ocean",
            desc: "The perfect weekend getaway. Three intense days of diving in the majestic waters of Loreto, combined with a comfortable and relaxing stay.",
            features: ["Ages 12 to 70+", "3 days diving (6 tanks)", "4 nights hotel with breakfast", "Airport - hotel transfer"],
            note: "Minimum 2 divers"
          },
          {
            id: 'beyond-surface', name: "Beyond the Surface", target: "Get your PADI Open Water", duration: "4-5 Days", color: "yellow",
            desc: "Become a certified diver with this comprehensive package. Includes all your theory, practice dives, and official PADI certification.",
            features: ["Ages 12 to 70+", "Open Water Certification", "Theory review 1, 2, 3 & 4", "+2 extra days diving (4 tanks)", "Cressi Dive Computer"],
            note: "Minimum 2 divers"
          }
        ]
      },
      fundives: [
        {
          title: "Loreto Bay National Park", duration: "Half Day", imgKey: "funDivesImg",
          desc: "On the way to the dive sites, spot dolphins, mobula rays, flying fish, and seasonal whales. Underwater: hard and soft corals, anemones, turtles, reef sharks, the C-54 Wreck (9–24 m), sea lions, and macro life.",
          includes: ["2 tanks (3rd optional extra)", "Tanks and weights", "Lunch, fruit, water", "Ages: 12 - 70+"]
        },
        {
          title: "Coronado Island", duration: "Half Day", imgKey: "isla",
          desc: "Impresses with volcanic rock formations over 125,000 years old. Home to sea birds (herons, pelicans, ospreys) and a friendly sea lion colony (except mid-July to mid-August).",
          includes: ["Guided boat tour", "Tanks and weights", "Lunch, fruit, water", "Ages: 12 - 70+"]
        },
        {
          title: "Night Dive", duration: "18:00 - 21:00 hrs", imgKey: "nocturno",
          desc: "Discover the magic of the sea at night. Only available from July to October. Advanced divers only.",
          includes: ["1 or 2 tanks (by schedule)", "Tank light included", "Lunch and water", "Tanks and weights"]
        }
      ],
      cursos: [
        {
          title: "Bubble Makers", duration: "2 - 3 hrs", imgKey: "bubbleImg",
          desc: "Activity designed specially for kids. NOT A CERTIFICATION. Max depth in confined waters is 2 to 4 meters.",
          includes: ["Ages: 8 - 11 years", "1 Tank", "Full gear included", "Min 2 pax + 1 responsible adult"]
        },
        {
          title: "Discover Scuba (Intro Dive)", duration: "Half Day", imgKey: "colorFImg",
          desc: "Experience diving for the first time, guided by a trained Dive Master. NOT A CERTIFICATION. Max depth 12m / 36ft. First tank for explanation, second for exploration.",
          includes: ["Ages: 12 - 70+ years", "Short theory class", "2 Tanks (Explanation & Exploration)", "Min 2 pax"]
        },
        {
          title: "Open Water Diver", duration: "Max 3 Days", imgKey: "coursesImg",
          desc: "As the only PADI 5-Star & Cressi Dive Center in Loreto, we make your experience unforgettable. Classroom theory review, followed by confined and open water exercises.",
          includes: ["Ages: 12 - 70+ years", "Gear, weights, and tanks", "Lunch and water", "Marine park bracelets"],
          extraContent: (
            <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <h4 className="font-title text-lg text-navy dark:text-white mb-3">How the Certification Works</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">1. Theory (online – PADI eLearning):</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>Go to store.padi.com and complete the theory online.</li>
                    <li>When registering, select our dive shop: <strong className="text-navy dark:text-white">Dolphin Dive Center #20390</strong>.</li>
                    <li>Once you register, we’ll receive a notification and get ready to guide you through the practical sessions in Loreto with Dolphin Dive Baja.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">2. Practical Training (in Loreto):</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <li>Day 1: Classroom session (3 hours)</li>
                    <li>Day 2: Confined water practice + Open Water Dives 1 & 2</li>
                    <li>Day 3: Open Water Dives 3 & 4</li>
                  </ul>
                </div>
                <p className="text-sm italic text-slate-500 mt-2 border-t border-slate-200 dark:border-white/10 pt-3">
                  We provide all scuba equipment, plus lunch, fruit, snacks, and marine park fees every day.
                </p>
              </div>
            </div>
          )
        },
        {
          title: "Advanced Open Water", duration: "2 - 3 Days", imgKey: "certImg",
          desc: "Already a certified diver? It’s time to expand your skills and explore new depths with the PADI Advanced Open Water Course at Dolphin Dive Center. Experience new adventures, build confidence, and discover the ocean in a whole new way!",
          includes: ["Ages: 12 - 70+ years", "5 total dives", "Lunch and water", "Certified divers only"],
          extraContent: (
            <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
              <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-compass-3-fill text-cyan-600"></i> Course Overview</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">To join, you must have completed your PADI Open Water Certification. We recommend having at least 20 logged dives to help you feel more comfortable and get the most out of the course.</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Our program runs from <strong className="text-cyan-600 dark:text-cyan-400">May to October</strong>, when the ocean offers the best visibility and calm conditions.</p>
              </div>
              <div className="pt-1">
                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-star-smile-fill text-yellow-500"></i> What You’ll Learn</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">You’ll complete five adventure dives designed to enhance your diving skills and open new opportunities underwater.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-sm text-cyan-700 dark:text-cyan-400 mb-1">Mandatory Dives:</p>
                    <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>Deep Diving</li>
                      <li>Underwater Navigation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-cyan-700 dark:text-cyan-400 mb-1">Choose Three:</p>
                    <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>Peak Performance Buoyancy</li>
                      <li>Wreck Dive</li>
                      <li>Drift Dive</li>
                      <li>Night Dive</li>
                      <li>Dive Against Debris</li>
                      <li>Search & Recovery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Rescue Diver", duration: "3 - 4 Days", imgKey: "cert2Img",
          desc: "Challenging and rewarding. Learn to prevent and manage emergencies in the water. Build your confidence by practicing real rescue scenarios.",
          includes: ["Ages: 12 - 70+ years", "Rescue practices", "Gear and tanks", "Lunch and water"]
        }
      ],
      snorkel: [
        {
          title: "Isla del Carmen Tour", duration: "Half Day", imgKey: "carmen",
          desc: "The largest island in the park. Its impressive cliffs—a mix of fossilized sand, volcanic rock, and basalt—will leave you amazed, along with caves that will dazzle your senses.",
          includes: ["Ages: 12 - 70+ years", "Boat ride & Guide", "Snorkel Gear", "Lunch & drinks"]
        },
        {
          title: "Danzantes Island Tour", duration: "Half Day", imgKey: "danzantes",
          desc: "Named after ancestral Guaycura dances. Features impressive pinnacle-shaped rock formations and a window-like rock formation with perfect 90° angles.",
          includes: ["Ages: 12 - 70+ years", "Boat ride & Guide", "Snorkel Gear", "Lunch & drinks"]
        }
      ]
    }
  };

  const currentData = localData[lang === 'en' ? 'en' : 'es'];
  const categoriesList = [
    { id: 'paquetes', label: lang === 'es' ? 'Paquetes' : 'Packages', icon: 'ri-vip-crown-fill' },
    { id: 'fundives', label: 'Fun Dives', icon: 'ri-anchor-fill' },
    { id: 'cursos', label: lang === 'es' ? 'Cursos' : 'Courses', icon: 'ri-medal-fill' },
    { id: 'snorkel', label: 'Snorkel', icon: 'ri-sun-fill' }
  ];

  // ========================================================================
  // 🖥️ RENDER PRINCIPAL
  // ========================================================================
  return (
    <>
      <Helmet>
        <title>{lang === 'es' ? 'Catálogo de Servicios y Tours | Dolphin Dive' : 'Diving Services & Tours | Dolphin Dive'}</title>
        <meta name="description" content={currentData.hero.desc} />
      </Helmet>

      <div className="min-h-screen selection:bg-cyan-400 selection:text-dark bg-slate-50 dark:bg-dark transition-colors duration-500 pb-20">

        <AnimatePresence>
          {isLoading && <SplashScreen key="splash" />}
        </AnimatePresence>

        {/* ========================================================================
            🚀 NUEVO HERO DE SERVICIOS
            ======================================================================== */}
        {/* 👇 AUMENTAMOS EL PADDING BOTTOM PARA EVITAR CHOQUES CON EL BANNER */}
        <section className="relative w-full h-[100dvh] min-h-[650px] md:h-[80vh] md:min-h-[750px] overflow-hidden flex flex-col justify-center items-center pt-40 md:pt-48 pb-32">

          <div className="absolute inset-0 z-0">
            <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 15, ease: "linear" }} className="w-full h-full" style={{ willChange: "transform" }}>
              <img src={funDivesImg} alt="Dolphin Dive Baja" fetchPriority="high" loading="eager" decoding="async" className="w-full h-full object-cover object-[center_30%] md:object-center filter contrast-[1.15] saturate-[1.10]" />
            </motion.div>
            <div className="absolute inset-0 transition-colors duration-500 bg-navy/40 dark:bg-black/60" />
            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t transition-colors duration-500 z-10 from-slate-50 via-slate-50/50 to-transparent dark:from-dark dark:via-dark/80 dark:to-transparent" />
          </div>

          <div className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto pointer-events-none mt-10 md:mt-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-64 w-[90%] md:w-[600px] rounded-full blur-[100px] pointer-events-none transition-colors duration-500 bg-cyan-500/20 dark:bg-cyan-500/10" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
              <span className="inline-block font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 px-4 py-1.5 md:px-6 md:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-500 shadow-lg pointer-events-auto bg-white/90 border-white/60 text-cyan-700 dark:bg-black/60 dark:border-white/10 dark:text-cyan-400">
                {currentData.hero.tag}
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight pointer-events-auto transition-colors text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              {currentData.hero.title} <br className="hidden md:block" />
              <span className="text-yellow-400 drop-shadow-md">{currentData.hero.highlight}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="font-body text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed pointer-events-auto transition-colors text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {currentData.hero.desc}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 md:mt-14 flex flex-wrap justify-center gap-3 pointer-events-auto">
              {categoriesList.map((cat) => (
                <button key={cat.id} onClick={() => scrollToSection(cat.id)}
                  className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-title text-[11px] md:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border bg-white/90 text-navy border-white/50 hover:bg-cyan-50 hover:text-cyan-700 dark:bg-black/40 dark:text-slate-200 dark:border-white/20 dark:hover:text-cyan-400 dark:backdrop-blur-md"
                >
                  <i className={`${cat.icon} text-base md:text-lg`}></i> {cat.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========================================================================
            🌟 BANNER DE AUTORIDAD PADI & CRESSI (Rediseño Equilibrado)
            ======================================================================== */}
        <section className="relative z-20 max-w-6xl mx-auto px-5 md:px-12 pt-8 md:pt-12 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            {/* Texto de Autoridad */}
            <div className="text-center lg:text-left shrink-0">
              <p className="font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-2">
                Official Partners
              </p>
              <h3 className="font-title text-2xl md:text-3xl text-navy dark:text-white leading-tight">
                Dolphin Dive Baja<br className="hidden lg:block" /> Loreto
              </h3>
            </div>

            {/* Divisor */}
            <div className="hidden lg:block w-[1px] h-20 bg-slate-200 dark:bg-white/10 shrink-0"></div>

            {/* Contenedor de Logos (Cajas invisibles del mismo tamaño para equilibrarlos) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-12 w-full lg:w-auto">

              {/* Caja PADI */}
              <div className="flex items-center justify-center h-16 sm:h-20 w-48 sm:w-56">
                <img src={padiLogo} alt="PADI 5 Star Dive Center" className="max-h-full max-w-full object-contain drop-shadow-sm hover:scale-105 transition-transform" />
              </div>

              {/* Separador Móvil/Desktop */}
              <div className="hidden sm:block w-[1px] h-12 bg-slate-200 dark:bg-white/10 shrink-0"></div>
              <div className="sm:hidden w-32 h-[1px] bg-slate-200 dark:bg-white/10 shrink-0"></div>

              {/* Caja CRESSI */}
              <div className="flex items-center justify-center h-16 sm:h-20 w-48 sm:w-56">
                <img src={cressiLogo} alt="Cressi Dive Center" className="max-h-full max-w-full object-contain drop-shadow-sm hover:scale-105 transition-transform" />
              </div>

            </div>
          </motion.div>
        </section>

        {/* CATÁLOGO UNIFICADO */}
        <main className="relative z-10 max-w-7xl mx-auto px-5 md:px-12">

          {/* ======================= SECCIÓN PAQUETES ======================= */}
          <section id="paquetes" className="mb-20 md:mb-32 scroll-mt-28">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-title text-3xl md:text-5xl text-navy dark:text-white drop-shadow-sm mb-4">{currentData.paquetes.title}</h2>
              <p className="font-body font-bold tracking-widest uppercase text-xs md:text-sm text-cyan-600 dark:text-cyan-400">{currentData.paquetes.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentData.paquetes.items.map((pkg, idx) => {
                let badgeClass = "text-blue-600 border-blue-400 bg-blue-50 dark:bg-blue-400/10 dark:text-blue-400";
                if (pkg.color === 'yellow') badgeClass = "text-yellow-600 border-yellow-400 bg-yellow-50 dark:bg-yellow-400/10 dark:text-yellow-400";
                if (pkg.color === 'cyan') badgeClass = "text-cyan-700 border-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 dark:text-cyan-400";

                return (
                  <motion.article key={pkg.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group flex flex-col relative rounded-[2rem] p-8 md:p-10 overflow-hidden border transition-all duration-500 shadow-xl bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 hover:border-cyan-400/50"
                  >
                    <div className="mb-8">
                      <span className={`inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg border mb-5 ${badgeClass}`}>{pkg.target}</span>
                      <h3 className="font-title text-3xl md:text-4xl text-navy dark:text-white leading-tight">"{pkg.name}"</h3>
                    </div>
                    <ul className="flex-grow space-y-4 mb-10">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 font-body text-sm lg:text-base font-medium text-slate-600 dark:text-slate-300">
                          <i className={`ri-checkbox-circle-fill mt-0.5 text-lg ${pkg.color === 'yellow' ? 'text-yellow-500' : 'text-cyan-500'}`}></i>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Botones Paquetes */}
                    <div className="mt-auto flex flex-col gap-3">
                      <div className="flex items-center justify-center gap-2 mb-2 font-body text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-black/20 py-2.5 rounded-xl border border-slate-100 dark:border-white/5">
                        <i className="ri-group-fill"></i> {pkg.note}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => {
                            setModalData({
                              title: pkg.name, desc: pkg.desc, duration: pkg.duration, includes: pkg.features,
                              images: generateGallery(funDivesImg, 'package')
                            });
                            setCurrentImageIdx(0);
                          }}
                          className="w-full py-3.5 rounded-xl font-title text-[10px] md:text-xs tracking-widest uppercase transition-all active:scale-95 border border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-white/20 dark:text-slate-300 dark:hover:bg-white/10">
                          {lang === 'es' ? 'Detalles' : 'Details'}
                        </button>
                        <a href={`https://wa.me/526131182311?text=${encodeURIComponent(`Hola, me interesa el Paquete: ${pkg.name}`)}`} target="_blank" rel="noopener noreferrer"
                          className="w-full py-3.5 rounded-xl font-title text-[10px] md:text-xs tracking-widest uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 border shadow-md bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-navy dark:border-cyan-500">
                          {lang === 'es' ? 'Reservar' : 'Book'} <i className="ri-whatsapp-line text-base"></i>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* ======================= SECCIONES INDIVIDUALES (FUN DIVES, CURSOS, SNORKEL) ======================= */}
          {(['fundives', 'cursos', 'snorkel'] as TabKey[]).map((tabKey) => {
            const sectionTitle = categoriesList.find(c => c.id === tabKey)?.label;
            const servicesList = currentData[tabKey] as ServiceItem[];

            return (
              // 👇 PADDING TOP AUMENTADO PARA EVITAR CHOQUES ENTRE SECCIONES
              <section key={tabKey} id={tabKey} className="pt-20 md:pt-32 scroll-mt-24">
                <div className="text-center md:text-left mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
                  <h2 className="font-title text-4xl md:text-5xl text-navy dark:text-white">{sectionTitle}</h2>
                </div>

                <div className="flex flex-col gap-8 md:gap-12">
                  {servicesList.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    const itemImage = imageDict[item.imgKey] || funDivesImg;

                    let galleryType: 'dive' | 'snorkel' | 'course' = 'dive';
                    if (tabKey === 'cursos') galleryType = 'course';
                    if (tabKey === 'snorkel') galleryType = 'snorkel';

                    return (
                      <motion.article key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
                        className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl bg-white dark:bg-white/5 dark:border-white/10 transition-all hover:border-cyan-400/50 hover:shadow-2xl`}
                      >
                        {/* IMAGEN */}
                        <div className="w-full lg:w-5/12 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden shrink-0">
                          <img
                            src={itemImage}
                            alt={item.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 filter contrast-[1.15] saturate-[1.10]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent dark:from-dark/60 pointer-events-none" />
                          <div className="absolute top-5 right-5 backdrop-blur-xl bg-white/90 dark:bg-dark/80 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 shadow-lg flex items-center gap-2">
                            <i className="ri-time-line text-base"></i> {item.duration}
                          </div>
                        </div>

                        {/* CONTENIDO */}
                        <div className="w-full lg:w-7/12 p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center">
                          <h3 className="font-title text-3xl md:text-4xl mb-4 text-navy dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 leading-tight">
                            {item.title}
                          </h3>

                          {/* 👇 LINE-CLAMP RESTAURADO. El Extra Content ya no se renderiza aquí, solo en el Modal */}
                          <p className="text-sm md:text-base font-body font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-8 line-clamp-3 md:line-clamp-4">
                            {item.desc}
                          </p>

                          <div className="mb-10 hidden sm:block">
                            <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-slate-400 mb-4">
                              {lang === 'es' ? 'INCLUYE' : 'INCLUDES'}
                            </p>
                            <div className="flex flex-wrap gap-2.5">
                              {(item.includes || []).map((inc, i) => (
                                <span key={i} className="text-[11px] md:text-xs px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 dark:bg-white/5 dark:text-slate-200 dark:border-white/10 shadow-sm">
                                  <i className="ri-check-line text-cyan-500 mr-1"></i> {inc}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                              onClick={() => {
                                setModalData({
                                  title: item.title, desc: item.desc, duration: item.duration, includes: item.includes,
                                  images: generateGallery(itemImage, galleryType), extraContent: item.extraContent
                                });
                                setCurrentImageIdx(0);
                              }}
                              className="w-full py-4 rounded-xl font-title text-xs md:text-sm tracking-widest uppercase transition-all active:scale-95 border border-slate-300 text-slate-600 hover:bg-slate-50 dark:border-white/20 dark:text-slate-300 dark:hover:bg-white/10">
                              {lang === 'es' ? 'Ver Detalles' : 'See Details'}
                            </button>
                            <a href={`https://wa.me/526131182311?text=Hola, quiero información sobre: ${item.title}`} target="_blank" rel="noopener noreferrer"
                              className="w-full py-4 rounded-xl font-title text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-95 border shadow-md bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-navy dark:border-cyan-500">
                              {lang === 'es' ? 'Reservar' : 'Book Now'} <i className="ri-whatsapp-line text-lg md:text-xl"></i>
                            </a>
                          </div>
                        </div>

                      </motion.article>
                    );
                  })}
                </div>

              </section>
            );
          })}

        </main>
      </div>

      {/* ========================================================================
          🎬 MODAL EDITORIAL (Lightbox Responsivo)
          ======================================================================== */}
      <AnimatePresence>
        {modalData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-navy/90 dark:bg-black/90 backdrop-blur-md"
              onClick={() => setModalData(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-6xl bg-white dark:bg-dark rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10 border border-slate-200 dark:border-white/10"
            >
              <button onClick={() => setModalData(null)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-colors z-50 border border-white/20">
                <i className="ri-close-line text-2xl"></i>
              </button>

              {/* IZQUIERDA: Carrusel */}
              <div className="w-full md:w-1/2 h-[35vh] md:h-auto relative bg-slate-900 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIdx}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                    src={modalData.images[currentImageIdx]}
                    alt={modalData.title}
                    className="absolute inset-0 w-full h-full object-cover filter contrast-[1.15] saturate-[1.10]"
                  />
                </AnimatePresence>

                {modalData.images.length > 1 && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <button onClick={(e) => { e.stopPropagation(); setCurrentImageIdx((prev) => (prev === 0 ? modalData.images.length - 1 : prev - 1)); }} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition-all hover:bg-cyan-500 pointer-events-auto border border-white/20"><i className="ri-arrow-left-s-line text-xl"></i></button>
                      <button onClick={(e) => { e.stopPropagation(); setCurrentImageIdx((prev) => (prev === modalData.images.length - 1 ? 0 : prev + 1)); }} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center transition-all hover:bg-cyan-500 pointer-events-auto border border-white/20"><i className="ri-arrow-right-s-line text-xl"></i></button>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {modalData.images.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImageIdx ? 'w-6 bg-white shadow-md' : 'w-2 bg-white/50'}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* DERECHA: Info del Modal */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col overflow-y-auto bg-slate-50 dark:bg-dark no-scrollbar h-[55vh] md:h-auto">
                <div className="mb-8">
                  {modalData.duration && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-widest bg-cyan-100 text-cyan-700 border border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400 dark:border-cyan-400/20 mb-4">
                      <i className="ri-time-line"></i> {modalData.duration}
                    </span>
                  )}
                  <h2 className="font-title text-3xl md:text-4xl text-navy dark:text-white leading-tight mb-4">{modalData.title}</h2>
                  <p className="font-body text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {modalData.desc}
                  </p>

                  {/* 👇 SÓLO AQUÍ SE MUESTRA EL CONTENIDO EXTRA LARGO */}
                  {modalData.extraContent && (
                    <div className="mt-6">
                      {modalData.extraContent}
                    </div>
                  )}
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-white/10 pb-3 mb-5">
                    {lang === 'es' ? 'QUÉ INCLUYE ESTA EXPERIENCIA' : 'WHAT’S INCLUDED'}
                  </h4>
                  <ul className="space-y-4">
                    {modalData.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-sm md:text-base font-medium text-slate-700 dark:text-slate-200">
                        <div className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center shrink-0 mt-0.5">
                          <i className="ri-check-line text-cyan-600 dark:text-cyan-400 text-xs"></i>
                        </div>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <a href={`https://wa.me/526131182311?text=Hola, quiero reservar: ${modalData.title}`} target="_blank" rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl font-title text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-navy dark:hover:bg-cyan-400">
                    {lang === 'es' ? 'RESERVAR AHORA' : 'BOOK NOW'} <i className="ri-whatsapp-line text-xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}