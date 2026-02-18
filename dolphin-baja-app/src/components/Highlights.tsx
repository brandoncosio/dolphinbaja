import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

// Imágenes
import imgTours from '/assets/images/tours.webp';
import imgExperiencias from '/assets/images/experiencias.webp';
import imgCursos from '/assets/images/certificacionpadi.jpeg';
import imgStaff from '/assets/images/staff.webp';
import imgPlanifica from '/assets/images/planifica2.webp';
import imgGaleria from '/assets/images/colash3.webp';

export default function Highlights() {
  const { t } = useLanguage();
  const content = t.home.highlights;

  const highlightsData = [
    {
      id: 1,
      kicker: content.cards[0]?.kicker || "Explora",
      title: content.cards[0]?.title || "Tours de Buceo",
      image: imgTours,
      link: "/servicios#fundives",
      size: "aspect-[4/3] sm:col-span-2 md:col-span-2 md:row-span-2 md:aspect-auto",
      delay: 0
    },
    {
      id: 2,
      kicker: content.cards[1]?.kicker || "Descubre",
      title: content.cards[1]?.title || "Snorkel",
      image: imgExperiencias,
      link: "/servicios#snorkel",
      size: "aspect-square sm:aspect-auto md:col-span-1 md:row-span-1",
      delay: 0.1
    },
    {
      id: 3,
      kicker: content.cards[2]?.kicker || "Aprende",
      title: content.cards[2]?.title || "Cursos PADI",
      image: imgCursos,
      link: "/servicios#cursos",
      size: "aspect-square sm:aspect-auto md:col-span-1 md:row-span-1",
      delay: 0.2
    },
    {
      id: 4,
      kicker: content.cards[3]?.kicker || "Conoce",
      title: content.cards[3]?.title || "Nuestro Equipo",
      image: imgStaff,
      link: "/nosotros#equipo",
      size: "aspect-[4/3] sm:col-span-2 md:col-span-1 md:row-span-2 md:aspect-auto",
      delay: 0.3
    },
    {
      id: 5,
      kicker: content.cards[4]?.kicker || "Prepárate",
      title: content.cards[4]?.title || "Planifica tu Viaje",
      image: imgPlanifica,
      link: "/contacto",
      size: "aspect-[4/3] sm:col-span-2 md:col-span-2 md:row-span-1 md:aspect-auto",
      delay: 0.4
    },
    {
      id: 6,
      kicker: content.cards[5]?.kicker || "Inspírate",
      title: content.cards[5]?.title || "Galería",
      image: imgGaleria,
      link: "/nosotros#galeria",
      size: "aspect-[4/3] sm:col-span-2 md:col-span-2 md:row-span-1 md:aspect-auto",
      delay: 0.5
    }
  ];

  return (
    <section className="relative z-10 w-full py-16 md:py-24 px-6 md:px-20 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">

        {/* =========================================
            ENCABEZADO (Adaptable Light/Dark)
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-16 text-center md:text-left relative"
        >
          {/* Luz decorativa suave */}
          <div className="absolute top-1/2 left-1/2 md:-left-10 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 -z-10 h-32 w-32 rounded-full blur-[60px] transition-colors duration-500
            dark:bg-cyan-400/25 
            bg-cyan-400/10"
          />

          <span className="text-xs font-bold uppercase tracking-[0.4em] mb-4 block drop-shadow-md transition-colors duration-500
            dark:text-cyan-400 text-cyan-600">
            {content.tag}
          </span>

          <h2 className="font-title text-3xl md:text-5xl lg:text-6xl leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-colors duration-500
            dark:text-white text-navy">
            {content.titleStart} <br className="hidden md:block" /> <span className="text-yellow-500 dark:text-yellow-400">{content.titleHighlight}</span>
          </h2>

          <p className="mt-4 md:mt-6 max-w-2xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed font-body font-medium drop-shadow-md transition-colors duration-500
            dark:text-slate-200 text-slate-600">
            {content.desc}
          </p>
        </motion.div>

        {/* =========================================
            BENTO GRID DE 6 TARJETAS
            ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[250px] gap-4 md:gap-6">
          {highlightsData.map((item) => {

            // 🧠 ESTRATEGIA DE SEPARACIÓN: Definimos las clases de la tarjeta contenedora
            const cardClasses = `
              group relative overflow-hidden rounded-[2rem] backdrop-blur-xl transition-all duration-500 block ${item.size}
              
              /* LIGHT MODE: Borde gris suave, sombra para elevar, fondo blanco limpio */
              bg-white border-slate-200 shadow-xl 
              hover:border-cyan-400/40 hover:shadow-[0_20px_40px_rgba(102,216,227,0.2)] hover:-translate-y-1

              /* DARK MODE: Cristal Mate Oscuro, sin sombra brillante, borde sutil */
              dark:bg-white/5 dark:border-white/10 dark:shadow-[0_15px_30px_rgba(0,0,0,0.3)]
              dark:hover:border-white/20
            `;

            return (
              <Link
                to={item.link}
                key={item.id}
                className={cardClasses} // 👈 Usamos la variable limpia aquí
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay, duration: 0.6, ease: "easeOut" }}
                  className="h-full w-full relative"
                >
                  {/* Imagen de fondo */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 will-change-transform"
                  />

                  {/* TEXT PROTECTION (Siempre oscuro porque el texto interior es blanco para contrastar con la foto) */}
                  <div className="absolute inset-0 bg-gradient-to-t transition-opacity duration-500 pointer-events-none
                    from-navy/95 via-navy/30 to-transparent md:via-navy/20 
                    group-hover:via-navy/40"
                  />

                  {/* Textos (Siempre Blanco dentro de la foto) */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 flex flex-col justify-end h-full pointer-events-none">
                    <div className="transform transition-transform duration-500 md:group-hover:-translate-y-2">
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block drop-shadow-md">
                        {item.kicker}
                      </span>
                      <h3 className="font-title text-xl md:text-2xl lg:text-3xl text-white mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] leading-tight">
                        {item.title}
                      </h3>

                      {/* Link "Ver detalles" */}
                      <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-yellow-400 opacity-100 md:opacity-0 transform md:translate-y-4 transition-all duration-500 md:group-hover:opacity-100 md:group-hover:translate-y-0 drop-shadow-md">
                        {content.cardLink || "VER DETALLES"} <i className="ri-arrow-right-line md:group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  </div>

                  {/* Botón flotante top-right (Solo Desktop) */}
                  <div className="hidden md:flex absolute top-6 right-6 h-12 w-12 backdrop-blur-md rounded-full items-center justify-center border text-white shadow-lg transition-all duration-500 z-10
                    bg-white/10 border-white/20 
                    group-hover:bg-cyan-400 group-hover:text-dark group-hover:border-cyan-400">
                    <i className="ri-arrow-right-up-line text-xl group-hover:rotate-45 transition-transform duration-300"></i>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}