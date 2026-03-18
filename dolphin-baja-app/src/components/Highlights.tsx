import { useRef, useState, useEffect } from 'react';
import { motion, Variants, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

// Imágenes
import imgTours from '/assets/images/experiencias.webp';
import imgExperiencias from '/assets/images/cert2.webp';
import imgCursos from '/assets/images/certificacionpadi.jpeg';
import imgStaff from '/assets/images/staff.webp';
import imgPlanifica from '/assets/images/planifica2.webp';
import imgGaleria from '/assets/images/colash3.webp';

// Imágenes para el Reel de Snorkel
import reel1 from '/assets/contentD/img/reel1.webp';
import reel2 from '/assets/contentD/img/reel2.webp';
import reel3 from '/assets/contentD/img/reel3.webp';

// Logo PADI
import logoPadi from '/assets/contentD/img/PADI.png';

const snorkelReel = [reel1, reel2, reel3];

export default function Highlights() {
  const { t, lang } = useLanguage();
  const content = t.home.highlights;

  // ========================================================================
  // 🗄️ DATA COMPLETA (Íntegra, sin recortes)
  // ========================================================================
  const highlightsData = [
    {
      id: 1,
      kicker: content.cards[0]?.kicker || "Explora",
      title: content.cards[0]?.title || "Tours de Buceo",
      desc: lang === 'es' ? "Descubre los arrecifes y la increíble vida marina del Parque Nacional Bahía de Loreto con nuestros guías expertos." : "Discover the reefs and incredible marine life of the Loreto Bay National Park with our expert guides.",
      image: imgTours,
      link: "/servicios#fundives",
    },
    {
      id: 2,
      kicker: content.cards[1]?.kicker || "Descubre",
      title: content.cards[1]?.title || "Snorkel",
      desc: lang === 'es' ? "Experiencias de contacto cien por ciento con la naturaleza, puedes encontrar delfines, esnorkelear con los lobos y disfrutar de hermosos paisajes subacuáticos con gran variedad de vida marina." : "Complete 100% nature immersion experiences; encounter dolphins, snorkel with sea lions, and enjoy breathtaking underwater landscapes with a vast variety of marine life.",
      images: snorkelReel, // Array para el carrusel de empuje suave
      link: "/servicios#snorkel",
    },
    {
      id: 3,
      kicker: content.cards[2]?.kicker || "Aprende",
      title: content.cards[2]?.title || "Cursos PADI",
      desc: lang === 'es' ? "A la hora de enseñarte a bucear nos preocupamos porque logres desarrollar las mejores habilidades subacuáticas, en todos los niveles, desde open  water hasta dive master." : "When teaching you to dive, our priority is to ensure you develop top-tier underwater skills at every level, from Open Water to Divemaster.",
      image: imgCursos,
      link: "/servicios#cursos",
    },
    {
      id: 4,
      kicker: content.cards[3]?.kicker || "Conoce",
      title: content.cards[3]?.title || "Nuestro Equipo",
      desc: lang === 'es' ? "Conoce a la familia Dolphin Dive. Instructores y capitanes apasionados por proteger y compartir el océano." : "Meet the Dolphin Dive family. Instructors and captains passionate about protecting and sharing the ocean.",
      image: imgStaff,
      link: "/nosotros#equipo",
    },
    {
      id: 5,
      kicker: content.cards[4]?.kicker || "Prepárate",
      title: content.cards[4]?.title || "Planifica tu Viaje",
      desc: lang === 'es' ? "Temporadas, temperaturas del agua, ubicación y todo lo que necesitas saber antes de visitarnos." : "Seasons, water temperatures, location, and everything you need to know before visiting us.",
      image: imgPlanifica,
      link: "/contacto",
    },
    {
      id: 6,
      kicker: content.cards[5]?.kicker || "Inspírate",
      title: content.cards[5]?.title || "Galería",
      desc: lang === 'es' ? "Sumérgete en nuestra colección visual y mira lo que te espera bajo la superficie del Mar de Cortés." : "Dive into our visual collection and see what awaits you beneath the surface of the Sea of Cortez.",
      image: imgGaleria,
      link: "/galeria",
    }
  ];

  // ========================================================================
  // 🎭 VARIANTES Y ANIMACIONES
  // ========================================================================
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="relative z-10 w-full py-20 md:py-32 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500 bg-slate-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO DE SECCIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 md:mb-32 text-center md:text-left relative"
        >
          <div className="absolute top-1/2 left-1/2 md:-left-10 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 -z-10 h-32 md:h-40 w-32 md:w-40 rounded-full blur-[80px] transition-colors duration-500 dark:bg-cyan-400/20 bg-cyan-400/10" />

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 border shadow-sm text-cyan-700 bg-white border-slate-200 dark:text-cyan-400 dark:bg-white/5 dark:border-white/10 mx-auto md:mx-0">
            <i className="ri-compass-3-line text-sm"></i> {content.tag}
          </span>

          <h2 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-sm transition-colors duration-500 dark:text-white text-navy">
            {content.titleStart} <br className="hidden md:block" />
            <span className="text-yellow-500 dark:text-yellow-400">{content.titleHighlight}</span>
          </h2>

          <p className="mt-5 md:mt-8 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg leading-relaxed font-body font-medium transition-colors duration-500 dark:text-slate-300 text-slate-600">
            {content.desc}
          </p>
        </motion.div>

        {/* ZIG-ZAG CINEMATOGRÁFICO */}
        <div className="flex flex-col gap-24 md:gap-40 lg:gap-48">
          {highlightsData.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center group w-full`}
              >

                {/* 1. IMAGEN GIGANTE O REEL */}
                <div className="w-full md:w-[68%] lg:w-[70%] h-[400px] sm:h-[450px] md:h-[600px] lg:h-[700px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative shrink-0 z-0 bg-slate-200 dark:bg-dark/50">
                  {item.images ? (
                    <HighlightSmoothSlideReel images={item.images} title={item.title} />
                  ) : (
                    <motion.img
                      initial={{ scale: 1.15 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] ease-out group-hover:scale-110 will-change-transform filter contrast-[1.15] saturate-[1.10]"
                    />
                  )}

                  {/* Logo PADI exclusivo para la sección de Cursos (ID 3) */}
                  {item.id === 3 && (
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      src={logoPadi}
                      alt="PADI Official Partner"
                      className="absolute bottom-6 right-6 md:bottom-10 md:right-10 h-12 md:h-20 w-auto z-10 drop-shadow-2xl brightness-110"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent dark:from-dark/70 opacity-70 transition-colors duration-500 pointer-events-none" />

                  {/* TELÓN REVEAL */}
                  <motion.div
                    initial={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    style={{ originX: isEven ? 1 : 0 }}
                    className="absolute inset-0 bg-slate-50 dark:bg-dark z-20 pointer-events-none"
                  />
                </div>

                {/* 2. TARJETA DE CRISTAL FLOTANTE */}
                <motion.div
                  style={{ y: cardY }}
                  className={`w-[90%] sm:w-[80%] md:w-[45%] lg:w-[40%] relative z-10 self-center md:self-auto -mt-16 sm:-mt-24 md:mt-0 ${isEven ? 'md:-ml-16 lg:-ml-32' : 'md:-mr-16 lg:-mr-32'}`}
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-7 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border transition-all duration-500 hover:shadow-cyan-500/20
                      bg-white/95 border-white/80
                      dark:bg-dark/90 dark:border-white/10 dark:hover:border-white/30"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20"></div>

                    <motion.span
                      variants={staggerItem}
                      className="inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border
                        text-cyan-700 bg-cyan-50 border-cyan-200
                        dark:text-cyan-400 dark:bg-cyan-400/10 dark:border-cyan-400/20"
                    >
                      {item.kicker}
                    </motion.span>

                    <motion.h3
                      variants={staggerItem}
                      className="font-title text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 transition-colors duration-500
                        text-navy dark:text-white"
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      variants={staggerItem}
                      className="font-body text-sm md:text-base leading-relaxed mb-8 transition-colors duration-500 font-medium
                        text-slate-600 dark:text-slate-300"
                    >
                      {item.desc}
                    </motion.p>

                    <motion.div variants={staggerItem}>
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-3 font-title text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 group/btn
                          text-yellow-600 hover:text-yellow-500
                          dark:text-yellow-400 dark:hover:text-yellow-300"
                      >
                        <span className="relative overflow-hidden block">
                          <span className="block transition-transform duration-300 group-hover/btn:-translate-y-full">{content.cardLink || "VER DETALLES"}</span>
                          <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover/btn:translate-y-0">{content.cardLink || "VER DETALLES"}</span>
                        </span>

                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover/btn:bg-yellow-400 group-hover/btn:text-navy
                          border-yellow-400/50 bg-yellow-50 text-yellow-600
                          dark:border-yellow-400/30 dark:bg-yellow-400/10 dark:text-yellow-400"
                        >
                          <i className="ri-arrow-right-line text-lg sm:text-xl group-hover/btn:translate-x-1 transition-transform"></i>
                        </div>
                      </Link>
                    </motion.div>

                  </motion.div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ========================================================================
// 🛰️ COMPONENTE: HighlightSmoothSlideReel (Empuje premium desde la derecha)
// ========================================================================
function HighlightSmoothSlideReel({ images, title }: { images: string[], title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${title} reel`}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ 
            x: { type: "tween", ease: "easeInOut", duration: 1.2 },
          }}
          className="absolute inset-0 w-full h-full object-cover filter contrast-[1.15] saturate-[1.10]"
        />
      </AnimatePresence>
      
      {/* Indicadores de posición */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-[1200ms] ${i === index ? 'w-6 bg-cyan-400' : 'w-2 bg-white/30'}`} 
          />
        ))}
      </div>
    </div>
  );
}