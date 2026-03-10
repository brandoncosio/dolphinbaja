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
import refreshImg from '/assets/images/slider5-celular.webp';
import bubbleImg from '/assets/images/bubblem.webp';
import leones from '/assets/contentD/img/leonesm.webp';
import carmen from '/assets/contentD/img/IslaCarmen.webp';
import danzantes from '/assets/contentD/img/IslaDanzantes.webp';

import colorFImg from '/assets/images/ColorF.webp';
import certImg from '/assets/images/cert.webp';
import cert2Img from '/assets/images/cert2.webp';
import cert3Img from '/assets/images/cert3.webp';
import cert4Img from '/assets/images/cert4.webp';

const imageDict: Record<string, string> = {
  funDivesImg, nocturno, coursesImg,
  isla, experienciasImg, refreshImg, bubbleImg, leones,
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
}

interface ModalData {
  title: string;
  desc: string;
  duration?: string;
  includes: string[];
  images: string[];
}

export default function Servicios() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('paquetes');

  // Estado para el Modal (Lightbox)
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const location = useLocation();
  const { t, lang } = useLanguage();
  const content = t.servicesPage as any;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Bloquear scroll al abrir el modal
  useEffect(() => {
    if (modalData) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalData]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajuste de offset para evitar que la Navbar gigante tape el título
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
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = sec;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ========================================================================
  // 📚 DATOS Y GENERADORES
  // ========================================================================
  const generateGallery = (mainImg: string, type: 'dive' | 'snorkel' | 'course' | 'package') => {
    const fallbackGalleries = {
      dive: [mainImg, bubbleImg, leones, nocturno],
      snorkel: [mainImg, experienciasImg, isla, carmen],
      course: [mainImg, certImg, cert2Img, colorFImg],
      package: [mainImg, funDivesImg, danzantes, isla]
    };
    return Array.from(new Set(fallbackGalleries[type])).slice(0, 4);
  };

  const getServicesForTab = (tab: TabKey): ServiceItem[] => {
    const baseServices = content.services?.[tab] || [];
    if (tab === 'snorkel') {
      const extraTours = [
        {
          title: lang === 'es' ? 'Tour a Isla del Carmen' : 'Isla del Carmen Tour',
          duration: '4 - 5 hrs',
          desc: lang === 'es'
            ? 'La isla más grande del Parque Nacional Bahía de Loreto, tiene impresionantes paisajes desérticos y sitios de buceo con arrecifes rocosos llenos de vida marina. Sus aguas con mucha diversidad marina y variedad de puntos de inmersión la convierten en un destino ideal para tus vacaciones.'
            : 'The largest island in the Loreto Bay National Park features stunning desert landscapes and dive sites with rocky reefs full of marine life. Its waters, with great marine diversity and a variety of dive spots, make it an ideal destination for your vacation.',
          includes: lang === 'es' ? ['Paseo en lancha', 'Guía local', 'Bebidas y snacks', 'Brazalete del Parque'] : ['Boat ride', 'Local guide', 'Drinks & snacks', 'Park Bracelet'],
          imgKey: 'carmen'
        },
        {
          title: lang === 'es' ? 'Tour a Islas Danzantes' : 'Isla Danzante Tour',
          duration: '4 - 5 hrs',
          desc: lang === 'es'
            ? 'Sus arrecifes rocosos albergan una gran diversidad de vida marina, desde el barco hundido C-54 Agustín Melgar entre danzantes y puerto escondido hasta peces de arrecife, morenas, pulpos, y mantarrayas en temporada.'
            : 'Its rocky reefs host a great diversity of marine life, from the sunken C-54 Agustín Melgar ship between Danzante and Puerto Escondido to reef fish, moray eels, octopuses, and manta rays in season.',
          includes: lang === 'es' ? ['Paseo en lancha', 'Guía local', 'Bebidas y snacks', 'Brazalete del Parque'] : ['Boat ride', 'Local guide', 'Drinks & snacks', 'Park Bracelet'],
          imgKey: 'danzantes'
        }
      ];
      return [...baseServices, ...extraTours];
    }
    return baseServices;
  };

  const packagesData = {
    es: {
      title: "Paquetes de Buceo",
      subtitle: "Experiencias All-Inclusive",
      items: [
        {
          id: 'deep-blue', name: "Deep Blue", target: "Para buzos certificados", duration: "5 Días",
          desc: "Nuestro paquete estelar para buzos experimentados. Disfruta de 5 días explorando los mejores arrecifes del Parque Nacional, con alojamiento de primer nivel y desayunos incluidos para que solo te preocupes por bucear.",
          features: ["5 días buceando (10 tanques)", "6 noches de hotel con desayuno", "Transfer aeropuerto - hotel"],
          note: "Mínimo 2 buzos", color: "cyan"
        },
        {
          id: 'blue-escape', name: "Blue Escape", target: "Para buzos certificados", duration: "3 Días",
          desc: "La escapada perfecta de fin de semana. Tres días intensos de inmersiones en las majestuosas aguas de Loreto, combinados con una estancia cómoda y relajante.",
          features: ["3 días buceando (6 tanques)", "4 noches de hotel con desayuno", "Transfer aeropuerto - hotel"],
          note: "Mínimo 2 buzos", color: "ocean"
        },
        {
          id: 'beyond-surface', name: "Beyond the Surface", target: "Obtén tu PADI Open Water", duration: "4-5 Días",
          desc: "Conviértete en un buzo certificado con este paquete integral. Incluye toda tu teoría, inmersiones de práctica y certificación oficial PADI, además de días extra para disfrutar tu nueva habilidad.",
          features: ["Certificación Open Water", "Repaso de teoría 1, 2, 3 y 4", "+2 días extra de buceo (4 tanques)", "Computadora Cressi"],
          note: "Mínimo 2 buzos", color: "yellow"
        }
      ]
    },
    en: {
      title: "Dive Packages",
      subtitle: "All-Inclusive Experiences",
      items: [
        {
          id: 'deep-blue', name: "Deep Blue", target: "For certified divers", duration: "5 Days",
          desc: "Our stellar package for experienced divers. Enjoy 5 days exploring the best reefs of the National Park, with top-tier accommodation and breakfasts included so you only worry about diving.",
          features: ["5 days diving (10 tanks)", "6 nights hotel with breakfast", "Airport - hotel transfer"],
          note: "Minimum 2 divers", color: "cyan"
        },
        {
          id: 'blue-escape', name: "Blue Escape", target: "For certified divers", duration: "3 Days",
          desc: "The perfect weekend getaway. Three intense days of diving in the majestic waters of Loreto, combined with a comfortable and relaxing stay.",
          features: ["3 days diving (6 tanks)", "4 nights hotel with breakfast", "Airport - hotel transfer"],
          note: "Minimum 2 divers", color: "ocean"
        },
        {
          id: 'beyond-surface', name: "Beyond the Surface", target: "Get your PADI Open Water", duration: "4-5 Days",
          desc: "Become a certified diver with this comprehensive package. Includes all your theory, practice dives, and official PADI certification, plus extra days to enjoy your new skill.",
          features: ["Open Water Certification", "Theory review 1, 2, 3 & 4", "+2 extra days diving (4 tanks)", "Cressi Dive Computer"],
          note: "Minimum 2 divers", color: "yellow"
        }
      ]
    }
  };

  const pkgData = packagesData[lang === 'en' ? 'en' : 'es'];

  const categoriesList = [
    { id: 'paquetes', label: lang === 'es' ? 'Paquetes' : 'Packages', icon: 'ri-vip-crown-fill' },
    { id: 'fundives', label: content.categories?.fundives || 'Fun Dives', icon: 'ri-anchor-fill' },
    { id: 'cursos', label: content.categories?.cursos || 'Cursos', icon: 'ri-medal-fill' },
    { id: 'snorkel', label: content.categories?.snorkel || 'Snorkel', icon: 'ri-sun-fill' }
  ];

  // ========================================================================
  // 🖥️ RENDER PRINCIPAL
  // ========================================================================
  return (
    <>
      <Helmet>
        <title>{lang === 'es' ? 'Catálogo de Servicios y Tours | Dolphin Dive' : 'Diving Services & Tours | Dolphin Dive'}</title>
        <meta name="description" content={content?.heroDesc || "Descubre los servicios de buceo en Loreto."} />
      </Helmet>

      {/* CONTENEDOR MAESTRO DE LA PÁGINA */}
      <div className="min-h-screen selection:bg-cyan-400 selection:text-dark bg-slate-50 dark:bg-dark transition-colors duration-500 pb-20">

        <AnimatePresence>
          {isLoading && <SplashScreen key="splash" />}
        </AnimatePresence>

        {/* ========================================================================
            🚀 NUEVO HERO DE SERVICIOS
            ======================================================================== */}
        <section className="relative w-full h-[100dvh] min-h-[650px] md:h-[80vh] md:min-h-[750px] overflow-hidden flex flex-col justify-center items-center pt-40 md:pt-48 pb-16">

          {/* Fondo Inmersivo Oceánico */}
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, ease: "linear" }}
              className="w-full h-full"
              style={{ willChange: "transform" }}
            >
              <img
                src={funDivesImg}
                alt={`${content?.heroHighlight} - Dolphin Dive Baja`}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-[center_30%] md:object-center"
              />
            </motion.div>

            {/* Capa de Contraste */}
            <div className="absolute inset-0 transition-colors duration-500 bg-navy/40 dark:bg-black/60" />

            {/* Gradiente de Fusión */}
            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t transition-colors duration-500 z-10 from-slate-50 via-slate-50/50 to-transparent dark:from-dark dark:via-dark/80 dark:to-transparent" />
          </div>

          {/* Contenido Textual del Hero */}
          <div className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto pointer-events-none mt-20 md:mt-28">

            {/* Halo Suave */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-64 w-[90%] md:w-[600px] rounded-full blur-[100px] pointer-events-none transition-colors duration-500 bg-cyan-500/20 dark:bg-cyan-500/10" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
              <span className="inline-block font-body text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 px-4 py-1.5 md:px-6 md:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-500 shadow-lg pointer-events-auto bg-white/90 border-white/60 text-cyan-700 dark:bg-black/60 dark:border-white/10 dark:text-cyan-400">
                {content?.catalogTitle || 'Catálogo de Servicios'}
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight pointer-events-auto transition-colors text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              {content?.heroTitle} <br className="hidden md:block" />
              <span className="text-yellow-400 drop-shadow-md">{content?.heroHighlight}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="font-body text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed pointer-events-auto transition-colors text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {content?.heroDesc}
            </motion.p>

            {/* Accesos Rápidos (Botones) */}
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

        {/* CATÁLOGO UNIFICADO */}
        {/* 👇 Se redujo el margen superior para acercar el contenido al Hero */}
        <main className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 mt-8 md:mt-10">

          {/* ======================= SECCIÓN PAQUETES ======================= */}
          {/* 👇 Se redujo el mb a 16 md:24 */}
          <section id="paquetes" className="mb-16 md:mb-24 scroll-mt-28">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-title text-3xl md:text-5xl text-navy dark:text-white drop-shadow-sm mb-4">{pkgData.title}</h2>
              <p className="font-body font-bold tracking-widest uppercase text-xs md:text-sm text-cyan-600 dark:text-cyan-400">{pkgData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {pkgData.items.map((pkg, idx) => {
                let badgeClass = "text-blue-600 border-blue-400 bg-blue-50 dark:bg-blue-400/10 dark:text-blue-400";
                if (pkg.color === 'yellow') badgeClass = "text-yellow-600 border-yellow-400 bg-yellow-50 dark:bg-yellow-400/10 dark:text-yellow-400";
                if (pkg.color === 'cyan') badgeClass = "text-cyan-700 border-cyan-400 bg-cyan-50 dark:bg-cyan-400/10 dark:text-cyan-400";

                return (
                  <motion.article key={pkg.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: idx * 0.1, duration: 0.5 }}
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
                          Ver Detalles
                        </button>
                        <a href={`https://wa.me/526131182311?text=${encodeURIComponent(`Hola, me interesa el Paquete: ${pkg.name}`)}`} target="_blank" rel="noopener noreferrer"
                          className="w-full py-3.5 rounded-xl font-title text-[10px] md:text-xs tracking-widest uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 border shadow-md bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-navy dark:border-cyan-500">
                          Reservar <i className="ri-whatsapp-line text-base"></i>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* ======================= SECCIONES INDIVIDUALES ======================= */}
          {(['fundives', 'cursos', 'snorkel'] as TabKey[]).map((tabKey) => {
            const sectionTitle = categoriesList.find(c => c.id === tabKey)?.label;
            const servicesList = getServicesForTab(tabKey);

            return (
              <section key={tabKey} id={tabKey} className="pt-6 scroll-mt-20">
                <div className="text-center md:text-left mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
                  <h2 className="font-title text-4xl md:text-5xl text-navy dark:text-white">{sectionTitle}</h2>
                </div>

                {/* 👇 Se redujo el gap interno de las tarjetas (de gap-16 a gap-8/12) */}
                <div className="flex flex-col gap-8 md:gap-12">
                  {servicesList.map((item, idx) => {
                    const isEven = idx % 2 === 0;

                    let itemImage = imageDict[item.imgKey] || funDivesImg;
                    if (item.title?.includes('Open Water')) itemImage = colorFImg;
                    if (item.title?.includes('Advanced')) itemImage = certImg;
                    if (item.title?.includes('Rescue')) itemImage = cert2Img;
                    if (item.title?.includes('Especialidades') || item.title?.includes('Specialties')) itemImage = cert3Img;
                    if (item.title?.includes('Dive Master')) itemImage = cert4Img;

                    let galleryType: 'dive' | 'snorkel' | 'course' = 'dive';
                    if (tabKey === 'cursos') galleryType = 'course';
                    if (tabKey === 'snorkel') galleryType = 'snorkel';

                    return (
                      <motion.article key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
                        className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl bg-white dark:bg-white/5 dark:border-white/10 transition-all hover:border-cyan-400/50 hover:shadow-2xl`}
                      >

                        {/* IMAGEN */}
                        <div className="w-full lg:w-5/12 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden shrink-0">
                          <img src={itemImage} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
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
                          <p className="text-sm md:text-base font-body font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-8 line-clamp-3">
                            {item.desc}
                          </p>

                          <div className="mb-10 hidden sm:block">
                            <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-slate-400 mb-4">{content?.ui?.includes || 'INCLUYE'}</p>
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
                                  images: generateGallery(itemImage, galleryType)
                                });
                                setCurrentImageIdx(0);
                              }}
                              className="w-full py-4 rounded-xl font-title text-xs md:text-sm tracking-widest uppercase transition-all active:scale-95 border border-slate-300 text-slate-600 hover:bg-slate-50 dark:border-white/20 dark:text-slate-300 dark:hover:bg-white/10">
                              {lang === 'es' ? 'Ver Detalles' : 'See Details'}
                            </button>
                            <a href={`https://wa.me/526131182311?text=Hola, quiero información sobre: ${item.title}`} target="_blank" rel="noopener noreferrer"
                              className="w-full py-4 rounded-xl font-title text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-95 border shadow-md bg-cyan-600 text-white border-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-navy dark:border-cyan-500">
                              {content?.ui?.bookNow || 'Reservar'} <i className="ri-whatsapp-line text-lg md:text-xl"></i>
                            </a>
                          </div>
                        </div>

                      </motion.article>
                    );
                  })}
                </div>

                {/* HORARIOS */}
                {/* 👇 Se redujo de mt-16 a mt-12 y de mb-24 a mb-16 para mayor cohesión */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="mt-12 mb-16 max-w-6xl mx-auto w-full">
                  {(() => {
                    const sched = content.schedules?.[tabKey];
                    if (!sched) return null;
                    return (
                      <div className="rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-14 border relative overflow-hidden shadow-xl bg-white/80 backdrop-blur-xl border-slate-200 dark:bg-white/5 dark:border-white/10">
                        <div className="absolute top-0 right-0 w-full h-full -z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-transparent to-transparent dark:from-cyan-400/5"></div>
                        <div className="relative z-10">
                          <h3 className="font-title text-2xl md:text-3xl mb-8 md:mb-12 flex items-center gap-4 text-navy dark:text-white">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md bg-yellow-400 text-navy dark:text-dark">
                              <i className="ri-calendar-check-fill text-2xl"></i>
                            </div>
                            {content.schedules?.title || 'Horarios'}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
                            {/* MAÑANA */}
                            {sched.morning && (
                              <div className="p-6 md:p-8 rounded-[1.5rem] border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10 hover:border-cyan-400/50 transition-colors shadow-sm">
                                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                                  <p className="font-title text-sm md:text-base uppercase tracking-widest text-cyan-600 dark:text-cyan-400">{content.schedules?.morning || 'Mañana'}</p>
                                  <span className="text-[10px] px-3 py-1.5 rounded-md font-bold uppercase tracking-wider border bg-white text-slate-600 border-slate-300 dark:bg-white/10 dark:text-white dark:border-white/10">{sched.morning.season}</span>
                                </div>
                                <p className="text-3xl md:text-4xl font-title mb-3 text-navy dark:text-white">{sched.morning.time}</p>
                                <p className="text-sm font-body font-medium text-slate-500 dark:text-slate-400">{sched.morning.note}</p>
                              </div>
                            )}
                            {/* TARDE */}
                            {sched.afternoon && (
                              <div className="p-6 md:p-8 rounded-[1.5rem] border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10 hover:border-yellow-400/50 transition-colors shadow-sm">
                                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                                  <p className="font-title text-sm md:text-base uppercase tracking-widest text-yellow-600 dark:text-yellow-400">{content.schedules?.afternoon || 'Tarde'}</p>
                                  <span className="text-[10px] px-3 py-1.5 rounded-md font-bold uppercase tracking-wider border bg-white text-slate-600 border-slate-300 dark:bg-white/10 dark:text-white dark:border-white/10">{sched.afternoon.season}</span>
                                </div>
                                <p className="text-3xl md:text-4xl font-title mb-3 text-navy dark:text-white">{sched.afternoon.time}</p>
                                <p className="text-sm font-body font-medium text-slate-500 dark:text-slate-400">{sched.afternoon.note}</p>
                              </div>
                            )}
                            {/* NOCHE */}
                            {sched.night ? (
                              <div className="p-6 md:p-8 rounded-[1.5rem] border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10 hover:border-purple-400/50 transition-colors shadow-sm">
                                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                                  <p className="font-title text-sm md:text-base uppercase tracking-widest text-purple-600 dark:text-purple-400">{content.schedules?.night || 'Noche'}</p>
                                  <span className="text-[10px] px-3 py-1.5 rounded-md font-bold uppercase tracking-wider border bg-white text-slate-600 border-slate-300 dark:bg-white/10 dark:text-white dark:border-white/10">{sched.night.season}</span>
                                </div>
                                <p className="text-3xl md:text-4xl font-title mb-3 text-navy dark:text-white">{sched.night.time}</p>
                                <p className="text-sm font-body font-medium text-slate-500 dark:text-slate-400">{sched.night.note}</p>
                              </div>
                            ) : (
                              <div className="p-6 md:p-8 rounded-[1.5rem] border flex flex-col justify-center items-center text-center opacity-60 bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10">
                                <i className="ri-moon-clear-line text-4xl mb-4 text-slate-400"></i>
                                <p className="text-sm font-body font-medium text-slate-400">{content.schedules?.notAvailable || 'No disponible'}</p>
                              </div>
                            )}
                          </div>
                          {/* Reglas */}
                          <div className="border-l-4 rounded-r-2xl p-6 md:p-8 bg-yellow-50/80 border-yellow-400 dark:bg-yellow-400/5 dark:border-yellow-400/30">
                            <h4 className="font-title text-sm md:text-base mb-5 uppercase tracking-widest flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                              <i className="ri-information-fill text-xl"></i> {content.schedules?.important || 'Información Importante'}
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                              {(sched.rules || []).map((rule: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-body font-medium text-slate-700 dark:text-slate-300">
                                  <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-yellow-400 shadow-sm"></span> {rule}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>

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
            {/* Overlay Oscuro */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-navy/90 dark:bg-black/90 backdrop-blur-md"
              onClick={() => setModalData(null)}
            />

            {/* Contenedor Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-6xl bg-white dark:bg-dark rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10 border border-slate-200 dark:border-white/10"
            >
              {/* Botón Cerrar */}
              <button onClick={() => setModalData(null)} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-colors z-50 border border-white/20">
                <i className="ri-close-line text-2xl"></i>
              </button>

              {/* IZQUIERDA (Arriba en móvil): Carrusel */}
              <div className="w-full md:w-1/2 h-[35vh] md:h-auto relative bg-slate-900 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIdx}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                    src={modalData.images[currentImageIdx]}
                    alt={modalData.title}
                    className="absolute inset-0 w-full h-full object-cover"
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

              {/* DERECHA (Abajo en móvil): Info */}
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
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-white/10 pb-3 mb-5">
                    {content?.ui?.includes || 'QUÉ INCLUYE ESTA EXPERIENCIA'}
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
                    {content?.ui?.bookNow || 'RESERVAR AHORA'} <i className="ri-whatsapp-line text-xl"></i>
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