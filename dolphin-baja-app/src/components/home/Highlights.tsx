import { useRef, useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Importamos el contexto de idioma
import { useLanguage } from '../../context/LanguageContext';

// ========================================================================
// 🖼️ IMPORTACIÓN DE IMÁGENES Y REELS
// ========================================================================
import imgStaff from '/assets/images/staff.webp';

// Reels anteriores conservados
import reel1 from '/assets/contentD/img/sn4.webp';
import reel2 from '/assets/contentD/img/sn3.webp';
import reel3 from '/assets/contentD/img/sn1.webp';
import reel4 from '/assets/contentD/img/loc1.webp';
import reel5 from '/assets/contentD/img/loc2.webp';
import reel6 from '/assets/contentD/img/loc3.webp';

// Logo PADI
import logoPadi from '/assets/contentD/img/PADI.png';

// 👇 NUEVAS IMÁGENES AÑADIDAS
import funDive2 from '/assets/contentD/img/reel3.webp';

import gal1 from '/assets/images/Gallery1.webp';
import gal2 from '/assets/images/colash4.webp';
import gal3 from '/assets/images/CANGREJO.webp';
import gal4 from '/assets/images/g1.webp';
import gal5 from '/assets/images/g2.webp';
import gal6 from '/assets/images/g3.webp';
import gal7 from '/assets/images/med.webp';
import gal8 from '/assets/images/g5.webp';
import gal9 from '/assets/images/g6.webp';

//Nuevas 
import fun from '/assets/images/fun2.webp';
import pad1 from '/assets/contentD/img/pad1.webp';
import tim from '/assets/contentD/img/tim.webm';

// ========================================================================
// 🎞️ CONFIGURACIÓN DE LOS CARROUSELES
// ========================================================================
const funDivesReel = [funDive2, fun];
const snorkelReel = [reel1, reel2, reel3];
const padiReel = [pad1, 'https://i.imgur.com/oVfZxpX.mp4'];
const equipoReel = [imgStaff, tim];
const planificaReel = [reel6, reel5, reel4];
const inspiraReel = [gal5, gal6, gal7, gal4, gal8, gal9, gal1, gal2, gal3];

export default function Highlights() {
  const { t, lang } = useLanguage();
  const content = t.home.highlights;

  const highlightsData = [
    {
      id: 1,
      kicker: content.cards[0]?.kicker || "Explora",
      title: content.cards[0]?.title || "Tours de Buceo",
      desc: lang === 'es' ? "Descubre los arrecifes y la increíble vida marina del Parque Nacional Bahía de Loreto con nuestros guías expertos." : "Discover the reefs and incredible marine life of the Loreto Bay National Park with our expert guides.",
      images: funDivesReel,
      link: "/servicios#fundives",
    },
    {
      id: 2,
      kicker: content.cards[1]?.kicker || "Descubre",
      title: content.cards[1]?.title || "Snorkel",
      desc: lang === 'es' ? "Experiencias de contacto cien por ciento con la naturaleza, puedes encontrar delfines, esnorkelear con los lobos y disfrutar de hermosos paisajes subacuáticos con gran variedad de vida marina." : "Complete 100% nature immersion experiences; encounter dolphins, snorkel with sea lions, and enjoy breathtaking underwater landscapes with a vast variety of marine life.",
      images: snorkelReel,
      link: "/servicios#snorkel",
    },
    {
      id: 3,
      kicker: content.cards[2]?.kicker || "Aprende",
      title: content.cards[2]?.title || "Cursos PADI",
      desc: lang === 'es' ? "A la hora de enseñarte a bucear nos preocupamos porque logres desarrollar las mejores habilidades subacuáticas, en todos los niveles, desde open water hasta dive master." : "When teaching you to dive, our priority is to ensure you develop top-tier underwater skills at every level, from Open Water to Divemaster.",
      images: padiReel,
      link: "/servicios#cursos",
    },
    {
      id: 4,
      kicker: content.cards[3]?.kicker || "Conoce",
      title: content.cards[3]?.title || "Nuestro Equipo",
      desc: lang === 'es' ? "Más que compañeros somos una familia. Capitanes y guias locales unidos por una profunda pasión por el mar." : "More than just colleagues, we are a family. Local captains and guides united by a deep-seated passion for the sea.",
      images: equipoReel,
      link: "/nosotros#equipo",
    },
    {
      id: 5,
      kicker: content.cards[4]?.kicker || "Prepárate",
      title: content.cards[4]?.title || "Planifica tu Viaje",
      desc: lang === 'es' ? "Temporadas, temperaturas del agua, ubicación y todo los detalles que necesitas para reservar tu viaje con nosotros." : "Seasons, water temperatures, location, and all the details you need to book your trip with us.",
      images: planificaReel,
      link: "/contacto",
    },
    {
      id: 6,
      kicker: content.cards[5]?.kicker || "Inspírate",
      title: content.cards[5]?.title || "Galería",
      desc: lang === 'es' ? "Aquí te compartimos un poco de nuestras experiencias en el parque nacional bahía de loreto: algo que tú también podrás vivir con dolphin dive baja." : "Here is a glimpse of our experiences in the Loreto Bay National Park: an adventure you can also experience with Dolphin Dive Baja.",
      images: inspiraReel,
      link: "/galeria",
    }
  ];

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

  return (
    <section ref={sectionRef} className="relative z-10 w-full pt-8 md:pt-16 pb-0 overflow-hidden transition-colors duration-500 bg-slate-50 dark:bg-dark">

      {/* ========================================================================
          ENCABEZADO DE SECCIÓN Y VIDEO DEL CLIENTE
          ======================================================================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 mb-16 md:mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left relative"
          >
            <div className="absolute top-1/2 left-1/2 lg:-left-10 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 -z-10 h-32 md:h-40 w-32 md:w-40 rounded-full blur-[80px] transition-colors duration-500 dark:bg-cyan-400/20 bg-cyan-400/10" />
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 border shadow-sm text-cyan-700 bg-white border-slate-200 dark:text-cyan-400 dark:bg-white/5 dark:border-white/10 mx-auto lg:mx-0">
              <i className="ri-compass-3-line text-sm"></i> {content.tag}
            </span>
            <h2 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-sm transition-colors duration-500 dark:text-white text-navy">
              {content.titleStart} <br className="hidden lg:block" />
              <span className="text-yellow-500 dark:text-yellow-400">{content.titleHighlight}</span>
            </h2>
            <p className="mt-5 md:mt-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed font-body font-medium transition-colors duration-500 dark:text-slate-300 text-slate-600">
              {content.desc}
            </p>
          </motion.div>

          {/* VIDEO PROPORCIONADO POR EL CLIENTE CON LA RUTA CORREGIDA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-video rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-slate-900 group">
              <video
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                {/* 👇 Ruta corregida quitando "contentD/" */}
                <source src="/assets/video/tu_nueva_experiencia.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-navy/10 dark:bg-black/20 pointer-events-none mix-blend-overlay"></div>
            </div>
            <div className="absolute -inset-4 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-[2.5rem] lg:rounded-[3rem] transform rotate-3 -z-10 transition-transform duration-700 group-hover:rotate-6"></div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================
          PANELERÍA INMERSIVA (FULL-WIDTH EDGE-TO-EDGE - SIN CUADROS DE CRISTAL)
          ======================================================================== */}
      <div className="w-full flex flex-col bg-slate-900">
        {highlightsData.map((item, idx) => {
          const isEven = idx % 2 === 0;

          // Gradiente robusto para asegurar legibilidad en PC ya que no hay cuadro
          const gradientClass = isEven
            ? "md:bg-gradient-to-r md:from-black/95 md:via-black/50 md:to-transparent"
            : "md:bg-gradient-to-l md:from-black/95 md:via-black/50 md:to-transparent";

          return (
            <div key={item.id} className="relative w-full flex flex-col md:block md:h-[75vh] md:min-h-[600px] overflow-hidden group border-b border-white/5 md:border-none">

              {/* FONDO / IMAGEN */}
              <div className="relative w-full h-[45vh] min-h-[300px] md:h-full md:absolute md:inset-0 z-0">
                <HighlightSlideReel images={item.images} title={item.title} />

                {/* Gradiente en Desktop para leer el texto */}
                <div className={`hidden md:block absolute inset-0 z-10 transition-colors duration-500 pointer-events-none ${gradientClass}`} />

                {/* Suavizado en Móvil entre la foto y el texto */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />
              </div>

              {/* CONTENEDOR CENTRALIZADO DEL TEXTO (Sin fondos ni bordes) */}
              <div className={`relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'} items-center md:h-full`}>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  // 👇 Eliminado todo rastro de cristal (bg, backdrop-blur, shadow, border)
                  className="w-full py-10 md:py-8 lg:p-10 md:w-[55%] lg:w-[45%] flex flex-col justify-center"
                >
                  <motion.span
                    variants={staggerItem}
                    className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-5 border text-white bg-white/10 border-white/20"
                  >
                    {item.kicker}
                  </motion.span>

                  <motion.h3
                    variants={staggerItem}
                    className="font-title text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 text-white drop-shadow-lg"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    variants={staggerItem}
                    className="font-body text-sm md:text-base leading-relaxed mb-8 font-medium text-slate-100 drop-shadow-md"
                  >
                    {item.desc}
                  </motion.p>

                  <motion.div variants={staggerItem} className="flex items-center gap-4">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-3 font-title text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 group/btn text-yellow-400 hover:text-yellow-300"
                    >
                      <span className="relative overflow-hidden block">
                        <span className="block transition-transform duration-300 group-hover/btn:-translate-y-full">{content.cardLink || "VER DETALLES"}</span>
                        <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover/btn:translate-y-0">{content.cardLink || "VER DETALLES"}</span>
                      </span>

                      <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover/btn:bg-yellow-400 group-hover/btn:text-navy border-yellow-400/50 bg-yellow-400/10 text-yellow-400">
                        <i className="ri-arrow-right-line text-lg sm:text-xl group-hover/btn:translate-x-1 transition-transform"></i>
                      </div>
                    </Link>

                    {/* Logo PADI en la tarjeta correspondiente */}
                    {item.id === 3 && (
                      <img src={logoPadi} alt="PADI" className="h-10 w-auto ml-auto filter drop-shadow-lg" />
                    )}
                  </motion.div>

                </motion.div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

// ========================================================================
// 🛰️ COMPONENTE: HighlightSlideReel 
// ========================================================================
function HighlightSlideReel({ images, title }: { images: string[], title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
      <AnimatePresence initial={false} mode="popLayout">
        {(() => {
          const currentMedia = images[index];
          const isVideo = currentMedia.endsWith('.mp4') || currentMedia.endsWith('.webm');

          return isVideo ? (
            <motion.video
              key={index}
              src={currentMedia}
              autoPlay loop muted playsInline
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.10] saturate-[1.10]"
            />
          ) : (
            <motion.img
              key={index}
              src={currentMedia}
              alt={`${title} reel`}
              decoding="async"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.10] saturate-[1.10] transform hover:scale-105 duration-[10s]"
            />
          );
        })()}
      </AnimatePresence>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-[1200ms] shadow-sm ${i === index ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40 backdrop-blur-sm'}`}
          />
        ))}
      </div>
    </div>
  );
}